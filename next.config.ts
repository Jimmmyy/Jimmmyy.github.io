const isProd = process.env.NODE_ENV === "production";

const repo = "jimmmyy.github.io"; // ← nom du repo

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
