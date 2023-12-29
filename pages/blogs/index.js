import React from "react";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import Hero from "@/components/blogs/Hero";
import Blogs from "@/components/blogs/Blogs";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const blog = () => {
	return (
		<>
			<Head>
				<title>Blog | Karini.ai</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Unlock the power of AI and stay updated with the latest Article, Product Updates, Announcement  and tips from our blog.- Karini.AI"
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/blogs" />
			</Head>
			<div className={`${inter.className} bg-white`}>
				<Hero />
				<Blogs />
			</div>
		</>
	);
};

export default blog;
