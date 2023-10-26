import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { useRouter, NextRouter } from 'next/router';

//hooks
import { useRaiseEditor } from 'react-raise-editor';

//libs
import { Button, Column, Form, Input, LoadingLayer, Row, Tab, Wrap } from '@/@_ui_libs/_index';

//utils
import { moment } from '@/libs/utils/moment';

//components
import CheckBoxs from './CheckBoxs';
import CheckModals from './CheckModals';
import { colors } from '@/libs/themes/colors';

//
interface isValuesProps {
  name: string;
  tel: string;
  email: string;
  price: string;
  date: Date | string;
  context: string;
  check1: boolean;
  check2: boolean;
  check3: boolean;
}

//
export default function Fields() {
  const router: NextRouter = useRouter();
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isType, setIsType] = useState<'default' | 'box'>('box');

  const [isValues, setIsValues] = useState<isValuesProps>({
    name: '',
    tel: '',
    email: '',
    price: '',
    date: new Date(),
    context: '',
    check1: false,
    check2: false,
    check3: false,
  });

  // 이메일 정규식
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  //
  /// 입력 핸들러
  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIsValues({ ...isValues, [name]: value });
  };

  //
  /// 인풋 핸들러
  const handleCheckOnChange = (type: 'check1' | 'check2' | 'check3') => {
    if (type === 'check1') setIsValues({ ...isValues, check1: !isValues.check1 });
    if (type === 'check2') setIsValues({ ...isValues, check2: !isValues.check2 });
    if (type === 'check3') setIsValues({ ...isValues, check3: false });
  };

  //
  /// 문의하기 : 에디터
  useRaiseEditor({
    state: isValues.context,
    ref: textRef,
  });

  //
  /// 제출하기
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push({ query: { results: true } });
    }, 1500);
  };

  return (
    <>
      {isLoading && <LoadingLayer />}

      <Column gap={22}>
        <Row gap={10}>
          <Tab
            onClick={() => setIsType('default')}
            txtSize={13}
            colors={{
              button: isType === 'default' ? colors.keyColor : colors.grey200,
              txt: isType === 'default' ? colors.white : colors.grey600,
            }}
          >
            인풋 기본타입
          </Tab>
          <Tab
            txtSize={13}
            colors={{
              button: isType === 'box' ? colors.keyColor : colors.grey200,
              txt: isType === 'box' ? colors.white : colors.grey600,
            }}
            onClick={() => setIsType('box')}
          >
            인풋 박스타입
          </Tab>
        </Row>

        <Form gap={24} onSubmit={handleOnSubmit}>
          {/* ----- 이름 텍스트 타입 인풋 : TextField ----- */}
          <Input label="이름" labelEdge="(필수)">
            <Input.TextField
              shape={isType}
              placeholder="이름을 입력하세요"
              type="text"
              name="name"
              value={isValues.name}
              onChange={handleOnChange}
            />
          </Input>

          {/* ----- 연락처 타입 인풋 : PhoneNumberField ----- */}
          <Input label="연락처" labelEdge="(필수)">
            <Input.PhoneNumberField
              shape={isType}
              placeholder="연락처를 입력하세요"
              value={isValues.tel}
              onChange={handleOnChange}
            />
          </Input>

          {/* ----- 이메일 텍스트 타입 인풋 : PhoneNumberField ----- */}
          <Input label="이메일" labelEdge="(필수)">
            <Input.TextField
              shape={isType}
              placeholder="이메일을 입력하세요"
              type="text"
              name="email"
              value={isValues.email}
              onChange={handleOnChange}
              error={!!isValues.email && !emailRegex.test(isValues.email)}
              errorMsg="이메일 형식으로 입력하세요"
            />
          </Input>

          {/* ----- 가격 넘버릭 타입 인풋 : NumericField ----- */}
          <Input label="가격">
            <Input.NumericField
              shape={isType}
              placeholder="가격을 입력하세요"
              name="price"
              value={isValues.price}
              onChange={handleOnChange}
              edge="원"
            />
          </Input>

          {/* ----- 텍스트 인풋 + 켈렌더 : 날짜 선택 ----- */}
          <Input label="날짜">
            <Input.DateField
              shape={isType}
              placeholder="날짜를 선택하세요"
              value={moment(isValues.date)}
              onChange={(date: any) => setIsValues({ ...isValues, date: date })}
            />
          </Input>

          {/* ----- 에디터 타입 인풋 : Textarea ----- */}
          <Input label="내용" labelEdge="(필수)">
            <Input.Textarea
              shape={isType}
              placeholder="내용을 입력하세요"
              name="context"
              value={isValues.context}
              ref={textRef}
              onChange={handleOnChange}
              tolTip="문의 내용을 자유룝게 작성해주세요"
            />
          </Input>

          {/* ----- 체크박스 ----- */}
          <CheckBoxs isValues={isValues} handleCheckOnChange={handleCheckOnChange} />

          <Button
            maxWidth={520}
            bottomFixed
            type="submit"
            disabled={
              !(
                isValues.name &&
                isValues.email &&
                isValues.tel &&
                isValues.context &&
                isValues.check1 &&
                isValues.check2
              )
            }
          >
            제출
          </Button>
        </Form>
      </Column>

      {/* ----- 체크박스 모달 ----- */}
      <CheckModals dialogOnChange={() => setIsValues({ ...isValues, check3: true })} />
    </>
  );
}
