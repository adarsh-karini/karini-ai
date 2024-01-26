import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import BreadCrumb from "@/components/BreadCrumb";

import { blogDetailsData } from "@/content/blogs&announcements/blogDetailsData";
import BlogPage from "@/components/blogs/blog_details/BlogPage";
import Head from "next/head";
import Script from "next/script";
import CTA from "@/components/cta/CTA";

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
		const [result] = blogDetailsData?.filter((blog) => blog.id === id);
		setBlogData(result);
	};

	useEffect(() => {
		getBlogData(blog_id);
	}, [blog_id]);
	return (
		<>
			<Head>
				<title>{blogData?.SEO_data.title}</title>
				<meta name="description" content={blogData?.SEO_data.content} />
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href={blogData?.SEO_data.canonicalLink} />
				{/* Schema Markup */}
				<script
					id="schema-markup-blog"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `${blogData?.SEO_data.schemaMarkup}`,
					}}
				></script>
				{/* End Schema Markup */}
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				{/* <BreadCrumb title={blogData?.title} /> */}
				{/* <SectionOne blogData={blogData} /> */}
				<BreadCrumb title={blogData?.breadCrumbTitle} />
				<BlogPage blogData={blogData} />
				<CTA />
			</div>
		</>
	);
};

export default Blog;
