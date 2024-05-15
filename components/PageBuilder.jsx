import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

import { announcementsData } from "@/content/blogs&announcements/announcementsData";
import { blogsData } from "@/content/blogs&announcements/blogsData";
import moment from "moment";

const PageBuilder = ({ data }) => {
	const [filteredBlogs, setFilteredBlogs] = useState([]);
	const pathname = usePathname();

	const getDynamicClassName = (val) => {
		const fontSizeClass = () => {
			switch (val.fontSize) {
				case "small":
					return "text-sm";
				case "medium":
					return "text-base";
				case "large":
					return "text-lg";
				default:
					return "text-base";
			}
		};

		const fontWeightClass = () => {
			switch (val.fontWeight) {
				case "normal":
					return "font-normal";
				case "medium":
					return "font-medium";
				case "bold":
					return "font-bold";
				default:
					return "font-normal";
			}
		};

		const fontStyleClass = () => {
			switch (val.fontStyle) {
				case "normal":
					return "not-italic";
				case "italic":
					return "italic";
				default:
					return "not-italic";
			}
		};

		const fontSize = fontSizeClass();
		const fontWeight = fontWeightClass();
		const fontStyle = fontStyleClass();

		return `${fontSize} ${fontWeight} ${fontStyle}`;
	};

	useEffect(() => {
		if (!data) return;

		let blogs = blogsData.filter((blog) => blog.show);

		let announcements = announcementsData.filter(
			(announcement) => announcement.show
		);

		let allBlogs = [...blogs, ...announcements];

		let selectedBlogs = data.relatedBlogs
			?.map((blogId) => {
				return allBlogs.find((blog) => blog.path.includes(blogId));
			})
			.filter((blog) => blog !== undefined)
			.sort((a, b) =>
				moment(b.date, "MMM Do, YYYY").diff(moment(a.date, "MMM Do, YYYY"))
			);

		setFilteredBlogs(selectedBlogs);
	}, [data]);

	return (
		<section className="bg-white overflow-x-hidden space-y-10">
			<div className="relative max-w-screen-xl mx-auto space-y-10 px-4 sm:px-10 pt-0 pb-6">
				<div className="hidden lg:block absolute -left-20 -top-6 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg opacity-40"></div>
				<div className="hidden lg:block z-10 absolute -right-32 -top-16  bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg opacity-60">
					<div className="p-20 m-8 bg-white rounded-full"></div>
				</div>
				<div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0">
					<div className="z-20 flex-1 space-y-8 lg:pr-8">
						<div className="space-y-2 border-b border-b-secondary-300 pb-2">
							<h1 className="text-primary-600 text-base sm:text-lg md:text-2xl xl:text-3xl font-semibold text-left space-x-1">
								{data?.title}
							</h1>
							<div className="flex justify-between">
								<div className="sm:flex sm:space-x-4">
									{data?.publishedOn && (
										<p className="text-secondary-700 text-sm">
											Published on:
											<span className="text-black font-medium">
												{" "}
												{data?.publishedOn}
											</span>
										</p>
									)}
									{data?.postedOn && (
										<p className="text-secondary-700 text-sm">
											Posted on:
											<span className="text-black font-medium">
												{" "}
												{data?.postedOn}
											</span>
										</p>
									)}
									{data?.author && (
										<p className="text-secondary-700 text-sm">
											Author:{" "}
											<span className="text-black font-medium">
												{data?.author}
											</span>
										</p>
									)}
								</div>
								<div className="flex space-x-4 justify-center items-center">
									<p className="bg-secondary-100 border rounded-full text-black text-xs font-medium italic py-1 px-2">
										{data?.timeToRead}
									</p>
									<div className="flex space-x-2">
										<Link
											href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
												data?.SEO_data?.hreflang
											)}`}
											target="_blank"
										>
											<FaLinkedin
												size={25}
												className="cursor-pointer"
												color="#0077b5"
											/>
										</Link>
										<Link
											href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
												data?.SEO_data?.hreflang
											)}`}
											target="_blank"
										>
											<Image
												src={"/assets/images/xtwitter.png"}
												alt={"twitter"}
												target="_blank"
												width={25}
												height={25}
											/>
										</Link>
									</div>

									{/* <FiExternalLink
										size={20}
										className="text-primary-900 cursor-pointer"
										onClick={async () => {
											if (data?.SEO_data?.hreflang) {
												await navigator.clipboard.writeText(
													data?.SEO_data?.hreflang
												);
												setTimeout(async () => {
													await navigator.clipboard.writeText("");
												}, 3000);
											}
										}}
									/> */}
								</div>
							</div>
						</div>

						<div className="space-y-6">
							{data?.sections?.map(
								(value, index) =>
									value.group && (
										<div key={index} className="space-y-1">
											{value.data.map((val, index) => (
												<div key={index}>
													{val.type == "heading" && (
														<h2
															className={`${getDynamicClassName(
																val
															)} text-black`}
														>
															{val.value}
														</h2>
													)}
													{val.type == "heading3" && (
														<h3
															className={`${getDynamicClassName(
																val
															)} text-black`}
														>
															{val.value}
														</h3>
													)}
													{val.type == "paragraph" && (
														<p
															className={`${getDynamicClassName(
																val
															)} text-secondary-700`}
															dangerouslySetInnerHTML={{
																__html: val.value,
															}}
														></p>
													)}
													{val.type == "list" && (
														<div
															className={`${getDynamicClassName(
																val
															)} text-secondary-700 list-disc`}
															dangerouslySetInnerHTML={{
																__html: val.value,
															}}
														></div>
													)}
													{val.type == "image" && (
														<div className="space-y-1">
															<div className="flex justify-center items-center">
																<Image
																	quality={100}
																	src={val.path}
																	height={val.width}
																	width={val.height}
																	alt={val.imageAltName}
																	title={val.imageAltName}
																	className="rounded border p-2"
																/>
															</div>
															{val.caption && (
																<small className="block text-center text-secondary-600 text-sm italic font-medium">
																	{val.caption}
																</small>
															)}
														</div>
													)}
													{val.type == "base_image" && (
														<div className="space-y-1">
															<div className="flex justify-center">
																<img
																	src={val.path}
																	height={val.width}
																	width={val.height}
																	alt={val.imageAltName}
																	title={val.imageAltName}
																	className="rounded border p-2"
																/>
															</div>
															{val.caption && (
																<small className="block text-center text-secondary-600 text-sm italic font-medium">
																	{val.caption}
																</small>
															)}
														</div>
													)}
													{val.type == "gif" && (
														<div className="space-y-1">
															<div className="flex justify-center">
																<img
																	src={val.path}
																	height={val.width}
																	width={val.height}
																	alt={val.imageAltName}
																	title={val.imageAltName}
																	className="rounded border border-secondary-300"
																/>
															</div>
															{val.caption && (
																<small className="block text-center text-secondary-600 text-sm italic font-medium">
																	{val.caption}
																</small>
															)}
														</div>
													)}
												</div>
											))}
										</div>
									)
							)}
						</div>
						{data?.aboutAuthor && (
							<div className="bg-gradient-to-br from-primary-50 to-white space-y-2 border p-5 rounded">
								<p className="text-lg text-black font-medium">
									About the Author
								</p>
								<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row space-x-2">
									<div className="pr-2 sm:border-r border-secondary-300">
										<Image
											src={data?.aboutAuthor.authorImage}
											alt="blog author image"
											width={100}
											height={100}
											className="h-20 w-20 rounded-md shadow-xl object-contain"
											priority={true}
											quality={100}
										/>
									</div>
									<p
										className="flex-1 text-base text-secondary-800"
										dangerouslySetInnerHTML={{
											__html: data?.aboutAuthor.authorInfo,
										}}
									></p>
								</div>
							</div>
						)}
					</div>
					{filteredBlogs && filteredBlogs.length > 0 && (
						<div className="lg:w-1/3 z-20">
							<div className="max-w-screen-lg mx-auto lg:space-y-4 lg:pl-8">
								<p className="text-lg font-semibold text-black py-2 border-b border-b-secondary-300">
									Related posts
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
									{filteredBlogs &&
										filteredBlogs.length > 0 &&
										filteredBlogs.map((blog, index) => (
											<Link key={index} href={blog.path}>
												<article className="h-full bg-white rounded-md border shadow p-4">
													<div className="flex space-x-4 space-y-0">
														<div className="flex items-center w-28">
															<Image
																alt={blog.imageAltName}
																title={blog.imageAltName}
																src={blog.image}
																width={500}
																height={500}
																className="w-full rounded"
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
																	{blog.type === "blog"
																		? "blog"
																		: "announcement"}
																</span>
																<h3 className="text-sm font-semibold text-secondary-900 hover:text-primary-600 line-clamp-2">
																	{blog.title}
																</h3>

																{/* <p className="mt-2 line-clamp-3 text-xs sm:text-sm md:text-base text-secondary-700">
														{blog.description}
													</p> */}
															</div>

															<div className="flex justify-between items-end">
																<div className="group mt-4 inline-flex items-center gap-1 text-xs md:text-sm font-medium text-primary-600">
																	<span className="flex-1">Read More</span>
																	<GoArrowRight
																		size={20}
																		className="text-primary-600"
																	/>
																</div>
																{/* <p className="text-primary-600 text-xs md:text-sm font-medium space-x-1 md:space-x-2">
														<span>{blog.date}</span>
														<span className="hidden sm:inline">|</span>
														<span className="hidden sm:inline">
															{blog.timeToRead}
														</span>
													</p> */}
															</div>
														</div>
													</div>
												</article>
											</Link>
										))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default PageBuilder;
