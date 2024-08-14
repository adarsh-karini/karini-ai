import React from "react";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import Blogs from "@/components/Blogs";

export async function getStaticProps() {
	const folder = "./content/posts";
	const files = fs.readdirSync(folder);
	const markdownPosts = files.filter((file) => file.endsWith(".md"));
	// const slugs = markdownPosts.map((file) => file.replace(".md", ""));
	const posts = markdownPosts.map((fileName, index) => {
		const fileContents = fs.readFileSync(`./content/posts/${fileName}`, "utf8");
		const matterResult = matter(fileContents);

		return {
			type: matterResult.data.type,
			show: matterResult.data.show,
			title: matterResult.data.title,
			SEO_title: matterResult.data.SEO_title,
			subtitle: matterResult.data.subtitle,
			date: matterResult.data.date,
			author: matterResult.data.author,
			author_image: matterResult.data.author_image,
			author_linked_in: matterResult.data.author_linked_in,
			blog_image: matterResult.data.blog_image,
			blog_image_alt_name: matterResult.data.blog_image_alt_name,
			time_to_read: matterResult.data.time_to_read,
			slug: fileName.replace(".md", ""),
			SEO_data: matterResult.data.SEO_data,
			related_posts: matterResult.data.related_posts,
		};
	});

	return {
		props: {
			postMetadata: posts,
		},
	};
}

const blog = ({ postMetadata }) => {
	return (
		<>
			<Head>
				<title>Explore Gen AI Evolution & Insights | Karini AI Blog</title>
				<meta
					name="title"
					content="Karini AI Blog: Latest in Generative AI Development"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Dive into Karini AI's blogs on Gen AI evolution, unified data, GenAIOps challenges, and cutting-edge advancements in AI, crafted for enterprise success."
				/>
				<meta
					name="keywords"
					content="Karini AI Blog,Ai Insights,Lastest in AI Technology,Artificial Intelligence Trends,Machine Learning Updates"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/blogs" />
				<link
					rel="alternate"
					href="https://www.karini.ai/blogs"
					hrefLang="en-us"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@karini_ai" />
				<meta
					name="twitter:title"
					content="Karini AI | Powering Evolution in Generative AI"
				/>
				<meta
					name="twitter:description"
					content="Karini AI - Powering Evolution in Generative AI. Build and manage production-grade generative AI applications with an easy-to-use visual interface."
				/>
				<meta
					name="twitter:image"
					content="https://twitter.com/karini_ai/photo"
				/>
			</Head>
			<div className={`font-sans subpixel-antialiased bg-white`}>
				<Blogs postMetadata={postMetadata} />
			</div>
		</>
	);
};

export default blog;
