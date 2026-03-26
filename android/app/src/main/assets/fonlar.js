/** @typedef {{
 * FONKODU: string,
 * FONUNVAN: string,
 * FONTURACIKLAMA: string,
 * GETIRI1A: number | null,
 * GETIRI3A: number | null,
 * GETIRI6A: number | null,
 * GETIRI1Y: number | null,
 * GETIRI3Y: number | null,
 * GETIRI5Y: number | null
 * }} TefasReturnRow */

/** @typedef {{
 * FONKODU: string,
 * FONUNVAN: string,
 * FONTURACIKLAMA: string,
 * UYGULANANYU1Y: string | number | null,
 * FONICTUZUKYU1G: string | number | null,
 * YILLIKGETIRI: string | number | null,
 * FONTOPGIDERKESORAN: string | number | null
 * }} TefasFeeRow */

/** @typedef {{
 * FONKODU: string,
 * FONUNVAN: string,
 * FONTURACIKLAMA: string,
 * ILKPORTFOYDEGERI: number | null,
 * SONPORTFOYDEGERI: number | null,
 * PORTBUYUKLUKDEGISIM: number | null,
 * ILKPAYADEDI: number | null,
 * SONPAYADEDI: number | null,
 * PAYADETDEGISIM: number | null,
 * NETGETIRIORANI: number | null
 * }} TefasSizeRow */

/** @typedef {{
 * code: string,
 * fullName: string,
 * title: string,
 * founder: string,
 * fundType: string
 * }} FundBase */

/** @typedef {FundBase & {
 * returns: {
 *   oneMonth: number | null,
 *   threeMonths: number | null,
 *   sixMonths: number | null,
 *   oneYear: number | null,
 *   threeYears: number | null,
 *   fiveYears: number | null
 * }
 * }} ReturnFund */

/** @typedef {FundBase & {
 * fees: {
 *   appliedYearly: number | null,
 *   charterYearly: number | null,
 *   annualNetReturn: number | null,
 *   maxTotalExpense: number | null
 * }
 * }} FeeFund */

/** @typedef {FundBase & {
 * size: {
 *   firstPortfolio: number | null,
 *   lastPortfolio: number | null,
 *   portfolioChange: number | null,
 *   firstShares: number | null,
 *   lastShares: number | null,
 *   sharesChange: number | null,
 *   netReturn: number | null
 * }
 * }} SizeFund */

/** @typedef {"return" | "fee" | "size"} SortMode */
/** @typedef {"asc" | "desc"} SortDirection */
/** @typedef {{label: string, key: string, type: "text" | "number", align: "left" | "right"}} ColumnDefinition */

const founderFilter = document.querySelector("#founder-filter");
const typeFilter = document.querySelector("#type-filter");
const fundSearch = document.querySelector("#fund-search");
const fundGrid = document.querySelector("#fund-grid");
const fundTable = document.querySelector(".fund-table");
const fundTableHead = document.querySelector("#fund-table-head");
const fundStatus = document.querySelector("#fund-status");
const sortTabs = Array.from(document.querySelectorAll(".fund-sort-tab"));
/** @type {{return: ReturnFund[], fee: FeeFund[], size: SizeFund[]}} */
const allFundsByMode = {
  return: [],
  fee: [],
  size: [],
};

const collator = new Intl.Collator("tr");
const percentFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** @type {SortMode} */
let currentSortMode = "return";

/** @type {{return: {key: string, direction: SortDirection}, fee: {key: string, direction: SortDirection}, size: {key: string, direction: SortDirection}}} */
const sortStateByMode = {
  return: { key: "oneYear", direction: "desc" },
  fee: { key: "code", direction: "asc" },
  size: { key: "code", direction: "asc" },
};

/**
 * HTML kacisi uygular.
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/**
 * Fon adindan kurucu ve kisa baslik uretir.
 * @param {string} fundName
 * @returns {{founder: string, title: string}}
 */
