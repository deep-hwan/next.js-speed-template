/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//components
import { Drawer } from './Drawer';

//libs
import { AppBar, IconTab, Items, Item, Wrap, Row } from '@/@_ui_libs/_index';
import { borderRadius, fontSize, colors, MQ } from '@/libs/themes/_index';

//assets
import { LogoIcon, ToastIcon } from '@/libs/assets/icons';

//menu
import menus from '../json/menu.json';

//
export default function Header() {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const handleActiveDrawer = useCallback(() => setIsDrawer(!isDrawer), [isDrawer]);
  const handleCloseDrawer = useCallback(() => setIsDrawer(false), [isDrawer]);

  return (
    <>
      <AppBar width={1200}>
        <Row align="center" height="100%" crossAlign="space-between" padding={{ horizontal: 20 }}>
          <Link href="/" css={theme.logo as Interpolation<Theme>}>
            <Logo />
          </Link>

          <Items
            direction="horizontal"
            width="auto"
            gap={30}
            align="center"
            crossAlign="center"
            css={{ [MQ[1]]: { display: 'none' } }}
          >
            {menus.map((item, i) => {
              return (
                <Item key={i} width="auto" align="center" crossAlign="center">
                  <Link href={item.path} css={theme.linkItem as Interpolation<Theme>}>
                    {item.name}
                  </Link>
                </Item>
              );
            })}
          </Items>

          <Wrap
            width="auto"
            height="100%"
            align="center"
            crossAlign="center"
            css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}
          >
            <IconTab onClick={handleActiveDrawer} iconSize={24}>
              <ToastIcon fill="#555" width="100%" height="100%" />
            </IconTab>
          </Wrap>
        </Row>
      </AppBar>

      {/* 드로어 메뉴 */}
      <Drawer isDrawer={isDrawer} handleCloseDrawer={handleCloseDrawer} />
    </>
  );
}

// styled
const theme = {
  logo: {
    width: '34px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [MQ[1]]: {
      width: '28px',
    },
  },

  linkItem: {
    fontSize: fontSize.s15,
    padding: '0.8em',
    '&:hover': {
      backgroundColor: colors.ground100,
      borderRadius: borderRadius.s400,
    },
  },
};

const Logo = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 371 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M120 0H50C22.3858 0 0 22.3858 0 50V80C0 107.614 22.3858 130 50 130H120C147.614 130 170 107.614 170 80V50C170 22.3858 147.614 0 120 0Z"
        fill="#9FC5FF"
      />
      <path
        d="M115 140H55C24.6243 140 0 164.624 0 195V315C0 345.376 24.6243 370 55 370H115C145.376 370 170 345.376 170 315V195C170 164.624 145.376 140 115 140Z"
        fill="#BAD4FF"
      />
      <path
        d="M316 0H246C215.624 0 191 24.6243 191 55V125C191 155.376 215.624 180 246 180H316C346.376 180 371 155.376 371 125V55C371 24.6243 346.376 0 316 0Z"
        fill="#BAD4FF"
      />
      <path
        d="M316 190H246C215.624 190 191 214.624 191 245V315C191 345.376 215.624 370 246 370H316C346.376 370 371 345.376 371 315V245C371 214.624 346.376 190 316 190Z"
        fill="#4788f4"
      />
    </svg>
  );
};
