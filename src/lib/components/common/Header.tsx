import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

//components
import AppBar from "@/lib/widgets/AppBar";
import { DrawerMenu } from "./DrawerMenu";

//lib
import { IconTab } from "@/lib/widgets/Tab";
import { MQ } from "@/lib/theme/mediaQuery";

//png,svg
import Logo from "public/images/logo.svg";
import ToastIcon from "public/icons/toast-icon.svg";

//menu
import menus from "../../json/menu.json";

//widgets
import { Box } from "@/lib/widgets/Container";

//
export default function Header() {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const handleCloseDrawer = () => setIsDrawer(false);

  return (
    <>
      <AppBar>
        <NavView>
          <Link href="/" className="logo">
            <Logo alt="서비스명" />
          </Link>

          <Menus>
            {menus.map((item, i) => {
              return (
                <Menu key={i}>
                  <Link href={item.path}>{item.name}</Link>
                </Menu>
              );
            })}
          </Menus>

          <Box
            css={{
              width: "auto",
              display: "none",
              [MQ[1]]: {
                display: "flex",
              },
            }}
          >
            <IconTab
              onClick={() => setIsDrawer(!isDrawer)}
              css={{
                [MQ[3]]: {
                  width: "24px",
                  height: "24px",
                },
              }}
            >
              <ToastIcon fill="#555" />
            </IconTab>
          </Box>
        </NavView>
      </AppBar>

      {/* 드로어 메뉴 */}
      <DrawerMenu isDrawer={isDrawer} handleCloseDrawer={handleCloseDrawer} />
    </>
  );
}

// styled
const NavView = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: auto;

  .logo {
    width: 80px;
    display: flex;

    @media (max-width: 1080px) {
      width: 76px;
    }

    svg {
      width: 100%;
    }
  }
`;

const Menus = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 0.938rem;
    padding: 0.75em;

    &:hover {
      background-color: #f8f8f8;
      border-radius: 0.375em;
    }
  }
`;
