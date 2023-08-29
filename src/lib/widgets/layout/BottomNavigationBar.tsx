import React, {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { Interpolation, Theme } from "@emotion/react";

import Link from "next/link";
import { Box, Container, Wrap } from "./Container";
import { TxtSpan } from "../_index";
import { borderRadius, fontSize } from "@/lib/theme/size";
import { MQ } from "@/lib/theme/mediaQuery";
import { colors } from "@/lib/theme/colors";

//
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  design?: "default" | "shape";
  maxWidth?: number;
}

//
export function BottomNavigationBar({
  children,
  design = "default",
  maxWidth = 600,
}: Props) {
  const childrenArray = Children.toArray(children);

  if (childrenArray.length < 6) {
    return (
      <>
        {design === "shape" && (
          <Container
            css={{
              height: "100%",
              paddingBottom: "calc(env(safe-area-inset-bottom) + 114.33px)",
              [MQ[2]]: {
                paddingBottom: "calc(env(safe-area-inset-bottom) + 86px)",
              },
            }}
          >
            <Wrap
              css={
                {
                  ...theme.wrap,
                  paddingTop: "env(safe-area-inset-top)",
                  paddingBottom: "calc(env(safe-area-inset-bottom) + 40px)",
                  paddingLeft: "calc(env(safe-area-inset-left) + 14px)",
                  paddingRight: "calc(env(safe-area-inset-right) + 14px)",

                  [MQ[2]]: {
                    paddingBottom: "calc(env(safe-area-inset-bottom) + 10px)",
                  },
                } as Interpolation<Theme>
              }
            >
              <nav
                css={
                  {
                    ...theme.nav,
                    maxWidth: `${maxWidth}px`,
                    boxShadow: "0 2px 26px rgba(0,0,0,0.08)",
                    borderRadius: borderRadius.infinte,
                    backgroundColor: colors.white,
                    padding: "4px 14px",

                    [MQ[2]]: {
                      padding: "4px 6px",
                    },
                  } as Interpolation<Theme>
                }
              >
                {childrenArray}
              </nav>
            </Wrap>
          </Container>
        )}

        {design === "default" && (
          <Container
            css={{
              height: "100%",
              paddingBottom: "calc(env(safe-area-inset-bottom) + 75px)",

              [MQ[2]]: {
                paddingBottom: "calc(env(safe-area-inset-bottom) + 66.67px)",
              },
            }}
          >
            <Wrap
              css={
                {
                  ...theme.wrap,
                  paddingTop: "env(safe-area-inset-top)",
                  paddingBottom: "env(safe-area-inset-bottom)",
                  borderTop: "1px solid #e2e2e2",
                  backgroundColor: colors.white,
                } as Interpolation<Theme>
              }
            >
              <nav
                css={
                  {
                    ...theme.nav,
                    maxWidth: `${maxWidth}px`,
                    padding: "4px 10px",
                  } as Interpolation<Theme>
                }
              >
                {childrenArray}
              </nav>
            </Wrap>
          </Container>
        )}
      </>
    );
  }
}

//
interface MenuProps extends HTMLAttributes<HTMLLinkElement> {
  children: ReactElement;
  href: string;
  label?: string;
}

//
export function NavigationMenu({ children, href, label, ...props }: MenuProps) {
  const child = Children.only(children);

  return (
    <Link href={href} css={theme.navMenu as Interpolation<Theme>}>
      <Wrap css={theme.navMenuIcon}>{child}</Wrap>
      <TxtSpan css={theme.navMenuLabel as Interpolation<Theme>} {...props}>
        {label}
      </TxtSpan>
    </Link>
  );
}

//
/// styled
const theme = {
  wrap: {
    zIndex: "8999",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    alignItems: "center",
    justifyContent: "center",
  },

  nav: {
    width: "100%",
    height: "100%",
    zIndex: "8999",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  navMenu: {
    width: "100%",
    padding: "8px",
    display: "flex",
    rowGap: "3px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.s500,

    "&:hover": {
      backgroundColor: colors.ground100,
    },

    [MQ[2]]: {
      rowGap: "3px",
      width: "60px",
      maxWidth: "60px",
      minWidth: "60px",
      "&:hover": {
        backgroundColor: colors.none,
      },
    },
  },

  navMenuIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "28px",
    [MQ[2]]: {
      height: "23px",
    },
  },

  navMenuLabel: {
    fontSize: fontSize.s13,
    whiteSpace: "nowrap",
    [MQ[2]]: {
      fontSize: fontSize.s11,
    },
  },
};
