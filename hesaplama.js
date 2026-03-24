const besForm = document.querySelector("#bes-form");
const besTotalAmount = document.querySelector("#bes-total-amount");
const besValidation = document.querySelector("#bes-validation");
const besScenarioGrid = document.querySelector("#bes-scenario-grid");
const besScenarioNote = document.querySelector("#bes-scenario-note");
const besScenarioTabs = Array.from(
  document.querySelectorAll("[data-bes-scenario]"),
);

const fundReturnForm = document.querySelector("#fund-return-form");
const fundReturnGrid = document.querySelector("#fund-return-grid");
const fundReturnTotal = document.querySelector("#fund-return-total");

const stateSupportForm = document.querySelector("#state-support-form");
const stateSupportGrid = document.querySelector("#state-support-grid");
const stateSupportTotal = document.querySelector("#state-support-total");

const calculationTabs = Array.from(
  document.querySelectorAll("[data-calculation-tab]"),
);
const calculationPanels = Array.from(
  document.querySelectorAll("[data-calculation-panel]"),
);
const groupedNumberInputs = Array.from(
  document.querySelectorAll("[data-grouped-number]"),
);

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const STATE_CONTRIBUTION_RATE = 0.2;
const BASE_PARTICIPANT_ANNUAL_RATE = 0.02272385495382534;
const BASE_STATE_ANNUAL_RATE = 0.03957049496817233;
const ALTERNATIVE_PARTICIPANT_ANNUAL_RATE = 0.0026894224575482184;
const ALTERNATIVE_STATE_ANNUAL_RATE = 0.019770938109713976;

/**
 * @param {number} value
 * @returns {string}
 */
function formatCurrency(value) {
  return `${numberFormatter.format(Math.max(0, Math.round(value)))} TL`;
}

/**
 * @param {number} value
 * @returns {string}
 */
function formatPercent(value) {
  return `%${decimalFormatter.format(value)}`;
}

/**
 * @param {string} value
 * @returns {number}
 */
function parseGroupedNumber(value) {
  const normalized = value.replace(/[^\d]/g, "");
  return Number(normalized || 0);
}

/**
 * @param {HTMLInputElement} input
 * @returns {void}
 */
function formatGroupedInput(input) {
  input.value = numberFormatter.format(parseGroupedNumber(input.value));
}

/**
 * @returns {void}
 */
function initializeGroupedNumberInputs() {
  groupedNumberInputs.forEach((input) => {
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    formatGroupedInput(input);

    input.addEventListener("focus", () => {
      input.value = String(parseGroupedNumber(input.value));
    });

    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^\d]/g, "");
    });

    input.addEventListener("blur", () => {
      formatGroupedInput(input);
    });
  });
}

/**
 * @param {number} currentAge
 * @param {number} retirementAge
 * @returns {{years: number, contributionYears: number, retirementAge: number, validationMessage: string}}
 */
function normalizeRetirement(currentAge, retirementAge) {
  const minimumRetirementAge = 56;
  const minimumYearsInSystem = 10;
  const normalizedRetirementAge = Math.max(
    retirementAge,
    minimumRetirementAge,
    currentAge + minimumYearsInSystem,
  );
  const years = normalizedRetirementAge - currentAge;
  const contributionYears = years + 1;

  let validationMessage = "";

  if (retirementAge < minimumRetirementAge) {
    validationMessage = "Emeklilik yaşı en az 56 olarak alındı.";
  } else if (retirementAge - currentAge < minimumYearsInSystem) {
    validationMessage = "Sistemde en az 10 yıl kalınacak şekilde hesaplama yapıldı.";
  }

  return {
    years,
    contributionYears,
    retirementAge: normalizedRetirementAge,
    validationMessage,
  };
}

/**
 * @param {{
 * currentAge: number,
 * retirementAge: number,
 * paymentIntervalMonths: number,
 * contribution: number,
 * annualIncreaseRate: number,
 * initialContribution: number
 * }} inputs
 * @param {number} participantAnnualRate
 * @param {number} stateAnnualRate
 * @returns {{
 * totalAmount: number,
 * participantPrincipal: number,
 * participantReturn: number,
 * statePrincipal: number,
 * stateReturn: number,
 * years: number,
 * normalizedRetirementAge: number,
 * validationMessage: string
 * }}
 */
