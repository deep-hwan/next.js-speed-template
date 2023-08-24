import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import Link from "next/link";
import { Box, Container, Wrap } from "./Container";
import { TxtSpan } from "../_index";
import { borderRadius, fontSize } from "@/lib/theme/size";
import { MQ } from "@/lib/theme/mediaQuery";
import { colors } from "@/lib/theme/colors";

//
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

//
export function BottomNavigationBar({ children }: Props) {
  return (
    <Container
      css={{
        marginTop: "10px",
        minHeight: "66px",
        padding: "15px 0 calc(env(safe-area-inset-bottom) + 15px)",
      }}
    >
      <Wrap
        css={{
          zIndex: "8999",
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderTop: "1px solid #eeeeee",
          padding: "6px 10px calc(env(safe-area-inset-bottom) + 6px)",

          [MQ[2]]: {
            padding: "2px 10px calc(env(safe-area-inset-bottom) + 6px)",
          },
        }}
      >
        <Box
          gap={4}
          direction="horizontal"
          css={{
            maxWidth: "800px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {children}
        </Box>
      </Wrap>
    </Container>
  );
}

//
interface MenuProps extends HTMLAttributes<HTMLLinkElement> {
  children: ReactElement;
  href: string;
  name?: string;
}

//
export function NavigationMenu({ children, href, name, ...props }: MenuProps) {
  const child = Children.only(children);

  return (
    <Link
      href={href}
      css={{
        padding: "8px",
        display: "flex",
        rowGap: "2px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius.s500,

        "&:hover": {
          backgroundColor: colors.ground100,
        },

        [MQ[2]]: {
          "&:hover": {
            backgroundColor: colors.none,
          },
        },
      }}
    >
      <Wrap
        css={{
          width: "30px",
          [MQ[2]]: {
            width: "26px",
          },
        }}
      >
        {child}
      </Wrap>

      <TxtSpan
        css={{
          fontSize: fontSize.s13,
          whiteSpace: "nowrap",
          [MQ[2]]: {
            fontSize: fontSize.s11,
          },
        }}
        {...props}
      >
        {name}
      </TxtSpan>
    </Link>
  );
}
