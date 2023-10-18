import React, { memo } from 'react';
import Link from 'next/link';

//menu
import menus from '../json/menu.json';

//libs
import { AppDrawer, Item, Items, Txt, Wrap } from '@/@_ui_libs/_index';
import { FlexTheme, PaddingTheme, StyleTheme, ViewportTheme } from '../../@_ui_libs/_theme';
import { MQ, colors } from '../themes/_index';

//assets
import { PathIcon } from '@/libs/assets/icons';

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
              <Item
                key={i}
                padding={{ vertical: 2, horizontal: 14 }}
                css={{ paddingRight: 'calc(env(safe-area-inset-right) + 14px)' }}
                onClick={() => handleCloseDrawer()}
              >
                <Link
                  href={item.path}
                  css={[
                    ViewportTheme({ width: '100%' }),
                    PaddingTheme({ padding: { vertical: 16, horizontal: 10 } }),
                    StyleTheme({ borderRadius: 12 }),
                    FlexTheme({
                      direction: 'horizontal',
                      align: 'center',
                      crossAlign: 'space-between',
                    }),
                    { '&:hover': { backgroundColor: colors.ground100 } },
                  ]}
                >
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
