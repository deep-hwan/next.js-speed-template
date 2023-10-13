import React, { memo } from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//menu
import menus from '../json/menu.json';

//libs
import { AppDrawer, Item, Items, Txt, Wrap } from '@/@ui_widgets_libs/_index';
import { colors } from '@/libs/themes/colors';
import { borderRadius } from '@/libs/themes/size';

//assets
import { PathIcon } from '@/libs/assets/icons';
import { MQ } from '@/libs/themes/mediaQuery';
import { PaddingTheme } from '../themes/_theme';

interface DrawerType {
  isDrawer: boolean;
  handleCloseDrawer: () => void;
}

//
export const Drawer = memo(function Drawer({ isDrawer, handleCloseDrawer }: DrawerType) {
  return (
    <Wrap css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}>
      <AppDrawer view={isDrawer} onCancel={handleCloseDrawer}>
        <Items css={PaddingTheme({ padding: { top: 10, bottom: 50 } })}>
          {menus.map((item, i) => {
            return (
              <Item key={i} css={theme.menu} onClick={() => handleCloseDrawer()}>
                <Link href={item.path} css={theme.menuLink as Interpolation<Theme>}>
                  <Txt>{item.name}</Txt>
                  <PathIcon fill={colors.grey300} />
                </Link>
              </Item>
            );
          })}
        </Items>
      </AppDrawer>
    </Wrap>
  );
});

// styled
const theme = {
  menu: {
    padding: '2px 14px',
    paddingRight: 'calc(env(safe-area-inset-right) + 14px)',
  },

  menuLink: {
    width: '100%',
    padding: '16px 10px',
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.s400,

    '&:hover': {
      backgroundColor: colors.ground100,
    },
  },
};
