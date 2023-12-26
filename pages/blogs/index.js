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
				<title>
					Industrializing Generative AI with Merlin: Revolutionizing Enterprise
					Operations
				</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Discover how Merlin, the Gen AI platform by Karini AI, integrates advanced language models to create a digital co-pilot. Simplify application development and bridge the generative AI adoption gap."
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
			</Head>
			<div className={`${inter.className} bg-white`}>
				<Hero />
				<Blogs />
			</div>
		</>
	);
};

export default blog;
