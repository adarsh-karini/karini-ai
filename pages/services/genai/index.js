import Challenges from "@/components/services/genai/Challenges";
import Hero from "@/components/services/genai/Hero";
import OurClients from "@/components/services/genai/OurClients";
import OurServices from "@/components/services/genai/OurServices";
import WhyChooseUs from "@/components/services/genai/WhyChooseUs";
import CustomerStories from "@/components/services/genai/CustomerStories";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import CTA from "@/components/cta/CTA";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const genai = () => {
	return (
		<>
			<Head>
				<title>
					Karini AI: Pioneering Generative AI Solutions for Enterprises
				</title>
				<meta
					name="title"
					content="Empower Your Enterprise Evolve Generative AI Implementations"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Unlock the full potential of Generative AI in your enterprise with Karini AI. From idea to production, navigate challenges, ensuring seamless fast execution"
				/>
				<meta
					name="keywords"
					content="Generative Ai Services,Karini AI GenAI Solutions,Enterprises AI Transformation,AI Strategy Services,Open Sources,Generative AI Projects"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/services/genai" />
				<link
					rel="alternate"
					href="https://www.karini.ai/services/genai"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Karini AI: Pioneering Generative AI Solutions for Enterprises"
				/>
				<meta
					property="og:description"
					content="Unlock the full potential of Generative AI in your enterprise with Karini AI. From idea to production, navigate challenges, ensuring seamless fast execution"
				/>
				<meta
					property="og:url"
					content="https://www.karini.ai/services/genai"
				/>
				<meta property="og:site_name" content="Karini AI Services GenAI" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-services-genai" />

				<meta
					name="twitter:description"
					content="Unlock the full potential of Generative AI in your enterprise with Karini AI. From idea to production, navigate challenges, ensuring seamless fast execution"
				/>
				<meta
					name="twitter:title"
					content="Karini AI: Pioneering Generative AI Solutions for Enterprises"
				/>
				<meta
					name="twitter:site"
					content="https://www.karini.ai/services/genai"
				/>
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<Challenges />
				<OurServices />
				{/* <WhyChooseUs /> */}
				<CustomerStories />
				<OurClients />
				{/* <CTA /> */}
			</div>
		</>
	);
};

export default genai;
