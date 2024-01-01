import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import BreadCrumb from "@/components/blogs/blog_details/BreadCrumb";

import { blogDetailsData } from "@/content/blogs/blogDetailsData";
import BlogPage from "@/components/blogs/blog_details/BlogPage";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const Blog = () => {
	const router = useRouter();
	const { blog_id } = router.query;

	const [blogData, setBlogData] = useState();

	const getBlogData = (id) => {
		const result = blogDetailsData?.filter((blog) => blog.id === id);
		setBlogData(result[0]);
	};

	useEffect(() => {
		getBlogData(blog_id);
	}, [blog_id]);
	return (
		<>
			<Head>
				<title>
					Industrializing Generative AI with Merlin: Revolutionizing Enterprise
					Operations
				</title>
				<meta
					name="description"
					content="Discover how Merlin, the Gen AI platform by Karini AI, integrates advanced language models to create a digital co-pilot. Simplify application development and bridge the generative AI adoption gap."
				/>
				<meta name="robots" content="index,follow" />

				<link
					rel="canonical"
					href="https://www.karini.ai/blogs/industrialize-generative-ai"
				/>
			</Head>
			<Script
				id="schema-markup-blog"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `
								{
									"@context": "https://schema.org",
									"@type": "BlogPosting",
									"mainEntityOfPage": {
									"@type": "WebPage",
									"@id": "https://www.karini.ai/blogs/industrialize-generative-ai"
									},
									"headline": "Industrializing Generative AI",
									"description": "Announcing Generative AI Platform - designed to accelerate experimentation, expedite market delivery, and bridge the generative AI adoption gap, enabling businesses to harness the full potential of this groundbreaking technology.",
									"image": "https://www.karini.ai/_next/image?url=%2Fassets%2Fimages%2Fblogs%2Fblog1-img2.jpg&w=640&q=75",
									"author": {
									"@type": "Organization",
									"name": "karini",
									"url": "https://www.karini.ai/"
									},
									"publisher": {
									"@type": "Organization",
									"name": "Deepali Rajale",
									"logo": {
										"@type": "ImageObject",
										"url": ""
									}
									},
									"datePublished": "2023-12-25"
								}
								`,
				}}
			></Script>
			<div
				className={`${poppins.variable} ${inter.className} bg-white subpixel-antialiased`}
			>
				{/* <BreadCrumb title={blogData?.title} /> */}
				{/* <SectionOne blogData={blogData} /> */}
				<BreadCrumb
					title={"Industrialize Generative AI"}
				/>
				<BlogPage />
			</div>
		</>
	);
};

export default Blog;
