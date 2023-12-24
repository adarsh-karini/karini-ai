import React from "react";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import Hero from "@/components/blogs/Hero";
import Blogs from "@/components/blogs/Blogs";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const blog = () => {
	return (
		<>
			<Head>
				<title>Blogs | Karini AI</title>
			</Head>
			<div className={`${inter.className} bg-white`}>
				<Hero />
				<Blogs />
			</div>
		</>
	);
};

export default blog;
