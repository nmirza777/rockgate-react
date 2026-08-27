import { Newsreader, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { basePath } from "@/lib/basePath";

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://rockgatecapital.co.uk"),
  title: "Rockgate Capital | Specialist Property Finance",
  description:
    "Mortgage advice and specialist property finance across residential mortgages, buy-to-let, bridging and commercial finance.",
  openGraph: {
    title: "Rockgate Capital | Specialist Property Finance",
    description: "Specialist property finance, arranged properly.",
    type: "website",
    url: "https://rockgatecapital.co.uk/",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export const viewport = {
  themeColor: "#0F241F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${archivo.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
