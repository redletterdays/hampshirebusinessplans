/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://hampshirebusinessplans.com", // Replace with your actual domain
  generateRobotsTxt: true, // Creates robots.txt file
  sitemapSize: 5000, // Splits large sitemaps if necessary
  exclude: ["/admin", "/404"], // Exclude specific pages
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/404"] },
    ],
  },
};

module.exports = config;
