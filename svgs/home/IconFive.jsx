import React from "react";

const IconFive = ({ width, height, bgColor, color }) => {
  return (
    <svg
      width={width || "74"}
      height={height || "85"}
      viewBox="0 0 64 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6746 76.1371C32.744 76.1371 36.043 72.8382 36.043 68.7687C36.043 64.6992 32.744 61.4003 28.6746 61.4003C24.6051 61.4003 21.3062 64.6992 21.3062 68.7687C21.3062 72.8382 24.6051 76.1371 28.6746 76.1371Z"
        stroke={color || "black"}
        stroke-width="4"
      />
      <path
        d="M36.043 17.1897C40.1125 17.1897 43.4114 13.8908 43.4114 9.8213C43.4114 5.75184 40.1125 2.45288 36.043 2.45288C31.9735 2.45288 28.6746 5.75184 28.6746 9.8213C28.6746 13.8908 31.9735 17.1897 36.043 17.1897Z"
        stroke={color || "black"}
        stroke-width="4"
      />
      <path
        d="M54.464 46.6634C58.5335 46.6634 61.8325 43.3644 61.8325 39.2949C61.8325 35.2255 58.5335 31.9265 54.464 31.9265C50.3946 31.9265 47.0956 35.2255 47.0956 39.2949C47.0956 43.3644 50.3946 46.6634 54.464 46.6634Z"
        stroke={color || "black"}
        stroke-width="4"
      />
      <path
        d="M10.2535 46.6634C14.323 46.6634 17.6219 43.3644 17.6219 39.2949C17.6219 35.2255 14.323 31.9265 10.2535 31.9265C6.18406 31.9265 2.8851 35.2255 2.8851 39.2949C2.8851 43.3644 6.18406 46.6634 10.2535 46.6634Z"
        stroke={color || "black"}
        stroke-width="4"
      />
      <path
        d="M47.0956 39.295H17.6219M30.5167 15.3477L15.7798 33.7687"
        stroke={color || "black"}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.9377 44.8213L34.1991 63.2423"
        stroke={color || "black"}
        stroke-width="4"
      />
    </svg>
  );
};

export default IconFive;
