import React from "react";

const CrystalBallIcon = ({ width, height, bgColor, color }) => {
	return (
		<svg
			width={width || "50"}
			height={height || "50"}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M39 40C39 40 39 39.3285 39 38.5C39 37.6715 38.3285 37 37.5 37H36V34H14V37H12.5C11.6715 37 11 37.6715 11 38.5C11 38.914 11 40 11 40C9.8955 40 9 40.8955 9 42V44H41V42C41 40.8955 40.1045 40 39 40Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linejoin="round"
			/>
			<path
				d="M20.75 9.45044C15.518 11.2219 11.75 16.1694 11.75 21.9999C11.75 22.0839 11.755 22.1664 11.7565 22.2499"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M23.75 8.81055C23.241 8.85805 22.7405 8.93405 22.25 9.03755"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M25.25 8.7565C25.1665 8.755 25.084 8.75 25 8.75C24.916 8.75 24.8335 8.755 24.75 8.7565"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M14.4225 34H35.577C38.901 31.068 41 26.7805 41 22C41 13.1635 33.8365 6 25 6C16.1635 6 9 13.1635 9 22C9 26.7805 11.099 31.068 14.4225 34Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M14.25 37.25H28.75"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M30.25 37.25H32.25"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M33.75 37.25H34.25"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M10.75 40.25H31.25"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M33.75 40.25H39.25"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M25.271 22.271L27.75 21.25L25.271 20.229L24.25 17.75L23.229 20.229L20.75 21.25L23.229 22.271L24.25 24.75L25.271 22.271Z"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linejoin="round"
			/>
			<path
				d="M31.979 16.979L33.75 16.25L31.979 15.521L31.25 13.75L30.521 15.521L28.75 16.25L30.521 16.979L31.25 18.75L31.979 16.979Z"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linejoin="round"
			/>
			<path
				d="M32.8335 26.3335L34.25 25.75L32.8335 25.1665L32.25 23.75L31.6665 25.1665L30.25 25.75L31.6665 26.3335L32.25 27.75L32.8335 26.3335Z"
				stroke={color || "black"}
				stroke-miterlimit="10"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default CrystalBallIcon;
