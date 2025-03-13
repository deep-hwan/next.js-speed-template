import { mySite } from '@/libs/site/site';
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

const MyDocument = ({ breadcrumbList, locale = 'ko' }: MyDocumentProps) => {
  return (
    <Html lang={locale}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />

        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='alternate' type='application/rss+xml' title={mySite.name + ' RSS Feed'} href='/api/rss' />

        {/* >> pwa */}
        {/* <link rel='manifest' href='/manifest.json' /> */}
        {/* <SplashScreens /> */}

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
      </Head>
      <body>
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
    '/contactus': [{ position: 1, name: '문의하기', url: mySite.url + '/contactus' }],
  };

  const breadcrumbList = breadcrumbs[ctx.pathname] || null;

  return {
    ...initialProps,
    breadcrumbList,
    locale: ctx.locale ?? 'ko',
  };
};

export default MyDocument;
