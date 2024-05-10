import PageBuilder from "@/components/PageBuilder";
import React from "react";

const AnnPage = ({ annData }) => {
	console.log("annData", annData);
	return <PageBuilder data={annData} />;
};

export default AnnPage;
