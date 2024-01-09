import { Inter, Open_Sans, Poppins, Lato } from "next/font/google";
import Hero from "@/components/home/Hero";
import OurClients from "@/components/home/OurClients";
import WhyKarini from "@/components/home/WhyKarini";
import OurServices from "@/components/home/OurServices";
import OurPlatforms from "@/components/home/OurPlatforms";
import ClientReviews from "@/components/home/ClientReviews";
import FAQ from "@/components/home/FAQ";
import Head from "next/head";
import CTA from "@/components/cta/CTA";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});
const lato = Lato({
	subsets: ["latin-ext"],
	weight: ["100", "300", "400", "700", "900"],
});
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const index = () => {
	return (
		<>
			<Head>
				<title>Karini AI | Powering Evolution in Generative AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Karini AI - Powering Evolution in Generative AI. Build and manage production-grade generative AI applications with an easy-to-use visual interface. Try copilot now!"
				/>
				<meta
					name="keywords"
					content="OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,Azure OpenAI,LLM,HuggingFace,LLMOps,Databricks,Llama2"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/" />
			</Head>
			<div
				className={`${poppins.variable} font-sans bg-white subpixel-antialiased`}
			>
				<Hero />
				<WhyKarini />
				<OurClients />
				<OurPlatforms />
				<OurServices />
				<CTA />
				{/* <ClientReviews /> */}
				{/* <FAQ /> */}
			</div>
		</>
	);
};

export default index;
