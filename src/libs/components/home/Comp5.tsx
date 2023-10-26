import React from 'react';
import { NextRouter, useRouter } from 'next/router';

//libs
import { Column, Tab, Txt, Wrap } from '@/@_ui_libs/_index';
import { colors } from '@/libs/themes/colors';

//
export default function Comp5() {
  const router: NextRouter = useRouter();

  return (
    <>
      <Column gap={18}>
        <Wrap gap={8}>
          <Txt as="h2" size={18}>
            {'Form 기능을\n빠르게 만들고 싶을땐?'}
          </Txt>
          <Txt color={colors.grey800}>
            {'Form 기능을 만들때\n필요한 인풋들을 다양하게 준비해뒀어요'}
          </Txt>
        </Wrap>

        <Tab
          onClick={() => router.push('/form-fields')}
          colors={{ txt: colors.white, button: colors.keyColor }}
        >
          지금 확인하기
        </Tab>
      </Column>
    </>
  );
}
