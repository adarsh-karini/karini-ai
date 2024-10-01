import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Script from "next/script";

import PostId from "@/components/PostId";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const PostPage = ({ post_id, post }) => {
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
				<PostId post={post} />
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
			params: { post_id: filename.replace(".md", "") }, // Strip the extension to get the ID
		}));

	return { paths, fallback: false }; // Use 'blocking' if you want SSR for not pre-rendered paths
}

export async function getStaticProps({ params }) {
	const folder = "./content/posts";
	const file = `${folder}/${params.post_id}.md`;
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
			post_id: params.post_id,
			post: post,
			related_post_data: relatedPostsData,
		},
	};
}
