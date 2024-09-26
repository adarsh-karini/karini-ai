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

const PostPage = ({ solution_id, post }) => {
	console.log("post_solutions", post);
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
				<div className="border-b">
					<div className="max-w-screen-xl mx-auto p-4 space-y-6">
						<Link href="/solutions#solutions">
							<button className="flex text-primary-600">
								<HiOutlineArrowNarrowLeft className="mr-2 h-4 w-4" />{" "}
								<span className="text-xs">Back</span>
							</button>
						</Link>
						<div className="w-full flex space-x-6 py-10">
							<div className="w-2/5 flex flex-col justify-between">
								<h1 className="text-black text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold tracking-tighter pb-2 leading-normal">
									{post.data.hero_title}
								</h1>
								{/* <div className="pt-2 flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
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
								</div> */}
							</div>
							<div className="flex-1 flex items-center justify-end">
								<Image
									src={post.data.hero_image}
									alt={post.data.hero_image_alt_name}
									width={800}
									height={500}
									className="rounded-md h-[300px]"
									priority
								/>
							</div>
							{/* <div className="flex-1 bg-primary-400 py-20"></div> */}
						</div>
					</div>
				</div>
				<div className="max-w-screen-xl mx-auto">
					<div className="relative px-4 flex flex-col lg:flex-row lg:space-x-6 ">
						<article className="flex-1 prose max-w-max mx-auto py-2">
							<Markdown>{post.content}</Markdown>
						</article>
						<div className="abosolute hidden md:block">hello</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostPage;

export async function getStaticPaths() {
	const folder = "./content/solutions"; // Adjust this path to where your markdown files are stored.
	const filenames = fs.readdirSync(folder);
	const paths = filenames
		.filter((filename) => filename.endsWith(".md")) // Ensure only markdown files are processed
		.map((filename) => ({
			params: { solution_id: filename.replace(".md", "") }, // Strip the extension to get the ID
		}));

	return { paths, fallback: false }; // Use 'blocking' if you want SSR for not pre-rendered paths
}

export async function getStaticProps({ params }) {
	const folder = "./content/solutions";
	const file = `${folder}/${params.solution_id}.md`;

	console.log("file111", file);

	let post = {
		content: "Post not found.",
		data: {},
	};

	try {
		const fileContents = fs.readFileSync(file, "utf8");
		const matterResult = matter(fileContents);

		post = {
			content: matterResult.content,
			data: matterResult.data,
		};
	} catch (err) {
		console.error("Error reading file---", err); // Log error or handle as appropriate
	}

	return {
		props: {
			solution_id: params.solution_id,
			post: post,
		},
	};
}
