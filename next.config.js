/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // CDN already handles format conversion (format=auto in URL),
    // so skip Next.js proxy to load images directly — much faster.
    unoptimized: true,
  },
};

module.exports = nextConfig;
