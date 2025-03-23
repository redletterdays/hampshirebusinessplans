import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://hampshirebusinessplans.com", // Your actual domain
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 5000, // Splits large sitemaps
  exclude: ["/admin", "/404"], // Exclude pages you don't want indexed
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/404"] }, // Prevents indexing unwanted pages
    ],
  },
};

export default config;
