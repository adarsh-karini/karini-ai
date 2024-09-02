import { sectionOne } from "@/content/partner/databricks/sectionOne";
import React from "react";

const SectionOne = () => {
	return (
		<div className="z-10 relative max-w-screen-lg mx-auto py-6">
			<div className="-z-10 absolute -left-20 top-52 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>

			<section>
				<div className=" flex flex-col items-center justify-center py-10">
					<div className="-z-10 absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-0 bg-primary-100 blur-2xl"></div>
					<div className="-z-10 absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
					<div className="z-10 space-y-3 px-4 max-w-screen-lf">
						<h1 className="text-center text-base sm:text-lg md:text-2xl font-semibold text-black flex flex-col">
							<span>Karini AI Generative AI Foundation powered by</span>
							<span className="text-primary-600">
								Databricks Mosaic AI Platform
							</span>
						</h1>
					</div>
				</div>
			</section>
			<div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
				{sectionOne.map((data, index) => {
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

export default SectionOne;
