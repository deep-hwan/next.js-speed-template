import React, { useState } from 'react';
import { useRouter, NextRouter } from 'next/router';

//libs
import { CheckInput, Padding, Spacing, Txt, TxtSpan, Wrap } from '@/@_ui_libs/_index';
import { colors, borderRadius, fontSize } from '@/libs/themes/_index';

//
interface isValuesProps {
  check1: boolean;
  check2: boolean;
  check3: boolean;
}

//
export default function CheckBoxs({
  isValues,
  handleCheckOnChange,
}: {
  isValues: isValuesProps;
  handleCheckOnChange: (type: 'check1' | 'check2' | 'check3') => void;
}) {
  const router: NextRouter = useRouter();

  //
  /// 약관 체크 : 쿼리 모달
  const modalQueryRouter = (val: string) =>
    router.push(
      {
        query: {
          modal: val,
        },
      },
      undefined,
      { scroll: false },
    );

  return (
    <Padding
      horizontal={12}
      vertical={16}
      margin={{ top: 10 }}
      gap={14}
      backgroundColor={colors.ground100}
      borderRadius={borderRadius.s500}
    >
      {/* ----- 이용약관 ----- */}
      <Wrap>
        <CheckInput label="이용약관 (필수)">
          <CheckInput.CheckBox
            id="이용약관"
            checked={isValues.check1}
            onChange={() => handleCheckOnChange('check1')}
          />
        </CheckInput>

        <Txt size={13} color={colors.grey500} css={{ paddingLeft: '30px' }}>
          서비스 이용약관에 동의합니다.&nbsp;
          <TxtSpan
            size={fontSize.s12}
            color={colors.grey500}
            weight="medium"
            css={{ cursor: 'pointer' }}
            onClick={() => modalQueryRouter('이용약관')}
          >
            (자세히 보기📎)
          </TxtSpan>
        </Txt>
      </Wrap>

      {/* ----- 개인정보 처리방침 ----- */}
      <Wrap>
        <CheckInput label="개인정보 처리방침 (필수)">
          <CheckInput.CheckBox
            id="개인정보처리방침"
            checked={isValues.check2}
            onChange={() => handleCheckOnChange('check2')}
          />
        </CheckInput>

        <Txt size={13} color={colors.grey500} css={{ paddingLeft: '30px' }}>
          개인정보 처리방침에 동의합니다.&nbsp;
          <TxtSpan
            size={fontSize.s12}
            color={colors.grey500}
            weight="medium"
            css={{ cursor: 'pointer' }}
            onClick={() => modalQueryRouter('개인정보처리방침')}
          >
            (자세히 보기📎)
          </TxtSpan>
        </Txt>
      </Wrap>

      {/* ----- 마케팅 수신동의 ----- */}
      <Wrap>
        <CheckInput label="마케팅 수신동의">
          <CheckInput.CheckBox
            id="마케팅 수신동의"
            checked={isValues.check3}
            onClick={() => {
              if (!isValues.check3) {
                modalQueryRouter('마케팅수신동의');
              }
            }}
            onChange={(e) => {
              if (isValues.check3) {
                handleCheckOnChange('check3');
              }
            }}
          />
        </CheckInput>

        <Txt size={13} color={colors.grey500} css={{ paddingLeft: '30px' }}>
          이벤트 및 마케팅 소식을 알려드릴게요
        </Txt>
      </Wrap>
    </Padding>
  );
}
