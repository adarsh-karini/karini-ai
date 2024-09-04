import React from "react";

const SpaceshipIcon = ({ width, height, bgColor, color }) => {
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
				d="M10 12V8C10 6.898 10.898 6 12 6H27.172L38 16.828V40C38 41.102 37.102 42 36 42H24"
				stroke={color || "black"}
				stroke-width="4"
				stroke-miterlimit="10"
			/>
			<path d="M37 18H26V7L37 18Z" fill={color || "black"} />
			<path
				d="M18 36V30C18 26.106 16.736 22.316 14.4 19.2L12 16L9.6 19.2C7.264 22.316 6 26.106 6 30V36L4 40V44H10V40H14V44H20V40L18 36ZM12 32.5C10.62 32.5 9.5 31.38 9.5 30C9.5 28.62 10.62 27.5 12 27.5C13.38 27.5 14.5 28.62 14.5 30C14.5 31.38 13.38 32.5 12 32.5Z"
				fill={color || "black"}
			/>
		</svg>
	);
};

export default SpaceshipIcon;
