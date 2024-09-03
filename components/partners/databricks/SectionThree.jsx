import { sectionOne } from "@/content/partner/databricks/sectionOne";
import { sectionThree } from "@/content/partner/databricks/sectionThree";
import { sectionTwo } from "@/content/partner/databricks/sectionTwo";
import React from "react";

const SectionThree = () => {
	return (
		<div className="max-w-screen-lg mx-auto py-6">
			<section>
				<div className="relative flex flex-col items-center justify-center py-10">
					<div className="-z-10 absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-0 bg-primary-100 blur-2xl"></div>
					<div className="absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
					<div className="z-10 space-y-3 px-4 max-w-screen-lf">
						<h1 className="text-center text-base sm:text-lg md:text-2xl font-semibold text-black flex flex-col">
							<span>Build Compound AI System with</span>
							<span className="text-primary-600">Databricks and Karini</span>
						</h1>
					</div>
				</div>
			</section>
			<div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 lg:px-0">
				{sectionThree.map((data, index) => {
					return (
						<div
							key={index}
							className="flex flex-col justify-between space-y-6 bg-gradient-to-r from-primary-50 to-white border border-primary-100 shadow-sm rounded-md p-4"
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
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SectionThree;
