import React from "react";

import { BottomNavigationBar, NavigationMenu } from "@/lib/widgets/_index";
import { colors } from "@/lib/theme/colors";

import {
  CopyIcon,
  HomeIcon,
  MessageIcon,
  ProfileIcon,
  SettingIcon,
} from "@/lib/assets/icons";

export function BottomNavBar() {
  return (
    <BottomNavigationBar maxWidth={600}>
      <NavigationMenu label="홈" href="" css={{ color: colors.grey300 }}>
        <HomeIcon width="100%" fill={colors.grey300} />
      </NavigationMenu>

      <NavigationMenu label="메시지" href="" css={{ color: colors.grey300 }}>
        <MessageIcon width="100%" fill={colors.grey300} />
      </NavigationMenu>

      <NavigationMenu label="메모" href="" css={{ color: colors.grey300 }}>
        <CopyIcon width="100%" fill={colors.grey300} />
      </NavigationMenu>

      <NavigationMenu label="다이렉트" href="" css={{ color: colors.grey300 }}>
        <ProfileIcon width="100%" fill={colors.grey300} />
      </NavigationMenu>

      <NavigationMenu label="설정" href="" css={{ color: colors.grey300 }}>
        <SettingIcon width="100%" fill={colors.grey300} />
      </NavigationMenu>
    </BottomNavigationBar>
  );
}
