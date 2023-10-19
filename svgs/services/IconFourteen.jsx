// Workshops and Game Days

import React from "react";

const IconFourteen = ({ width, height, bgColor, color }) => {
  return (
    <svg
      width={width || "74"}
      height={height || "85"}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 57.5385V17.3846H39.5V24.0769H44V8.46154C43.9988 7.27863 43.5243 6.1445 42.6807 5.30806C41.837 4.47161 40.6931 4.00118 39.5 4H12.5C11.3069 4.00118 10.163 4.47161 9.31934 5.30806C8.47568 6.1445 8.00119 7.27863 8 8.46154V57.5385C8.00119 58.7214 8.47568 59.8555 9.31934 60.6919C10.163 61.5284 11.3069 61.9988 12.5 62H37.25V57.5385H12.5ZM12.5 8.46154H39.5V12.9231H12.5V8.46154Z"
        fill={color || "black"}
      />
      <path
        d="M43.011 47.616L48.5061 36.6259M31.9858 38.6408L38.8897 47.616M24.0703 46.3111L28.1185 38.6408"
        stroke={color || "black"}
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.8811 36.6259C52.1572 36.6259 54.0024 34.7807 54.0024 32.5046C54.0024 30.2285 52.1572 28.3833 49.8811 28.3833C47.6049 28.3833 45.7598 30.2285 45.7598 32.5046C45.7598 34.7807 47.6049 36.6259 49.8811 36.6259Z"
        stroke={color || "black"}
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.4462 53.4772C42.0648 53.4772 43.3769 52.1651 43.3769 50.5466C43.3769 48.9281 42.0648 47.616 40.4462 47.616C38.8277 47.616 37.5156 48.9281 37.5156 50.5466C37.5156 52.1651 38.8277 53.4772 40.4462 53.4772Z"
        stroke={color || "black"}
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.1884 38.8246C31.807 38.8246 33.1191 37.5125 33.1191 35.894C33.1191 34.2755 31.807 32.9634 30.1884 32.9634C28.5699 32.9634 27.2578 34.2755 27.2578 35.894C27.2578 37.5125 28.5699 38.8246 30.1884 38.8246Z"
        stroke={color || "black"}
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.9521 51.594C24.5706 51.594 25.8827 50.2819 25.8827 48.6634C25.8827 47.0449 24.5706 45.7328 22.9521 45.7328C21.3336 45.7328 20.0215 47.0449 20.0215 48.6634C20.0215 50.2819 21.3336 51.594 22.9521 51.594Z"
        stroke={color || "black"}
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconFourteen;
