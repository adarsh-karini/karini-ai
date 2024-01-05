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
					Industrialize Generative AI: Unlock the Full Potential of AI in
					Enterprises
				</title>
				<meta
					name="description"
					content=" Discover how to overcome the challenges of implementing Generative AI in enterprises and unlock its potential. Explore the Generative AI platform by Karini AI for rapid application development and enhanced business operations. Try it now!"
				/>
				<meta name="robots" content="index,follow" />

				<link
					rel="canonical"
					href="https://www.karini.ai/blogs/industrialize-generative-ai"
				/>
				{/* Schema Markup */}
				<script
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
				></script>
				{/* End Schema Markup */}
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				{/* <BreadCrumb title={blogData?.title} /> */}
				{/* <SectionOne blogData={blogData} /> */}
				<BreadCrumb title={"Industrialize Generative AI"} />
				<BlogPage />
			</div>
		</>
	);
};

export default Blog;
