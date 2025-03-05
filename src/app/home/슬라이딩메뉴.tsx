import SlideSwitch from '@/@widgets/switch/SlideSwitch';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import WidgetContainer from './_WidgetContainer';

export const 슬라이딩메뉴ed = () => {
  const [checkedMenuId, setCheckedMenuId] = useState<string | number>('1');
  const motionRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <WidgetContainer ref={motionRef} title='슬라이딩 메뉴' description='메뉴 및 카테고리를 선택할 수 있어요' delay={0}>
      <SlideSwitch
        ref={slideRef}
        checkedMenuId={checkedMenuId}
        backgroundColor='#f6f6fa'
        menus={[
          { name: '메뉴1', id: '1', onClick: () => setCheckedMenuId('1') },
          { name: '메뉴2', id: '2', onClick: () => setCheckedMenuId('2') },
          { name: '메뉴3', id: '3', onClick: () => setCheckedMenuId('3') },
        ]}
      />
    </WidgetContainer>
  );
};

const 슬라이딩메뉴 = dynamic(() => Promise.resolve(슬라이딩메뉴ed), { ssr: true, loading: () => <></> });

export { 슬라이딩메뉴 };
