import React from "react";

const WatchStepIcon = ({ width, height, bgColor, color }) => {
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
				d="M37.5 14C39.9853 14 42 11.9853 42 9.5C42 7.01472 39.9853 5 37.5 5C35.0147 5 33 7.01472 33 9.5C33 11.9853 35.0147 14 37.5 14Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M19.094 20.014L27.518 14.386C28.841 13.502 30.632 13.884 31.479 15.23L33.851 18.999L35.93 25.904C35.976 26.056 36.057 26.194 36.166 26.308L40.59 31.064C41.492 32.004 41.403 33.512 40.397 34.34C39.5 35.078 38.187 35.006 37.376 34.174L32.307 28.814C32.212 28.717 32.138 28.601 32.089 28.474L29.631 22.068L23.083 26.925V34.956C23.083 35.51 22.853 36.039 22.449 36.417L14.934 43.44C14.008 44.306 12.559 44.271 11.675 43.362C10.78 42.441 10.799 40.97 11.718 40.073L18.117 33.829L17.239 23.879C17.105 22.35 17.816 20.867 19.094 20.014Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M24 41H20C18.895 41 18 41.895 18 43V45H26V43C26 41.895 25.105 41 24 41Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M32.462 16.844L36.977 21.888L42.88 25.428C43.963 26.047 44.324 27.436 43.679 28.504C43.044 29.554 41.678 29.891 40.629 29.255L36.495 26.614"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M18.222 27.2661L11.988 28.5981C11.097 28.7881 10.19 28.3521 9.78199 27.5371L5.25599 18.4921C4.65999 17.3011 5.14099 15.8531 6.33199 15.2561C7.51699 14.6611 8.95999 15.1351 9.56299 16.3161L12.969 22.9901L18.149 21.1231"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
		</svg>
	);
};

export default WatchStepIcon;
