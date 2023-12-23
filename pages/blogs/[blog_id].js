import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Inter, Poppins } from "next/font/google";
import BreadCrumb from "@/components/blogs/blog_details/BreadCrumb";

import { blogDetailsData } from "@/content/blogs/blogDetailsData";
import BlogPage from "@/components/blogs/blog_details/BlogPage";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
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
					{"Industrializing Generative AI with “Merlin” platform"} | Karini AI
				</title>
			</Head>
			<div className={`${poppins.variable} ${inter.className} bg-white`}>
				{/* <BreadCrumb title={blogData?.title} /> */}
				{/* <SectionOne blogData={blogData} /> */}
				<BreadCrumb
					title={"Industrializing Generative AI with “Merlin” platform"}
				/>
				<BlogPage />
			</div>
		</>
	);
};

export default Blog;
