import React from "react";
import { NextRouter, useRouter } from "next/router";

import { Section, Txt, Spacing, Tab } from "@/lib/widgets/_index";
import { colors, borderRadius, MQ, fontSize } from "@/lib/theme/_index";

import SEO from "@/seo.config";

//
export default function Error() {
  const router: NextRouter = useRouter();

  return (
    <>
      <SEO title="페이지를 찾을 수 없습니다" />
      <Section css={{ justifyContent: "center" }}>
        <Txt as="h4" css={{ [MQ[3]]: { fontSize: fontSize.s26 } }}>
          페이지를 찾을 수 없습니다
        </Txt>
        <Spacing size={12} />
        <Txt as="p" css={{ color: colors.grey500 }}>
          아래 버튼을 통해 이전페이지로 이동하세요
        </Txt>

        <Spacing size={24} />
        <Tab
          css={{
            background: colors.keyColor,
            color: colors.white,
            padding: "14px 30px",
            borderRadius: borderRadius.s700,
          }}
          onClick={() => router.back()}
        >
          뒤로가기
        </Tab>
      </Section>
    </>
  );
}
