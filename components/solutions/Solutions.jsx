import { solutionsData } from "@/content/solutions/solutionsData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoReload } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Solutions = () => {
	const [filters, setFilters] = useState([
		"Healthcare",
		"Multi-Modal",
		"Text-2-SQL",
		"Generative BI",
	]);
	const [activeFilters, setActiveFilters] = useState([]);

	const handleFilterChange = (filter) => {
		if (activeFilters.includes(filter)) {
			// Remove the filter if already active
			setActiveFilters(activeFilters.filter((item) => item !== filter));
		} else {
			// Add the filter if not active
			setActiveFilters([...activeFilters, filter]);
		}
	};

	const handleResetFilters = () => {
		setActiveFilters([]);
	};

	return (
		<section className="bg-white px-4 sm:px-10 py-20 overflow-hidden">
			<div className="relative z-10 max-w-screen-xl mx-auto space-y-10">
				{/* <div className="-z-10 absolute -right-20 -top-10 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
				<div className="-z-10 absolute -left-32 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
					<div className="p-20 m-8 bg-white rounded-full"></div>
				</div> */}
				<h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Explore Solutions
				</h1>

				<div>
					<div className="flex items-start">
						<div className="w-1/4 text-black p-4 border-r space-y-2">
							<div className="flex items-center justify-between pb-2 border-b">
								<p className="text-base font-bold">Filters</p>
								<button
									className="flex items-center space-x-1 px-2 py-1 text-xs text-secondary-700 bg-secondary-100 border rounded shadow-sm"
									onClick={handleResetFilters}
								>
									<IoReload size={14} className="text-secondary-700" />
									<span>Reset filters</span>
								</button>
							</div>
							<div className="flex flex-col space-y-2">
								{filters &&
									filters.length > 0 &&
									filters.map((filter, index) => (
										<label key={index} className="space-x-1">
											<input
												type="checkbox"
												className="accent-primary-600"
												checked={activeFilters.includes(filter)}
												onChange={() => handleFilterChange(filter)}
											/>
											<span className="text-sm md:text-base">{filter}</span>
										</label>
									))}
							</div>
						</div>
						<div className="flex-1 text-black p-4">
							{/* <p>Active Filters: {activeFilters.join(", ") || "None"}</p> */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{solutionsData &&
									solutionsData.length > 0 &&
									solutionsData.map((solution, index) => (
										<Link
											key={index}
											href={`/solutions/${solution.card_data.path}`}
										>
											<div className="h-full bg-white flex flex-col border border-secondary-300 rounded shadow p-4 space-y-4 hover:scale-105 transition">
												<div className="h-[300px] w-full">
													<Image
														alt={solution.card_data.image_alt_tag}
														title={solution.card_data.image_alt_tag}
														src={solution.card_data.image}
														width={500}
														height={500}
														className="object-cover rounded-md h-full"
													/>
												</div>
												<div className="flex-1 flex flex-col space-y-4">
													<h3 className="text-base text-black font-medium hover:text-primary-600 hover:underline">
														{solution.card_data.title}
													</h3>
												</div>
												<div className="flex justify-end items-center">
													<div className="flex-1 md:flex-none flex items-center space-x-1">
														<span className="text-xs text-primary-600 text-left font-medium hover:underline">
															Read More
														</span>
														<MdOutlineArrowRightAlt
															size={20}
															className="text-primary-600"
														/>
													</div>
													{/* <p className="flex-1 md:flex-none text-primary-600 text-xs text-right font-medium space-x-1">
														<span>{blog.time_to_read}</span>
													</p> */}
												</div>
											</div>
										</Link>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Solutions;
