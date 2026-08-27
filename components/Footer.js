import Link from "next/link";
import BrandMark from "./BrandMark";
import { siteConfig, getRegulatoryStatement, mailtoHref, telHref, whatsappHref } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/#top" aria-label="Rockgate Capital home">
              <BrandMark className="brand__mark" fill="#F7F4EE" />
              <span className="brand__name">
                <span className="brand__rockgate">Rockgate</span>
                <span className="brand__capital">Capital</span>
              </span>
            </Link>
            <p>
              Mortgage advice and specialist property finance across residential mortgages,
              buy-to-let, bridging and commercial finance.
            </p>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <Link href="/#services">Residential</Link>
            <Link href="/#services">Buy-to-let</Link>
            <Link href="/#services">Bridging</Link>
            <Link href="/#services">Commercial</Link>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <Link href="/#about">About</Link>
            <Link href="/#approach">Approach</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <a href={mailtoHref()}>{siteConfig.email}</a>
            <a href={telHref()}>{siteConfig.telephoneDisplay}</a>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="regulatory">
          <p>{getRegulatoryStatement()}</p>
          <p>
            <span>{siteConfig.companyName}</span> is registered in England and Wales under company
            number <span>{siteConfig.companyNumber}</span>. Registered office:{" "}
            <span>{siteConfig.registeredOffice}</span>.
          </p>
          <p>
            Your home may be repossessed if you do not keep up repayments on your mortgage. The
            Financial Conduct Authority does not regulate some forms of buy-to-let, commercial and
            bridging finance.
          </p>
          <p>
            If you wish to complain about our advice or service, details of how to do so — including
            how to contact {siteConfig.principalName}&apos;s Compliance Department and your right to
            refer the matter to the Financial Ombudsman Service — are set out in our{" "}
            <Link href="/privacy#complaints">Privacy Policy</Link>.
          </p>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </span>
          <div className="footer-bottom__links">
            <Link href="/privacy">Privacy Policy</Link>
            <a href={siteConfig.principalRegisterUrl} target="_blank" rel="noopener noreferrer">
              Principal FCA Register entry
            </a>
            <a href={siteConfig.rockgateRegisterUrl} target="_blank" rel="noopener noreferrer">
              Rockgate FCA Register entry
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