function parseFundIdentity(fundName) {
  const normalizedName = fundName.replace(/\s+/g, " ").trim();
  const founderMatch = normalizedName.match(/^(.+?A\.Ş\.)\s+(.*)$/u);

  if (!founderMatch) {
    return {
      founder: "Bilinmeyen Kurucu",
      title: normalizedName,
    };
  }

  const founder = founderMatch[1].trim();
  const rawTitle = founderMatch[2]
    .replace(/\s+EMEKLİLİK YATIRIM FONU$/u, "")
    .replace(/\s+EMEKLILIK YATIRIM FONU$/u, "")
    .trim();

  return {
    founder,
    title: rawTitle || normalizedName,
  };
}

/**
 * String ya da number gelen degeri sayiya cevirir.
 * @param {string | number | null | undefined} value
 * @returns {number | null}
 */
function parseNumericValue(value) {
  if (typeof value === "number") {
    return Number.isNaN(value) ? null : value;
  }

  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.replaceAll(".", "").replace(",", ".").trim();
  if (!normalized) {
    return null;
  }

  const parsed = Number(normalized);
  return Number.isNaN(parsed) ? null : parsed;
}

/**
 * Yuzdelik gosterim dizesi uretir.
 * @param {number | null} value
 * @returns {string}
 */
function formatPercent(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "-";
  }

  return `%${percentFormatter.format(value)}`;
}

/**
 * Sayisal gosterim dizesi uretir.
 * @param {number | null} value
 * @returns {string}
 */
function formatNumber(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "-";
  }

  return numberFormatter.format(value);
}

/**
 * Getiri satirini uygular.
 * @param {TefasReturnRow} row
 * @returns {ReturnFund}
 */
function mapReturnRow(row) {
  const identity = parseFundIdentity(row.FONUNVAN);

  return {
    code: row.FONKODU,
    fullName: row.FONUNVAN.replace(/\s+/g, " ").trim(),
    title: identity.title,
    founder: identity.founder,
    fundType: row.FONTURACIKLAMA,
    returns: {
      oneMonth: row.GETIRI1A,
      threeMonths: row.GETIRI3A,
      sixMonths: row.GETIRI6A,
      oneYear: row.GETIRI1Y,
      threeYears: row.GETIRI3Y,
      fiveYears: row.GETIRI5Y,
    },
  };
}

/**
 * Ucret satirini uygular.
 * @param {TefasFeeRow} row
 * @returns {FeeFund}
 */
function mapFeeRow(row) {
  const identity = parseFundIdentity(row.FONUNVAN);

  return {
    code: row.FONKODU,
    fullName: row.FONUNVAN.replace(/\s+/g, " ").trim(),
    title: identity.title,
    founder: identity.founder,
    fundType: row.FONTURACIKLAMA,
    fees: {
      appliedYearly: parseNumericValue(row.UYGULANANYU1Y),
      charterYearly: parseNumericValue(row.FONICTUZUKYU1G),
      annualNetReturn: parseNumericValue(row.YILLIKGETIRI),
      maxTotalExpense: parseNumericValue(row.FONTOPGIDERKESORAN),
    },
  };
}

/**
 * Buyukluk satirini uygular.
 * @param {TefasSizeRow} row
 * @returns {SizeFund}
 */
function mapSizeRow(row) {
  const identity = parseFundIdentity(row.FONUNVAN);

  return {
    code: row.FONKODU,
    fullName: row.FONUNVAN.replace(/\s+/g, " ").trim(),
    title: identity.title,
    founder: identity.founder,
    fundType: row.FONTURACIKLAMA,
    size: {
      firstPortfolio: row.ILKPORTFOYDEGERI,
      lastPortfolio: row.SONPORTFOYDEGERI,
      portfolioChange: row.PORTBUYUKLUKDEGISIM,
      firstShares: row.ILKPAYADEDI,
      lastShares: row.SONPAYADEDI,
      sharesChange: row.PAYADETDEGISIM,
      netReturn: row.NETGETIRIORANI,
    },
  };
}

