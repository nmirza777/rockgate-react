// Mirrors the basePath logic in next.config.mjs. Needed anywhere a raw
// asset URL (favicon, <Image> src) is written by hand, since Next's
// automatic basePath prefixing isn't applied to those in a static,
// unoptimized-image export.
export const basePath = process.env.NEXT_BASE_PATH || "";
