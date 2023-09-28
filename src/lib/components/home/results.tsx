import React from 'react';
import { NextRouter, useRouter } from 'next/router';

//assets
import { WidgetsImg } from '@/lib/assets/images';

//libs
import { Button, Img } from '@/lib/widgets/_index';

export default function Results() {
  const router: NextRouter = useRouter();

  return (
    <>
      <Img src={WidgetsImg} alt="위젯 이미지" size={{ width: '100%', maxHeight: 400 }} />

      <Button onClick={() => router.push('/')}>확인하기</Button>
    </>
  );
}
