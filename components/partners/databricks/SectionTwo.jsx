import { sectionOne } from "@/content/partner/databricks/sectionOne";
import { sectionTwo } from "@/content/partner/databricks/sectionTwo";
import IconOne from "@/svgs/services/IconOne";
import IconThree from "@/svgs/services/IconThree";
import IconTwo from "@/svgs/services/IconTwo";
import React from "react";
import { SiDatabricks } from "react-icons/si";

const SectionTwo = () => {
	return (
		<div className="max-w-screen-lg mx-auto py-6">
			<section>
				<div className="relative flex flex-col items-center justify-center py-10">
					<div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-0 bg-primary-100 blur-2xl"></div>
					<div className="absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
					<div className="z-10 space-y-3 px-4 max-w-screen-lf">
						<h1 className="text-center text-base sm:text-lg md:text-2xl font-semibold text-black flex flex-col">
							<span>
								Enterprise challenges during experimenting and deploying
							</span>
							<span className="text-primary-600">Generative AI (GenAI)</span>
						</h1>
					</div>
				</div>
			</section>
			<div className="z-10 relative space-y-6 px-4 lg:px-0">
				<div className="-z-10 absolute -right-20 bottom-32 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
					<div className="p-20 m-8 bg-white rounded-full"></div>
				</div>
				{sectionTwo.map((data, index) => {
					return (
						<>
							{/* <div
								key={index}
								className="flex flex-col justify-between space-y-6 bg-gradient-to-r from-primary-50 to-white border border-primary-100 shadow rounded-md p-4"
							>
								<div className="space-y-2">
									<div className="flex space-x-4">
										<h3 className="text-primary-600 font-semibold sm:text-base">
											{data.title}
										</h3>
									</div>
									<p className="text-secondary-600 text-sm leading-relaxed">
										{data.overview}
									</p>
								</div>
							</div> */}
							<div className="bg-gradient-to-r from-primary-50 to-white py-6 px-4 rounded-md flex items-center space-x-4">
								<div>
									{index === 0 && (
										<IconOne width={40} height={40} color={"#7c3aed"} />
									)}
									{index === 1 && (
										<IconTwo width={40} height={40} color={"#7c3aed"} />
									)}
									{index === 2 && (
										<IconThree width={40} height={40} color={"#7c3aed"} />
									)}
								</div>
								<div className="flex-1 space-y-2">
									<h3 className="text-black font-semibold text-base">
										{data.title}
									</h3>
									<p className="text-secondary-700 text-sm leading-relaxed">
										{data.overview}
									</p>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default SectionTwo;
