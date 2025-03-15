import { mySite, siteNavigation, siteOrganization, sitePerson, siteWebSite } from '@/libs/site/site';

import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

type Breadcrumb = {
  position: number;
  name: string;
  url: string;
};

interface MyDocumentProps extends DocumentInitialProps {
  breadcrumbList: Breadcrumb[] | null;
  locale: string;
}

const MyDocument = ({ breadcrumbList, locale }: MyDocumentProps) => {
  console.log(breadcrumbList);

  return (
    <Html lang={'ko'}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />

        {/* 사이트 정보 */}
        <meta name='application-name' content={mySite.name} />
        <meta property='og:site_name' content={mySite.name} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='ko_KR' />
        <link itemProp='url' href={mySite.url} />
        <meta itemProp='name' content={mySite.name} />
        <meta itemProp='alternateName' content={mySite.title} />

        {/* <link rel='manifest' href='/manifest.json' /> */}
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='alternate' type='application/rss+xml' title={mySite.name + ' RSS Feed'} href='/api/rss' />

        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}`}
        />

        {/* PWA 셋팅 */}
        {/* <SplashScreens />
        <link rel='manifest' href='/manifest.json' /> */}
        <meta name='theme-color' content='#ffffff' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={mySite.name} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-tap-highlight' content='no' />

        {/* 메뉴 목록 */}
        {breadcrumbList && (
          <Script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: breadcrumbList.map((breadcrumb: Breadcrumb) => ({
                  '@type': 'ListItem',
                  position: breadcrumb.position,
                  name: breadcrumb.name,
                  item: breadcrumb.url,
                })),
              }),
            }}
          />
        )}

        {/* 조직 정보 */}
        <Script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteOrganization),
          }}
        />

        {/* 사이트 정보 */}
        <Script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteWebSite),
          }}
        />

        {/* 창립자 정보 */}
        <Script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitePerson),
          }}
        />

        {/* 창립자 정보 */}
        <Script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteNavigation),
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5CQBT9QD'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<MyDocumentProps> => {
  const initialProps = await Document.getInitialProps(ctx);

  // Define breadcrumb list
  const breadcrumbs: { [key: string]: Breadcrumb[] } = {
    '/': [],
    '/menu': [{ position: 1, name: '메뉴', url: mySite.url + '/menu' }],
  };

  const breadcrumbList = breadcrumbs[ctx.pathname] || null;

  return {
    ...initialProps,
    breadcrumbList,
    locale: ctx.locale ?? 'ko',
  };
};

export default MyDocument;
