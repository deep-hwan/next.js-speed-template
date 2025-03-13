import Head from 'next/head';
import { useRouter } from 'next/router';
import { menus } from './menus';
import { mySite } from './site';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  imageUrl?: string;
}

export default function SEOHead({
  title = mySite.title,
  description = mySite.description,
  keywords = mySite.keywords,
  author = mySite.author,
  url,
  imageUrl = mySite.imageUrl,
}: SeoHeadProps) {
  const { asPath } = useRouter();
  const thisUrl = `${mySite.url}${asPath}`;
  const siteName = mySite.name;

  // 최신 날짜로 색인
  const currentDate = new Date().toISOString();

  // 1) 조직
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: url ?? thisUrl,
    logo: mySite.logoUrl,
    description: description,
    sameAs: mySite.sameAs,
    foundingDate: mySite.companyInfo.foundingDate,
    founder: mySite.founderInfo.name,
    areaServed: 'KR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: mySite.address.streetAddress,
      addressLocality: mySite.address.addressLocality,
      addressRegion: mySite.address.addressRegion,
      postalCode: mySite.address.postalCode,
      addressCountry: mySite.address.addressCountry,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: mySite.contactPoint.tel,
        contactType: mySite.contactPoint.contactType,
        contactOption: mySite.contactPoint.contactOption,
        areaServed: mySite.contactPoint.areaServed,
        availableLanguage: mySite.contactPoint.availableLanguage,
      },
    ],
  };

  // 4) Person (창립자/대표)
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: mySite.founderInfo.name,
    jobTitle: mySite.founderInfo.jobTitle,
    email: mySite.founderInfo.email,
    telephone: mySite.founderInfo.tel,
    image: mySite.founderInfo.image,
    description: mySite.founderInfo.description,
    sameAs: mySite.founderInfo.sameAs,
    worksFor: {
      '@type': 'Organization',
      name: siteName,
      legalName: mySite.companyInfo.legalName,
      taxID: mySite.companyInfo.taxID,
    },
    url: url ?? thisUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: mySite.address.streetAddress,
      addressLocality: mySite.address.addressLocality,
      addressRegion: mySite.address.addressRegion,
      postalCode: mySite.address.postalCode,
      addressCountry: mySite.address.addressCountry,
    },
    alumniOf: mySite.founderInfo.alumniOf.map(edu => ({
      '@type': 'EducationalOrganization',
      name: edu.name,
      department: edu.department,
    })),
  };

  // 2) WebSite + SearchAction (Sitelinks Search Box)
  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: url ?? thisUrl,
    name: siteName,
    alternateName: ['Dble', 'Dble Agency', title],
    description: description,
    inLanguage: 'ko',
    keywords: keywords.join(', '),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${mySite.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    mainEntity: menus.map(menu => ({
      '@type': 'SiteNavigationElement',
      name: menu.name,
      url: `${mySite.url}${menu.url}`,
    })),
  };

  // 3) SiteNavigationElement (주요 메뉴)
  const navigationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: menus.map((menu, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: menu.name,
      url: `${mySite.url}${menu.url}`,
    })),
  };

  // 5) NewsArticle
  const newsArticleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    datePublished: currentDate,
    dateModified: currentDate,
  };

  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name='application-name' content={siteName} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      <meta name='generator' content='Next.js' />
      <meta name='creator' content={author} />
      <meta name='publisher' content={author} />
      <meta name='author' content={author} />
      <link rel='author' href={url ?? thisUrl} />
      <meta name='color-scheme' content='light' />

      {/* Canonical URL */}
      <link rel='canonical' href={url ?? thisUrl} />

      {/* Open Graph */}
      <meta property='og:site_name' content={siteName} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={siteName} />
      <meta property='og:url' content={url ?? thisUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ko_KR' />
      {/* <meta property='og:video' content='https://nextjs.org/video.mp4' />
      <meta property='og:video:width' content='800' />
      <meta property='og:video:height' content='600' />
      <meta property='og:audio' content='https://nextjs.org/audio.mp3' /> */}

      {/* Twitter */}
      <meta name='twitter:creator' content='@dble' />
      <meta name='twitter:creator:id' content='1467726470533754880' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='app' />
      <meta name='twitter:image' content={imageUrl} />
      <meta name='twitter:image:alt' content={title} />
      <meta name='twitter:app:name:iphone' content='twitter_app' />
      <meta name='twitter:app:id:iphone' content='twitter_app://iphone' />
      <meta name='twitter:app:id:ipad' content='twitter_app://ipad' />
      <meta name='twitter:app:id:googleplay' content='twitter_app://googleplay' />
      <meta name='twitter:app:url:iphone' content={thisUrl} />
      <meta name='twitter:app:url:ipad' content={thisUrl} />
      <meta name='twitter:app:name:ipad' content='twitter_app' />
      <meta name='twitter:app:name:googleplay' content='twitter_app' />

      {/* verification */}
      <meta name='google-site-verification' content='google' />

      {/* appLinks */}
      <meta property='al:web:url' content={mySite.url} />
      <meta property='al:web:should_fallback' content='true' />
      {/* <meta property='al:ios:url' content='https://nextjs.org/ios' />
      <meta property='al:ios:app_store_id' content='app_store_id' />
      <meta property='al:android:package' content='com.example.android/package' />
      <meta property='al:android:app_name' content='app_name_android' /> */}

      {/* JSON-LD (Organization) */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      {/* JSON-LD (WebSite) */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteJsonLd),
        }}
      />

      {/* JSON-LD (SiteNavigationElement) */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationJsonLd),
        }}
      />

      {/* JSON-LD (Person) */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />

      {/* JSON-LD (NewsArticle) */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsArticleJsonLd),
        }}
      />
    </Head>
  );
}
