import React from "react";
import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/careers/Hero";
import Careers from "@/components/careers/Careers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const careers = () => {
	return (
		<>
			<Head>
				<title>Careers | Karini AI</title>
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<Careers />
			</div>
		</>
	);
};

export default careers;