/**
 * Aktif modun veri listesini doner.
 * @returns {(ReturnFund | FeeFund | SizeFund)[]}
 */
function getModeFunds() {
  return allFundsByMode[currentSortMode];
}

/**
 * Aktif moda ait kolonlari doner.
 * @returns {ColumnDefinition[]}
 */
function getColumnDefinitions() {
  if (currentSortMode === "fee") {
    return [
      { label: "Kod", key: "code", type: "text", align: "left" },
      { label: "Fon Adı", key: "fullName", type: "text", align: "left" },
      { label: "Uyg. Yön. Ücreti", key: "appliedYearly", type: "number", align: "right" },
      { label: "İç Tüzük Ücreti", key: "charterYearly", type: "number", align: "right" },
      { label: "Yıllık Net Getiri", key: "annualNetReturn", type: "number", align: "right" },
      { label: "Azami Gider", key: "maxTotalExpense", type: "number", align: "right" },
    ];
  }

  if (currentSortMode === "size") {
    return [
      { label: "Kod", key: "code", type: "text", align: "left" },
      { label: "Fon Adı", key: "fullName", type: "text", align: "left" },
      { label: "İlk Portföy", key: "firstPortfolio", type: "number", align: "right" },
      { label: "Son Portföy", key: "lastPortfolio", type: "number", align: "right" },
      { label: "Portföy Değ.", key: "portfolioChange", type: "number", align: "right" },
      { label: "Net Getiri", key: "netReturn", type: "number", align: "right" },
    ];
  }

  return [
    { label: "Kod", key: "code", type: "text", align: "left" },
    { label: "Fon Adı", key: "fullName", type: "text", align: "left" },
    { label: "1 Ay", key: "oneMonth", type: "number", align: "right" },
    { label: "3 Ay", key: "threeMonths", type: "number", align: "right" },
    { label: "6 Ay", key: "sixMonths", type: "number", align: "right" },
    { label: "1 Yıl", key: "oneYear", type: "number", align: "right" },
    { label: "3 Yıl", key: "threeYears", type: "number", align: "right" },
    { label: "5 Yıl", key: "fiveYears", type: "number", align: "right" },
  ];
}

/**
 * Siralama icin kolona ait degeri doner.
 * @param {ReturnFund | FeeFund | SizeFund} fund
 * @param {string} key
 * @returns {string | number | null}
 */
function getSortValue(fund, key) {
  if (key === "code" || key === "founder" || key === "title" || key === "fullName") {
    return fund[key];
  }

  if (currentSortMode === "fee") {
    const feeFund = /** @type {FeeFund} */ (fund);
    return feeFund.fees[
      /** @type {"appliedYearly" | "charterYearly" | "annualNetReturn" | "maxTotalExpense"} */ (key)
    ];
  }

  if (currentSortMode === "size") {
    const sizeFund = /** @type {SizeFund} */ (fund);
    return sizeFund.size[
      /** @type {"firstPortfolio" | "lastPortfolio" | "portfolioChange" | "netReturn"} */ (key)
    ];
  }

  const returnFund = /** @type {ReturnFund} */ (fund);
  return returnFund.returns[
    /** @type {"oneMonth" | "threeMonths" | "sixMonths" | "oneYear" | "threeYears" | "fiveYears"} */ (key)
  ];
}

/**
 * Filtre seceneklerini doldurur.
 * @param {(ReturnFund | FeeFund | SizeFund)[]} funds
 * @returns {void}
 */
