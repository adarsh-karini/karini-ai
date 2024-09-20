import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import Head from "next/head";
import { Poppins } from "next/font/google";
import BreadCrumb from "@/components/BreadCrumb";
import Script from "next/script";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import moment from "moment";
import { IoCalendarNumberOutline } from "react-icons/io5";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const PostPage = ({ web_id, post }) => {
	return (
		<>
			<Head>
				<title>{post?.data?.SEO_title}</title>
				{Object.keys(post?.data?.SEO_data.metadata).length > 0 &&
					Object.entries(post?.data?.SEO_data.metadata).map(([key, value]) => {
						let keyName = /twitter:/.test(key);
						if (keyName) {
							return <meta key={key} name={key} content={value} />;
						} else {
							return (
								<meta key={key} name={key} property={key} content={value} />
							);
						}
					})}
				<meta name="robots" content="index,follow" />

				<link
					rel="alternate"
					href={post?.data?.SEO_data.hreflang}
					hrefLang="en-us"
				/>
				<link rel="canonical" href={post?.data?.SEO_data.canonicalLink} />
				{/* Schema Markup */}
				{post?.data?.SEO_data?.schemaMarkup && (
					<script
						id="schema-markup-blog"
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: `${JSON.stringify(post?.data?.SEO_data?.schemaMarkup)}`,
						}}
					></script>
				)}
				{/* End Schema Markup */}
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				{/* <BreadCrumb title={post.data.title} />
				<div className="h-10 w-full bg-black"></div> */}
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
								<Image
									src={post.data.blog_image}
									alt={post.data.blog_image_alt_name}
									width={200}
									height={500}
									className="rounded-md w-[100px] sm:w-[200px]"
									priority
								/>
							</div>
							<div className="flex-1 flex flex-col space-y-2">
								<h1 className="text-black text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-tighter pb-2 border-b border-b-muted leading-normal">
									{post.data.title}
								</h1>
								<div className="flex-1 flex flex-col justify-between">
									<div className="space-y-4 py-3">
										<div className="space-x-1 text-sm">
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
										</div>
										<div className="space-y-2">
											<p className="space-x-1 text-xs md:text-sm">
												<span className="text-secondary-700">
													Published on -
												</span>
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
													<Image
														alt={post.blog_image_alt_name}
														title={post.blog_image_alt_name}
														src={post.blog_image}
														width={300}
														height={300}
														className="w-full rounded"
														priority
													/>
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
				<Script
					async
					type="application/javascript"
					src="https://news.google.com/swg/js/v1/swg-basic.js"
				/>
				<Script
					id="blog-swg-script"
					dangerouslySetInnerHTML={{
						__html: `(window.SWG_BASIC = window.SWG_BASIC || []).push((basicSubscriptions) => {
								basicSubscriptions.init({
									type: "NewsArticle",
									isPartOfType: ["Product"],
									isPartOfProductId: "CAowwoDWCw:openaccess",
									clientOptions: { theme: "light", lang: "en" },
								});
							});`,
					}}
				/>
				<Script
					id="post_script"
					dangerouslySetInnerHTML={{
						__html: `(self.SWG_BASIC = self.SWG_BASIC || []).push( basicSubscriptions => {
							basicSubscriptions.init({
							type: "NewsArticle",
							isPartOfType: ["Product"],
							isPartOfProductId: "CAowwoDWCw:openaccess",
							clientOptions: { theme: "light", lang: "en" },
							});
						});`,
					}}
				/>
			</div>
		</>
	);
};

export default PostPage;

export async function getStaticPaths() {
	const folder = "./content/posts"; // Adjust this path to where your markdown files are stored.
	const filenames = fs.readdirSync(folder);
	const paths = filenames
		.filter((filename) => filename.endsWith(".md")) // Ensure only markdown files are processed
		.map((filename) => ({
			params: { web_id: filename.replace(".md", "") }, // Strip the extension to get the ID
		}));

	return { paths, fallback: false }; // Use 'blocking' if you want SSR for not pre-rendered paths
}

export async function getStaticProps({ params }) {
	const folder = "./content/posts";
	const file = `${folder}/${params.web_id}.md`;
	let post = {
		content: "Post not found.",
		data: {},
		related_post_data: [],
	};

	let relatedPostsData = [];

	try {
		const fileContents = fs.readFileSync(file, "utf8");
		const matterResult = matter(fileContents);

		if (matterResult.data.related_posts) {
			matterResult.data.related_posts.forEach((post) => {
				const fileContents = fs.readFileSync(`${folder}/${post}.md`, "utf8");
				const matterResult = matter(fileContents);

				relatedPostsData.push({
					type: matterResult.data.type,
					show: matterResult.data.show,
					title: matterResult.data.title,
					date: matterResult.data.date,
					blog_image: matterResult.data.blog_image,
					blog_image_alt_name: matterResult.data.blog_image_alt_name,
					time_to_read: matterResult.data.time_to_read,
					slug: post.replace(".md", ""),
				});
			});
		}

		relatedPostsData = relatedPostsData.filter((post) => post.show === true);

		post = {
			content: matterResult.content, // The markdown content
			data: matterResult.data, // The front matter data
			related_post_data: relatedPostsData,
		};
	} catch (err) {
		console.error("Error reading file---", err); // Log error or handle as appropriate
	}

	return {
		props: {
			web_id: params.web_id,
			post: post,
			related_post_data: relatedPostsData,
		},
	};
}
