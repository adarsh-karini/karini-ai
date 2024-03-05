import CTA from "@/components/cta/CTA";
import Hero from "@/components/platforms/Hero";
import HowItWorks from "@/components/platforms/HowItWorks";
import Platforms from "@/components/platforms/Platforms";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const platforms = () => {
	return (
		<>
			<Head>
				<title>
				Karini AI: Streamline GenAI Dev Recipes Security and Quality
				</title>
				<meta name="title" content="Unifying GenAI Ingredients for Streamlined Application Development"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Discover Karini AI: Your ultimate GenAI platform that seamlessly integrates AI recipes, data prep, and robust security to revolutionize application development."
				/>
				<meta
					name="keywords"
					content="LLMOps,LLM,Artificial Intelligence,Karini AI Platforms,Enterprise AI Solutions,GenAiOps Platform,AI innovation,AI Development Tools"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/platforms" />
				<link rel="alternate" href="https://www.karini.ai/platforms" hrefLang="en-us" />
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<Platforms />
				<HowItWorks />
				{/* <CTA /> */}
			</div>
		</>
	);
};

export default platforms;
