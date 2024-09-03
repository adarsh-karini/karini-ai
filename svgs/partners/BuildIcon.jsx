import React from "react";

const BuildIcon = ({ width, height, bgColor, color }) => {
	return (
		<svg
			width={width || "50"}
			height={height || "50"}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_140_218)">
				<rect width="50" height="50" fill={bgColor || "none"} />
				<path
					d="M4.2 1.00001C3.9 0.900012 3.6 1.10001 3.5 1.40001L1 8.70001C1 9.00001 1 9.50001 1.2 9.70001L3.7 13.6C3.9 13.9 4.1 13.8 4.2 13.5L7.7 2.80001C7.8 2.50001 7.6 2.20001 7.3 2.10001L4.2 1.00001Z"
					stroke={color || "black"}
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M26 16C26 18.8 28.2 21 31 21C33.8 21 36 18.8 36 16C36 13.2 33.8 11 31 11C28.2 11 26 13.2 26 16Z"
					stroke={color || "black"}
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M49 44H10V49H49V44Z"
					stroke={color || "black"}
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M6.40002 6.90002L9.00002 7.80002"
					stroke={color || "black"}
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M46.9 43.6L35.3 27C34.8 26.3 34.2 25.9 33.6 25.7C33.3 25.5 32.9 25.3 32.4 25.1L24.8 22.2C21.3 20.8 17.3 16.5 17.3 16.5L14 7.59998C13.3 5.89998 12.3 4.89998 10.9 5.19998C9.49999 5.49998 8.89999 6.79998 9.29999 8.49998C10.8 13.4 12 17.7 12.3 18.4C12.5 19 12.9 19.6 13.4 20.2C14.6 21.5 19.6 27.2 19.6 27.2H19.7L16.6 43.6"
					stroke={color || "black"}
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M32.4 43.6L33.5 32.9L41.2 43.6"
					stroke={color || "black"}
					stroke-width="2"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_140_218">
					<rect width="50" height="50" fill={bgColor || "none"} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default BuildIcon;