function calculateBesScenario(
  inputs,
  participantAnnualRate,
  stateAnnualRate,
) {
  const retirement = normalizeRetirement(inputs.currentAge, inputs.retirementAge);
  const participantMonthlyRate =
    Math.pow(1 + participantAnnualRate, 1 / 12) - 1;
  const stateMonthlyRate = Math.pow(1 + stateAnnualRate, 1 / 12) - 1;
  const annualIncrease = 1 + inputs.annualIncreaseRate;
  const totalMonths = retirement.contributionYears * 12;

  let participantBalance = inputs.initialContribution;
  let participantPrincipal = inputs.initialContribution;
  let stateBalance = inputs.initialContribution * STATE_CONTRIBUTION_RATE;
  let statePrincipal = inputs.initialContribution * STATE_CONTRIBUTION_RATE;
  let currentContribution = inputs.contribution;

  for (let month = 1; month <= totalMonths; month += 1) {
    participantBalance *= 1 + participantMonthlyRate;
    stateBalance *= 1 + stateMonthlyRate;

    if (month % inputs.paymentIntervalMonths === 0) {
      participantBalance += currentContribution;
      participantPrincipal += currentContribution;

      const stateSupport = currentContribution * STATE_CONTRIBUTION_RATE;
      stateBalance += stateSupport;
      statePrincipal += stateSupport;
    }

    if (month % 12 === 0) {
      currentContribution *= annualIncrease;
    }
  }

  return {
    totalAmount: participantBalance + stateBalance,
    participantPrincipal,
    participantReturn: participantBalance - participantPrincipal,
    statePrincipal,
    stateReturn: stateBalance - statePrincipal,
    years: retirement.years,
    normalizedRetirementAge: retirement.retirementAge,
    validationMessage: retirement.validationMessage,
  };
}

/**
 * @param {{
 * initialAmount: number,
 * monthlyContribution: number,
 * annualReturnRate: number,
 * years: number
 * }} inputs
 * @returns {{
 * principal: number,
 * gain: number,
 * total: number,
 * years: number,
 * monthlyContribution: number,
 * annualRate: number
 * }}
 */
function calculateFundReturn(inputs) {
  const months = Math.max(1, Math.round(inputs.years * 12));
  const monthlyRate = Math.pow(1 + inputs.annualReturnRate / 100, 1 / 12) - 1;

  let total = Math.max(0, inputs.initialAmount);
  let principal = Math.max(0, inputs.initialAmount);

  for (let month = 1; month <= months; month += 1) {
    total *= 1 + monthlyRate;
    total += Math.max(0, inputs.monthlyContribution);
    principal += Math.max(0, inputs.monthlyContribution);
  }

  return {
    principal,
    gain: total - principal,
    total,
    years: Math.max(1, inputs.years),
    monthlyContribution: Math.max(0, inputs.monthlyContribution),
    annualRate: Math.max(0, inputs.annualReturnRate),
  };
}

/**
 * @param {{
 * paymentIntervalMonths: number,
 * contribution: number,
 * years: number,
 * initialContribution: number
 * }} inputs
 * @returns {{
 * participantAnnual: number,
 * participantTotal: number,
 * stateAnnual: number,
 * stateTotal: number,
 * combinedTotal: number,
 * years: number
 * }}
 */
function calculateStateSupport(inputs) {
  const paymentsPerYear = 12 / Math.max(1, inputs.paymentIntervalMonths);
  const annualContribution = Math.max(0, inputs.contribution) * paymentsPerYear;
  const totalContribution =
    annualContribution * Math.max(1, inputs.years) + Math.max(0, inputs.initialContribution);
  const annualStateSupport = annualContribution * 0.3;
  const totalStateSupport = totalContribution * 0.3;

  return {
    participantAnnual: annualContribution,
    participantTotal: totalContribution,
    stateAnnual: annualStateSupport,
    stateTotal: totalStateSupport,
    combinedTotal: totalContribution + totalStateSupport,
    years: Math.max(1, inputs.years),
  };
}

/**
 * @param {string} label
 * @param {string} value
 * @returns {string}
 */
function renderResultItem(label, value) {
  return `
    <article class="calculation-result-item">
      <span>${label}</span>
      <div class="calculation-result-value">
        <strong>${value}</strong>
      </div>
    </article>
  `;
}

/**
 * @param {{base: ReturnType<typeof calculateBesScenario>, alternative: ReturnType<typeof calculateBesScenario>}} results
 * @param {"base"|"alternative"} activeScenario
 * @returns {void}
 */
function renderBesScenario(results, activeScenario) {
  if (!besScenarioGrid || !besScenarioNote || !besTotalAmount) {
    return;
  }

  const selected =
    activeScenario === "alternative" ? results.alternative : results.base;

  besTotalAmount.textContent = formatCurrency(selected.totalAmount);
  besScenarioGrid.innerHTML = [
    renderResultItem("Katılımcı katkı payı toplamı", formatCurrency(selected.participantPrincipal)),
    renderResultItem("Katılımcı getirisi", formatCurrency(selected.participantReturn)),
    renderResultItem("Devlet katkısı toplamı", formatCurrency(selected.statePrincipal)),
    renderResultItem("Devlet katkısı getirisi", formatCurrency(selected.stateReturn)),
    renderResultItem("Sistemde kalınan süre", `${selected.years} yıl`),
    renderResultItem("Hesaplanan emeklilik yaşı", `${selected.normalizedRetirementAge}`),
  ].join("");

  besScenarioNote.textContent =
    activeScenario === "alternative"
      ? "- Alternatif senaryoda yıllık varsayılan reel getiri oranı %2 olarak alınmıştır."
      : "- Temel senaryoda yıllık varsayılan reel getiri oranı %4 olarak alınmıştır.";
}

