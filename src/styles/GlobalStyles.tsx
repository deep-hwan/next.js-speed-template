import React, { useEffect, useState, useCallback } from "react";
import { css, Global } from "@emotion/react";

const getWindowInnerHeight = () =>
  Number((window.innerHeight * 0.01).toFixed(2));

export function GlobalStyles() {
  const [vh, setVh] = useState<number>(0);

  const updateVh = useCallback(() => {
    const innerHeight = getWindowInnerHeight();

    document.documentElement.style.setProperty("--vh", `${innerHeight}px`);
    setVh(innerHeight);
  }, [setVh]);

  useEffect(() => {
    updateVh();
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, [updateVh]);

  const globalStyles = css`
    html {
      height: -webkit-fill-available;
    }

    body {
      height: ${`100 + ${vh}px`};
      /* min-height: 100vh; */
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      color: #333;
      background-color: #fff;

      @supports (-webkit-touch-callout: none) {
        height: -webkit-fill-available;
      }
    }
  `;

  return <Global styles={globalStyles} />;
}
