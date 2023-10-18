import React from 'react';
import { NextRouter, useRouter } from 'next/router';

import { BottomNavigationBar, NavigationTab } from '@/@_ui_libs/_index';
import { colors } from '@/libs/themes/colors';

import { CopyIcon, HomeIcon, MessageIcon, ProfileIcon, SettingIcon } from '@/libs/assets/icons';

export default function BottomNaviTabBar() {
  const router: NextRouter = useRouter();

  return (
    <BottomNavigationBar maxWidth={600}>
      <NavigationTab
        label="홈"
        href="/"
        css={{
          color: router.pathname === '/' ? colors.keyColor : colors.grey300,
        }}
      >
        <HomeIcon width="100%" fill={router.pathname === '/' ? colors.keyColor : colors.grey300} />
      </NavigationTab>

      <NavigationTab
        label="메시지"
        href="/view"
        css={{
          color: router.pathname === '/view' ? colors.keyColor : colors.grey300,
        }}
      >
        <MessageIcon
          width="100%"
          fill={router.pathname === '/view' ? colors.keyColor : colors.grey300}
        />
      </NavigationTab>

      <NavigationTab
        label="메모"
        href=""
        css={{
          color: router.pathname === '/3' ? colors.keyColor : colors.grey300,
        }}
      >
        <CopyIcon width="100%" fill={router.pathname === '/3' ? colors.keyColor : colors.grey300} />
      </NavigationTab>

      <NavigationTab
        label="프로필"
        href=""
        css={{
          color: router.pathname === '/4' ? colors.keyColor : colors.grey300,
        }}
      >
        <ProfileIcon
          width="100%"
          fill={router.pathname === '/4' ? colors.keyColor : colors.grey300}
        />
      </NavigationTab>

      <NavigationTab
        label="설정"
        href=""
        css={{
          color: router.pathname === '/5' ? colors.keyColor : colors.grey300,
        }}
      >
        <SettingIcon
          width="100%"
          fill={router.pathname === '/5' ? colors.keyColor : colors.grey300}
        />
      </NavigationTab>
    </BottomNavigationBar>
  );
}
