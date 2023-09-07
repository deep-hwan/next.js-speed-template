import React from 'react';
import { NextRouter, useRouter } from 'next/router';

import { BottomNavigationBar, NavigationMenu } from '@/lib/widgets/_index';
import { colors } from '@/lib/theme/colors';

import { CopyIcon, HomeIcon, MessageIcon, ProfileIcon, SettingIcon } from '@/lib/assets/icons';

export default function BottomNaviTabBar() {
  const router: NextRouter = useRouter();

  return (
    <BottomNavigationBar maxWidth={600}>
      <NavigationMenu
        label="홈"
        href="/"
        css={{
          color: router.pathname === '/' ? colors.keyColor : colors.grey300,
        }}
      >
        <HomeIcon width="100%" fill={router.pathname === '/' ? colors.keyColor : colors.grey300} />
      </NavigationMenu>

      <NavigationMenu
        label="메시지"
        href=""
        css={{
          color: router.pathname === '/2' ? colors.keyColor : colors.grey300,
        }}
      >
        <MessageIcon
          width="100%"
          fill={router.pathname === '/2' ? colors.keyColor : colors.grey300}
        />
      </NavigationMenu>

      <NavigationMenu
        label="메모"
        href=""
        css={{
          color: router.pathname === '/3' ? colors.keyColor : colors.grey300,
        }}
      >
        <CopyIcon width="100%" fill={router.pathname === '/3' ? colors.keyColor : colors.grey300} />
      </NavigationMenu>

      <NavigationMenu
        label="다이렉트"
        href=""
        css={{
          color: router.pathname === '/4' ? colors.keyColor : colors.grey300,
        }}
      >
        <ProfileIcon
          width="100%"
          fill={router.pathname === '/4' ? colors.keyColor : colors.grey300}
        />
      </NavigationMenu>

      <NavigationMenu
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
      </NavigationMenu>
    </BottomNavigationBar>
  );
}
