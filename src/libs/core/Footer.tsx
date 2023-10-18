import React from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

// json
import menus from '../json/menu.json';

//libs
import { MQ, fontSize, colors } from '@/libs/themes/_index';
import { Column, Item, Items, Spacing, Txt, Wrap } from '@/@_ui_libs/_index';

//
interface MenuItem {
  name: string;
  path: string;
}

//
export default function Footer() {
  const menusLust: MenuItem[] = menus;

  return (
    <footer css={theme.footer}>
      <Column maxWidth={1080}>
        <Items direction="horizontal" css={theme.items as Interpolation<Theme>}>
          {menusLust?.map((item: MenuItem, i: number) => (
            <Item key={i} css={theme.item}>
              <Link href={item.path} css={theme.link}>
                {item.name}
              </Link>
            </Item>
          ))}
        </Items>

        <Spacing size={32} />

        <Wrap>
          <Txt css={theme.title}>딥팩토리 디자인</Txt>

          <Spacing size={14} />

          <Txt css={theme.txt}>이메일 : deep@deepcomu.com | 연락처 : 0507-0178-1277</Txt>
          <Spacing size={4} />

          <Txt css={theme.txt}>주소 : 서울특별시 영등포구 영중로 15 타임스퀘어 오피스A동 20층</Txt>
          <Spacing size={4} />

          <Txt css={theme.txt}>
            사업자등록번호 : 110-412-598896 | 통신판매등록번호 : 2023-서울영등포-0900호
          </Txt>
        </Wrap>
      </Column>
    </footer>
  );
}

const theme = {
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.grey000,
    padding: '40px 20px 50px',
  },

  items: {
    columnGap: '26px',
    [MQ[3]]: {
      flexDirection: 'column',
      rowGap: '16px',
    },
  },

  item: { width: 'auto', padding: '5px 0' },

  link: { fontSize: fontSize.s14, color: colors.grey700 },

  title: { fontWeight: '500', color: colors.grey800 },

  txt: {
    fontSize: fontSize.s13,
    color: colors.grey500,
  },
};
