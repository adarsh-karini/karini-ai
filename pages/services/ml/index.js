import Challenges from "@/components/services/ml/Challenges";
import CustomerStories from "@/components/services/ml/CustomerStories";
import Hero from "@/components/services/ml/Hero";
import OurServices from "@/components/services/ml/OurServices";
import WhyChooseUs from "@/components/services/ml/WhyChooseUs";
import OurClients from "@/components/services/ml/OurClients";
import { Poppins } from "next/font/google";
import Head from "next/head";
import CTA from "@/components/cta/CTA";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const ml = () => {
	return (
		<>
			<Head>
				<title>Master MLOps with Karini AI: Transform Your Enterprise</title>
				<meta
					name="title"
					content="Karini AI: Leading MLOps Solutions for Enterprises"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Empower your enterprise with Karini AI's expert MLOps solutions. Overcome data, privacy, scalability, and talent challenges to fully leverage ML potential."
				/>
				<meta
					name="keywords"
					content="Computer Vision,Machine Learning,Karini AI ML Services,Machine Learning Solutions,Ai Technology Enhancement,Enterprises ML Services,MLops"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/services/ml" />
				<link
					rel="alternate"
					href="https://www.karini.ai/services/ml"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Master MLOps with Karini AI: Transform Your Enterprise"
				/>
				<meta
					property="og:description"
					content="Empower your enterprise with Karini AI&#x27;s expert MLOps solutions. Overcome data, privacy, scalability, and talent challenges to fully leverage ML potential."
				/>
				<meta property="og:url" content="https://www.karini.ai/services/ml" />
				<meta property="og:site_name" content="Karini AI Services ML" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-services-ml" />

				<meta
					name="twitter:description"
					content="Empower your enterprise with Karini AI&#x27;s expert MLOps solutions. Overcome data, privacy, scalability, and talent challenges to fully leverage ML potential."
				/>
				<meta
					name="twitter:title"
					content="Master MLOps with Karini AI: Transform Your Enterprise"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/services/ml" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div
				id="ml"
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<Challenges />
				<OurServices />
				<CustomerStories />
				<OurClients />
				{/* <CTA /> */}
			</div>
		</>
	);
};

export default ml;
