export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://rockgatecapital.co.uk";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
