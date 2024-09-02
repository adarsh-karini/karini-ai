import Hero from "@/components/partners/databricks/Hero";
import SectionOne from "@/components/partners/databricks/SectionOne";
import SectionThree from "@/components/partners/databricks/SectionThree";
import SectionTwo from "@/components/partners/databricks/SectionTwo";
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
				<title>Karini AI & Databricks: Revolutionize GenAI Workflows</title>
				<meta
					name="title"
					content="Streamline GenAI with Karini AI and Databricks Partnership"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Discover how Karini AI and Databricks partnership enhances GenAI workflows for better scalability, security, and data management."
				/>
				<meta
					name="keywords"
					content="Karini AI Databricks partnership, Generative AI workflows, Streamlined GenAI solutions, No-code GenAI development, Scalable AI data processing"
				/>
				<meta name="robots" content="index,follow" />

				<link
					rel="canonical"
					href="https://www.karini.ai/partners/databricks"
				/>
				<link
					rel="alternate"
					href="https://www.karini.ai/partners/databricks"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Streamline GenAI with Karini AI and Databricks Partnership"
				/>
				<meta
					property="og:description"
					content="Explore how Karini AI and Databricks enhance GenAI workflows for better efficiency and scalability."
				/>
				<meta
					property="og:url"
					content="https://www.karini.ai/partners/databricks"
				/>
				<meta property="og:site_name" content="Karini AI" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-about-us" />

				<meta
					name="twitter:description"
					content="Explore how Karini AI and Databricks enhance GenAI workflows for better efficiency and scalability."
				/>
				<meta
					name="twitter:title"
					content="Streamline GenAI with Karini AI and Databricks Partnership"
				/>
				<meta
					name="twitter:site"
					content="https://www.karini.ai/partners/databricks"
				/>
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
				<script
					id="schema-markup-databricks"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
							"@context": "http://schema.org",
							"@type": "WebPage",
							"name": "Karini AI and Databricks Partnership",
							"description": "Karini AI and Databricks team up to streamline Generative AI workflows, offering scalable and efficient solutions."
							url": "https://www.karini.ai/partners/databricks",
							"publisher": {
								"@type": "Organization",
								"name": "Karini AI"
								}
							}
						}`,
					}}
				></script>
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
