import React from 'react';

//libs
import { BoxShadow, Column, ProfileImage, Row, Txt } from '@/@_ui_libs/_index';
import { colors } from '@/libs/themes/colors';

//
export default function Comp2() {
  return (
    <BoxShadow padding={{ all: 16 }}>
      <Row gap={12} align="center">
        <ProfileImage
          src="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public"
          alt="템플릿"
          size={40}
        />
        <Column gap={3}>
          <Txt as="strong" size={17}>
            위젯 템플릿
          </Txt>
          <Txt size={13} color={colors.grey600}>
            위젯으로 빠른 개발을 경험해봐요 🥰
          </Txt>
        </Column>
      </Row>
    </BoxShadow>
  );
}
