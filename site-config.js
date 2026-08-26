/*
  ROCKGATE CAPITAL — LIVE REGULATORY CONFIGURATION
  ================================================
  Rockgate Capital Ltd is registered on the Financial Services Register as an
  Appointed Representative of Connect IFA Ltd.

  Rockgate Capital Ltd FRN: 1060671
  Connect IFA Ltd FRN: 441505

  If Connect supplies replacement approved wording, paste it into
  regulatoryStatementOverride below.
*/

window.ROCKGATE_CONFIG = {
  fcaApproved: true,

  tradingName: "Rockgate Capital",
  companyName: "Rockgate Capital Ltd",
  companyNumber: "17050272",
  registeredOffice: "71–75 Shelton Street, Covent Garden, London, WC2H 9JQ",

  email: "info@rockgatecapital.co.uk",
  telephoneDisplay: "+44 (0) 7880 589888",
  telephoneE164: "+447880589888",
  whatsappNumber: "447880589888",

  principalName: "Connect IFA Ltd",
  principalFrn: "441505",
  principalRegisterUrl: "https://register.fca.org.uk/s/firm?id=001b000000MfbXtAAJ",

  rockgateFrn: "1060671",
  rockgateRegisterUrl: "https://register.fca.org.uk/s/search?q=1060671&type=Companies",

  /*
    Leave blank to use the automatically generated appointed-representative
    statement. If Connect supplies exact approved wording, paste it here.
  */
  regulatoryStatementOverride: "",

  privacyLastUpdated: "22 August 2026"
};

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.ROCKGATE_CONFIG;

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };

  setText("[data-config='tradingName']", cfg.tradingName);
  setText("[data-config='companyName']", cfg.companyName);
  setText("[data-config='companyNumber']", cfg.companyNumber);
  setText("[data-config='registeredOffice']", cfg.registeredOffice);
  setText("[data-config='email']", cfg.email);
  setText("[data-config='telephoneDisplay']", cfg.telephoneDisplay);
  setText("[data-config='principalName']", cfg.principalName);
  setText("[data-config='principalFrn']", cfg.principalFrn);
  setText("[data-config='rockgateFrn']", cfg.rockgateFrn || "TO BE INSERTED");
  setText("[data-config='privacyLastUpdated']", cfg.privacyLastUpdated);
  setText("[data-config='currentYear']", String(new Date().getFullYear()));

  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${cfg.email}`;
  });

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${cfg.telephoneE164}`;
  });

  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.href = `https://wa.me/${cfg.whatsappNumber}`;
  });

  document.querySelectorAll("[data-principal-register-link]").forEach((el) => {
    el.href = cfg.principalRegisterUrl;
  });

  document.querySelectorAll("[data-rockgate-register-link]").forEach((el) => {
    if (cfg.rockgateRegisterUrl) {
      el.href = cfg.rockgateRegisterUrl;
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
    }
  });

  const statusBadge = document.querySelector("[data-regulatory-badge]");
  const regulatoryCopy = document.querySelector("[data-regulatory-copy]");

  if (cfg.fcaApproved && cfg.rockgateFrn) {
    if (statusBadge) statusBadge.textContent = "Appointed Representative";

    const automaticStatement =
      `${cfg.companyName} is an Appointed Representative of ${cfg.principalName}, ` +
      `which is authorised and regulated by the Financial Conduct Authority. ` +
      `${cfg.companyName} is entered on the Financial Services Register under Firm Reference Number ${cfg.rockgateFrn}. ` +
      `${cfg.principalName} Firm Reference Number: ${cfg.principalFrn}.`;

    if (regulatoryCopy) {
      regulatoryCopy.textContent =
        cfg.regulatoryStatementOverride || automaticStatement;
    }
  } else {
    if (statusBadge) statusBadge.textContent = "Appointed Representative";
    if (regulatoryCopy) {
      regulatoryCopy.textContent =
        `${cfg.companyName} is an Appointed Representative of ${cfg.principalName}, which is authorised and regulated by the Financial Conduct Authority.`;
    }
  }
});
