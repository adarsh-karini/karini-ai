import OurClients from "@/components/aboutus/OurClients";
import Hero from "@/components/aboutus/Hero";
import OurLeadership from "@/components/aboutus/OurLeadership";
import Stats from "@/components/aboutus/Stats";
import TheProcess from "@/components/aboutus/TheProcess";
import VisionMission from "@/components/aboutus/VisionMission";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const aboutus = () => {
	return (
		<>
			<Head>
				<title>About Karini AI: Pioneers in Generative AI Solutions</title>
				<meta name="title" content="Meet Karini AI: Leading Generative AI Innovators"></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Discover Karini AI's journey in revolutionizing businesses with Generative AI. Learn about our mission, vision, and the team driving AI innovation."
				/>
				<meta
					name="keywords"
					content="Karini AI,Generative AI,AI Innovation,AI Solutions,AI Technology Leaders"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/aboutus" />
				<link rel="alternate" href="https://www.karini.ai/aboutus" hrefLang="en-us" />
			</Head>
			<div
				className={`${poppins.variable} font-sans subpixel-antialiased bg-white`}
			>
				<Hero />
				{/* <Stats /> */}
				{/* <WhoWeAre /> */}
				<OurLeadership />
				{/* <TheProcess /> */}
				{/* <VisionMission /> */}
				{/* <OurClients /> */}
				<section className="bg-white relative">
					<div className="bg-gradient-to-br from-primary-900 from-30% via-primary-700 to-primary-500 overflow-hidden z-10 relative">
						<div className="-z-10 absolute -right-32 -top-16 bg-gradient-to-br from-primary-100 to-primary-500 rounded-full shadow-lg">
							<div className="p-20 m-8 bg-primary-600 rounded-full"></div>
						</div>
						<div className="-z-10 absolute -left-10 -bottom-10 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
						<div className="mx-auto max-w-screen-lg p-4 rounded-lg">
							<div className=" flex flex-col items-center w-full h-full py-10 space-y-4">
								<div className="p-20 absolute -left-20 -bottom-24 bg-primary-600 rounded-full opacity-50"></div>
								<div className="p-20 absolute -right-20 -top-1/2 bg-primary-600 rounded-full opacity-50"></div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default aboutus;
