import Hero from "@/components/partner/databricks/Hero";
import SectionOne from "@/components/partner/databricks/SectionOne";
import SectionThree from "@/components/partner/databricks/SectionThree";
import SectionTwo from "@/components/partner/databricks/SectionTwo";
import Pricing from "@/components/pricing/Pricing";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const databricks = () => {
	return (
		<>
			<Head>
				<title>Partners | Databricks | Karini AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Data to Insights using Generative AI "
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<div>
					<SectionOne />
				</div>
				<div className="bg-primary-50">
					<SectionTwo />
				</div>
				<div>
					<SectionThree />
				</div>
			</div>
		</>
	);
};

export default databricks;
