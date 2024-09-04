import OurClients from "@/components/aboutus/OurClients";
import OurLeadership from "@/components/aboutus/OurLeadership";
import Stats from "@/components/aboutus/Stats";
import TheProcess from "@/components/aboutus/TheProcess";
import VisionMission from "@/components/aboutus/VisionMission";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import ProjectSection from "@/components/aboutus/ProjectSection";
import Hero from "@/components/partners/Hero";
import OurPartners from "@/components/partners/OurPartners";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const aboutus = () => {
	return (
		<>
			<Head>
				<title>We Partner. Everyone Wins with GenAI</title>
				<meta
					name="title"
					content="Karini AI Partnerships: Lead in GenAI Innovation"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Join Karini AI's partnership network and revolutionize industries with cutting-edge GenAI solutions. Unlock collaborative opportunities."
				/>
				<meta
					name="keywords"
					content="Karini AI partners, GenAI partnerships, Value Added Resellers GenAI, System Integrators for AI, AI collaboration opportunities"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/partners" />
				<link
					rel="alternate"
					href="https://www.karini.ai/partners"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Partner with Karini AI for GenAI Excellence"
				/>
				<meta
					property="og:description"
					content="Join Karini AI's partnership network and revolutionize industries with cutting-edge GenAI solutions. Unlock collaborative opportunities."
				/>
				<meta property="og:url" content="https://www.karini.ai/partners" />
				<meta property="og:site_name" content="Karini AI Partners" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-about-us" />

				<meta
					name="twitter:description"
					content="Join Karini AI's partnership network and revolutionize industries with cutting-edge GenAI solutions. Unlock collaborative opportunities."
				/>
				<meta
					name="twitter:title"
					content="Partner with Karini AI for GenAI Excellence"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/partners" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
				<script
					id="schema-markup-partners"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `{
							"@context": "http://schema.org",
							"@type": "Organization",
							"name": "Karini AI",
							"url": "https://www.karini.ai/partners",
							"description": "At Karini AI, we forge powerful partnerships to unlock the true potential of Generative AI (GenAI).",
							"memberOf": [
								{
									"@type": "Organization",
									"name": "Amazon AWS"
								},
								{
									"@type": "Organization",
									"name": "Microsoft Azure"
								},
								{
									"@type": "Organization",
									"name": "Databricks"
								},
								{
									"@type": "Organization",
									"name": "Distributed Technology Group (DTG)"
								}
							]
						}`,
					}}
				></script>
			</Head>
			<div
				id="partners"
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<OurPartners />
			</div>
		</>
	);
};

export default aboutus;
