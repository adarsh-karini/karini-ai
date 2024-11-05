import Head from "next/head";
import Pricing from "@/components/pricing/Pricing";
import { Poppins } from "next/font/google";
import Swagelok from "@/components/case_studies/Swagelok";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const swagelok = () => {
	return (
		<>
			<Head>
				<title>Case Studies: Swagelok | Karini AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Supply Chain Generative AI Automation"
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Swagelok />
			</div>
		</>
	);
};

export default swagelok;
