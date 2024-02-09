import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

import Head from "next/head";
import Script from "next/script";
import CTA from "@/components/cta/CTA";
import AnnPage from "@/components/announcements/ann_details/AnnPage";
import { announcementsDetailsData } from "@/content/blogs&announcements/announcementsDetailsData";
import BreadCrumb from "@/components/BreadCrumb";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const Announcement = () => {
	const router = useRouter();
	const { ann_id } = router.query;

	const [annData, setAnnData] = useState();

	const getAnnData = (id) => {
		const [result] = announcementsDetailsData?.filter((ann) => ann.id === id);
		setAnnData(result);
	};

	// console.log('annData 123', annData);

	useEffect(() => {
		getAnnData(ann_id);
	}, [ann_id]);
	return (
		<>
			<Head>
				<title>{annData?.SEO_data.title}</title>
				<meta name="description" content={annData?.SEO_data.description} />
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href={annData?.SEO_data.canonicalLink} />
				{/* Schema Markup */}
				<script
					id="schema-markup-blog"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: `${JSON.stringify(annData?.SEO_data.schemaMarkup)}`,
					}}
				></script>
				{/* End Schema Markup */}
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<BreadCrumb title={annData?.breadCrumbTitle} />
				<div className="py-5 bg-black"></div>
				<AnnPage annData={annData} />
				<CTA />
				<Script
					async
					type="application/javascript"
					src="https://news.google.com/swg/js/v1/swg-basic.js"
				/>
				{/* <Script
					id="ann-swg-script"
					dangerouslySetInnerHTML={{
						__html: `(window.SWG_BASIC = window.SWG_BASIC || []).push((basicSubscriptions) => {
								basicSubscriptions.init({
									type: "NewsArticle",
									isPartOfType: ["Product"],
									isPartOfProductId: "CAowwoDWCw:openaccess",
									clientOptions: { theme: "light", lang: "en" },
								});
							});`,
					}}
				/> */}
			</div>
		</>
	);
};

export default Announcement;
