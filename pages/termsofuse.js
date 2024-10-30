import CTA from "@/components/cta/CTA";
import Hero from "@/components/pricing/Hero";
import Pricing from "@/components/pricing/Pricing";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import fs from "fs";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

export async function getStaticProps() {
	const file = `./content/terms_and_policies/termsofuse.md`;
	let post = {
		content: "termsofuse.md not found.",
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
		console.error("Error reading termsofuse.md file---", err);
	}

	return {
		props: {
			post: post,
		},
	};
}

const termsofuse = ({ post }) => {
	return (
		<>
			<Head>
				<title>Karini AI Terms of Use - Your Guide to Our Services</title>
				{/* <meta
					name="title"
					content="Karini AI Official Terms of Service Agreement"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Explore the Terms of Use for Karini AI. Understand your rights, responsibilities, and our service guidelines to ensure a great experience. "
				/>
				<meta
					name="keywords"
					content="Karini AI Terms of Service,User Agreement,Service Guidelines Karini AI,User Rights and Responsibilities"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://www.karini.ai/termsofuse" />
				<link
					rel="alternate"
					href="https://www.karini.ai/termsofuse"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Karini AI Terms of Use - Your Guide to Our Services"
				/>
				<meta
					property="og:description"
					content="Explore the Terms of Use for Karini AI. Understand your rights, responsibilities, and our service guidelines to ensure a great experience."
				/>
				<meta property="og:url" content="https://www.karini.ai/termsofuse" />
				<meta property="og:site_name" content="Karini AI Terms of use" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-terms-of-use" />

				<meta
					name="twitter:description"
					content="Explore the Terms of Use for Karini AI. Understand your rights, responsibilities, and our service guidelines to ensure a great experience."
				/>
				<meta
					name="twitter:title"
					content="Karini AI Terms of Use - Your Guide to Our Services"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/termsofuse" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" /> */}
			</Head>
			<div
				id="termsofuse"
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<div className="max-w-screen-lg mx-auto space-y-8 py-10 px-4 lg:px-0">
					<div>
						<h1 className="text-center text-black font-bold text-3xl">
							Terms of use
						</h1>
					</div>
					<article className="prose max-w-screen-xl mx-auto text-foreground px-4 border border-transparent">
						<Markdown>{post.content}</Markdown>
					</article>
				</div>
			</div>
		</>
	);
};

export default termsofuse;
