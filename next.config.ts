const isProd = process.env.NODE_ENV === "production";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const repo = "jimmmyy.github.io"; // ← nom du repo

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
