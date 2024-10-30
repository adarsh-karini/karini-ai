import CTA from "@/components/cta/CTA";
import Hero from "@/components/pricing/Hero";
import Pricing from "@/components/pricing/Pricing";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import fs from "fs";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

export async function getStaticProps() {
	const file = `./content/terms_and_policies/privacypolicy.md`;
	let post = {
		content: "privacypolicy.md not found.",
		data: {},
	};

	try {
		const fileContents = fs.readFileSync(file, "utf8");
		console.log("fileContents---", fileContents);
		const matterResult = matter(fileContents);
		post = {
			content: matterResult.content,
			data: matterResult.data,
		};
	} catch (err) {
		console.error("Error reading privacypolicy.md file---", err);
	}

	return {
		props: {
			post: post,
		},
	};
}

const privacypolicy = ({ post }) => {
	return (
		<>
			<Head>
				<title>Karini AI Privacy Policy: Safeguarding Your Data</title>
				<meta
					name="title"
					content="Protecting Your Privacy with Karini AI’s Policy"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Read Karini AI’s commitment to privacy. Understand how we collect, use, and protect your data in accordance with our privacy policy."
				/>
				<meta
					name="keywords"
					content="Karini AI Privacy Policy,Data Protection,Privacy Commitment,User Data Security,AI Privacy Standards"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://www.karini.ai/privacypolicy" />
				<link
					rel="alternate"
					href="https://www.karini.ai/privacypolicy"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />
				<meta
					property="og:title"
					content="Karini AI Privacy Policy: Safeguarding Your Data"
				/>
				<meta
					property="og:description"
					content="Read Karini AI’s commitment to privacy. Understand how we collect, use, and protect your data in accordance with our privacy policy."
				/>
				<meta property="og:url" content="https://www.karini.ai/privacypolicy" />
				<meta property="og:site_name" content="Karini AI Privacy Policy" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-privacy-policy" />

				<meta
					name="twitter:description"
					content="Read Karini AI’s commitment to privacy. Understand how we collect, use, and protect your data in accordance with our privacy policy."
				/>
				<meta
					name="twitter:title"
					content="Karini AI Privacy Policy: Safeguarding Your Data"
				/>
				<meta
					name="twitter:site"
					content="https://www.karini.ai/privacypolicy"
				/>
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div
				id="privacypolicy"
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white py-6`}
			>
				<div>
					<h1 className="text-center text-black font-bold text-3xl">
						Karini AI Privacy Policy
					</h1>
				</div>
				<article className="prose max-w-screen-xl mx-auto text-foreground px-4 border border-transparent">
					<Markdown>{post.content}</Markdown>
				</article>
			</div>
		</>
	);
};

export default privacypolicy;
