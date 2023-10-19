// Model finetuning with RLHF

import React from "react";

const IconEleven = ({ width, height, bgColor, color }) => {
  return (
    <svg
      width={width || "74"}
      height={height || "85"}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.5272 29H15.4746V32.7576L27.4943 44.0303V60L35.5075 55.303V44.0303L47.5272 32.7576V29Z"
        stroke={color || "black"}
        stroke-width="4"
        stroke-linejoin="round"
      />
      <path
        d="M43.812 11.6112L34.5278 2.5969C34.2625 2.33935 33.9973 2.21057 33.5994 2.21057H20.3362C18.8773 2.21057 17.6836 3.36955 17.6836 4.78608V27.4395C17.6836 28.856 18.8773 30.015 20.3362 30.015H41.5573C43.0162 30.015 44.2099 28.856 44.2099 27.4395V12.5126C44.2099 12.1263 44.0773 11.8687 43.812 11.6112ZM33.5994 5.30118L41.0268 12.5126H33.5994V5.30118ZM41.5573 28.5H20.3362V4.78608H30.9468V12.5126C30.9468 13.9291 32.1404 15.0881 33.5994 15.0881H41.5573V28.5Z"
        fill={color || "black"}
        stroke={color || "black"}
      />
      <path
        d="M23.2109 20H38.6846V23.3158H23.2109V20Z"
        fill={color || "black"}
        stroke={color || "black"}
      />
    </svg>
  );
};

export default IconEleven;
