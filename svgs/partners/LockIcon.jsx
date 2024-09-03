import React from "react";

const LockIcon = ({ width, height, bgColor, color }) => {
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
				d="M35 21.098C35 21.098 35 16.045 35 15C35 9.476 30.524 5 25 5C19.476 5 15 9.476 15 15C15 16.045 15 21.098 15 21.098"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M25 16C16.729 16 10 22.729 10 31C10 39.271 16.729 46 25 46C33.271 46 40 39.271 40 31C40 22.729 33.271 16 25 16ZM26 33.816V36C26 36.552 25.552 37 25 37C24.448 37 24 36.552 24 36V33.816C22.837 33.403 22 32.304 22 31C22 29.343 23.343 28 25 28C26.657 28 28 29.343 28 31C28 32.304 27.163 33.403 26 33.816Z"
				fill={color || "black"}
			/>
		</svg>
	);
};

export default LockIcon;
