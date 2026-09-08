"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

// Keeps the literal "user@domain" text out of the static HTML that ships to
// bots, without hiding it from real visitors. The static-exported page
// renders the placeholder below; once the page hydrates in a real browser,
// this swaps in the real address and a working mailto: link. Simple
// scrapers that just regex the fetched HTML for an email pattern find
// nothing to harvest.
export default function ObfuscatedEmail({ className, iconBefore }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(true);
  }, []);

  const [user, domain] = siteConfig.email.split("@");
  const placeholder = `${user} [at] ${domain.replace(/\./g, " [dot] ")}`;

  return (
    <a className={className} href={revealed ? `mailto:${siteConfig.email}` : undefined}>
      {iconBefore}
      <span>{revealed ? siteConfig.email : placeholder}</span>
    </a>
  );
}
