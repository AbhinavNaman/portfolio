// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ this is correct
  images: {
    unoptimized: true
  },
  basePath: "", // keep empty for Vercel deployment
};

module.exports = nextConfig;
