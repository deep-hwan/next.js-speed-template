/** @type {import('next-sitemap').IConfig} */

// 예제
const siteUrl = 'https://dbleagency.com';

const menuItems = [
  { name: '홈', url: '/' },
  { name: '문의하기', url: '/contactus' },
  { name: '포트폴리오', url: '/portfolios' },
  { name: '디자인', url: '/designs' },
  { name: '위젯', url: '/widgets' },
  { name: 'FAQ', url: '/faq' },
];

const additionalPaths = menuItems.map(item => ({
  loc: item.url,
  changefreq: 'daily',
  priority: item.url === '/' ? 1.0 : 0.8,
}));

const sitemapConfig = {
  siteUrl: siteUrl,
  name: '디블에이전시',
  exclude: ['/404'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  outDir: './public',
  priority: 0.7,
  trailingSlash: false, //  true 시 항상 URL 끝에 / 붙임s
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/observer/jj', '/observer/ok'],
      },
    ],
    // additionalSitemaps: [`${siteUrl}/sitemap-0.xml`],
  },

  // 특정 경로 설정 -  우선순위 처리
  additionalPaths: async config => additionalPaths,
};

module.exports = sitemapConfig;
