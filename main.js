import { companies, getCompanyDetailPath } from "./companies.js";

/**
 * @typedef {Object} Company
 * @property {string} slug
 * @property {string} name
 * @property {string} url
 * @property {string[]} tags
 * @property {string} logoSrc
 * @property {string=} imageClass
 */

/** @type {HTMLInputElement|null} */
const searchInput = document.querySelector("#search-input");
/** @type {HTMLDivElement|null} */
const companyGrid = document.querySelector("#company-grid");
/** @type {HTMLElement|null} */
const resultsCount = document.querySelector("#results-count");
/** @type {NodeListOf<HTMLButtonElement>} */
const filterButtons = document.querySelectorAll(".filter-button");
/** @type {string} */
let activeFilter = "Tumu";

/**
 * Sirket kartini HTML olarak uretir.
 * @param {Company} company
 * @returns {string}
 */
function renderCompanyCard(company) {
  const lightLogoClass = company.lightLogo ? " company-card-light-logo" : "";
  const imageClass = company.imageClass ? ` ${company.imageClass}` : "";
  const href = getCompanyDetailPath(company.slug);

  return `
    <a
      class="company-card${lightLogoClass}"
      href="${href}"
      aria-label="${company.name} detay sayfasini ac"
    >
      <img
        class="company-logo-image${imageClass}"
        src="${company.logoSrc}"
        alt="${company.name} logosu"
        loading="lazy"
      />
    </a>
  `;
}

/**
 * Filtre ve arama sonucunu hesaplar.
 * @returns {Company[]}
 */
function getVisibleCompanies() {
  const query = (searchInput?.value ?? "").trim().toLocaleLowerCase("tr");

  return companies.filter((company) => {
    const matchesFilter =
      activeFilter === "Tumu" || company.tags.includes(activeFilter);
    const haystack = `${company.name} ${company.url}`.toLocaleLowerCase("tr");
    const matchesSearch = haystack.includes(query);

    return matchesFilter && matchesSearch;
  });
}

/**
 * Liste ve sonuc sayisini yeniler.
 * @returns {void}
 */
function updateList() {
  if (!companyGrid) {
    return;
  }

  const visibleCompanies = getVisibleCompanies();
  if (resultsCount) {
    resultsCount.textContent = String(visibleCompanies.length);
  }

  if (visibleCompanies.length === 0) {
    companyGrid.innerHTML = `
      <div class="empty-state">
        Aradığınız ölçüte uygun kurum bulunamadı. Arama kelimesini ya da filtreyi değiştirin.
      </div>
    `;
    return;
  }

  companyGrid.innerHTML = visibleCompanies.map(renderCompanyCard).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter ?? "Tumu";

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    updateList();
  });
});

searchInput?.addEventListener("input", updateList);

updateList();
