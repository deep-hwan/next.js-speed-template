import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {
  title?: string;
  image?: string;
}

function SEO({ title, image }: SEOProps) {
  return (
    <NextSeo
      title={
        title
          ? `${title} | Next.js 템플릿에 오신 것을 환영합니다`
          : "Next.js 템플릿에 오신 것을 환영합니다"
      } // 50~60자 이하
      description="Next.js 템플릿에 오신 것을 환영합니다" // 50~160자 이하
      canonical="https://www.deepfactory.kr/"
      openGraph={{
        type: "website",
        locale: "en_KR",
        url: "https://www.deepfactory.kr/",
        title: "Next.js 템플릿에 오신 것을 환영합니다",
        description: "Next.js 템플릿에 오신 것을 환영합니다",
        site_name: "템플릿 사이트명",
        images: [
          {
            url: image
              ? image
              : "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/5196dc6f-de21-46f4-ee66-b02d7dd0e600/public",
            alt: "템플릿 오픈url 사이트 디스크립션",
          },
        ], // 16:9 , 1200px 이하
      }}
      twitter={{
        cardType: "summary_large_image", //4096x4096 이하 2:1
        handle: "@사이트명",
        site: "https://www.deepfactory.kr/",
      }}
    />
  );
}

export default SEO;
