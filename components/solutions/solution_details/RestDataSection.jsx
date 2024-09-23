import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const RestDataSection = ({ data }) => {
	console.log("data_ch", data);
	return (
		<section className="bg-white px-4 sm:px-10 py-20">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<div className="flex flex-col space-y-4">
					{data.map((item, index) => (
						<div
							key={index}
							className="flex items-center space-x-2 text-primary-600"
						>
							{/* <IoCheckmarkCircle size={25} /> */}
							<p className="flex-1 text-secondary-700 text-sm">{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RestDataSection;
