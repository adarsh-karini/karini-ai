import ContactUs from "@/components/contactus/ContactUs";
import Hero from "@/components/contactus/Hero";
import OurOffices from "@/components/contactus/OurOffices";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

const contactus = () => {
	return (
		<>
			<Head>
				<title>Contact us | Karini AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Data to Insights using Generative AI"
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/contactus" />
			</Head>
			<div className={`font-sans subpixel-antialiased bg-white`}>
				{/* <Hero /> */}
				<ContactUs />
				<OurOffices />
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

export default contactus;
