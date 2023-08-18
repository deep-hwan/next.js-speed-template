import React from "react";
import Link from "next/link";
import { Interpolation, Theme } from "@emotion/react";

//menu
import menus from "../../json/menu.json";

//libs
import { AppDrawer, Item, Items, Spacing, Txt } from "@/lib/widgets/_index";
import { colors } from "@/lib/theme/colors";
import { borderRadius } from "@/lib/theme/size";

//assets
import { PathIcon } from "@/lib/assets/icon";

interface DrawerType {
  isDrawer: boolean;
  handleCloseDrawer: () => void;
}

//
export function Drawer({ isDrawer, handleCloseDrawer }: DrawerType) {
  return (
    <>
      <AppDrawer view={isDrawer} onCancel={handleCloseDrawer}>
        <Items>
          <Spacing size={20} />
          {menus.map((item, i) => {
            return (
              <Item
                key={i}
                css={theme.menus}
                onClick={() => handleCloseDrawer()}
              >
                <Link
                  href={item.path}
                  css={theme.menuLink as Interpolation<Theme>}
                >
                  <Txt>{item.name}</Txt>
                  <PathIcon fill={colors.grey300} />
                </Link>
              </Item>
            );
          })}
        </Items>
      </AppDrawer>
    </>
  );
}

// styled
const theme = {
  container: {
    marginTop: "20px",
  },

  menus: {
    padding: "2px 14px",
  },

  menuLink: {
    width: "100%",
    padding: "16px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: borderRadius.s400,

    "&:hover": {
      backgroundColor: colors.ground100,
    },
  },
};