function populateFilters(funds) {
  if (!founderFilter || !typeFilter) {
    return;
  }

  const previousFounder = founderFilter.value;
  const previousType = typeFilter.value;

  const founders = [...new Set(funds.map((fund) => fund.founder))].sort(collator.compare);
  const fundTypes = [...new Set(funds.map((fund) => fund.fundType))].sort(collator.compare);

  founderFilter.innerHTML =
    '<option value="">Tüm şirketler</option>' +
    founders
      .map((founder) => `<option value="${escapeHtml(founder)}">${escapeHtml(founder)}</option>`)
      .join("");

  typeFilter.innerHTML =
    '<option value="">Tüm fon türleri</option>' +
    fundTypes
      .map((fundType) => `<option value="${escapeHtml(fundType)}">${escapeHtml(fundType)}</option>`)
      .join("");

  if (founders.includes(previousFounder)) {
    founderFilter.value = previousFounder;
  }

  if (fundTypes.includes(previousType)) {
    typeFilter.value = previousType;
  }
}

/**
 * Baslik butonunu HTML olarak uretir.
 * @param {ColumnDefinition} column
 * @returns {string}
 */
function renderSortableHead(column) {
  const sortState = sortStateByMode[currentSortMode];
  const isActive = sortState.key === column.key;
  const isAsc = isActive && sortState.direction === "asc";
  const isDesc = isActive && sortState.direction === "desc";
  const alignClass = column.align === "right" ? " fund-head-button--right" : "";

  return `
    <button class="fund-head-button${alignClass}" type="button" data-sort-key="${escapeHtml(column.key)}">
      <span class="fund-head-label">${escapeHtml(column.label)}</span>
      <span class="fund-head-arrows" aria-hidden="true">
        <span class="fund-head-arrow${isAsc ? " is-active" : ""}">▲</span>
        <span class="fund-head-arrow${isDesc ? " is-active" : ""}">▼</span>
      </span>
    </button>
  `;
}

/**
 * Filtrelenmis ve siralanmis listeyi doner.
 * @returns {(ReturnFund | FeeFund | SizeFund)[]}
 */
function getVisibleFunds() {
  const selectedFounder = founderFilter?.value ?? "";
  const selectedType = typeFilter?.value ?? "";
  const query = (fundSearch?.value ?? "").trim().toLocaleLowerCase("tr");
  const sortState = sortStateByMode[currentSortMode];

  return getModeFunds()
    .filter((fund) => {
      const matchesFounder = !selectedFounder || fund.founder === selectedFounder;
      const matchesType = !selectedType || fund.fundType === selectedType;
      const haystack = `${fund.code} ${fund.title} ${fund.founder} ${fund.fundType}`.toLocaleLowerCase("tr");
      const matchesQuery = !query || haystack.includes(query);

      return matchesFounder && matchesType && matchesQuery;
    })
    .sort((left, right) => {
      const leftValue = getSortValue(left, sortState.key);
      const rightValue = getSortValue(right, sortState.key);

      if (typeof leftValue === "number" || typeof rightValue === "number") {
        const leftNumber = typeof leftValue === "number" ? leftValue : Number.NEGATIVE_INFINITY;
        const rightNumber = typeof rightValue === "number" ? rightValue : Number.NEGATIVE_INFINITY;

        if (leftNumber !== rightNumber) {
          return sortState.direction === "asc"
            ? leftNumber - rightNumber
            : rightNumber - leftNumber;
        }
      } else {
        const leftText = typeof leftValue === "string" ? leftValue : "";
        const rightText = typeof rightValue === "string" ? rightValue : "";
        const comparison = collator.compare(leftText, rightText);

        if (comparison !== 0) {
          return sortState.direction === "asc" ? comparison : -comparison;
        }
      }

      return collator.compare(left.code, right.code);
    });
}

/**
 * Aktif tablo basligini uretir.
 * @returns {string}
 */
function renderTableHead() {
  return `${getColumnDefinitions().map(renderSortableHead).join("")}<span></span>`;
}

/**
 * Aktif moda gore tablo satirlarini HTML olarak uretir.
 * @param {(ReturnFund | FeeFund | SizeFund)[]} funds
 * @returns {string}
 */
