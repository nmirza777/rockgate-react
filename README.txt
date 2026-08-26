ROCKGATE CAPITAL — STATIC LIVE PRODUCTION WEBSITE
=================================================

STATUS
------
This package is configured for Rockgate Capital Ltd's live Appointed Representative status.

REGULATORY DETAILS
------------------
Rockgate Capital Ltd
Company number: 17050272
Firm Reference Number: 1060671
Status used on website: Appointed Representative
Principal: Connect IFA Ltd
Connect IFA Ltd Firm Reference Number: 441505

The website wording states that Rockgate Capital Ltd is an Appointed Representative of
Connect IFA Ltd, which is authorised and regulated by the Financial Conduct Authority.

FILES
-----
index.html       Main responsive website
privacy.html     Privacy policy
site-config.js   Single edit point for company, contact and regulatory details
favicon.svg      Gate-mark browser icon

DEPLOYMENT
----------
Upload all four web files to the same public web folder:
- index.html
- privacy.html
- site-config.js
- favicon.svg

The homepage must remain named index.html.

LIVE CONFIGURATION
------------------
site-config.js is currently set to:
  fcaApproved: true
  rockgateFrn: "1060671"
  rockgateRegisterUrl: "https://register.fca.org.uk/s/search?q=1060671&type=Companies"

Do not change the regulatory wording or service permissions without checking the effect
with Connect IFA Ltd / compliance. If Connect supplies exact mandated wording, put it in
regulatoryStatementOverride in site-config.js.

TECHNICAL NOTES
---------------
The site is plain HTML, CSS and JavaScript. It has no build step or React dependency.
It currently has no analytics, advertising code or enquiry-form backend.

The pages load Newsreader and Archivo from Google Fonts. The privacy policy discloses
this external request. If fonts are self-hosted later, update the privacy policy.

FUTURE REACT BUILD
------------------
This static site can remain live while the React production build is developed separately.
The visual system can later be split into components without changing the live site.

FINAL LIVE CHECKS
-----------------
- Test every link on desktop and mobile.
- Confirm telephone, email and WhatsApp details.
- Open both FCA Register links and confirm the displayed records.
- Obtain/retain Connect compliance approval for the final published wording and services.
- Update the privacy policy before adding forms, analytics, pixels, CRM or booking tools.
- The complaints-handling / Financial Ombudsman Service wording added to index.html's footer
  and privacy.html's "Questions and complaints" section (marked with an HTML comment in each
  file) is standard AR boilerplate. Confirm the exact required wording, timeframes and FOS
  contact details with Connect IFA Ltd before this leaves development.
- site-config-only.zip is a packaged copy of site-config.js for handing to someone who only
  needs to edit that one file. It is now stale after this update — regenerate it from the
  current site-config.js before sharing, and do not upload it or the site-config-only folder
  to the public web folder.

Updated: 22 August 2026
