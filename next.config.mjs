// Set by the GitHub Actions workflow so the site works at
// https://<user>.github.io/rockgate-react/ without hardcoding that
// path into local development or a future custom-domain deploy.
const basePath = process.env.NEXT_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
