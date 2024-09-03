import React from "react";

const KeyIcon = ({ width, height, bgColor, color }) => {
	return (
		<svg
			width={width || "50"}
			height={height || "50"}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_140_208)">
				<rect width="50" height="50" fill={bgColor || "none"} />

				<path
					d="M29.586 29.0001L31 27.5861L49.895 46.4811L50 46.3551V45.9411L47.89 38.4751L29.87 20.4561C28.1 25.0071 24.376 28.5801 19.724 30.1391L24.586 35.0001H29V40.0001H34V45.0001H39V50.0001H46.414L48.5 47.9141L29.586 29.0001Z"
					fill={color || "black"}
				/>
				<path
					d="M14.5 0C6.505 0 0 6.504 0 14.5C0 22.496 6.505 29 14.5 29C22.495 29 29 22.496 29 14.5C29 6.504 22.495 0 14.5 0ZM13.975 12.975C12.609 14.341 10.392 14.341 9.024 12.975C7.658 11.609 7.658 9.392 9.024 8.024C10.391 6.658 12.608 6.658 13.975 8.024C15.342 9.392 15.342 11.609 13.975 12.975Z"
					fill={color || "black"}
				/>
			</g>
			<defs>
				<clipPath id="clip0_140_208">
					<rect width="50" height="50" fill={bgColor || "none"} />
				</clipPath>
			</defs>
		</svg>
	);
};

export default KeyIcon;
