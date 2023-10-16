import React from "react";

const IconThree = ({ width, height, bgColor, color }) => {
  return (
    <svg
      width={width || "74"}
      height={height || "85"}
      viewBox="0 0 67 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.677979 0.374878H66.303V9.74988H0.677979V0.374878ZM0.677979 14.4374H66.303V56.6249H0.677979V14.4374ZM25.5686 23.9108L14.3795 35.5218L25.578 47.1327L28.9436 43.8796L20.8905 35.5218L28.9436 27.1639L25.5686 23.9108ZM41.417 23.9108L38.042 27.1639L46.0952 35.5218L38.042 43.8796L41.417 47.1327L52.6061 35.5218L41.417 23.9108Z"
        fill={color || "black"}
      />
    </svg>
  );
};

export default IconThree;
