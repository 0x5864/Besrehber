import { getCompanyBySlug } from "./companies.js";

/** @type {HTMLAnchorElement|null} */
const logoLink = document.querySelector("#company-logo-link");
/** @type {HTMLImageElement|null} */
const logoImage = document.querySelector("#company-logo");
/** @type {HTMLElement|null} */
const planSection = document.querySelector("#company-plan-section");
/** @type {HTMLElement|null} */
const planGrid = document.querySelector("#company-plan-grid");
/** @type {HTMLElement|null} */
const sectionTabs = document.querySelector("#company-section-tabs");
/** @type {HTMLElement|null} */
const cardTitle = document.querySelector("#company-card-title");
/** @type {HTMLElement|null} */
const extraSections = document.querySelector("#company-extra-sections");
/** @type {HTMLTitleElement|null} */
const documentTitle = document.querySelector("title");
/** @type {HTMLMetaElement|null} */
const metaDescription = document.querySelector('meta[name="description"]');

/**
 * Sirket logosunu sayfaya yerlestirir.
 * SVG dosyalari inline gosterilerek tarayici uyumu artirilir.
 * @param {{logoSrc: string, name: string, imageClass?: string, detailImageClass?: string}} company
 * @returns {Promise<void>}
 */
async function renderCompanyLogo(company) {
  if (!logoLink || !logoImage) {
    return;
  }

  const logoClassName = company.detailImageClass ?? company.imageClass;
  const imageClass = logoClassName ? ` ${logoClassName}` : "";

  if (!company.logoSrc.endsWith(".svg")) {
    logoLink.innerHTML =
      `<img id="company-logo" class="company-page-logo${imageClass}" ` +
      `src="${company.logoSrc}" alt="${company.name} logosu">`;
    return;
  }

  try {
    const response = await fetch(company.logoSrc);

    if (!response.ok) {
      throw new Error(`Logo fetch failed: ${response.status}`);
    }

    const svgMarkup = await response.text();
    logoLink.innerHTML = `<span class="company-page-logo-inline${imageClass}" aria-label="${company.name} logosu">${svgMarkup}</span>`;
  } catch (error) {
    logoLink.innerHTML =
      `<img id="company-logo" class="company-page-logo${imageClass}" ` +
      `src="${company.logoSrc}" alt="${company.name} logosu">`;
  }
}

/**
 * Plan kutularini HTML olarak uretir.
 * @param {{title: string, description: string, badge?: string, detailUrl?: string, applyUrl?: string, imageSrc?: string, middleNote?: string}[]} plans
 * @param {string} sourceUrl
 * @param {string=} applyUrl
 * @param {string=} sharedNote
 * @returns {string}
 */
function renderPlanCards(plans, sourceUrl, applyUrl, sharedNote) {
  return plans
    .map((plan) => {
      const primaryUrl = plan.applyUrl ?? applyUrl ?? sourceUrl;
      const reviewUrl = plan.detailUrl ?? sourceUrl;
      const middleNoteHtml = plan.middleNote
        ? `<span class="company-plan-note">${plan.middleNote}</span>`
        : "";
      const sharedNoteHtml = sharedNote
        ? `<span class="company-plan-note">${sharedNote}</span>`
        : "";

      return `
        <div class="company-plan-card">
          <div class="company-plan-content">
            <strong>${plan.title}</strong>
            <span class="company-plan-audience">${plan.description}</span>
            ${middleNoteHtml}
            ${sharedNoteHtml}
          </div>
          <div class="company-plan-side">
            <a
              class="company-plan-action"
              href="${primaryUrl}"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="${plan.title} basvuru sayfasini ac"
            >
              Başvur
            </a>
            <a
              class="company-plan-source"
              href="${reviewUrl}"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="${plan.title} incele sayfasini ac"
            >
              İncele
            </a>
          </div>
        </div>
      `;
    })
    .join("");
}

/**
 * Ek urun bolumlerini HTML olarak uretir.
 * @param {{title: string, items: {title: string, description: string, badge?: string, detailUrl?: string, applyUrl?: string, imageSrc?: string, middleNote?: string}[], sourceUrl?: string, applyUrl?: string, sharedNote?: string}[]=} sections
 * @returns {string}
 */
function renderExtraSections() {
  return "";
}

