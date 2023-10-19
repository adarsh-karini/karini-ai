//Prompt Engineering and Prompt Tuning

import React from "react";

const IconTen = ({ width, height, bgColor, color }) => {
  return (
    <svg
      width={width || "74"}
      height={height || "85"}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.94922 2.94861H47.0493V47.0487H2.94922V2.94861Z"
        stroke={color || "black"}
        strokeWidth="4"
      />
      <path
        d="M37.9173 34.7499H25.0007M12.084 19.8333L19.002 26.2916C19.002 26.2916 14.5286 30.7528 12.084 32.7499"
        stroke={color || "black"}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconTen;
