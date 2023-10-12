/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, useEffect, useState } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { MQ } from '@/libs/theme/mediaQuery';
import { Padding } from './Padding';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props {
  children: ReactNode;
  variant?: 'primary' | 'dark';
  width?: number;
}

// ------------------------------------
// -------------- AppBar --------------
// ------------------------------------
export const AppBar = forwardRef(function AppBar(
  { variant = 'primary', width, children, ...props }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const scrollActive = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollActive);
  }, []);

  return (
    <Padding top={0} align="center" minHeight={66} css={{ [MQ[3]]: { minHeight: '58px' } }}>
      <header ref={ref} css={[HeaderTheme(isActive, variant)]} {...props}>
        <strong aria-hidden="true" css={[NavTheme('name')]}>
          서비스명
        </strong>

        <nav css={[NavTheme('nav', width)]}>{children}</nav>
      </header>
    </Padding>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
function HeaderTheme(isActive: boolean, variant: 'primary' | 'dark'): Interpolation<Theme> {
  const TYPE_VARIANTS = {
    primary: {
      backgroundColor: '#ffffff',
      borderBottom: isActive ? `1px solid #e2e2e2` : '1px solid transparent',
    },
    dark: {
      backgroundColor: '#252525',
      borderBottom: isActive ? `1px solid #181818` : '1px solid transparent',
    },
  };

  return {
    ...TYPE_VARIANTS[variant],
    zIndex: 8999,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    minHeight: '66px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '10px',
    paddingTop: 'calc(env(safe-area-inset-top) + 10px)',
    transition: '0.3s ease-in-out',

    [MQ[2]]: {
      minHeight: '58px',
      paddingBottom: '9px',
      paddingTop: 'calc(env(safe-area-inset-top) + 9px)',
    },
  };
}

function NavTheme(as: 'name' | 'nav', width?: number): Interpolation<Theme> {
  if (as === 'name') {
    return {
      width: '0px',
      height: '0px',
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      position: 'absolute',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    };
  }

  if (as === 'nav') {
    return {
      position: 'relative',
      width: '100%',
      maxWidth: width ? `${width}px` : '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 'env(safe-area-inset-right)',
      paddingLeft: 'env(safe-area-inset-left)',
    };
  }
}