/**
 * @returns {{
 * currentAge: number,
 * retirementAge: number,
 * paymentIntervalMonths: number,
 * contribution: number,
 * annualIncreaseRate: number,
 * initialContribution: number
 * }}
 */
function readBesInputs() {
  const currentAge = Number(document.querySelector("#bes-current-age")?.value ?? 30);
  const retirementAge = Number(document.querySelector("#bes-retirement-age")?.value ?? 56);
  const paymentIntervalMonths = Number(
    document.querySelector("#bes-frequency")?.value ?? 1,
  );
  const contribution = parseGroupedNumber(
    document.querySelector("#bes-contribution")?.value ?? "0",
  );
  const annualIncreaseRate =
    Number(document.querySelector("#bes-increase-rate")?.value ?? 0) / 100;
  const initialContribution = parseGroupedNumber(
    document.querySelector("#bes-initial")?.value ?? "0",
  );

  return {
    currentAge,
    retirementAge,
    paymentIntervalMonths,
    contribution,
    annualIncreaseRate,
    initialContribution,
  };
}

/**
 * @returns {void}
 */
function calculateAndRenderBes() {
  const inputs = readBesInputs();
  const base = calculateBesScenario(
    inputs,
    BASE_PARTICIPANT_ANNUAL_RATE,
    BASE_STATE_ANNUAL_RATE,
  );
  const alternative = calculateBesScenario(
    inputs,
    ALTERNATIVE_PARTICIPANT_ANNUAL_RATE,
    ALTERNATIVE_STATE_ANNUAL_RATE,
  );
  const activeScenario =
    besScenarioTabs.find((tab) => tab.classList.contains("is-active"))?.getAttribute("data-bes-scenario") ===
    "alternative"
      ? "alternative"
      : "base";

  if (besValidation) {
    besValidation.textContent = base.validationMessage;
  }

  renderBesScenario({ base, alternative }, activeScenario);
}

/**
 * @returns {void}
 */
function calculateAndRenderFundReturn() {
  if (!fundReturnGrid || !fundReturnTotal) {
    return;
  }

  const results = calculateFundReturn({
    initialAmount: parseGroupedNumber(
      document.querySelector("#fund-return-initial")?.value ?? "0",
    ),
    monthlyContribution: parseGroupedNumber(
      document.querySelector("#fund-return-monthly")?.value ?? "0",
    ),
    annualReturnRate: Number(document.querySelector("#fund-return-rate")?.value ?? 0),
    years: Number(document.querySelector("#fund-return-years")?.value ?? 1),
  });

  fundReturnGrid.innerHTML = [
    renderResultItem("Toplam ana para", formatCurrency(results.principal)),
    renderResultItem("Fon getirisi", formatCurrency(results.gain)),
  ].join("");

  fundReturnTotal.textContent = formatCurrency(results.total);
}

/**
 * @returns {void}
 */
function calculateAndRenderStateSupport() {
  if (!stateSupportGrid || !stateSupportTotal) {
    return;
  }

  const results = calculateStateSupport({
    paymentIntervalMonths: Number(document.querySelector("#state-support-frequency")?.value ?? 1),
    contribution: parseGroupedNumber(
      document.querySelector("#state-support-contribution")?.value ?? "0",
    ),
    years: Number(document.querySelector("#state-support-years")?.value ?? 1),
    initialContribution: parseGroupedNumber(
      document.querySelector("#state-support-initial")?.value ?? "0",
    ),
  });

  stateSupportGrid.innerHTML = [
    renderResultItem("Toplam katkı payı", formatCurrency(results.participantTotal)),
    renderResultItem("Toplam devlet katkısı", formatCurrency(results.stateTotal)),
  ].join("");

  stateSupportTotal.textContent = formatCurrency(results.combinedTotal);
}

/**
 * @param {string} tabName
 * @returns {void}
 */
function setCalculationTab(tabName) {
  calculationTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.getAttribute("data-calculation-tab") === tabName);
  });

  calculationPanels.forEach((panel) => {
    panel.hidden = panel.getAttribute("data-calculation-panel") !== tabName;
  });
}

if (besForm) {
  besForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAndRenderBes();
  });
}

if (fundReturnForm) {
  fundReturnForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAndRenderFundReturn();
  });
}

if (stateSupportForm) {
  stateSupportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAndRenderStateSupport();
  });
}

besScenarioTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    besScenarioTabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
    });
    calculateAndRenderBes();
  });
});

calculationTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setCalculationTab(tab.getAttribute("data-calculation-tab") ?? "bes");
  });
});

setCalculationTab("bes");
initializeGroupedNumberInputs();
calculateAndRenderBes();
calculateAndRenderFundReturn();
calculateAndRenderStateSupport();
