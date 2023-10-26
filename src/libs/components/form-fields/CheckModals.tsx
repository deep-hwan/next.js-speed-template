import React from 'react';
import { useRouter, NextRouter } from 'next/router';

//libs
import { BottomSheet, Button, Dialog, Padding, Spacing, Txt } from '@/@_ui_libs/_index';
import { colors } from '@/libs/themes/_index';

//
export default function CheckModals({ dialogOnChange }: { dialogOnChange: () => void }) {
  const router: NextRouter = useRouter();

  return (
    <>
      {/* ----- 모달 : 바텀시트 ----- */}
      <BottomSheet
        view={
          (router.query.modal === '개인정보처리방침' ||
            router.query.modal === '이용약관') as boolean
        }
        onCancel={() => router.push({}, undefined, { scroll: false })}
      >
        <Padding top={20} bottom={40} horizontal={20} gap={20}>
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
          </Txt>
        </Padding>
      </BottomSheet>

      {/* ----- 모달 : 다이아로그 ----- */}
      <Dialog
        view={(router.query.modal === '마케팅수신동의') as boolean}
        onCancel={() => router.push({}, undefined, { scroll: false })}
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
            router.push({}, undefined, { scroll: false });
            dialogOnChange();
          }}
        >
          수신동의
        </Button>
      </Dialog>
    </>
  );
}
