import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const generateSitemap = async () => {
  let xml = '';

  xml += '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  // 동적 라우터 메뉴 pathname 추가
  const staticPages = [
    '',
    'portfolio',
    // ... other static routes
  ];

  staticPages.forEach((slug) => {
    xml += '<url>';
    xml += `<loc>${process.env.NEXT_PUBLIC_SITE_URL}/${slug}</loc>`;
    xml += `<changefreq>daily</changefreq>`;
    xml += `<priority>0.7</priority>`;
    xml += '</url>';
  });

  // 서버 클라우드 API 주소 입력
  // 동적 사이트맵 라우터 처리 : 동적 라우터의 서버 api 주소 추가
  const dynamicRoutes = {
    portfolio: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/getDetailPortfolio`,
  };

  // Loop over dynamic routes to fetch their data and add to sitemap
  for (const [route, endpoint] of Object.entries(dynamicRoutes)) {
    const { data: items } = await axios.get(endpoint);
    items.forEach((item: any) => {
      xml += '<url>';
      xml += `<loc>${process.env.NEXT_PUBLIC_SITE_URL}/${route}/${item.id}</loc>`; // Assuming `id` is the dynamic part
      xml += `<changefreq>daily</changefreq>`;
      xml += `<priority>0.9</priority>`;
      xml += '</url>';
    });
  }

  xml += '</urlset>';

  return xml;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const sitemap = await generateSitemap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  } catch (e) {
    console.error(e);
    res.status(500).send('Error generating sitemap.');
  }
};
