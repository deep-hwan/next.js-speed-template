import React from "react";
import { css, Global } from "@emotion/react";

export function GlobalStyles() {
  const globalStyles = css`
    html {
      height: -webkit-fill-available;
    }

    body {
      display: flex;
      height: 100%;
      min-height: 100vh; // 실제 뷰포트 높이를 사용
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
