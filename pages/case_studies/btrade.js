import Head from "next/head";
import Pricing from "@/components/pricing/Pricing";
import { Poppins } from "next/font/google";
import BTrade from "@/components/case_studies/BTrade";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const bt_trade = () => {
	return (
		<>
			<Head>
				<title>Case Studies: B Trade | Karini AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Data to Insights using Generative AI"
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<BTrade />
			</div>
		</>
	);
};

export default bt_trade;
