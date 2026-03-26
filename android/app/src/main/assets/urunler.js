import { companies, getCompanyDetailPath } from "./companies.js";

const tabsRoot = document.querySelector("#product-section-tabs");
const tableBody = document.querySelector("#product-table-body");
const statusText = document.querySelector("#product-status");

/**
 * @param {string} title
 * @returns {string}
 */
function normalizeSectionTitle(title) {
  if (title === "Tamamlayıcı Sağlık Sigortası") {
    return "Sağlık Sigortaları";
  }

  if (title === "Ferdi Kaza Sigortası") {
    return "Ferdi Kaza Sigortaları";
  }

  return title;
}

/**
 * @param {string} sectionTitle
 * @param {string} productTitle
 * @returns {string}
 */
function resolveSectionTitle(sectionTitle, productTitle) {
  if (productTitle.toLocaleLowerCase("tr").includes("hayat sigortası")) {
    return "Hayat Sigortaları";
  }

  return normalizeSectionTitle(sectionTitle);
}

/**
 * @returns {Map<string, {
 *   sectionTitle: string,
 *   rows: {
 *     companyName: string,
 *     companySlug: string,
 *     productTitle: string,
 *     description: string,
 *     applyUrl?: string,
 *     detailUrl?: string
 *   }[]
 * }>}
 */
function buildSectionMap() {
  /** @type {Map<string, {sectionTitle: string, rows: {companyName: string, companySlug: string, productTitle: string, description: string, applyUrl?: string, detailUrl?: string}[]}>} */
  const sectionMap = new Map();

  companies.forEach((company) => {
    if (company.plans?.length) {
      const key = "Emeklilik planları";
      if (!sectionMap.has(key)) {
        sectionMap.set(key, { sectionTitle: key, rows: [] });
      }

      company.plans.forEach((plan) => {
        sectionMap.get(key)?.rows.push({
          companyName: company.name,
          companySlug: company.slug,
          productTitle: plan.title,
          description: plan.description,
          applyUrl: plan.applyUrl ?? company.applyUrl,
          detailUrl: plan.detailUrl ?? company.planSourceUrl,
        });
      });
    }

    (company.extraSections ?? []).forEach((section) => {
      section.items.forEach((item) => {
        const key = resolveSectionTitle(section.title, item.title);
        if (!sectionMap.has(key)) {
          sectionMap.set(key, { sectionTitle: key, rows: [] });
        }

        sectionMap.get(key)?.rows.push({
          companyName: company.name,
          companySlug: company.slug,
          productTitle: item.title,
          description: item.description,
          applyUrl: item.applyUrl ?? section.applyUrl,
          detailUrl: item.detailUrl ?? section.sourceUrl,
        });
      });
    });
  });

  return sectionMap;
}

const orderedSectionTitles = [
  "Emeklilik planları",
  "Sağlık Sigortaları",
  "Hayat Sigortaları",
  "Ferdi Kaza Sigortaları",
  "Çocuk Sigortaları",
  "Kritik Hastalık Sigortaları",
  "Finansal Destek Sigortaları",
  "Koruma Sigortaları",
];

const sectionMap = buildSectionMap();
const availableTitles = Array.from(sectionMap.keys()).sort((left, right) => {
  const leftIndex = orderedSectionTitles.indexOf(left);
  const rightIndex = orderedSectionTitles.indexOf(right);

  if (leftIndex === -1 && rightIndex === -1) {
    return left.localeCompare(right, "tr");
  }

  if (leftIndex === -1) {
    return 1;
  }

  if (rightIndex === -1) {
    return -1;
  }

  return leftIndex - rightIndex;
});

let activeSectionTitle = availableTitles[0] ?? "Emeklilik planları";

/**
 * @param {{
 *   companyName: string,
 *   companySlug: string,
 *   productTitle: string,
 *   description: string,
 *   applyUrl?: string,
 *   detailUrl?: string
 * }[]} rows
 * @returns {string}
 */
function renderRows(rows) {
  return rows
    .map((row) => {
      const reviewUrl = row.detailUrl ?? getCompanyDetailPath(row.companySlug);
      const actionUrl = row.applyUrl ?? reviewUrl;

      return `
        <article class="product-table-row">
          <span class="product-table-cell product-company-cell">
            <a href="${getCompanyDetailPath(row.companySlug)}">${row.companyName}</a>
          </span>
          <span class="product-table-cell product-name-cell">${row.productTitle}</span>
          <span class="product-table-cell product-description-cell">${row.description}</span>
          <span class="product-table-cell product-action-cell">
            <a
              class="company-plan-source"
              href="${reviewUrl}"
              target="_blank"
              rel="noreferrer noopener"
            >
              İncele
            </a>
            <a
              class="company-plan-action"
              href="${actionUrl}"
              target="_blank"
              rel="noreferrer noopener"
            >
              Başvur
            </a>
          </span>
        </article>
      `;
    })
    .join("");
}

/**
 * @returns {void}
 */
function renderTable() {
  if (!tableBody || !statusText) {
    return;
  }

  const section = sectionMap.get(activeSectionTitle);
  const rows = section?.rows ?? [];

  statusText.textContent = `${rows.length} ürün listeleniyor.`;
  tableBody.innerHTML = rows.length
    ? renderRows(rows)
    : `<div class="empty-state fund-empty-state">Bu bölüm için ürün bulunamadı.</div>`;
}

/**
 * @returns {void}
 */
function renderTabs() {
  if (!tabsRoot) {
    return;
  }

  tabsRoot.innerHTML = availableTitles
    .map(
      (title) => `
        <button
          class="fund-sort-tab${title === activeSectionTitle ? " is-active" : ""}"
          type="button"
          data-product-section="${title}"
        >
          ${title}
        </button>
      `,
    )
    .join("");

  tabsRoot.querySelectorAll("[data-product-section]").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeSectionTitle = tab.getAttribute("data-product-section") ?? activeSectionTitle;
      renderTabs();
      renderTable();
    });
  });
}

renderTabs();
renderTable();
