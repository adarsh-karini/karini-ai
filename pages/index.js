import { Inter, Open_Sans, Poppins, Lato } from "next/font/google";
import Hero from "@/components/home/Hero";
import OurClients from "@/components/home/OurClients";
import WhyKarini from "@/components/home/WhyKarini";
import OurServices from "@/components/home/OurServices";
import OurPlatforms from "@/components/home/OurPlatforms";
import ClientReviews from "@/components/home/ClientReviews";
import FAQ from "@/components/home/FAQ";
import Head from "next/head";

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
				<title>Karini AI | Streamline Your Business with Generative AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Streamline your business with Karini AI's generative AI technology. Get pre-built Generative AI Recipes for summarization, classification, and conversational AI, low-code integration, and built-in human feedback. Join our waitlist now."
				/>
				<meta
					name="keywords"
					content="OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,Azure OpenAI,LLM,HuggingFace,LLMOps,Databricks,Dolly"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/" />
				<link rel="amphtml" href="https://www.karini.com/amp" />
			</Head>
			<div
				className={`${poppins.variable} ${inter.className} bg-white subpixel-antialiased`}
			>
				<Hero />
				<OurClients />
				<WhyKarini />
				<OurPlatforms />
				<OurServices />
				{/* <ClientReviews /> */}
				{/* <FAQ /> */}
			</div>
		</>
	);
};

export default index;
