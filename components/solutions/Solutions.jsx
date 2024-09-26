import { solutionsData } from "@/content/solutions/solutionsData";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SolutionFilters from "./SolutionFilters";

const Solutions = ({ solutionsMetadata, solutionTypes }) => {
	console.log("solutionsMetadata", solutionsMetadata);
	console.log("solutionTypes", solutionTypes);

	const [filters, setFilters] = useState([]);
	const [activeFilters, setActiveFilters] = useState([]);
	const [filteredSolutions, setFilteredSolutions] = useState([]);
	const [solutionsArray, setSolutionsArray] = useState([]);
	const [pages, setPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	console.log("filters", filters);
	console.log("activeFilters", activeFilters);
	console.log("filteredSolutions", filteredSolutions);
	console.log("solutionsArray", solutionsArray);

	const handleFilterChange = (filter) => {
		console.log("filterbbb", filter);
		let result;
		if (activeFilters.includes(filter)) {
			result = activeFilters.filter((item) => item !== filter);
			setActiveFilters(result);
		} else {
			// Add the filter if not active
			result = [...activeFilters, filter];
			setActiveFilters(result);
		}

		console.log("result123_final", result);
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

		console.log("posts123", posts);

		let all_tags = [];
		posts.map((solution) => {
			let tags = solution.tags;
			all_tags.push(...tags);
		});

		all_tags = [...new Set(all_tags)];
		console.log("all_tags", all_tags);

		const filterPosts = (filter) => {
			console.log("54_tags", all_tags);
			console.log("54_filter", filter);
			let result;

			return posts.filter((post) => {
				console.log("post111", post);
				return filter.some((tag) => post.tags.includes(tag));
			});
		};

		let filtered = filterPosts(activeFilters);
		console.log("filtered123", filtered);
		let pagesCount = Math.ceil(filtered.length / 6);
		setPages(pagesCount);
		setFilteredSolutions(sortedPostsByDate(filtered));
	}, [activeFilters, solutionsMetadata]);

	useEffect(() => {
		let postsLength = filteredSolutions.length;

		let sliceStart = (currentPage - 1) * 6;
		let sliceEnd = currentPage * 6;

		console.log("filteredSolutionseee", filteredSolutions);

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
							{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
												</div>
											</div>
										</Link>
									))}
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Solutions;
