import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter, Poppins } from "next/font/google";

import { solutionsData } from "@/content/solutions/solutionsData";
import ChallengesSection from "@/components/solutions/solution_details/ChallengesSection";
import SolutionSection from "@/components/solutions/solution_details/SolutionSection";
import BenefitsSection from "@/components/solutions/solution_details/BenefitsSection";
import RestDataSection from "@/components/solutions/solution_details/RestDataSection";
import Head from "next/head";
import Hero from "@/components/solutions/solution_details/Hero";
import BreadCrumb from "@/components/solutions/solution_details/BreadCrumb";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const Solution = () => {
	const router = useRouter();
	const { solution_id } = router.query;
	const [solutionData, setSolutionData] = useState();
	const [loading, setLoading] = useState(true);

	console.log("solutionData", solutionData);

	const getSolutionData = (id) => {
		const [result] = solutionsData.filter(
			(solution) => solution.card_data.path === id
		);

		console.log("result", result);

		setSolutionData(result);

		return;
	};

	useEffect(() => {
		getSolutionData(solution_id);
		setLoading(false);
	}, [solution_id]);

	return (
		<>
			<Head>
				<title>Solutions | Karini AI</title>
				<meta
					name="title"
					content="Reach Out to Karini AI – Your AI Solution Partner"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Connect with the Karini AI team for innovative AI solutions. Let's discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta
					name="keywords"
					content="Contact Karini AI,AI Solutions Contact,AI Expert Assistance,Karini AI Support,Generative AI Inquiry"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/contactus" />
				<link
					rel="alternate"
					href="https://www.karini.ai/contactus"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Contact Karini AI: Get in Touch with AI Experts"
				/>
				<meta
					property="og:description"
					content="Connect with the Karini AI team for innovative AI solutions. Let&#x27;s discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta property="og:url" content="https://www.karini.ai/contactus" />
				<meta property="og:site_name" content="Karini AI Contact Us" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-contactus" />

				<meta
					name="twitter:description"
					content="Connect with the Karini AI team for innovative AI solutions. Let&#x27;s discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta
					name="twitter:title"
					content="Contact Karini AI: Get in Touch with AI Experts"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/contactus" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div id="solution" className={`font-sans subpixel-antialiased bg-white`}>
				{solutionData && (
					<div
						className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
					>
						<BreadCrumb title={solutionData?.details?.title} />
						<Hero
							title={solutionData.details.title}
							// overview={solutionsData?.overview}
						/>
						<ChallengesSection data={solutionData.details.challenges} />
						<SolutionSection data={solutionData.details.solution} />
						<BenefitsSection data={solutionData.details.benefits} />
						<RestDataSection data={solutionData.details.rest_data} />
					</div>
				)}
			</div>
		</>
	);
};

export default Solution;
