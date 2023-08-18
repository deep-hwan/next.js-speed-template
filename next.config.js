/** @type {import('next').NextConfig} */

// PWA
const isProduction = process.env.NODE_ENV === "production";
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching: [],
  // disable: !isProduction,  // 배포할때엔 활성화 하세요
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.deepfactory.kr/";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  minimumCacheTTL: 60,

  siteUrl: "https://deepfactory.kr/",
  additionalSitemaps: [`${siteUrl}server-sitemap.xml`],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.5,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: "*",
        disallow: ["/404"],
      },
    ],
  },

  images: {
    // unoptimized: false,
    domains: ["imagedelivery.net", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPWA(nextConfig);
