import React from 'react';

//libs
import { BoxShadow, Item, Items, Txt, TxtSpan, Wrap } from '@/@_ui_libs/_index';
import { colors } from '@/libs/themes/colors';

//
export default function Comp1() {
  return (
    <BoxShadow gap={20} padding={{ vertical: 20, horizontal: 16 }}>
      <Wrap gap={8}>
        <Txt as="h1" size={18}>
          오직 위젯들로만 <br />
          템플릿 UI를 만들었어요
        </Txt>

        <Txt color="#797979" size={14}>
          {'위젯을 조합하여 빠르게 UI를 만들어보세요\nCSS없이 빠르게 UI를 만들 수 있어요😄'}
        </Txt>
      </Wrap>

      <Items direction="horizontal" align="start" wrap="wrap" gap={4} crossGap={6}>
        {[
          '높은 코드 가독성',
          'CSS 불필요',
          '빠른 레이아웃 구현',
          'UI 제작 및 작업 생산성 UP',
          '반응형 UI 위젯',
          '다양한 인풋 제공',
          '네이티브 모달 제공',
          '네이티브 앱의 UI 제공',
          '빠른 렌더링',
          '성능 최적화된 위젯',
          '이미지 최적화',
        ].map((item, i) => (
          <Item
            key={i}
            width="auto"
            padding={{ vertical: 6, horizontal: 8 }}
            border={{ solid: 1, color: colors.grey300 }}
            borderRadius={100}
          >
            <TxtSpan>{item}</TxtSpan>
          </Item>
        ))}
      </Items>
    </BoxShadow>
  );
}
