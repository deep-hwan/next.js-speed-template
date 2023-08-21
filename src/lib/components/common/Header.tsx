import React, { useState } from "react";
import Link from "next/link";
import { Interpolation, Theme } from "@emotion/react";

//components
import { Drawer } from "./Drawer";

//libs
import { MQ } from "@/lib/theme/mediaQuery";
import { borderRadius, fontSize, colors } from "@/lib/theme/_index";
import {
  AppBar,
  IconTab,
  Box,
  Items,
  Item,
  Container,
} from "@/lib/widgets/_index";

//assets
import { LogoIcon, ToastIcon } from "@/lib/assets/icon";

//menu
import menus from "../../json/menu.json";

//
export default function Header() {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const handleCloseDrawer = () => setIsDrawer(false);

  return (
    <>
      <AppBar>
        <Container css={theme.container as Interpolation<Theme>}>
          <Link href="/" css={theme.logo as Interpolation<Theme>}>
            <LogoIcon alt="서비스명" width="100%" />
          </Link>

          <Items
            direction="horizontal"
            gap={30}
            css={theme.menuItems as Interpolation<Theme>}
          >
            {menus.map((item, i) => {
              return (
                <Item key={i} css={theme.menuItem}>
                  <Link
                    href={item.path}
                    css={theme.linkItem as Interpolation<Theme>}
                  >
                    {item.name}
                  </Link>
                </Item>
              );
            })}
          </Items>

          <Box css={theme.iconBox as Interpolation<Theme>}>
            <IconTab
              onClick={() => setIsDrawer(!isDrawer)}
              iconSize={26}
              css={theme.iconTab as Interpolation<Theme>}
            >
              <ToastIcon fill="#555" width="100%" height="auto" />
            </IconTab>
          </Box>
        </Container>
      </AppBar>

      {/* 드로어 메뉴 */}
      <Drawer isDrawer={isDrawer} handleCloseDrawer={handleCloseDrawer} />
    </>
  );
}

// styled
const theme = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    padding: "0 20px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [MQ[1]]: {
      padding: "0 14px 0 20px",
    },
  },

  logo: {
    width: "100px",
    display: "flex",
    [MQ[1]]: {
      width: "86px",
    },
  },

  menuItems: {
    alignItems: "center",
    justifyContent: "center",

    [MQ[1]]: {
      display: "none",
    },
  },

  menuItem: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  linkItem: {
    fontSize: fontSize.s15,
    padding: "0.8em",
    "&:hover": {
      backgroundColor: colors.ground100,
      borderRadius: borderRadius.s400,
    },
  },

  iconBox: {
    width: "auto",
    display: "none",

    [MQ[1]]: {
      display: "flex",
    },
  },

  iconTab: {
    [MQ[3]]: {
      width: "24px",
      height: "24px",
    },
  },
};
