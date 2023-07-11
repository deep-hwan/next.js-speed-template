import { NextSeo } from "next-seo";
import Head from "next/head";

function SEO({ title }) {
  return (
    <NextSeo
      title={`${title}\t${
        title && "|"
      }\t 성장을 기록하는 개발자의 일기 개발자 블로그`}
      description="개발자 블로그 - 성장을 기록하다 개발자의 개발 일지"
      keywords={[
        "성장하는 개발자",
        "개발자 정재환",
        "개발자 이력서",
        "개발 기록",
        "개발 일지",
        "개발 일기",
        "이력서",
        "개발자 블로그",
        "블로그",
        "개발자 포트폴리오",
        "포트폴리오",
        "프론트앤드",
        "백앤드",
        "Front-end",
        "풀스택개발자",
        "디자이너",
        "디자이너 포트폴리오",
        "UIUX",
        "Next.js",
        "리엑트",
        "React.js",
        "TypeScript",
        "Velog",
        "티스토리",
        "비핸스",
      ]}
      canonical="https://www.developerdiary.kr/"
      icon="../public/favicon.ico"
      openGraph={{
        type: "website",
        url: "https://www.developerdiary.kr/",
        site_name: "성장을 기록하는 개발자의 일기 개발자 블로그",
        title: "성장을 기록하는 개발자의 일기 개발자 블로그",
        description: "개발자 블로그 - 성장을 기록하다 개발자의 개발 일지",
        images: [
          {
            url: "https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/5196dc6f-de21-46f4-ee66-b02d7dd0e600/public",
            alt: "성장을 기록하는 개발자의 일기 개발자 블로그",
          },
        ],
      }}
    />
  );
}

export default SEO;
