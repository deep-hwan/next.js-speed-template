/** @jsxImportSource @emotion/react */
import React, {
  HTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Interpolation, Theme } from "@emotion/react";

import { Box, Container, Layer, Wrap } from "../_index";
import { MQ } from "@/lib/theme/mediaQuery";

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface BottomSheetProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  view: boolean;
  onCancel: () => void;
  theme?: string;
}

// -----------------------------------------
// -------------- BottomSheet --------------
// -----------------------------------------
export const BottomSheet = forwardRef(function BottomSheet({
  children,
  view,
  onCancel,
  theme = "light",
  ...props
}: BottomSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
    setCurrentY(touch.clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setCurrentY(touch.clientY);
  };

  const handleTouchEnd = () => {
    const distance = currentY - startY;

    if (distance > 80) {
      onCancel();
    }

    setCurrentY(0);
    setStartY(0);
  };

  //
  // 외부클릭
  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (view && ref.current && !ref.current.contains(event.target as Node)) {
        onCancel();
      }
    },
    [view, onCancel]
  );

  useEffect(() => {
    if (view) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    document.addEventListener("mousedown", clickModalOutside);
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [view, clickModalOutside]);

  return (
    <>
      <Layer isActive={view} />
      <Container
        css={
          {
            ...styles.container,
            top: view ? "0" : "120%",
          } as Interpolation<Theme>
        }
      >
        <Wrap css={styles.wrap}>
          <Box
            ref={ref}
            css={
              {
                ...styles.box,
                backgroundColor: theme === "dark" ? "#222222" : "#ffffff",
                opacity: view ? "1" : "0",
              } as Interpolation<Theme>
            }
            {...props}
          >
            <div
              css={styles.tabBox}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                onClick={onCancel}
                css={{
                  ...styles.tab,
                  backgroundColor: theme === "dark" ? "#444444" : "#e0e0e0",
                }}
              />
            </div>

            <div css={styles.view as Interpolation<Theme>}>{children}</div>
          </Box>
        </Wrap>
      </Container>
    </>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  container: {
    zIndex: "9999",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",

    width: "100%",
    height: "100%",
    transition: "0.25s ease-in-out",
  },

  wrap: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "calc(env(safe-area-inset-top) + 70px)",

    [MQ[1]]: {
      paddingTop: "calc(env(safe-area-inset-top) + 10px)",
    },
  },

  box: {
    width: "100%",
    maxWidth: "560px",
    height: "100%",

    display: "flex",
    flexDirection: "column",

    borderRadius: "22px 22px 0 0",
    boxShadow: "0 3px 30px rgba(0,0,0,0.1)",
    transition: "0.25s ease-in-out",

    paddingTop: "env(safe-area-inset-top)",
    paddingBottom: "env(safe-area-inset-bottom)",

    "&:webkit-scrollbar": {
      display: "none",
    },

    [MQ[1]]: {
      maxWidth: "100%",
    },
  },

  tabBox: {
    width: "100%",
    padding: "11px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  tab: {
    width: "50px",
    height: "6px",
    border: "none",
    outline: "none",
    borderRadius: "1000px",
    cursor: "pointer",
  },

  view: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    "@supports (-webkit-touch-callout: none)": {
      height: "-webkit-fill-available",
    },
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "6px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#e9e9e9",
      borderRadius: "100px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#e2e2e2",
    },
    "&::-webkit-scrollbar-button:start:decrement": {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-button:end:increment": {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    },
  },
};
