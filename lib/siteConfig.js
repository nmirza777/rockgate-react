// ROCKGATE CAPITAL — LIVE REGULATORY CONFIGURATION
//
// This is the single edit point for company, contact and regulatory details.
// If Connect supplies replacement approved wording, paste it into
// regulatoryStatementOverride below.

export const siteConfig = {
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
  rockgateRegisterUrl: "https://register.fca.org.uk/s/firm?id=001Sk000013cpsAIAQ",

  // Leave blank to use the automatically generated appointed-representative
  // statement below. If Connect supplies exact approved wording, paste it here.
  regulatoryStatementOverride: "",

  // Complaints-handling contact — Connect's Network Compliance Department,
  // supplied by Connect IFA Ltd (from their approved ESIS template wording,
  // 27 August 2026). Update here if Connect ever revises these details.
  complaintsNetworkAddress: "39 Station Lane, Hornchurch, RM12 6JL",
  complaintsNetworkPhone: "01708 676110",

  privacyLastUpdated: "22 August 2026",
};

export function getRegulatoryStatement() {
  const { regulatoryStatementOverride, companyName, principalName, rockgateFrn, principalFrn } =
    siteConfig;

  if (regulatoryStatementOverride) return regulatoryStatementOverride;

  return (
    `${companyName} is an Appointed Representative of ${principalName}, ` +
    `which is authorised and regulated by the Financial Conduct Authority. ` +
    `${companyName} is entered on the Financial Services Register under Firm Reference Number ${rockgateFrn}. ` +
    `${principalName} Firm Reference Number: ${principalFrn}.`
  );
}

// Verbatim wording approved by Connect IFA Ltd for the ESIS template
// (supplied 27 August 2026) — do not paraphrase without checking with
// Connect first.
export function getComplaintsStatement() {
  const { principalName, complaintsNetworkAddress, complaintsNetworkPhone } = siteConfig;
  return (
    `It is our intention to provide you with a high level of customer service at all times. ` +
    `If there is an occasion when we do not meet these standards and you wish to register a complaint, ` +
    `please write to our Network: Compliance Department; ${principalName}, ${complaintsNetworkAddress} ` +
    `or call: ${complaintsNetworkPhone}. If you cannot settle your complaint with us, you may be entitled ` +
    `to refer it to the Financial Ombudsman Service.`
  );
}

export function mailtoHref() {
  return `mailto:${siteConfig.email}`;
}

export function telHref() {
  return `tel:${siteConfig.telephoneE164}`;
}

export function whatsappHref() {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}
