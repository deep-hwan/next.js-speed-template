import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

//assets
import { WidgetsImg } from '@/lib/assets/images';

//libs
import { borderRadius, skeletonURL } from '@/lib/theme/_index';
import { Button } from '@/lib/widgets/_index';

export default function Results() {
  const router: NextRouter = useRouter();

  return (
    <>
      <Image
        src={WidgetsImg}
        alt="위젯 이미지"
        placeholder="blur"
        loading="lazy"
        width={800}
        height={800}
        css={{ width: '100%', height: 'auto', borderRadius: borderRadius.s400 }}
        blurDataURL={skeletonURL}
      />

      <Button onClick={() => router.push('/')}>확인하기</Button>
    </>
  );
}
