import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SolutionFilters from "./SolutionFilters";

const Solutions = ({ solutionsMetadata, solutionTypes }) => {
	const [filters, setFilters] = useState([]);
	const [activeFilters, setActiveFilters] = useState([]);
	const [filteredSolutions, setFilteredSolutions] = useState([]);
	const [solutionsArray, setSolutionsArray] = useState([]);
	const [pages, setPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleFilterChange = (filter) => {
		let result;
		if (activeFilters.includes(filter)) {
			result = activeFilters.filter((item) => item !== filter);
			setActiveFilters(result);
		} else {
			// Add the filter if not active
			result = [...activeFilters, filter];
			setActiveFilters(result);
		}
	};

	const handleResetFilters = () => {
		setActiveFilters([]);
	};

	useEffect(() => {
		let posts = solutionsMetadata.filter((post) => post.show);

		const sortedPostsByDate = (posts) => {
			return posts.sort((a, b) => moment(b.date).diff(moment(a.date)));
		};

		if (activeFilters.length === 0) {
			setFilteredSolutions(sortedPostsByDate(posts));
			return;
		}

		let all_tags = [];
		posts.map((solution) => {
			let tags = solution.tags;
			all_tags.push(...tags);
		});

		all_tags = [...new Set(all_tags)];

		const filterPosts = (filter) => {
			let result;

			return posts.filter((post) => {
				return filter.some((tag) => post.tags.includes(tag));
			});
		};

		let filtered = filterPosts(activeFilters);
		let pagesCount = Math.ceil(filtered.length / 6);
		setPages(pagesCount);
		setFilteredSolutions(sortedPostsByDate(filtered));
	}, [activeFilters, solutionsMetadata]);

	useEffect(() => {
		let postsLength = filteredSolutions.length;

		let sliceStart = (currentPage - 1) * 6;
		let sliceEnd = currentPage * 6;

		let postsArray = filteredSolutions.slice(sliceStart, sliceEnd);

		setSolutionsArray(postsArray);
	}, [filteredSolutions, currentPage]);

	useEffect(() => {
		let posts = solutionsMetadata.filter((post) => post.show);

		let sortedPostsByDate = posts.sort((a, b) => {
			const momentA = moment(a.date);
			const momentB = moment(b.date);

			return momentB.diff(momentA);
		});

		setFilteredSolutions(sortedPostsByDate);

		let pagesCount = Math.ceil(sortedPostsByDate.length / 6);

		setPages(pagesCount);
	}, []);

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
					<div className="flex flex-col md:flex-row items-start">
						<div className="w-full md:w-1/4 text-black p-4 border-r space-y-2">
							<SolutionFilters
								filters={filters}
								setFilters={setFilters}
								handleResetFilters={handleResetFilters}
								handleFilterChange={handleFilterChange}
								activeFilters={activeFilters}
								solutionsMetadata={solutionsMetadata}
								solutionTypes={solutionTypes}
							/>
						</div>

						<div className="w-full md:flex-1 text-black p-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{solutionsArray &&
									solutionsArray.length > 0 &&
									solutionsArray.map((solution, index) => (
										<div
											key={index}
											className="h-full flex flex-col rounded overflow-hidden"
										>
											<div
												className="h-2 w-full"
												style={{
													backgroundColor:
														solution?.card_data?.theme_color || "#7c3aed",
												}}
											></div>
											<div className="flex-1 flex flex-col p-4 space-y-3 border border-secondary-300 rounded-b">
												<div className="h-[70px] w-full">
													<Image
														alt={solution?.card_data?.image_alt_name}
														title={solution?.card_data?.image_alt_name}
														src={solution?.card_data?.image}
														width={70}
														height={70}
														className="object-cover rounded-md h-full"
													/>
												</div>
												<div className="flex-1 flex flex-col space-y-3">
													<div className="flex-1 space-y-2">
														<p className="text-sm font-medium text-black">
															{solution?.card_data.title}
														</p>
														<p className="text-xs text-secondary-600 line-clamp-3">
															{solution?.card_data.description}
														</p>
													</div>
													<div className="flex justify-end items-center">
														<Link
															href={`/solutions/${solution.type}/${solution.slug}`}
														>
															<div className="flex-1 md:flex-none flex items-center space-x-1 cursor-pointer">
																<span className="text-xs text-primary-600 text-left font-medium hover:underline">
																	Explore more
																</span>
																<MdOutlineArrowRightAlt
																	size={20}
																	className="text-primary-600"
																/>
															</div>
														</Link>
													</div>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
					<div className="py-6 flex justify-center items-center">
						<div className="flex items-center space-x-1">
							{pages &&
								pages > 1 &&
								Array.from({ length: pages }).map((_, i) => (
									<button
										key={i}
										type="button"
										className={`${
											i + 1 === currentPage
												? "bg-primary-600 text-white"
												: "bg-white border-secondary-300 text-black hover:bg-primary-50 hover:text-primary-600 hover:border-primary-400 transition"
										} py-1 px-3 border rounded text-sm`}
										onClick={() => handlePagination(i + 1)}
									>
										{i + 1}
									</button>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Solutions;
