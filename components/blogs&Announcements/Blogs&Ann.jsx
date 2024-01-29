import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
	blogsData,
	blogsFilterArray,
} from "@/content/blogs&announcements/blogsData";
import Image from "next/image";
import { announcementsData } from "@/content/blogs&announcements/announcementsData";
import moment from "moment";

const BlogsandAnn = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	let filterButtons = blogsFilterArray;
	const [filteredBlogs, setFilteredBlogs] = useState([]);

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
		console.log("blogTypes", blogTypes);

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
					<div>
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
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
						{filteredBlogs.length === 0 && (
							<p className="text-center text-black italic">
								No blogs or announcements to show...
							</p>
						)}
						{filteredBlogs.length > 0 &&
							filteredBlogs.map((blog, index) => (
								<Link key={index} href={blog.path}>
									<article className="h-full bg-white rounded-md border shadow p-4">
										<div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
											<div className="flex justify-center">
												<Image
													alt="blog-img"
													src={blog.image}
													width={blog.imageWidth}
													height={blog.imageHeight}
													className="object-contain"
												/>
											</div>
											<div className="flex flex-col justify-between">
												<div className="space-y-1">
													<span
														className={`${
															blog.type === "blog"
																? "bg-primary-500"
																: "bg-[#e100ff]"
														} text-xs text-white border rounded-full py-1 px-2`}
													>
														{blog.type === "blog" ? "blog" : "announcement"}
													</span>
													<h3 className="text-xl font-semibold text-secondary-900 hover:text-primary-600">
														{blog.title}
													</h3>

													<p className="mt-2 line-clamp-3 text-base text-secondary-700">
														{blog.description}
													</p>
												</div>

												<div className="flex justify-between items-end">
													<div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
														Read More
														<span
															aria-hidden="true"
															className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
														>
															&rarr;
														</span>
													</div>
													<p className="text-primary-600 text-sm font-medium space-x-2">
														<span>{blog.date}</span>
														<span>|</span>
														<span>{blog.timeToRead}</span>
													</p>
												</div>
											</div>
										</div>
									</article>
								</Link>
							))}
					</div>
					{/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
						{blogsData.map((blog, index) => (
							<Link key={index} href={blog.path}>
								<article className="bg-white rounded-md border shadow p-4">
									<div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
										<div className="flex justify-center">
											<Image
												alt="blog-img"
												src={blog.image}
												width={500}
												height={400}
												className="object-contain"
											/>
										</div>
										<div className="flex flex-col justify-between">
											<div>
												<h3 className="text-base font-semibold text-secondary-900 hover:text-primary-600">
													{blog.title}
												</h3>

												<p className="mt-2 line-clamp-3 text-sm/relaxed text-secondary-700">
													{blog.description}
												</p>
											</div>

											<div className="flex justify-between items-end">
												<div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
													Read More
													<span
														aria-hidden="true"
														className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
													>
														&rarr;
													</span>
												</div>
												<p className="text-secondary-500 text-xs">
													{blog.dateandDuration}
												</p>
											</div>
										</div>
									</div>
								</article>
							</Link>
						))}
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default BlogsandAnn;
