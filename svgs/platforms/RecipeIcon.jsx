import React from "react";

const RecipeIcon = ({ height, width, color, bgColor }) => {
	return (
		<svg
			width={width || "50"}
			height={height || "50"}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.2895 12.6842C20.2895 12.6842 20.2895 18.9004 20.2895 20.5C20.2895 22.1048 9 35.805 9 40.7342C9 45.6842 15.6 45.6842 15.6 45.6842H35.4C35.4 45.6842 42 45.6842 42 40.7342C42 35.805 30.7105 22.1048 30.7105 20.5C30.7105 18.9004 30.7105 12.6842 30.7105 12.6842"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M30.7105 42.2105C32.629 42.2105 34.1842 40.6553 34.1842 38.7368C34.1842 36.8184 32.629 35.2632 30.7105 35.2632C28.7921 35.2632 27.2368 36.8184 27.2368 38.7368C27.2368 40.6553 28.7921 42.2105 30.7105 42.2105Z"
				stroke={color || "black"}
				stroke-width="1.9995"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M21.1579 37C22.5967 37 23.7632 35.8336 23.7632 34.3947C23.7632 32.9559 22.5967 31.7895 21.1579 31.7895C19.719 31.7895 18.5526 32.9559 18.5526 34.3947C18.5526 35.8336 19.719 37 21.1579 37Z"
				stroke={color || "black"}
				stroke-width="2.0325"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M28.1053 9.21053C29.5441 9.21053 30.7105 8.04411 30.7105 6.60526C30.7105 5.16642 29.5441 4 28.1053 4C26.6664 4 25.5 5.16642 25.5 6.60526C25.5 8.04411 26.6664 9.21053 28.1053 9.21053Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M25.5 21.3684C26.9388 21.3684 28.1053 20.202 28.1053 18.7632C28.1053 17.3243 26.9388 16.1579 25.5 16.1579C24.0612 16.1579 22.8947 17.3243 22.8947 18.7632C22.8947 20.202 24.0612 21.3684 25.5 21.3684Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M32.4474 9.21053H18.5526V12.6842H32.4474V9.21053Z"
				stroke={color || "black"}
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M35.0526 28.3158H15.9474"
				stroke={color || "black"}
				stroke-width="2.005"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
		</svg>
	);
};

export default RecipeIcon;
