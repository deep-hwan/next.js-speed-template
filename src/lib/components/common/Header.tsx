import React, { useEffect, useState } from "react";
import Link from "next/link";

//components
import AppBar from "@/lib/widgets/AppBar";
import { Drawer } from "./Drawer";
import { IconTab } from "@/lib/widgets/Tab";
import { MQ } from "@/lib/utils/mediaQuery";

//png,svg
import Logo from "@/images/logo.svg";
import ToastIcon from "@/icons/toast-icon.svg";

//styles
import styled from "@emotion/styled";

//menu
import menus from "./memu.json";

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
                  <Link href={item.a}>{item.name}</Link>
                </Menu>
              );
            })}
          </Menus>

          <IconTab
            onClick={() => setIsDrawer(!isDrawer)}
            css={{
              display: "none",
              [MQ[1]]: {
                display: "flex",
              },

              [MQ[3]]: {
                width: "24px",
                height: "24px",
              },
            }}
          >
            <ToastIcon fill="#333" />
          </IconTab>
        </NavView>
      </AppBar>

      {/* 드로어 메뉴 */}
      <Drawer isDrawer={isDrawer} handleCloseDrawer={handleCloseDrawer} />
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