function renderFundRows(funds) {
  return funds
    .map((fund) => {
      if (currentSortMode === "fee") {
        const feeFund = /** @type {FeeFund} */ (fund);
        return `
          <article class="fund-table-row">
            <span class="fund-table-cell fund-code-cell">${escapeHtml(feeFund.code)}</span>
            <strong class="fund-table-cell fund-founder-cell">${escapeHtml(feeFund.fullName)}</strong>
            <span class="fund-table-cell fund-number-cell">${formatPercent(feeFund.fees.appliedYearly)}</span>
            <span class="fund-table-cell fund-number-cell">${formatPercent(feeFund.fees.charterYearly)}</span>
            <span class="fund-table-cell fund-number-cell">${formatPercent(feeFund.fees.annualNetReturn)}</span>
            <span class="fund-table-cell fund-number-cell">${formatPercent(feeFund.fees.maxTotalExpense)}</span>
            <span class="fund-table-cell fund-action-cell">
              <a
                class="company-plan-source fund-detail-link"
                href="https://www.tefas.gov.tr/FonAnaliz.aspx?FonKod=${encodeURIComponent(feeFund.code)}"
                target="_blank"
                rel="noreferrer noopener"
              >İncele</a>
            </span>
          </article>
        `;
      }

      if (currentSortMode === "size") {
        const sizeFund = /** @type {SizeFund} */ (fund);
        return `
          <article class="fund-table-row">
            <span class="fund-table-cell fund-code-cell">${escapeHtml(sizeFund.code)}</span>
            <strong class="fund-table-cell fund-founder-cell">${escapeHtml(sizeFund.fullName)}</strong>
            <span class="fund-table-cell fund-number-cell">${formatNumber(sizeFund.size.firstPortfolio)}</span>
            <span class="fund-table-cell fund-number-cell">${formatNumber(sizeFund.size.lastPortfolio)}</span>
            <span class="fund-table-cell fund-number-cell">${formatPercent(sizeFund.size.portfolioChange)}</span>
            <span class="fund-table-cell fund-number-cell">${formatPercent(sizeFund.size.netReturn)}</span>
            <span class="fund-table-cell fund-action-cell">
              <a
                class="company-plan-source fund-detail-link"
                href="https://www.tefas.gov.tr/FonAnaliz.aspx?FonKod=${encodeURIComponent(sizeFund.code)}"
                target="_blank"
                rel="noreferrer noopener"
              >İncele</a>
            </span>
          </article>
        `;
      }

      const returnFund = /** @type {ReturnFund} */ (fund);
      return `
        <article class="fund-table-row">
          <span class="fund-table-cell fund-code-cell">${escapeHtml(returnFund.code)}</span>
          <strong class="fund-table-cell fund-founder-cell">${escapeHtml(returnFund.fullName)}</strong>
          <span class="fund-table-cell fund-number-cell">${formatPercent(returnFund.returns.oneMonth)}</span>
          <span class="fund-table-cell fund-number-cell">${formatPercent(returnFund.returns.threeMonths)}</span>
          <span class="fund-table-cell fund-number-cell">${formatPercent(returnFund.returns.sixMonths)}</span>
          <span class="fund-table-cell fund-number-cell">${formatPercent(returnFund.returns.oneYear)}</span>
          <span class="fund-table-cell fund-number-cell">${formatPercent(returnFund.returns.threeYears)}</span>
          <span class="fund-table-cell fund-number-cell">${formatPercent(returnFund.returns.fiveYears)}</span>
          <span class="fund-table-cell fund-action-cell">
            <a
              class="company-plan-source fund-detail-link"
              href="https://www.tefas.gov.tr/FonAnaliz.aspx?FonKod=${encodeURIComponent(returnFund.code)}"
              target="_blank"
              rel="noreferrer noopener"
            >İncele</a>
          </span>
        </article>
      `;
    })
    .join("");
}

/**
 * Listeyi ve basliklari yeniler.
 * @returns {void}
 */
