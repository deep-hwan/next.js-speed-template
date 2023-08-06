import React from "react";
import Link from "next/link";

// json
import menus from "../../json/memu.json";

//libs
import { colors } from "@/lib/theme/colors";
import { fontSize } from "@/lib/theme/size";
import { MQ } from "@/lib/theme/mediaQuery";
import {
  Container,
  Item,
  Items,
  Spacing,
  Txt,
  Wrap,
} from "@/lib/widgets/_index";

//
interface MenuItem {
  name: string;
  a: string;
}

//
export default function Footer() {
  const menusLust: MenuItem[] = menus;

  return (
    <footer
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors.grey000,
        padding: "40px 20px 50px",
      }}
    >
      <Container
        css={{
          maxWidth: "1080px",
        }}
      >
        <Items
          direction="horizontal"
          css={{
            columnGap: "26px",
            [MQ[3]]: {
              flexDirection: "column",
              rowGap: "16px",
            },
          }}
        >
          {menusLust?.map((item: MenuItem, i: number) => (
            <Item key={i} css={{ width: "auto", padding: "5px 0" }}>
              <Link
                href={item.a}
                css={{ fontSize: fontSize.s14, color: colors.grey700 }}
              >
                {item.name}
              </Link>
            </Item>
          ))}
        </Items>

        <Spacing size={32} />

        <Wrap>
          <Txt css={{ fontWeight: "500", color: colors.grey800 }}>
            딥팩토리 디자인
          </Txt>

          <Spacing size={14} />

          <Txt css={{ fontSize: fontSize.s13, color: colors.grey500 }}>
            이메일 : deep@deepcomu.com | 연락처 : 0507-0178-1277
          </Txt>
          <Spacing size={4} />

          <Txt css={{ fontSize: fontSize.s13, color: colors.grey500 }}>
            주소 : 서울특별시 영등포구 영중로 15 타임스퀘어 오피스A동 20층
          </Txt>
          <Spacing size={4} />

          <Txt css={{ fontSize: fontSize.s13, color: colors.grey500 }}>
            사업자등록번호 : 110-412-598896 | 통신판매등록번호 :
            2023-서울영등포-0900호
          </Txt>
        </Wrap>
      </Container>
    </footer>
  );
}
