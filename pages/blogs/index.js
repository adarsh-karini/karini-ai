import React from "react";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import Head from "next/head";
import BlogsandAnn from "@/components/blogs&Announcements/Blogs&Ann";
import CTA from "@/components/cta/CTA";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const blog = () => {
	return (
		<>
			<Head>
				<title>Explore Gen AI Evolution & Insights | Karini AI Blog</title>
				<meta name="title" content="Karini AI Blog: Latest in Generative AI Development"></meta>
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
				<link rel="alternate" href="https://www.karini.ai/blogs" hrefLang="en-us" />
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
				<BlogsandAnn />
				<CTA />
			</div>
		</>
	);
};

export default blog;
