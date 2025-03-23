import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://hampshirebusinessplans.com', // Change to your actual domain
  generateRobotsTxt: true, // Generates robots.txt
  sitemapSize: 5000, // Splits sitemap if too large
};

export default config;
