import Hero from "@/components/solutions/Hero";
import Solutions from "@/components/solutions/Solutions";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

export async function getStaticProps() {
	const folder = "./content/solutions";
	const files = fs.readdirSync(folder);
	const markdownSolutions = files.filter((file) => file.endsWith(".md"));

	let solutionTypes = [];

	const solutions = markdownSolutions.map((fileName, index) => {
		const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
		const matterResult = matter(fileContents);

		if (matterResult.data.type) {
			solutionTypes.push(matterResult.data.type);

			return {
				type: matterResult.data.type,
				show: matterResult.data.show,
				slug: fileName.replace(".md", ""),
				tags: matterResult.data.tags,
				card_data: matterResult.data.card_data,
				date: matterResult.data.date,
			};
		}
	});

	return {
		props: {
			solutionsMetadata: solutions,
			solutionTypes: [...new Set(solutionTypes)],
		},
	};
}

const solutions = ({ solutionsMetadata, solutionTypes }) => {
	return (
		<>
			<Head>
				<title>Solutions | Karini AI</title>
				<meta
					name="title"
					content="Reach Out to Karini AI – Your AI Solution Partner"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Connect with the Karini AI team for innovative AI solutions. Let's discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta
					name="keywords"
					content="Contact Karini AI,AI Solutions Contact,AI Expert Assistance,Karini AI Support,Generative AI Inquiry"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/contactus" />
				<link
					rel="alternate"
					href="https://www.karini.ai/contactus"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Contact Karini AI: Get in Touch with AI Experts"
				/>
				<meta
					property="og:description"
					content="Connect with the Karini AI team for innovative AI solutions. Let&#x27;s discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta property="og:url" content="https://www.karini.ai/contactus" />
				<meta property="og:site_name" content="Karini AI Contact Us" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-contactus" />

				<meta
					name="twitter:description"
					content="Connect with the Karini AI team for innovative AI solutions. Let&#x27;s discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta
					name="twitter:title"
					content="Contact Karini AI: Get in Touch with AI Experts"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/contactus" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div id="solutions" className={`font-sans subpixel-antialiased bg-white`}>
				<Hero />
				<Solutions
					solutionsMetadata={solutionsMetadata}
					solutionTypes={solutionTypes}
				/>
			</div>
		</>
	);
};

export default solutions;
