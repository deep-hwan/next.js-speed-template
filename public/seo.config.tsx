import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string | any;
}

function SEO({ title, description, image }: SEOProps) {
  return (
    <NextSeo
      title={
        title
          ? `${title} | Next.js 템플릿에 오신 것을 환영합니다`
          : 'Next.js 템플릿에 오신 것을 환영합니다'
      } // 50~60자 이하
      description={description ? description : 'Next.js 템플릿에 오신 것을 환영합니다'} // 50~160자 이하
      canonical="https://next-typescript-tamplate.vercel.app/"
      openGraph={{
        type: 'website',
        locale: 'ko_KR',
        url: 'https://next-typescript-tamplate.vercel.app/',
        title: title
          ? `${title} | Next.js 템플릿에 오신 것을 환영합니다`
          : 'Next.js 템플릿에 오신 것을 환영합니다',
        description: description ? description : 'Next.js 템플릿에 오신 것을 환영합니다',
        site_name: '템플릿 사이트명',
        images: [
          {
            url: image
              ? image
              : 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public',
            alt: '템플릿 오픈url 사이트 디스크립션',
          },
        ], // 16:9 , 1200px 이하
      }}
      twitter={{
        cardType: 'summary_large_image', //4096x4096 이하 2:1
        handle: '@사이트명',
        site: 'https://next-typescript-tamplate.vercel.app/',
      }}
    />
  );
}

export default SEO;
