import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter, Poppins } from "next/font/google";

import { solutionsData } from "@/content/solutions/solutionsData";
import Hero from "@/components/solutions/Hero";
import Challenges from "@/components/solutions/solution_details/ChallengesSection";
import ChallengesSection from "@/components/solutions/solution_details/ChallengesSection";
import SolutionSection from "@/components/solutions/solution_details/SolutionSection";
import BenefitsSection from "@/components/solutions/solution_details/BenefitsSection";
import RestDataSection from "@/components/solutions/solution_details/RestDataSection";

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
		<div>
			{solutionData && (
				<div
					className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
				>
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
	);
};

export default Solution;
