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
				<meta
					name="title"
					content="Unifying GenAI Ingredients for Streamlined Application Development"
				></meta>
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
				<link
					rel="alternate"
					href="https://www.karini.ai/platforms"
					hrefLang="en-us"
				/>
				<meta property="og:local" content="en_US" />
				<meta
					property="og:title"
					content="Karini AI: Streamline GenAI Dev Recipes Security and Quality"
				/>
				<meta
					property="og:description"
					content="Discover Karini AI: Your ultimate GenAI platform that seamlessly integrates AI recipes, data prep, and robust security to revolutionize application development."
				/>
				<meta property="og:url" content="https://www.karini.ai/platforms" />
				<meta property="og:site_name" content="Karini AI Platforms" />
				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-platform" />

				<meta
					name="twitter:description"
					content="Discover Karini AI: Your ultimate GenAI platform that seamlessly integrates AI recipes, data prep, and robust security to revolutionize application development."
				/>
				<meta
					name="twitter:title"
					content="Karini AI: Streamline GenAI Dev Recipes Security and Quality"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/platforms" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div
				id="platforms"
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
