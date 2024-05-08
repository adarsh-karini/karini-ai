import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
	blogsData,
	blogsFilterArray,
} from "@/content/blogs&announcements/blogsData";
import Image from "next/image";
import { announcementsData } from "@/content/blogs&announcements/announcementsData";
import moment from "moment";
import { GoArrowRight } from "react-icons/go";
import { WiDirectionRight } from "react-icons/wi";
import { HiOutlineArrowLongRight, HiOutlineArrowRight } from "react-icons/hi2";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const BlogsandAnn = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	let filterButtons = blogsFilterArray;
	const [filteredBlogs, setFilteredBlogs] = useState([]);
	const [view, setView] = useState("list"); // list, grid

	useEffect(() => {
		let announcements = announcementsData.filter(
			(announcement) => announcement.show
		);
		let blogs = blogsData.filter((blog) => blog.show);

		let allBlogs = [...announcements, ...blogs];

		let sortedBlogsByDate = (blogs) => {
			let result = blogs.sort((a, b) =>
				moment(b.date, "MMM Do, YYYY").diff(moment(a.date, "MMM Do, YYYY"))
			);

			return result;
		};

		let blogTypes = Array.from(
			new Set(allBlogs.map((blog) => blog.filterName))
		);
		// console.log("blogTypes", blogTypes);

		if (activeFilter === "all") {
			setFilteredBlogs(sortedBlogsByDate(allBlogs));
		} else if (activeFilter === "blogs") {
			setFilteredBlogs(sortedBlogsByDate(blogs));
		} else if (activeFilter === "announcements") {
			setFilteredBlogs(sortedBlogsByDate(announcements));
		}
	}, [activeFilter]);

	useEffect(() => {
		let blogs = blogsData.filter((blog) => blog.show);

		let announcements = announcementsData.filter(
			(announcement) => announcement.show
		);

		let allBlogs = [...blogs, ...announcements];

		let sortedBlogsByDate = allBlogs.sort((a, b) =>
			moment(b.date, "MMM Do, YYYY").diff(moment(a.date, "MMM Do, YYYY"))
		);

		// console.log("sortedBlogsByDate", sortedBlogsByDate);

		setFilteredBlogs(sortedBlogsByDate);
	}, []);

	return (
		<section className="bg-white px-4 sm:px-10 py-14">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Blogs & Announcements
				</h1>
				{/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  */}
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
									onClick={() => setActiveFilter(button)}
								>
									{button}
								</button>
							))}
						</div>
					</div>
					<div className="block md:hidden">
						<div className="grid grid-cols-1 gap-4">
							{filteredBlogs.length === 0 && (
								<p className="text-center text-black italic">
									No blogs or announcements to show...
								</p>
							)}
							{filteredBlogs.length > 0 &&
								filteredBlogs.map((blog, index) => (
									<Link key={index} href={blog.path}>
										<article className="h-full bg-white rounded-md border shadow p-4">
											<div className="flex space-x-4 space-y-0">
												<div className="w-28 sm:w-auto">
													<Image
														alt={blog.imageAltName}
														title={blog.imageAltName}
														src={blog.image}
														width={500}
														height={500}
														className="object-fill w-full h-full rounded"
													/>
												</div>
												<div className="flex-1 flex flex-col justify-between">
													<div className="space-y-1">
														<span
															className={`${
																blog.type === "blog"
																	? "bg-primary-500 border-primary-500"
																	: "bg-[#e100ff] border-[#e100ff]"
															} text-xs text-white border rounded-full py-1 px-2`}
														>
															{blog.type === "blog" ? "blog" : "announcement"}
														</span>
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
															<span>{blog.date}</span>
															<span className="hidden sm:inline">|</span>
															<span className="hidden sm:inline">
																{blog.timeToRead}
															</span>
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
							{filteredBlogs.length === 0 && (
								<p className="text-center text-black italic">
									No blogs or announcements to show...
								</p>
							)}
							{filteredBlogs.length > 0 &&
								filteredBlogs.map((blog, index) => (
									<Link key={index} href={blog.path}>
										<div className="h-full bg-white flex flex-col border border-secondary-300 rounded shadow p-4 space-y-4 hover:scale-105 transition">
											<div className="h-[300px] w-full">
												<Image
													alt={blog.imageAltName}
													title={blog.imageAltName}
													src={blog.image}
													width={500}
													height={500}
													className="object-cover rounded-md w-full h-full"
												/>
											</div>
											<div className="flex-1 flex flex-col space-y-4">
												<div className="flex-1 space-y-1">
													<span
														className={`${
															blog.type === "blog"
																? "bg-primary-500 border-primary-500"
																: "bg-[#e100ff] border-[#e100ff]"
														} text-xs text-white border rounded-full py-1 px-2`}
													>
														{blog.type === "blog" ? "blog" : "announcement"}
													</span>
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
														<span>{blog.date}</span>
														<span>|</span>
														<span>{blog.timeToRead}</span>
													</p>
												</div>
											</div>
										</div>
									</Link>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogsandAnn;
