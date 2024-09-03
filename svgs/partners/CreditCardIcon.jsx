import React from "react";

const CreditCardIcon = ({ width, height, bgColor, color }) => {
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
				d="M4.6875 4.6875L45.3125 45.3125"
				stroke={color || "black"}
				stroke-width="3.125"
				stroke-miterlimit="10"
			/>
			<path
				d="M30.9781 37.5H7.8125C6.95156 37.5 6.25 36.8 6.25 35.9375V20.3125H13.7906L10.6656 17.1875H6.25V14.0625C6.25 13.7016 6.39219 13.3844 6.59844 13.1203L4.37656 10.8984C3.60625 11.7344 3.125 12.8391 3.125 14.0625V35.9375C3.125 38.5219 5.22812 40.625 7.8125 40.625H34.1031L30.9781 37.5Z"
				fill={color || "black"}
			/>
			<path
				d="M42.1875 9.375H7.81252C7.64534 9.375 7.48596 9.40781 7.3219 9.425L10.3969 12.5H42.1875C43.0485 12.5 43.75 13.2 43.75 14.0625V17.1875H15.0844L18.2094 20.3125H43.75V35.9375C43.75 36.8 43.0485 37.5 42.1875 37.5H35.3969L38.5219 40.625H42.1875C44.7719 40.625 46.875 38.5219 46.875 35.9375V14.0625C46.875 11.4781 44.7719 9.375 42.1875 9.375Z"
				fill={color || "black"}
			/>
		</svg>
	);
};

export default CreditCardIcon;
