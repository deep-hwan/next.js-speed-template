import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//components
import { Drawer } from './Drawer';

//libs
import { MQ } from '@/libs/theme/mediaQuery';
import { borderRadius, fontSize, colors } from '@/libs/theme/_index';
import { AppBar, IconTab, Items, Item, Wrap, Row } from '@/@ui_widgets_libs/_index';

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
        <Row css={theme.container as Interpolation<Theme>}>
          <Link href="/" css={theme.logo as Interpolation<Theme>}>
            <LogoIcon alt="서비스명" width="100%" height="100%" />
          </Link>

          <Items direction="horizontal" gap={30} css={theme.menuItems as Interpolation<Theme>}>
            {menus.map((item, i) => {
              return (
                <Item key={i} css={theme.menuItem}>
                  <Link href={item.path} css={theme.linkItem as Interpolation<Theme>}>
                    {item.name}
                  </Link>
                </Item>
              );
            })}
          </Items>

          <Wrap css={theme.iconBox as Interpolation<Theme>}>
            <IconTab
              onClick={handleActiveDrawer}
              iconSize={26}
              css={theme.iconTab as Interpolation<Theme>}
            >
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
  container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
  },

  logo: {
    width: '100px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [MQ[1]]: {
      width: '84px',
    },
  },

  menuItems: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',

    [MQ[1]]: {
      display: 'none',
    },
  },

  menuItem: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  linkItem: {
    fontSize: fontSize.s15,
    padding: '0.8em',
    '&:hover': {
      backgroundColor: colors.ground100,
      borderRadius: borderRadius.s400,
    },
  },

  iconBox: {
    width: 'auto',
    height: '100%',
    display: 'none',

    [MQ[1]]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  iconTab: {
    [MQ[3]]: {
      width: '24px',
      height: '24px',
    },
  },
};
