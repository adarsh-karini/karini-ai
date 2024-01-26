import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Inter, Open_Sans, Poppins } from "next/font/google";

import Head from "next/head";
import Script from "next/script";
import CTA from "@/components/cta/CTA";
import AnnPage from "@/components/announcements/ann_details/AnnPage";
import { announcementsData } from "@/content/blogs&announcements/announcementsData";
import { announcementsDetailsData } from "@/content/blogs&announcements/announcementsDetailsData";
import BreadCrumb from "@/components/BreadCrumb";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const Announcement = () => {
	const router = useRouter();
	const { ann_id } = router.query;

	const [annData, setAnnData] = useState();

	const getAnnData = (id) => {
		const [result] = announcementsDetailsData?.filter((ann) => ann.id === id);
		setAnnData(result);
	};

	useEffect(() => {
		getAnnData(ann_id);
	}, [ann_id]);
	return (
		<>
			<Head>
				<title>{annData?.SEO_data.title}</title>
				<meta name="description" content={annData?.SEO_data.content} />
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href={annData?.SEO_data.canonicalLink} />
				{/* Schema Markup */}
				<script
					id="schema-markup-blog"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `${annData?.SEO_data.schemaMarkup}`,
					}}
				></script>
				{/* End Schema Markup */}
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				{/* <BreadCrumb title={blogData?.title} /> */}
				{/* <SectionOne blogData={blogData} /> */}
				<BreadCrumb title={annData?.breadCrumbTitle} />
				<AnnPage annData={annData} />
				<CTA />
			</div>
		</>
	);
};

export default Announcement;
