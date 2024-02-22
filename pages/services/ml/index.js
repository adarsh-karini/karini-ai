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
				<meta name="title" content="Karini AI: Leading MLOps Solutions for Enterprises"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Empower your enterprise with Karini AI&apos;s expert MLOps solutions. Overcome data, privacy, scalability, and talent challenges to fully leverage ML potential."
				/>
				<meta
					name="keywords"
					content="Computer Vision,Machine Learning,Karini AI ML Services,Machine Learning Solutions,Ai Technology Enhancement,Enterprises ML Services,MLops"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/services/ml" />
				<link rel="alternate" href="https://www.karini.ai/services/ml" hrefLang="en-us" />
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<Challenges />
				<OurServices />
				<CustomerStories />
				<OurClients />
				<CTA />
			</div>
		</>
	);
};

export default ml;
