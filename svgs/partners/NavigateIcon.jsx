import React from "react";

const NavigateIcon = ({ width, height, bgColor, color }) => {
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
				d="M25 41.875C34.3198 41.875 41.875 34.3198 41.875 25C41.875 15.6802 34.3198 8.125 25 8.125C15.6802 8.125 8.125 15.6802 8.125 25C8.125 34.3198 15.6802 41.875 25 41.875Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M25.625 35L23.75 26.25L15 24.375L32.5 17.5L25.625 35Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default NavigateIcon;
