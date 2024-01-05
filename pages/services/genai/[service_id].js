import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter, Poppins } from "next/font/google";

import { genaiServicesData } from "@/content/services/genai/genaiServicesData";
import Hero from "@/components/services/genai/service_details/Hero";
import KeyPoints from "@/components/services/genai/service_details/KeyPoints";
import SectionOne from "@/components/services/genai/service_details/SectionOne";
import BreadCrumb from "@/components/services/genai/service_details/BreadCrumb";

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
		const result = genaiServicesData?.filter((service) => service.id === id);
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
