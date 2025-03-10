import React from "react";

const IconEighteen = ({ width, height, bgColor, color }) => {
  return (
    <svg
      stroke={color || "black"}
      fill="none"
      strokeWidth="0"
      viewBox="0 0 24 24"
      width={width || "74"}
      height={height || "85"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeWidth="2"
        d="M19,7 C19,7 14,14 6.5,14 C4.5,14 1,15 1,19 L1,23 L12,23 L12,19 C12,16.5 15,18 19,11 L17.5,9.5 M3,5 L3,2 L23,2 L23,16 L20,16 M11,1 L15,1 L15,3 L11,3 L11,1 Z M6.5,14 C8.43299662,14 10,12.4329966 10,10.5 C10,8.56700338 8.43299662,7 6.5,7 C4.56700338,7 3,8.56700338 3,10.5 C3,12.4329966 4.56700338,14 6.5,14 Z"
      ></path>
    </svg>
  );
};

export default IconEighteen;
