import React, { memo } from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//menu
import menus from '../json/menu.json';

//libs
import { AppDrawer, Container, Item, Items, Txt } from '@/lib/widgets/_index';
import { colors } from '@/lib/theme/colors';
import { borderRadius } from '@/lib/theme/size';

//assets
import { PathIcon } from '@/lib/assets/icons';
import { MQ } from '@/lib/theme/mediaQuery';

interface DrawerType {
  isDrawer: boolean;
  handleCloseDrawer: () => void;
}

//
export const Drawer = memo(function Drawer({ isDrawer, handleCloseDrawer }: DrawerType) {
  return (
    <Container css={theme.appContainer}>
      <AppDrawer view={isDrawer} onCancel={handleCloseDrawer}>
        <Items css={theme.menus}>
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
    </Container>
  );
});

// styled
const theme = {
  appContainer: {
    display: 'none',
    [MQ[1]]: {
      display: 'flex',
    },
  },

  menus: {
    paddingTop: '10px',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 50px)',
  },

  menu: {
    padding: '2px 14px',
  },

  menuLink: {
    width: '100%',
    padding: '16px 10px',
    paddingLeft: '10px',
    // paddingRight: "calc(env(safe-area-inset-right) + 10px)",
    // paddingLeft: "calc(env(safe-area-inset-left) + 10px)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.s400,

    '&:hover': {
      backgroundColor: colors.ground100,
    },
  },
};
