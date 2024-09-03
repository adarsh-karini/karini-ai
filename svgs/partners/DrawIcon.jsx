import React from "react";

const DrawIcon = ({ width, height, bgColor, color }) => {
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
				d="M5.83333 45C6.29357 45 6.66667 44.6269 6.66667 44.1666C6.66667 43.7064 6.29357 43.3333 5.83333 43.3333C5.3731 43.3333 5 43.7064 5 44.1666C5 44.6269 5.3731 45 5.83333 45Z"
				fill={color || "black"}
			/>
			<path
				d="M41.6667 15L44.0217 12.645C45.3233 11.3433 45.3267 9.23662 44.025 7.93495C43.3883 7.29828 42.7017 6.61162 42.065 5.97495C40.7633 4.67328 38.6567 4.67662 37.355 5.97828L35 8.33328L41.6667 15Z"
				fill={color || "black"}
			/>
			<path
				d="M6.48669 39.82L5.06335 43.8483L6.12002 44.95L10.1817 43.515L6.48669 39.82Z"
				fill={color || "black"}
			/>
			<path
				d="M13.4767 25.1434L15.8334 22.7867L7.3567 14.31L14.31 7.35671L16.465 9.51171L14.31 11.6667L16.6667 14.0234L18.8217 11.8684L20.6317 13.6784L17.155 17.155L19.31 19.31L25.1434 13.4767L22.9884 11.3217L15.4884 3.82171C15.1634 3.49671 14.7367 3.33337 14.31 3.33337C13.8834 3.33337 13.4567 3.49671 13.1317 3.82171L3.8217 13.1317C3.17003 13.7834 3.17003 14.8384 3.8217 15.4884L13.4767 25.1434Z"
				fill={color || "black"}
			/>
			<path
				d="M46.1784 34.5117L38.6784 27.0117L36.5234 24.8567L30.69 30.69L32.845 32.845L36.3217 29.3684L38.1317 31.1784L35.9767 33.3334L38.3334 35.69L40.4884 33.535L42.6434 35.69L35.69 42.6434L27.2134 34.1667L24.8567 36.5234L34.5117 46.1784C34.8367 46.5034 35.2634 46.6667 35.69 46.6667C36.1167 46.6667 36.5434 46.5034 36.8684 46.1784L46.1784 36.8684C46.83 36.2184 46.83 35.1634 46.1784 34.5117Z"
				fill={color || "black"}
			/>
			<path
				d="M31.6667 11.6667L8.71667 34.6167L10.8333 35.8334L11.6667 38.3334L14.1667 39.1667L15.3833 41.2834L38.3333 18.3334L31.6667 11.6667Z"
				fill={color || "black"}
			/>
		</svg>
	);
};

export default DrawIcon;
