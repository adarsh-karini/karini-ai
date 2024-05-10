import { Poppins } from "next/font/google";
import Hero from "@/components/home/Hero";
import OurClients from "@/components/home/OurClients";
import WhyKarini from "@/components/home/WhyKarini";
import OurServices from "@/components/home/OurServices";
import OurPlatforms from "@/components/home/OurPlatforms";
import ClientReviews from "@/components/home/ClientReviews";
import FAQ from "@/components/home/FAQ";
import Head from "next/head";
import CTA from "@/components/cta/CTA";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const index = () => {
	return (
		<>
			<Head>
				<title>
					Karini AI: GenAIOps - Generative AI for Enterprise Applications
				</title>
				<meta
					name="title"
					content="No code platform connecting for GenAI Operationalization"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Karini AI accelerates GenAI app development in enterprises, simplifying creation, testing, and deployment for enhanced efficiency and innovation."
				/>
				<meta
					name="keywords"
					content="Karini AI,GenAIOps,Enterprises AI Solutions,Generative AI Applications,Ai Application Development,OpenAI,ChatGPT,Artificial Intelligence,"
				/>

				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai" />
				<link rel="alternate" href="https://www.karini.ai/" hrefLang="en-us" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@karini_ai" />
				<meta
					name="twitter:title"
					content="Karini AI | Powering Evolution in Generative AI"
				/>
				<meta
					name="twitter:description"
					content="Karini AI - Powering Evolution in Generative AI. Build and manage production-grade generative AI applications with an easy-to-use visual interface."
				/>
				<meta
					name="twitter:image"
					content="https://twitter.com/karini_ai/photo"
				/>
			</Head>
			<div
				className={`${poppins.variable} font-sans bg-white subpixel-antialiased`}
			>
				<Hero />
				<WhyKarini />
				<OurClients />
				<OurPlatforms />
				<OurServices />
				{/* <CTA /> */}
				{/* <ClientReviews /> */}
				{/* <FAQ /> */}
			</div>
		</>
	);
};

export default index;
