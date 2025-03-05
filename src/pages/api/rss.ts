import { menus } from '@/libs/site/menus';
import { mySite } from '@/libs/site/site';
import { format } from 'date-fns';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Define a type for the RSS item
interface RssItem {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
}

// Define a type for JSON file configuration
interface JsonFileConfig {
  path: string;
  key: string;
}

// Function to generate RSS items from menus
function generateMenuRssItems(): RssItem[] {
  return menus.map(menu => ({
    title: `${mySite.title} - ${menu.name}`,
    description: mySite.description,
    url: `${mySite.url}${menu.url}`,
    image: mySite.logoUrl,
    datePublished: new Date(),
  }));
}

// Function to fetch dynamic URLs from multiple JSON files if needed
async function fetchDynamicUrls(basePath: string): Promise<RssItem[]> {
  const jsonFiles: JsonFileConfig[] = [];

  let dynamicUrls: RssItem[] = [];

  for (const { path: jsonPath, key } of jsonFiles) {
    try {
      const data: any[] = JSON.parse(fs.readFileSync(path.join(__dirname, jsonPath), 'utf-8'));
      const urls = data.map((item: any) => ({
        title: item.title || item[key] || mySite.title,
        description: item.description || mySite.description,
        url: `${mySite.url}${basePath}/${item[key]}`,
        image: mySite.logoUrl,
        datePublished: new Date(),
      }));
      dynamicUrls = dynamicUrls.concat(urls);
    } catch (error) {
      console.error(`Error reading or parsing file ${jsonPath}:`, error);
    }
  }

  return dynamicUrls;
}

const generateRssFeed = async () => {
  // Generate RSS items from menus
  const menuRssItems = generateMenuRssItems();

  // Fetch any additional dynamic URLs if needed
  const dynamicUrls = await fetchDynamicUrls('');

  const rssItems = [
    ...menuRssItems,
    ...dynamicUrls,
    // Add more items dynamically if needed
  ];

  const rssItemsXml = rssItems
    .map(item => {
      const date = format(new Date(item.datePublished), 'EEE, dd MMM yyyy HH:mm:ss O');
      return `
        <item>
          <title>${item.title}</title>
          <description><![CDATA[${item.description}]]></description>
          <link>${item.url}</link>
          <guid>${item.url}</guid>
          <pubDate>${date}</pubDate>
          <enclosure url="${item.image}" type="image/png" />
        </item>
      `;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${mySite.title}</title>
    <link>${mySite.url}</link>
    <description>${mySite.description}</description>
    <language>ko</language>
    <lastBuildDate>${format(new Date(), 'EEE, dd MMM yyyy HH:mm:ss O')}</lastBuildDate>
    ${rssItemsXml}
  </channel>
</rss>`;

  return rssFeed;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rssFeed = await generateRssFeed();

    res.setHeader('Content-Type', 'application/xml');
    res.write(rssFeed);
    res.end();
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    res.status(500).send('Error generating RSS feed.');
  }
};
