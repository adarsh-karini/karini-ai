import React from "react";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import AWSmarketplaceReg from "@/components/AWSmarketplaceReg";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const AwsMarketplaceRegistration = () => {
	return (
		<>
			<Head>
				<title>AWS Marketplace Registration Page</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<AWSmarketplaceReg />
			</div>
		</>
	);
};

export default AwsMarketplaceRegistration;
