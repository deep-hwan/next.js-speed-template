import React, { useEffect } from "react";
import { css, Global } from "@emotion/react";

export function GlobalStyles() {
  useEffect(() => {
    const setVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", setVH);
    setVH();

    return () => window.removeEventListener("resize", setVH);
  }, []);

  const globalStyles = css`
    html {
      height: -webkit-fill-available;
    }

    body {
      height: 100%;
      min-height: calc(100 * var(--vh)); // 실제 뷰포트 높이를 사용
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
