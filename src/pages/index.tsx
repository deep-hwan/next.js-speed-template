import React, { useRef, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { Interpolation, Theme } from "@emotion/react";

//libs
import { Container, Section, Txt, Wrap } from "@/lib/widgets/_index";
import { MQ, fontSize, colors } from "@/lib/theme/_index";

//hooks
import { useRaiseEditor } from "react-raise-editor";

//components
import SEO from "@/seo.config";
import SignUp from "@/lib/components/home/signUp";
import Results from "@/lib/components/home/results";

//
export default function Index() {
  const router: NextRouter = useRouter();
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>("");

  useRaiseEditor({
    state: text,
    ref: textRef,
  });

  return (
    <>
      <SEO />
      <Section css={theme.section as Interpolation<Theme>}>
        <Container css={theme.container as Interpolation<Theme>}>
          <Wrap gap={16}>
            <Txt as="h1" css={theme.appTitle}>
              {router.query.results
                ? `NEXT.JS 템플릿만의 \n위젯을 경험해봐요`
                : `NEXT.JS 템플릿에 \n오신 것을 환영합니다`}
            </Txt>

            <Txt css={theme.appTxt}>
              {router.query.results
                ? `빠르게 트랜디한 UI를 만들어보세요\n당신의 개발 효율이 압도적으로 오를 거에요`
                : `위젯을 조합하여 빠르게 UI를 만들어보세요\nCSS없이 오직 커스텀 위젯만으로도 UI를 만들 수 있어요😄`}
            </Txt>
          </Wrap>

          {router.query.results ? <Results /> : <SignUp />}
        </Container>
      </Section>
    </>
  );
}

// styled
const theme = {
  section: {
    maxWidth: "600px",
  },

  container: {
    padding: "60px 0 50px",
    rowGap: "40px",

    [MQ[3]]: {
      padding: "30px 20px 50px",
      rowGap: "30px",
    },
  },

  appTitle: { fontSize: fontSize.s26 },

  appTxt: { color: colors.grey700 },
};
