import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import moment from "moment";
import { GoArrowRight } from "react-icons/go";
import { WiDirectionRight } from "react-icons/wi";
import { HiOutlineArrowLongRight, HiOutlineArrowRight } from "react-icons/hi2";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Blogs = ({ postMetadata }) => {
	let filterButtons = ["all", "blog", "announcement", "webinar"];

	const [activeFilter, setActiveFilter] = useState("all");
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [blogsArray, setBlogsArray] = useState([]);
	const [webinarsArray, setWebinarsArray] = useState([]);
	const [pages, setPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const handlePagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		let posts = postMetadata.filter((post) => post.show);

		const sortedPostsByDate = (posts) => {
			return posts.sort((a, b) => moment(b.date).diff(moment(a.date)));
		};

		const filterPosts = (filter) => {
			if (filter === "all") {
				return posts;
			}
			return postMetadata.filter((post) => post.type === filter); // removing 's' from the filter
		};

		let filtered = filterPosts(activeFilter);
		let pagesCount = Math.ceil(filtered.length / 6);
		setPages(pagesCount);
		setFilteredPosts(sortedPostsByDate(filtered));
	}, [activeFilter, postMetadata]);

	useEffect(() => {
		let postsLength = filteredPosts.length;

		let sliceStart = (currentPage - 1) * 6;
		let sliceEnd = currentPage * 6;

		//get first 6 blogs
		let postsArray = filteredPosts.slice(sliceStart, sliceEnd);

		setBlogsArray(postsArray);
	}, [filteredPosts, currentPage]);

	useEffect(() => {
		let posts = postMetadata.filter((post) => post.show);

		let sortedPostsByDate = posts.sort((a, b) => {
			const momentA = moment(a.date);
			const momentB = moment(b.date);

			return momentB.diff(momentA);
		});

		setFilteredPosts(sortedPostsByDate);

		let pagesCount = Math.ceil(sortedPostsByDate.length / 6);

		setPages(pagesCount);
	}, []);

	return (
		<section className="bg-white px-4 sm:px-10 py-14">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Blogs & Announcements
				</h1>
				<div className="space-y-6">
					<div className="pb-2 border-b border-b-secondary-200">
						<div className="space-x-2">
							{filterButtons.map((button, index) => (
								<button
									key={index}
									className={`${
										activeFilter === button
											? "bg-primary-600 text-white"
											: "bg-secondary-50 text-secondary-700 hover:bg-primary-100"
									} text-sm px-2 py-1 rounded border transition-all`}
									onClick={() => {
										setActiveFilter(button);
										setCurrentPage(1);
									}}
								>
									{button === "all" ? "all" : `${button}s`}
								</button>
							))}
						</div>
					</div>
					<div className="block md:hidden">
						<div className="grid grid-cols-1 gap-4">
							{blogsArray.length === 0 && (
								<p className="text-center text-black italic">
									No blogs or announcements to show...
								</p>
							)}
							{blogsArray.length > 0 &&
								blogsArray.map((blog, index) => (
									<Link key={index} href={`/${blog.type}s/${blog.slug}`}>
										<article className="h-full bg-white rounded-md border shadow p-4">
											<div className="flex space-x-4 space-y-0">
												<div className="flex items-center w-28">
													<Image
														alt={blog.blog_image_alt_name}
														title={blog.blog_image_alt_name}
														src={blog.blog_image}
														width={500}
														height={500}
														className="w-full rounded"
													/>
												</div>
												<div className="flex-1 flex flex-col justify-between">
													<div className="space-y-1">
														<div className="flex items-center justify-between">
															<span
																className={`${
																	blog.type === "blog"
																		? "bg-primary-500 border-primary-500"
																		: "bg-[#e100ff] border-[#e100ff]"
																} text-xs text-white border rounded-full py-1 px-2`}
															>
																{blog.type === "blog" ? "blog" : "announcement"}
															</span>
															<div className="flex items-center space-x-2 px-2 py-1 rounded-full border shadow text-secondary-600 text-xs">
																<IoCalendarNumberOutline
																	size={14}
																	className=""
																/>
																<p className="font-medium">{blog.date}</p>
															</div>
														</div>
														<h3 className="text-sm sm:text-base lg:text-xl font-semibold text-secondary-900 hover:text-primary-600 line-clamp-2">
															{blog.title}
														</h3>

														<p className="mt-2 line-clamp-3 text-xs sm:text-sm md:text-base text-secondary-700">
															{blog.description}
														</p>
													</div>

													<div className="flex justify-between items-end">
														<div className="group mt-4 inline-flex items-center gap-1 text-xs md:text-sm font-medium text-primary-600">
															<span className="flex-1">Read More</span>
															<GoArrowRight
																size={20}
																className="text-primary-600"
															/>
														</div>
														<p className="text-primary-600 text-xs md:text-sm font-medium space-x-1 md:space-x-2">
															<span className="">{blog.time_to_read}</span>
														</p>
													</div>
												</div>
											</div>
										</article>
									</Link>
								))}
						</div>
					</div>
					<div className="hidden md:block">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{blogsArray.length === 0 && (
								<p className="text-center text-black italic">
									No blogs or announcements to show...
								</p>
							)}
							{blogsArray.length > 0 &&
								blogsArray.map((blog, index) => (
									<Link key={index} href={`/${blog.type}s/${blog.slug}`}>
										<div className="h-full bg-white flex flex-col border border-secondary-300 rounded shadow p-4 space-y-4 hover:scale-105 transition">
											<div className="h-[300px] w-full">
												<Image
													alt={blog.blog_image_alt_name}
													title={blog.blog_image_alt_name}
													src={blog.blog_image}
													width={500}
													height={500}
													className="object-cover rounded-md h-full"
												/>
											</div>
											<div className="flex-1 flex flex-col space-y-4">
												<div className="whitespace-nowrap overflow-x-auto space-x-3">
													{blog.authors.length > 0 &&
														blog.authors.map((author, index) => (
															<div
																key={index}
																className="inline-flex items-center space-x-2"
															>
																<Image
																	alt={author.name}
																	src={author.image}
																	height={30}
																	width={30}
																	className="rounded-full"
																/>
																<p className="text-xs text-secondary-600 italic whitespace-nowrap">
																	{author.name}
																</p>
															</div>
														))}
												</div>
												<div className="flex-1 space-y-1">
													<div className="flex items-center justify-between">
														<span
															className={`${
																blog.type === "blog"
																	? "bg-primary-500 border-primary-500"
																	: blog.type === "webinar"
																	? "bg-blue-500 border-blue-500"
																	: "bg-[#e100ff] border-[#e100ff]"
															} text-xs text-white border rounded-full py-1 px-2`}
														>
															{blog.type}
														</span>
														<div className="flex items-center space-x-2 px-2 py-1 rounded-full border shadow text-secondary-600 text-xs">
															<IoCalendarNumberOutline size={14} className="" />
															<p className="font-medium">{blog.date}</p>
														</div>
													</div>
													<h3 className="text-base text-black font-medium hover:text-primary-600 hover:underline">
														{blog.title}
													</h3>
													<p className="text-sm text-secondary-700 line-clamp-2">
														{blog.description}
													</p>
												</div>
												<div className="flex justify-between items-center">
													<div className="flex-1 md:flex-none flex items-center space-x-1">
														<span className="text-xs text-primary-600 text-left font-medium hover:underline">
															Read More
														</span>
														<MdOutlineArrowRightAlt
															size={20}
															className="text-primary-600"
														/>
													</div>
													<p className="flex-1 md:flex-none text-primary-600 text-xs text-right font-medium space-x-1">
														<span>{blog.time_to_read}</span>
													</p>
												</div>
											</div>
										</div>
									</Link>
								))}
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

export default Blogs;