function updateFundList() {
  if (!fundGrid || !fundStatus || !fundTable || !fundTableHead) {
    return;
  }

  const visibleFunds = getVisibleFunds();

  fundTable.classList.remove("is-return-mode", "is-fee-mode", "is-size-mode");
  fundTable.classList.add(
    currentSortMode === "fee"
      ? "is-fee-mode"
      : currentSortMode === "size"
        ? "is-size-mode"
        : "is-return-mode",
  );

  fundTableHead.innerHTML = renderTableHead();

  fundStatus.textContent = `${visibleFunds.length} fon listeleniyor.`;

  if (visibleFunds.length === 0) {
    fundGrid.innerHTML = `
      <div class="empty-state fund-empty-state">
        Seçtiğiniz filtrelere uygun fon bulunamadı.
      </div>
    `;
    return;
  }

  fundGrid.innerHTML = renderFundRows(visibleFunds);
}

/**
 * Sekmeleri baglar.
 * @returns {void}
 */
function initializeSortTabs() {
  if (sortTabs.length === 0) {
    return;
  }

  sortTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      currentSortMode = /** @type {SortMode} */ (tab.dataset.sortMode || "return");

      sortTabs.forEach((item) => {
        item.classList.toggle("is-active", item === tab);
      });

      populateFilters(getModeFunds());
      updateFundList();
    });
  });
}

/**
 * Tablo basliklarina tiklama davranisi ekler.
 * @returns {void}
 */
function initializeTableHeadSorting() {
  if (!fundTableHead) {
    return;
  }

  fundTableHead.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest(".fund-head-button");
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const key = button.dataset.sortKey;
    if (!key) {
      return;
    }

    const currentState = sortStateByMode[currentSortMode];
    sortStateByMode[currentSortMode] = {
      key,
      direction:
        currentState.key === key && currentState.direction === "asc"
          ? "desc"
          : "asc",
    };

    updateFundList();
  });
}

/**
 * Sayfayi baslatir.
 * @returns {Promise<void>}
 */
async function initializeFundsPage() {
  if (!fundGrid || !fundStatus || !fundTableHead) {
    return;
  }

  try {
    const [returnsResponse, feesResponse, sizesResponse] = await Promise.all([
      fetch("../assets/data/tefas-emk.json", { cache: "no-store" }),
      fetch("../assets/data/tefas-emk-fees.json", { cache: "no-store" }),
      fetch("../assets/data/tefas-emk-sizes.json", { cache: "no-store" }),
    ]);

    if (!returnsResponse.ok || !feesResponse.ok || !sizesResponse.ok) {
      throw new Error("Fund data request failed.");
    }

    /** @type {{data?: TefasReturnRow[]}} */
    const returnsPayload = await returnsResponse.json();
    /** @type {{data?: TefasFeeRow[]}} */
    const feesPayload = await feesResponse.json();
    /** @type {{data?: TefasSizeRow[]}} */
    const sizesPayload = await sizesResponse.json();

    allFundsByMode.return = Array.isArray(returnsPayload.data) ? returnsPayload.data.map(mapReturnRow) : [];
    allFundsByMode.fee = Array.isArray(feesPayload.data) ? feesPayload.data.map(mapFeeRow) : [];
    allFundsByMode.size = Array.isArray(sizesPayload.data) ? sizesPayload.data.map(mapSizeRow) : [];

    populateFilters(getModeFunds());
    updateFundList();
  } catch (error) {
    fundStatus.textContent = "Fon verisi yüklenemedi.";
    fundGrid.innerHTML = `
      <div class="empty-state fund-empty-state">
        TEFAS verisi şu anda okunamadı. Daha sonra tekrar deneyin.
      </div>
    `;
  }
}

founderFilter?.addEventListener("change", updateFundList);
typeFilter?.addEventListener("change", updateFundList);
fundSearch?.addEventListener("input", updateFundList);

initializeSortTabs();
initializeTableHeadSorting();
initializeFundsPage();
