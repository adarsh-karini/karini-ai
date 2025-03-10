import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter, Poppins } from "next/font/google";

import Hero from "@/components/solution/solution_details/Hero";
import BreadCrumb from "@/components/solution/solution_details/BreadCrumb";

import { solutionDetailsData } from "@/content/solution/solutionDetailsData";
import SectionOne from "@/components/solution/solution_details/SectionOne";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const Solution = () => {
	const router = useRouter();
	const { solution_id, solution_type } = router.query;

	const [solutionTypeData, setSolutionTypeData] = useState();
	const [solutionsData, setSolutionsData] = useState();
	const [loading, setLoading] = useState(false);

	const getSolutionTypeData = (id) => {
		const result = solutionDetailsData?.filter(
			(solutionType) => solutionType.id === id
		);
		setSolutionTypeData(result[0]);
		getSolutionData(solution_id);
	};

	const getSolutionData = (id) => {
		const result = solutionTypeData?.solutions.filter(
			(solution) => solution.id === id
		);

		if (result && result.length > 0) {
			setSolutionsData(result[0]);
			setLoading(false);
		} else {
			setLoading(true);
		}
	};

	useEffect(() => {
		getSolutionTypeData(solution_type);
	}, [solutionTypeData]);

	return (
		<>
			<Head>
				<title>{solutionsData?.title} | Karini AI</title>
			</Head>
			{loading && (
				<div className="py-20 bg-white flex justify-center items-center">
					<h1 className="text-black font-3xl">Loading....</h1>
				</div>
			)}
			{!loading && (
				<div
					className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
				>
					<BreadCrumb title={solutionsData?.title} />
					<Hero
						title={solutionsData?.title}
						overview={solutionsData?.overview}
					/>
					<SectionOne />
				</div>
			)}
		</>
	);
};

export default Solution;
