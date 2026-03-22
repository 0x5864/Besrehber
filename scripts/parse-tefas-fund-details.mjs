import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "assets/data/tefas-fund-pages");
const OUTPUT_PATH = path.join(ROOT, "assets/data/tefas-emk-details.json");

/**
 * @param {string} value
 * @returns {string}
 */
function stripTags(value) {
  return value.replace(/<[^>]+>/g, " ");
}

/**
 * @param {string} value
 * @returns {string}
 */
function decodeHtml(value) {
  return value
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {string} html
 * @returns {string}
 */
function cleanText(html) {
  return decodeHtml(stripTags(html));
}

/**
 * @param {string} html
 * @param {string} start
 * @param {string} end
 * @returns {string}
 */
function between(html, start, end) {
  const startIndex = html.indexOf(start);
  if (startIndex === -1) {
    return "";
  }

  const from = startIndex + start.length;
  const endIndex = html.indexOf(end, from);
  if (endIndex === -1) {
    return "";
  }

  return html.slice(from, endIndex);
}

/**
 * @param {string} html
 * @returns {Record<string, string>}
 */
function parseSummary(html) {
  const mainIndicators = between(
    html,
    '<div class="main-indicators">',
    '<div class="price-indicators">',
  );
  const matches = mainIndicators.matchAll(
    /<li(?: title="[^"]*")?>([\s\S]*?)<br\s*\/>\s*<br\s*\/>\s*<span[^>]*>([\s\S]*?)<\/span>/g,
  );

  /** @type {Record<string, string>} */
  const summary = {};

  for (const match of matches) {
    const label = cleanText(match[1]);
    const value = cleanText(match[2]);
    if (label) {
      summary[label] = value || "-";
    }
  }

  return summary;
}

/**
 * @param {string} html
 * @returns {{profile: Record<string, string>, kapLink: string}}
 */
function parseProfile(html) {
  const profileHtml = between(
    html,
    '<table cellspacing="0" rules="all" border="1" id="MainContent_DetailsViewFund">',
    "</table>",
  );

  /** @type {Record<string, string>} */
  const profile = {};

  const rowMatches = profileHtml.matchAll(
    /<td class="fund-profile-header">([\s\S]*?)<\/td>\s*<td(?: class="fund-profile-item")?>([\s\S]*?)<\/td>/g,
  );

  for (const match of rowMatches) {
    const label = cleanText(match[1]);
    const value = cleanText(match[2]);
    if (label) {
      profile[label] = value || "-";
    }
  }

  const kapLinkMatch = profileHtml.match(/<a href='([^']+)'[^>]*class="fund-kap-link"/);

  return {
    profile,
    kapLink: kapLinkMatch?.[1] ?? "",
  };
}

/**
 * @param {string} code
 * @param {string} html
 * @returns {{code: string, title: string, summary: Record<string, string>, profile: Record<string, string>, kapLink: string}}
 */
function parseFundDetail(code, html) {
  const titleMatch = html.match(
    /<span id="MainContent_FormViewMainIndicators_LabelFund">([\s\S]*?)<\/span>/,
  );
  const { profile, kapLink } = parseProfile(html);

  return {
    code,
    title: cleanText(titleMatch?.[1] ?? ""),
    summary: parseSummary(html),
    profile,
    kapLink,
  };
}

/**
 * @returns {Promise<void>}
 */
async function main() {
  const files = (await fs.readdir(INPUT_DIR))
    .filter((file) => file.endsWith(".html"))
    .sort();

  const details = await Promise.all(
    files.map(async (file) => {
      const code = file.replace(/\.html$/u, "");
      const html = await fs.readFile(path.join(INPUT_DIR, file), "utf8");
      return parseFundDetail(code, html);
    }),
  );

  await fs.writeFile(
    OUTPUT_PATH,
    JSON.stringify(
      {
        updatedAt: new Date().toISOString(),
        count: details.length,
        data: details,
      },
      null,
      2,
    ),
    "utf8",
  );

  console.log(`saved ${details.length} fund details to ${OUTPUT_PATH}`);
}

await main();
