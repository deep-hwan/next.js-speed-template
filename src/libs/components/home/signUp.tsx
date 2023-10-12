import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import { useRouter, NextRouter } from 'next/router';

//hooks
import { useRaiseEditor } from 'react-raise-editor';

//libs
import {
  BottomSheet,
  Button,
  CalenderModal,
  CheckInput,
  Column,
  Dialog,
  Form,
  Input,
  LoadingLayer,
  Padding,
  Select,
  Spacing,
  Txt,
  TxtSpan,
} from '@/@ui_widgets_libs/_index';
import { colors, borderRadius, fontSize } from '@/libs/theme/_index';

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
export default function SignUp() {
  const router: NextRouter = useRouter();
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<string>('');

  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const dd = String(date.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
  };

  const [isValues, setIsValues] = useState<isValuesProps>({
    name: '',
    tel: '',
    email: '',
    price: '',
    date: formatDate(new Date()),
    context: '',
    check1: false,
    check2: false,
    check3: false,
  });
  const { name, tel, email, price, date, context, check1, check2, check3 } = isValues;

  //
  /// 입력 핸들러
  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIsValues({ ...isValues, [name]: value });
  };

  //
  /// 문의하기 : 에디터
  useRaiseEditor({
    state: context,
    ref: textRef,
  });

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

  //
  /// 제출하기
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    router.push({ query: { results: true } });
    setTimeout(() => {
      setIsLoading(false);
      router.push({ query: { results: true } });
    }, 2000);
  };

  return (
    <>
      {isLoading && <LoadingLayer />}

      <Form gap={24} onSubmit={handleOnSubmit}>
        {/* ----- 검색 타입 인풋 : TextField ----- */}
        <Input label="검색">
          <Input.SearchField
            shape="box"
            value={isSearch}
            onChange={(e) => setIsSearch(e.target.value)}
            searchTab={true}
            onClick={() => router.push({ query: isSearch })}
          />
        </Input>

        {/* ----- 이름 텍스트 타입 인풋 : TextField ----- */}
        <Input label="이름">
          <Input.TextField
            shape="box"
            placeholder="이름을 입력하세요"
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
          />
        </Input>

        {/* ----- 연락처 타입 인풋 : PhoneNumberField ----- */}
        <Input label="연락처">
          <Input.PhoneNumberField
            shape="box"
            placeholder="연락처를 입력하세요"
            value={tel}
            onChange={handleOnChange}
          />
        </Input>

        {/* ----- 이메일 텍스트 타입 인풋 : PhoneNumberField ----- */}
        <Input label="이메일">
          <Input.TextField
            shape="box"
            placeholder="이메일을 입력하세요"
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </Input>

        {/* ----- 가격 넘버릭 타입 인풋 : NumericField ----- */}
        <Input label="가격">
          <Input.NumericField
            shape="box"
            placeholder="가격을 입력하세요"
            name="price"
            value={price}
            onChange={handleOnChange}
            edge="원"
          />
        </Input>

        {/* ----- 텍스트 인풋 + 켈렌더 : 날짜 선택 ----- */}
        <Input label="날짜">
          <Input.TextField
            shape="box"
            placeholder="날짜를 선택하세요"
            value={date as string}
            onClick={() => setIsCalenderOpen(true)}
          />
        </Input>

        {/* ----- 에디터 타입 인풋 : Textarea ----- */}
        <Input label="내용">
          <Input.Textarea
            shape="box"
            placeholder="내용을 입력하세요"
            name="context"
            value={context}
            ref={textRef}
            onChange={handleOnChange}
            tolTip="문의 내용을 자유룝게 작성해주세요"
          />
        </Input>

        {/* ----- 체크박스 ----- */}
        <Padding
          horizontal={12}
          vertical={16}
          margin={{ top: 10 }}
          backgroundColor={colors.ground100}
          borderRadius={borderRadius.s500}
        >
          <CheckInput label="이용약관">
            <CheckInput.CheckBox
              id="이용약관"
              checked={check1}
              onChange={(e) => setIsValues({ ...isValues, check1: !check1 })}
            />
          </CheckInput>

          <Txt size={13} color={colors.grey500} css={{ paddingLeft: '30px' }}>
            서비스 이용약관에 동의합니다.&nbsp;
            <TxtSpan css={theme.infoTab} onClick={() => modalQueryRouter('이용약관')}>
              (자세히 보기📎)
            </TxtSpan>
          </Txt>

          <Spacing size={16} />

          <CheckInput label="개인정보 처리방침">
            <CheckInput.CheckBox
              id="개인정보처리방침"
              checked={check2}
              onChange={(e) => setIsValues({ ...isValues, check2: !check2 })}
            />
          </CheckInput>

          <Txt size={13} color={colors.grey500} css={{ paddingLeft: '30px' }}>
            개인정보 처리방침에 동의합니다.&nbsp;
            <TxtSpan css={theme.infoTab} onClick={() => modalQueryRouter('개인정보 처리방침')}>
              (자세히 보기📎)
            </TxtSpan>
          </Txt>

          <Spacing size={16} />

          <CheckInput label="마케팅 수신동의">
            <CheckInput.CheckBox
              id="마케팅 수신동의"
              checked={check3}
              onClick={() => {
                if (!check3) {
                  setIsDialogOpen(true);
                }
              }}
              onChange={(e) => {
                if (check3) {
                  setIsValues({ ...isValues, check3: false });
                }
              }}
            />
          </CheckInput>

          <Txt size={13} color={colors.grey500} css={{ paddingLeft: '30px' }}>
            이벤트 및 마케팅 소식을 알려드릴게요
          </Txt>
        </Padding>

        <Button
          type="submit"
          css={{ width: '100%' }}
          disabled={(name && email && context) === '' || !check1 || !check2}
        >
          제출
        </Button>
      </Form>

      {/* ----- 모달 : 바텀시트 ----- */}
      <BottomSheet
        view={!!router.query.modal}
        onCancel={() => router.push({}, undefined, { scroll: false })}
      >
        <Padding safeArea top={20} bottom={40} horizontal={20} gap={20}>
          <Txt as="h6">{router.query.modal}</Txt>
          <Txt>
            테스트 은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와
            관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
            처리방침을 수립·공개합니다. 해당 개인정보처리방침은 서비스 이용 가입시 적용됩니다. 제1조
            (개인정보의 처리 목적) 테스트(Test) 이용약관 은(는) 다음의 목적을 위하여 개인정보를
            처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용
            목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다. 1. 홈페이지 회원가입 및 관리 : 회원 가입의사 확인 목적으로
            개인정보를 처리합니다. 2. 의뢰 및 채용 공고 : 게시한 공고가 신용이 있는지에 대한 확인
            목적으로 개인정보를 처리합니다. 3. “테스트(Test)”은 소셜 SNS (카카오톡 , 구글) 회원 가입
            방식을 취급하고 있으며, 이에 대해 제공받는 정보는 해당 소셜SNS에 대한 개인정보인 이메일,
            쿠키 만 제공받고 있으며 이에 대해 서비스 유지를 위해 개인정보를 처리합니다.
            제2조(개인정보의 처리 및 보유 기간) ① 테스트(Test) 이용약관 은(는) 법령에 따른 개인정보
            보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간
            내에서 개인정보를 처리·보유합니다. ② 각각의 개인정보 처리 및 보유 기간은 다음과
            같습니다. - 서비스 회원가입 및 관리 와 관련한 개인정보는 수집.이용에 관한 동의일로부터
            10년 까지 위 이용목적을 위하여 보유.이용됩니다. - 보유근거 : 서비스 이용 및 제공을 위해
            개인정보를 보유하게 됩니다. - 관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 :
            관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
            처리방침을 수립·공개합니다. 해당 개인정보처리방침은 서비스 이용 가입시 적용됩니다. 제1조
            (개인정보의 처리 목적) 테스트(Test) 이용약관 은(는) 다음의 목적을 위하여 개인정보를
            처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용
            목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다. 1. 홈페이지 회원가입 및 관리 : 회원 가입의사 확인 목적으로
            개인정보를 처리합니다. 2. 의뢰 및 채용 공고 : 게시한 공고가 신용이 있는지에 대한 확인
            목적으로 개인정보를 처리합니다. 3. “테스트(Test)”은 소셜 SNS (카카오톡 , 구글) 회원 가입
            방식을 취급하고 있으며, 이에 대해 제공받는 정보는 해당 소셜SNS에 대한 개인정보인 이메일,
            쿠키 만 제공받고 있으며 이에 대해 서비스 유지를 위해 개인정보를 처리합니다.
            제2조(개인정보의 처리 및 보유 기간) ① 테스트(Test) 이용약관 은(는) 법령에 따른 개인정보
            보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간
            내에서 개인정보를 처리·보유합니다. ② 각각의 개인정보 처리 및 보유 기간은 다음과
            같습니다. - 서비스 회원가입 및 관리 와 관련한 개인정보는 수집.이용에 관한 관련한 고충을
            신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
            수립·공개합니다. 해당 개인정보처리방침은 서비스 이용 가입시 적용됩니다. 제1조
            (개인정보의 처리 목적) 테스트(Test) 이용약관 은(는) 다음의 목적을 위하여 개인정보를
            처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용
            목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한
            조치를 이행할 예정입니다. 1. 홈페이지 회원가입 및 관리 : 회원 가입의사 확인 목적으로
            개인정보를 처리합니다. 2. 의뢰 및 채용 공고 : 게시한 공고가 신용이 있는지에 대한 확인
            목적으로 개인정보를 처리합니다. 3. “테스트(Test)”은 소셜 SNS (카카오톡 , 구글) 회원 가입
            방식을 취급하고 있으며, 이에 대해 제공받는 정보는 해당 소셜SNS에 대한 개인정보인 이메일,
            쿠키 만 제공받고 있으며 이에 대해 서비스 유지를 위해 개인정보를 처리합니다.
            제2조(개인정보의 처리 및 보유 기간) ① 테스트(Test) 이용약관 은(는) 법령에 따른 개인정보
            보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간
            내에서 개인정보를 처리·보유합니다. ② 각각의 개인정보 처리 및 보유 기간은 다음과
            같습니다. - 서비스 회원가입 및 관리 와 관련한 개인정보는 수집.이용에 관한 3년
          </Txt>
        </Padding>
      </BottomSheet>

      {/* ----- 모달 : 다이아로그 ----- */}
      <Dialog
        view={isDialogOpen}
        onCancel={() => setIsDialogOpen(false)}
        css={{ maxWidth: '360px' }}
      >
        <Txt as="h6">{`마케팅 수신동의를\n하시겠어요?`}</Txt>
        <Spacing size={10} />
        <Txt
          css={{ color: colors.grey600 }}
        >{`이벤트 및 다양한 소식을 꾸준히 알려드릴게요\n아래의 동의버튼을 눌러주세요!`}</Txt>

        <Spacing size={24} />
        <Button
          type="button"
          onClick={() => {
            setIsDialogOpen(false);
            setIsValues({ ...isValues, check3: true });
          }}
        >
          수신동의
        </Button>
      </Dialog>

      {/* ----- 모달 : 켈렌더 모달 ----- */}
      <CalenderModal
        view={isCalenderOpen}
        onCancel={() => setIsCalenderOpen(false)}
        value={date}
        onChange={(date: any) => {
          setIsValues({ ...isValues, date: formatDate(date) });
          setIsCalenderOpen(false);
        }}
      />
    </>
  );
}

//
const theme = {
  checkBox: {
    marginTop: '10px',
    backgroundColor: colors.ground100,
    borderRadius: borderRadius.s500,
  },
  //
  infoTab: {
    fontSize: fontSize.s12,
    color: colors.grey500,
    fontWeight: 500,
    cursor: 'pointer',
  },
};
