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
				<title>KariniAI: GenAIFoundation for Enterprise Generative AI</title>
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
				<script
					id="ga0"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
							"@context": "https://schema.org",
							"@type": "Organization",
							"name": "Karini Ai",
							"alternateName": "Karini",
							"url": "https://www.karini.ai/",
							"logo": "https://karini.ai/karini-logo.png",
							"sameAs": [
								"https://www.linkedin.com/company/karini-ai/",
								"https://twitter.com/karini_ai"
							]}`,
					}}
				/>
				<script
					id="ga1"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
							"@context": "https://schema.org/",
							"@type": "WebSite",
							"name": "Karini Ai",
							"url": "https://www.karini.ai/",
							"potentialAction": {
								"@type": "SearchAction",
								"target": "https://www.karini.ai/platforms{search_term_string}https://www.karini.ai/aboutus",
								"query-input": "required name=search_term_string"
							}
							}
						`,
					}}
				/>
				{/* <meta name="twitter:card" content="summary" />
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
				/> */}

				<meta property="og:local" content="en_US" />
				<meta
					property="og:title"
					content="Karini AI: GenAIOps - Generative AI for Enterprise Applications"
				/>
				<meta
					property="og:description"
					content="Karini AI accelerates GenAI app development in enterprises, simplifying creation, testing, and deployment for enhanced efficiency and innovation."
				/>
				<meta property="og:url" content="https://www.karini.ai" />
				<meta property="og:site_name" content="Karini AI" />
				<meta property="og:image" content="https://www.karini.ai/" />
				<meta property="og:image:secure_url" content="https://www.karini.ai/" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai" />

				<meta
					name="twitter:description"
					content="Karini AI accelerates GenAI app development in enterprises, simplifying creation, testing, and deployment for enhanced efficiency and innovation."
				/>
				<meta
					name="twitter:title"
					content="Karini AI: GenAIOps - Generative AI for Enterprise Applications"
				/>
				<meta name="twitter:site" content="https://www.karini.ai" />
				<meta name="twitter:image" content="https://www.karini.ai/" />
				<meta name="twitter:creator" content="Karini AI" />
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
