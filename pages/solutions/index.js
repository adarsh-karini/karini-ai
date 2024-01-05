import CTA from "@/components/cta/CTA";
import Hero from "@/components/solutions/Hero";
import Solutions from "@/components/solutions/Solutions";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const solution = () => {
	return (
		<>
			<Head>
				<title>Solutions | Karini AI</title>
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				<Solutions />
				<CTA />
			</div>
		</>
	);
};

export default solution;
