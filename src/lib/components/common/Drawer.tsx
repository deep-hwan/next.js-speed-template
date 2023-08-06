import React from "react";
import Link from "next/link";

//styles
import styled from "@emotion/styled";

//menu
import menus from "../../json/memu.json";

//public
import PathIcon from "public/icons/href-icon.svg";

//ui
import DrawerBox from "@/lib/widgets/Drawer";

interface DrawerType {
  isDrawer: boolean;
  handleCloseDrawer: () => void;
}

//
export function Drawer({ isDrawer, handleCloseDrawer }: DrawerType) {
  return (
    <>
      <DrawerBox view={isDrawer} onCancel={handleCloseDrawer}>
        <Menus>
          {menus.map((item, i) => {
            return (
              <Menu key={i} onClick={() => handleCloseDrawer()}>
                <Link href={item.a}>
                  <MenuName>{item.name}</MenuName>
                  <PathIcon />
                </Link>
              </Menu>
            );
          })}
        </Menus>
      </DrawerBox>
    </>
  );
}

// styled
const Menus = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Menu = styled.li`
  width: 100%;
  padding: 2px 14px;

  a {
    padding: 16px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;

    svg {
      fill: #aaa;
    }

    :hover {
      background-color: #f8f8f8;
    }
  }
`;

const MenuName = styled.span`
  font-size: 0.938rem;
`;
