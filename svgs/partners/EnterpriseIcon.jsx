import React from "react";

const EnterpriseIcon = ({ width, height, bgColor, color }) => {
	return (
		<svg
			width={width || "50"}
			height={height || "50"}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="50" height="50" fill={bgColor || "none"} />
			<path
				d="M31 38.815C31 37.698 31 36.685 31 36.053C31.825 35.247 32.206 34.02 32.244 32.845C32.609 32.53 33.178 32.135 33.347 31.183C33.484 30.411 33.195 29.778 32.855 29.322C33.932 27.601 33.777 22.3 29.645 22.3L29 21C23 21 20.905 25.669 22.626 29.64C22.392 29.874 22.032 30.551 22.053 31.059C22.102 32.226 22.878 32.667 23.243 32.845C23.382 34.199 24.19 35.501 25 36.053C25 36.681 25 38.258 25 38.815C23.89 41.907 17 41 17 47H39C39 41 32.11 41.907 31 38.815Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M38.916 47H46.994C46.675 41.497 40.025 42.298 39 39.445C39 38.578 39 37.882 39 37.287C39.622 36.649 39.942 35.256 40 34.226C40.449 33.93 40.97 33.557 41.132 32.326C41.233 31.557 40.899 30.861 40.638 30.6C41.61 28.685 41.527 24.2 37.712 24.2L37.127 23C35.386 23 33.483 23.837 32.916 24.578"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M35 20V8H30V3H8V8H3V45H14"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M8 13H12"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M8 18H12"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M26 13H30"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M11 8H30"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M26 18H30"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M8 23H12"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M8 28H12"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M8 33H12"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M8 38H12"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M17 13H21"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M17 18H21"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path d="M17 22V24H19.484L20.76 22H17Z" fill={color || "black"} />
			<path d="M17 29H19.755L19.396 27H17V29Z" fill={color || "black"} />
			<path d="M17 34H20.449L19.615 32H17V34Z" fill={color || "black"} />
			<path
				d="M17 38H21"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
		</svg>
	);
};

export default EnterpriseIcon;
