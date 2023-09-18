/** @jsxImportSource @emotion/react */
import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react';
import { Interpolation, Theme } from '@emotion/react';

import Link from 'next/link';

import { TxtSpan, Container, Wrap } from '../_index';
import { MQ } from '@/lib/theme/_index';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  design?: 'default' | 'shape';
  maxWidth?: number;
}

interface MenuProps extends HTMLAttributes<HTMLLinkElement> {
  children: ReactElement;
  href: string;
  label?: string;
}

// -------------------------------------------------
// -------------- BottomNavigationBar --------------
// -------------------------------------------------
export const BottomNavigationBar = forwardRef(function BottomNavigationBar(
  { children, design = 'default', maxWidth = 600 }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const childrenArray = Children.toArray(children);

  if (childrenArray.length < 6) {
    return (
      <>
        {/* ========== 디자인 타입 ========== */}
        {design === 'shape' && (
          <Container ref={ref} css={theme.shapeContainer}>
            <Wrap
              css={
                {
                  ...theme.wrap,
                  ...theme.shapeWrap,
                } as Interpolation<Theme>
              }
            >
              <nav
                css={
                  {
                    ...theme.nav,
                    ...theme.shapeNav,
                    maxWidth: `${maxWidth}px`,
                  } as Interpolation<Theme>
                }
              >
                {childrenArray}
              </nav>
            </Wrap>
          </Container>
        )}

        {/* ========== 기본 타입 ========== */}
        {design === 'default' && (
          <Container ref={ref} css={theme.defaultContainer}>
            <Wrap
              css={
                {
                  ...theme.wrap,
                  ...theme.defaultWrap,
                } as Interpolation<Theme>
              }
            >
              <nav
                css={
                  {
                    ...theme.nav,
                    ...theme.defaultNav,
                    maxWidth: `${maxWidth}px`,
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
});

// --------------------------------------------
// -------------- NavigationMenu --------------
// --------------------------------------------
export const NavigationMenu = forwardRef(function NavigationMenu(
  { children, href, label, ...props }: MenuProps,
  ref?: ForwardedRef<HTMLAnchorElement>,
) {
  const child = Children.only(children);

  return (
    <Link ref={ref} href={href} css={theme.navMenu as Interpolation<Theme>}>
      <Wrap css={theme.navMenuIcon}>{child}</Wrap>
      <TxtSpan css={theme.navMenuLabel as Interpolation<Theme>} {...props}>
        {label}
      </TxtSpan>
    </Link>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const theme = {
  shapeContainer: {
    height: '100%',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 114.33px)',
    [MQ[2]]: {
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 86px)',
    },
  },

  shapeWrap: {
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 40px)',
    paddingLeft: 'calc(env(safe-area-inset-left) + 14px)',
    paddingRight: 'calc(env(safe-area-inset-right) + 14px)',

    [MQ[2]]: {
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 10px)',
    },
  },

  shapeNav: {
    boxShadow: '0 2px 26px rgba(0,0,0,0.08)',
    borderRadius: '10000px',
    backgroundColor: '#ffffff',
    padding: '4px 14px',

    [MQ[2]]: {
      padding: '4px 6px',
    },
  },

  defaultContainer: {
    height: '100%',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 75px)',

    [MQ[2]]: {
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 66.67px)',
    },
  },

  defaultWrap: {
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    borderTop: '1px solid #f0f0f0',
    backgroundColor: '#ffffff',
  },

  defaultNav: {
    padding: '4px 10px',
  },

  wrap: {
    zIndex: '8999',
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nav: {
    width: '100%',
    height: '100%',
    zIndex: '8999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: '0.3s ease-in-out',
  },

  navMenu: {
    width: '100%',
    padding: '8px',
    display: 'flex',
    rowGap: '3px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '14px',

    '&:hover': {
      backgroundColor: '#f8f9fc',
    },

    [MQ[2]]: {
      rowGap: '3px',
      width: '60px',
      maxWidth: '60px',
      minWidth: '60px',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },

  navMenuIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: '28px',
    [MQ[2]]: {
      height: '23px',
    },
  },

  navMenuLabel: {
    fontSize: '0.813rem',
    whiteSpace: 'nowrap',
    [MQ[2]]: {
      fontSize: '0.68rem',
    },
  },
};
