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

export async function getServerSideProps(context) {
	// Fetch data from an external API
	const { ann_id } = context.query;
	console.log("ann_id", ann_id);
	const [result] = announcementsDetailsData?.filter((ann) => ann.id === ann_id);

	return {
		props: {
			annData: result,
		},
	};
}

const Announcement = ({ annData }) => {
	const router = useRouter();
	// const { ann_id } = router.query;

	// const [annData, setAnnData] = useState();

	// const getAnnData = (id) => {
	// 	console.log("announcementsDetailsData---", announcementsDetailsData);
	// 	const [result] = announcementsDetailsData?.filter((ann) => ann.id === id);
	// 	// console.log("result---",result.breadCrumbTitle)
	// 	setAnnData(result);
	// };

	// // console.log('annData 123', annData);

	// useEffect(() => {
	// 	getAnnData(ann_id);
	// }, [ann_id]);
	return (
		<>
			<Head>
				<title>{annData?.SEO_data.title}</title>
				<meta name="title" content={annData?.SEO_data.metaTitle}></meta>
				<meta name="description" content={annData?.SEO_data.description} />
				<meta name="keywords" content={annData?.SEO_data.keywords} />
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href={annData?.SEO_data.canonicalLink} />

				<link
					rel="alternate"
					href={annData?.SEO_data.hreflang}
					hrefLang="en-us"
				/>
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
