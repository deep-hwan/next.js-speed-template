import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {
  title?: string;
  image?: string;
}

function SEO({ title, image }: SEOProps) {
  return (
    <NextSeo
      title={title ? `${title} | 템플릿 타이틀` : "템플릿 타이틀"}
      description="템플릿 디스크립션"
      canonical="https://www.developerdiary.kr/"
      openGraph={{
        type: "website",
        locale: "en_KR",
        url: "https://www.developerdiary.kr/",
        title: "템플릿 타이틀",
        description: "템플릿 디스크립션",
        site_name: "템플릿 사이트명",
        images: [
          {
            url: image
              ? image
              : "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/5196dc6f-de21-46f4-ee66-b02d7dd0e600/public",
            alt: "템플릿 오픈url 사이트 디스크립션",
          },
        ],
      }}
    />
  );
}

export default SEO;
