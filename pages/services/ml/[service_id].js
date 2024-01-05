import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter, Poppins } from "next/font/google";

import { mlServicesData } from "@/content/services/ml/mlServicesData";
import Hero from "@/components/services/ml/service_details/Hero";
import KeyPoints from "@/components/services/ml/service_details/KeyPoints";
import SectionOne from "@/components/services/ml/service_details/SectionOne";
import BreadCrumb from "@/components/services/ml/service_details/BreadCrumb";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const Service = () => {
	const router = useRouter();
	const { service_id } = router.query;

	const [service, setService] = useState();

	const getServiceData = (id) => {
		const result = mlServicesData?.filter((service) => service.id === id);
		console.log("hi44", result);
		setService(result[0]);
	};

	useEffect(() => {
		getServiceData(service_id);
	}, [service_id]);

	return (
		<div
			className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
		>
			<BreadCrumb title={service?.title} />
			<Hero title={service?.title} overview={service?.overview} />
			<KeyPoints keyPoints={service?.keyPoints} />
			<SectionOne SectionOne={service?.sectionOne} />
		</div>
	);
};

export default Service;