/**
 * Sirket icin sekme bolumlerini hazirlar.
 * @param {{
 *   plans?: {title: string, description: string, badge?: string, detailUrl?: string, applyUrl?: string, imageSrc?: string, middleNote?: string}[],
 *   planSourceUrl?: string,
 *   applyUrl?: string,
 *   sharedPlanNote?: string,
 *   extraSections?: {title: string, items: {title: string, description: string, badge?: string, detailUrl?: string, applyUrl?: string, imageSrc?: string, middleNote?: string}[], sourceUrl?: string, applyUrl?: string, sharedNote?: string}[]
 * }} company
 * @returns {{title: string, html: string}[]}
 */
function buildCompanySections(company) {
  /** @type {{title: string, html: string}[]} */
  const sections = [];

  if (company.plans?.length && company.planSourceUrl) {
    sections.push({
      title: "Emeklilik planları",
      html: renderPlanCards(
        company.plans,
        company.planSourceUrl,
        company.applyUrl,
        company.sharedPlanNote,
      ),
    });
  }

  (company.extraSections ?? [])
    .filter((section) => section.items?.length)
    .forEach((section) => {
      sections.push({
        title: section.title,
        html: renderPlanCards(
          section.items,
          section.sourceUrl ?? "./#anasayfa",
          section.applyUrl,
          section.sharedNote,
        ),
      });
    });

  return sections;
}

/**
 * Aktif sekme icerigini basar.
 * @param {{title: string, html: string}[]} sections
 * @param {number} activeIndex
 * @returns {void}
 */
function renderActiveSection(sections, activeIndex) {
  if (!planSection || !planGrid || !cardTitle) {
    return;
  }

  const activeSection = sections[activeIndex];
  if (!activeSection) {
    planSection.hidden = true;
    planGrid.innerHTML = "";
    return;
  }

  cardTitle.textContent = activeSection.title;
  planSection.hidden = false;
  planGrid.innerHTML = activeSection.html;
}

/**
 * Sekmeleri cizer ve davranisini baglar.
 * @param {{title: string, html: string}[]} sections
 * @returns {void}
 */
function renderSectionTabs(sections) {
  if (!sectionTabs) {
    return;
  }

  if (sections.length <= 1) {
    sectionTabs.hidden = true;
    sectionTabs.innerHTML = "";
    renderActiveSection(sections, 0);
    return;
  }

  sectionTabs.hidden = false;
  sectionTabs.innerHTML = sections
    .map(
      (section, index) => `
        <button
          class="fund-sort-tab${index === 0 ? " is-active" : ""}"
          type="button"
          data-company-section-index="${index}"
          role="tab"
          aria-selected="${index === 0 ? "true" : "false"}"
        >
          ${section.title}
        </button>
      `,
    )
    .join("");

  renderActiveSection(sections, 0);

  sectionTabs.querySelectorAll("[data-company-section-index]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Number(tab.getAttribute("data-company-section-index") ?? "0");

      sectionTabs.querySelectorAll("[data-company-section-index]").forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
        item.setAttribute("aria-selected", itemIndex === index ? "true" : "false");
      });

      renderActiveSection(sections, index);
    });
  });
}

/**
 * Sirket detay sayfasini doldurur.
 * @returns {void}
 */
async function renderCompanyPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const company = getCompanyBySlug(slug);

  if (!company) {
    if (documentTitle) {
      documentTitle.textContent = "BESRehber | Şirket Bulunamadı";
    }

    if (metaDescription) {
      metaDescription.content = "İstenen şirket sayfası bulunamadı.";
    }

    if (planSection) {
      planSection.hidden = true;
    }

    if (sectionTabs) {
      sectionTabs.hidden = true;
      sectionTabs.innerHTML = "";
    }

    if (extraSections) {
      extraSections.innerHTML = "";
    }

    if (logoLink) {
      logoLink.href = "./#anasayfa";
      logoLink.setAttribute("aria-label", "BESRehber ana sayfaya don");
      logoLink.removeAttribute("target");
      logoLink.removeAttribute("rel");
    }

    if (logoImage) {
      logoImage.src = "../assets/logos/allianz.png";
      logoImage.alt = "BESRehber";
    }

    return;
  }

  if (documentTitle) {
    documentTitle.textContent = `BESRehber | ${company.name}`;
  }

  if (metaDescription) {
    metaDescription.content = `${company.name} için hazırlanan şirket kartı sayfası.`;
  }

  renderSectionTabs(buildCompanySections(company));

  if (extraSections) {
    extraSections.innerHTML = renderExtraSections(company.extraSections);
  }

  if (logoLink) {
    logoLink.href = company.url;
    logoLink.setAttribute("aria-label", `${company.name} resmi sitesini ac`);
    logoLink.target = "_blank";
    logoLink.rel = "noreferrer noopener";
  }

  await renderCompanyLogo(company);
}

renderCompanyPage();
