import React, {
  HTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Interpolation, Theme } from "@emotion/react";

import { Layer } from "../_index";
import { MQ } from "@/lib/theme/mediaQuery";

//
interface BottomSheetProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  view: boolean;
  onCancel: () => void;
  theme?: string;
}

//
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
      <div
        css={
          {
            ...styles.container,
            top: view ? "0" : "120%",
          } as Interpolation<Theme>
        }
      >
        <div
          ref={ref}
          css={
            {
              ...styles.wrap,
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

          <div css={styles.box as Interpolation<Theme>}>{children}</div>
        </div>
      </div>
    </>
  );
});

const styles = {
  container: {
    zIndex: "9999",
    position: "fixed",
    left: "0",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "0.25s ease-in-out",
    paddingTop: "60px",

    [MQ[1]]: {
      paddingTop: "10px",
    },
  },

  wrap: {
    width: "100%",
    maxWidth: "560px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "22px 22px 0 0",
    boxShadow: "0 3px 30px rgba(0,0,0,0.1)",
    transition: "0.25s ease-in-out",

    "&:webkit-scrollbar": {
      display: "none",
    },

    [MQ[1]]: {
      maxWidth: "100%",
    },
  },

  box: {
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
};
