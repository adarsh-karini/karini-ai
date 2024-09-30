import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { Poppins } from "next/font/google";
import SolutionId from "@/components/SolutionId";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const PostPage = ({ solution_id, post }) => {
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
				{post?.data?.SEO_data?.schemaMarkup && (
					<script
						id="schema-markup-blog"
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: `${JSON.stringify(post?.data?.SEO_data?.schemaMarkup)}`,
						}}
					></script>
				)}
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<SolutionId post={post} />
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
