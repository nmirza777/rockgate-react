import styles from "./privacy.module.css";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { siteConfig, getComplaintsStatement } from "@/lib/siteConfig";

export const metadata = {
  title: "Privacy Policy | Rockgate Capital",
  description: "Rockgate Capital privacy policy.",
  alternates: { canonical: "https://rockgatecapital.co.uk/privacy" },
};

const CONTENTS = [
  { href: "#who-we-are", label: "Who we are" },
  { href: "#information", label: "Information we collect" },
  { href: "#purposes", label: "How and why we use it" },
  { href: "#sharing", label: "Who we share it with" },
  { href: "#transfers", label: "International transfers" },
  { href: "#retention", label: "How long we keep it" },
  { href: "#security", label: "Security" },
  { href: "#rights", label: "Your rights" },
  { href: "#cookies", label: "Cookies and website data" },
  { href: "#complaints", label: "Questions and complaints" },
];

export default function PrivacyPolicy() {
  return (
    <main id="main-content">
      <section className={styles.policyHero}>
        <div className="container">
          <div className="section-label">Legal information</div>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p>
            This policy explains how {siteConfig.companyName} collects, uses and protects personal
            information when you visit the website or contact us. Last updated:{" "}
            {siteConfig.privacyLastUpdated}.
          </p>
        </div>
      </section>

      <section className={styles.policy}>
        <div className={`container ${styles.policyGrid}`}>
          <nav className={styles.contents} aria-label="Privacy policy contents">
            <strong>Contents</strong>
            {CONTENTS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <section className={styles.policySection} id="who-we-are">
              <h2 className={styles.sectionHeading}>1. Who we are</h2>
              <p>
                The data controller is <strong>{siteConfig.companyName}</strong>, trading as{" "}
                <strong>{siteConfig.tradingName}</strong>. {siteConfig.companyName} is an Appointed
                Representative of <strong>{siteConfig.principalName}</strong>, which is authorised
                and regulated by the Financial Conduct Authority. {siteConfig.companyName} is
                entered on the Financial Services Register under Firm Reference Number{" "}
                <strong>{siteConfig.rockgateFrn}</strong>. {siteConfig.principalName} Firm Reference
                Number: <strong>{siteConfig.principalFrn}</strong>. Company number:{" "}
                {siteConfig.companyNumber}. Registered office: {siteConfig.registeredOffice}.
              </p>
              <p>
                Privacy enquiries can be sent to <ObfuscatedEmail />.
              </p>
            </section>

            <section className={styles.policySection} id="information">
              <h2 className={styles.sectionHeading}>2. Information we collect</h2>
              <p>Depending on how you contact us and how your enquiry progresses, we may collect:</p>
              <ul>
                <li>your name, telephone number, email address and preferred contact method;</li>
                <li>
                  information you provide about a property, borrowing requirement, business or
                  financial circumstances;
                </li>
                <li>correspondence, call notes and records of actions taken in response to your enquiry;</li>
                <li>
                  technical information recorded by our hosting and security providers, such as IP
                  address, browser type, device information, timestamps and requested pages;
                </li>
                <li>
                  information from third parties where you ask them to introduce you, or where this
                  is necessary and lawful as part of a later application process.
                </li>
              </ul>
              <div className={styles.important}>
                Please do not send bank statements, identity documents, medical information or other
                sensitive personal data through ordinary email or WhatsApp until a secure method has
                been agreed.
              </div>
            </section>

            <section className={styles.policySection} id="purposes">
              <h2 className={styles.sectionHeading}>3. How and why we use personal information</h2>
              <p>We may use personal information to:</p>
              <ul>
                <li>respond to enquiries and communicate with you;</li>
                <li>take steps at your request before entering into a contract;</li>
                <li>assess whether and how we may be able to assist;</li>
                <li>manage our business records, security, service quality and complaints;</li>
                <li>meet legal, regulatory, anti-fraud and financial-crime obligations;</li>
                <li>establish, exercise or defend legal claims.</li>
              </ul>
              <p>
                Our lawful bases will depend on the circumstances. They may include taking steps at
                your request before a contract, performing a contract, complying with legal
                obligations, and our legitimate interests in operating the business, responding to
                enquiries, maintaining appropriate records and protecting our systems.
              </p>
              <p>
                We do not make decisions that have legal or similarly significant effects on you
                solely by automated means through this website.
              </p>
            </section>

            <section className={styles.policySection} id="sharing">
              <h2 className={styles.sectionHeading}>4. Who we may share information with</h2>
              <p>Where necessary and lawful, information may be shared with:</p>
              <ul>
                <li>our principal firm, {siteConfig.principalName}, and relevant compliance support providers;</li>
                <li>lenders, product providers, valuers, solicitors and other parties involved in a proposed transaction;</li>
                <li>identity, credit-reference, fraud-prevention and financial-crime checking services;</li>
                <li>technology, communications, cloud storage, website hosting and professional service providers acting for us;</li>
                <li>regulators, law-enforcement bodies, courts, insurers, auditors or advisers where required or appropriate.</li>
              </ul>
              <p>
                The parties involved and the information required will depend on your circumstances.
                More detailed privacy information may be supplied before a regulated application or
                other formal service begins.
              </p>
              <p>We do not sell personal information.</p>
            </section>

            <section className={styles.policySection} id="transfers">
              <h2 className={styles.sectionHeading}>5. International transfers</h2>
              <p>
                Some technology and communications suppliers may store or access information outside
                the United Kingdom. Where this occurs, we will seek to use providers and
                arrangements that provide an appropriate level of protection, such as adequacy
                regulations or approved contractual safeguards.
              </p>
              <p>
                This website uses fonts that are bundled and self-hosted at build time — no request
                is made to Google Fonts or any other third party when a page loads.
              </p>
              <p>
                WhatsApp links only transfer you to WhatsApp when you choose to click them.
                WhatsApp&apos;s own privacy terms then apply to that service.
              </p>
              <p>
                The contact section of this website embeds a Calendly booking calendar so you can
                arrange a call directly. Calendly may set cookies and process technical information
                (such as IP address and browser details) to provide that booking service, and if you
                book a call you will share your name, email address and chosen time with them.
                Calendly&apos;s own privacy policy applies to that processing.
              </p>
            </section>

            <section className={styles.policySection} id="retention">
              <h2 className={styles.sectionHeading}>6. How long we keep information</h2>
              <p>
                We keep personal information only for as long as it is reasonably needed for the
                purpose for which it was collected, and to meet applicable legal, regulatory,
                professional, complaint-handling and record-keeping requirements.
              </p>
              <p>
                A general enquiry that does not progress will normally be reviewed for deletion
                after 24 months from the last meaningful contact, unless there is a legal,
                regulatory, complaint, fraud-prevention or other justified reason to keep it longer.
                Records connected with regulated advice or an application may need to be retained
                for a longer period under the rules and policies applying at that time.
              </p>
            </section>

            <section className={styles.policySection} id="security">
              <h2 className={styles.sectionHeading}>7. Security</h2>
              <p>
                We use appropriate technical and organisational measures intended to protect
                personal information from unauthorised access, loss, misuse, alteration or
                disclosure. No method of internet transmission is completely secure, so sensitive
                information should be sent only through an agreed secure channel.
              </p>
            </section>

            <section className={styles.policySection} id="rights">
              <h2 className={styles.sectionHeading}>8. Your information rights</h2>
              <p>Depending on the circumstances and the lawful basis used, you may have rights to:</p>
              <ul>
                <li>ask for access to your personal information;</li>
                <li>ask for inaccurate information to be corrected;</li>
                <li>ask for information to be erased or its use restricted;</li>
                <li>object to certain processing, including direct marketing;</li>
                <li>receive certain information in a portable format;</li>
                <li>withdraw consent where consent is the basis relied upon.</li>
              </ul>
              <div className={styles.rightsBox}>
                <h3 className={styles.rightsBoxTitle}>Your right to object</h3>
                <p>
                  You have the right to object to processing based on legitimate interests in
                  certain circumstances. You also have an absolute right to object to the use of
                  your personal information for direct marketing.
                </p>
              </div>
              <p>
                These rights are not absolute and may be subject to exemptions. To make a request,
                email <ObfuscatedEmail />. We may need to verify your
                identity before acting on a request.
              </p>
            </section>

            <section className={styles.policySection} id="cookies">
              <h2 className={styles.sectionHeading}>9. Cookies and website data</h2>
              <p>
                This website does not set its own analytics, advertising or profiling cookies. The
                embedded Calendly booking calendar in the contact section is the one exception —
                see the International Transfers section above — and may set cookies of its own to
                provide that service. Essential server and security logs may still be created by
                the hosting provider.
              </p>
              <p>
                If analytics, advertising pixels or other non-essential technologies are added
                later, this policy and any necessary cookie consent controls must be updated before
                those technologies are enabled.
              </p>
            </section>

            <section className={styles.policySection} id="complaints">
              <h2 className={styles.sectionHeading}>10. Questions and complaints</h2>
              <p>
                Please contact us first if you have a question or concern about how personal
                information has been handled: <ObfuscatedEmail />.
              </p>
              <p>
                You also have the right to complain to the Information Commissioner&apos;s Office,
                the United Kingdom&apos;s data-protection regulator. Its current contact information
                and complaint service are available on the ICO website.
              </p>

              {/* Complaints wording approved by Connect IFA Ltd for the ESIS template (supplied 27 August 2026) — do not alter without checking with Connect first. */}
              <h3 className={styles.subHeading}>What to do if you have a complaint</h3>
              <p>{getComplaintsStatement()}</p>
              <p>
                Financial Ombudsman Service:{" "}
                <a
                  href="https://www.financial-ombudsman.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.financial-ombudsman.org.uk
                </a>
              </p>

              <p>
                We may update this policy when our services, suppliers, legal duties or regulatory
                arrangements change. The latest revision date appears at the top of this page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
