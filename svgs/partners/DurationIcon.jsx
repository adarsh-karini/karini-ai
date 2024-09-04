import React from "react";

const DurationIcon = ({ width, height, bgColor, color }) => {
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
				d="M42 36V44L47 40L42 36Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M15 40H4"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M28 40H17"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M42 40H30"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M16 42C17.1046 42 18 41.1046 18 40C18 38.8954 17.1046 38 16 38C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42Z"
				fill={color || "black"}
			/>
			<path
				d="M29 42C30.1046 42 31 41.1046 31 40C31 38.8954 30.1046 38 29 38C27.8954 38 27 38.8954 27 40C27 41.1046 27.8954 42 29 42Z"
				fill={color || "black"}
			/>
			<path
				d="M3 42C4.10457 42 5 41.1046 5 40C5 38.8954 4.10457 38 3 38C1.89543 38 1 38.8954 1 40C1 41.1046 1.89543 42 3 42Z"
				fill={color || "black"}
			/>
			<path d="M25 27H23V30H25V27Z" fill={color || "black"} />
			<path d="M25 10H23V13H25V10Z" fill={color || "black"} />
			<path
				d="M46 14C46 12.5 46 9 41 9C37.5 9 36 11 36 13C36 16 38.453 16.863 41 17.5C43 18 46 19 46 22C46 24 44.5 26 41 26C36 26 36 22.5 36 21"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path
				d="M28 17C28 16 28 13 24 13C21.2 13 20 14.647 20 16.294C20 18.765 21.963 19.476 24 20C25.6 20.412 28 21.235 28 23.706C28 25.353 26.8 27 24 27C20 27 20 24 20 23"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path d="M9 27H7V30H9V27Z" fill={color || "black"} />
			<path d="M9 10H7V13H9V10Z" fill={color || "black"} />
			<path
				d="M12 17C12 16 12 13 8 13C5.2 13 4 14.647 4 16.294C4 18.765 5.963 19.476 8 20C9.6 20.412 12 21.235 12 23.706C12 25.353 10.8 27 8 27C4 27 4 24 4 23"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
			/>
			<path d="M42 5H40V9H42V5Z" fill={color || "black"} />
			<path d="M42 26H40V30H42V26Z" fill={color || "black"} />
		</svg>
	);
};

export default DurationIcon;
