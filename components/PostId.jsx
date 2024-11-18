import React from "react";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import moment from "moment";
import { IoCalendarNumberOutline } from "react-icons/io5";

const PostId = ({ post }) => {
	return (
		<>
			<div className="bg-primary-50 border-b border-b-primary-100">
				<div className="max-w-screen-xl mx-auto p-4 space-y-6">
					<Link href="/blogs">
						<button className="flex text-primary-600">
							<HiOutlineArrowNarrowLeft className="mr-2 h-4 w-4" />{" "}
							<span className="text-xs">Back</span>
						</button>
					</Link>
					<div className="flex space-x-6">
						<div>
							{post.data.blog_image ? (
								<Image
									src={post.data.blog_image}
									alt={post.data.blog_image_alt_name}
									title={post.data.blog_image_alt_name}
									width={200}
									height={500}
									className="rounded-md w-[100px] sm:w-[200px]"
									priority
								/>
							) : (
								<div className="bg-primary-300 rounded-md w-[100px] sm:w-[200px] h-[100px] sm:h-[200px]"></div>
							)}
						</div>
						<div className="flex-1 flex flex-col space-y-2">
							<h1 className="text-black text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-tighter pb-2 border-b border-b-muted leading-normal">
								{post.data.title}
							</h1>
							<div className="flex-1 flex flex-col justify-between">
								<div className="space-y-4 py-3">
									<div className="flex items-center space-x-4">
										{post.data.authors.length > 0 &&
											post.data.authors.map((author, index) => (
												<div
													key={index}
													className="flex items-center space-x-2"
												>
													<Image
														alt={author.name}
														src={author.image}
														height={30}
														width={30}
														className="rounded-full"
														priority
													/>
													<Link
														href={author.linked_in}
														target="_blank"
														className="hover:underline hover:decoration-primary-600 underline-offset-2"
													>
														<span className="text-sm text-primary-600 font-medium">
															{author.name}
														</span>
													</Link>
												</div>
											))}
									</div>
									<div className="space-y-2">
										<p className="space-x-1 text-xs md:text-sm">
											<span className="text-secondary-700">Published on -</span>
											<span className="text-xs text-secondary-900 font-medium">
												{moment(post.data.date).format("MMMM Do YYYY")}
											</span>
										</p>
									</div>
								</div>
								<div className="pt-2 border-t flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
									<div>
										<span className="bg-secondary-50 space-x-1 text-[10px] md:text-xs text-black/70 px-2 py-1 border border-black/20 rounded-full">
											{post.data.time_to_read}
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<p className="text-xs md:text-sm text-secondary-600 font-medium">
											Share this post
										</p>
										<div className="flex items-center space-x-2">
											<button>
												<Link
													href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
														post?.data?.SEO_data.hreflang
													)}`}
													target="_blank"
												>
													<FaLinkedin
														size={20}
														className="text-[#0a66c2] cursor-pointer underline"
													/>
												</Link>
											</button>
											<button>
												<Link
													href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
														post?.data?.SEO_data.hreflang
													)}`}
													target="_blank"
												>
													<FaXTwitter
														size={20}
														className="text-black cursor-pointer underline"
													/>
												</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto">
				<div className="px-4 flex flex-col lg:flex-row lg:space-x-6 ">
					<article className="flex-1 prose max-w-max mx-auto py-2">
						<Markdown>{post.content}</Markdown>
					</article>
					{post.related_post_data && post.related_post_data.length > 0 && (
						<div className="w-full lg:w-1/4 py-8">
							<div className="space-y-2">
								<div className="text-lg text-primary-600 font-semibold leading-normal">
									Related Posts
								</div>
								<div className="h-[1px] w-full bg-secondary-200"></div>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
									{post.related_post_data.map((post, index) => (
										<div
											key={index}
											className="flex backdrop-blur-md border shadow-md rounded space-x-4 p-4"
										>
											<div className="w-20 flex items-center">
												{post.blog_image ? (
													<Image
														alt={post.blog_image_alt_name}
														title={post.blog_image_alt_name}
														src={post.blog_image}
														width={300}
														height={300}
														className="w-full rounded"
														priority
													/>
												) : (
													<div className="w-full h-20 rounded bg-primary-300"></div>
												)}
											</div>
											<div className="flex-1 flex flex-col justify-between">
												<div className="text-sm text-secondary-700 font-normal leading-normal line-clamp-2">
													{post.title}
												</div>
												<div className="flex justify-between items-center">
													<div className="flex items-center space-x-2 px-2 py-1 rounded-full border shadow text-secondary-700 text-xs">
														<IoCalendarNumberOutline size={14} className="" />
														<p className="text-nowrap text-xs">{post.date}</p>
													</div>
													<button className="text-xs text-primary-600 underline underline-offset-1 font-medium">
														<Link href={`/${post.type}s/${post.slug}`}>
															Read more
														</Link>
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default PostId;
