import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Interpolation, Theme } from '@emotion/react';

//libs
import { Column, Section, Txt, Wrap } from '@/lib/widgets/_index';
import { MQ, colors } from '@/lib/theme/_index';

//components
import SEO from '@/seo.config';
import SignUp from '@/lib/components/home/signUp';
import Results from '@/lib/components/home/results';

//
export default function Index() {
  const router: NextRouter = useRouter();

  return (
    <>
      <SEO />
      <Section maxWidth={560}>
        <Column css={theme.container as Interpolation<Theme>}>
          <Wrap gap={16}>
            <Txt as="h1" size={26}>
              {router.query.results
                ? `NEXT.JS 템플릿만의 \n위젯을 경험해봐요`
                : `NEXT.JS 템플릿에 \n오신 것을 환영합니다`}
            </Txt>

            <Txt color={colors.grey800}>
              {router.query.results
                ? `빠르게 트랜디한 UI를 만들어보세요\n당신의 개발 효율이 압도적으로 오를 거에요`
                : `위젯을 조합하여 빠르게 UI를 만들어보세요\nCSS없이 오직 커스텀 위젯만으로도 UI를 만들 수 있어요😄`}
            </Txt>
          </Wrap>

          {router.query.results ? <Results /> : <SignUp />}
        </Column>
      </Section>
    </>
  );
}

// styled
const theme = {
  container: {
    padding: '60px 0 50px',
    rowGap: '40px',

    [MQ[3]]: {
      padding: '30px 20px 50px',
      rowGap: '30px',
    },
  },
};
