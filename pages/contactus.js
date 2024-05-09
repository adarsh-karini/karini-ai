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
				<title>Contact Karini AI: Get in Touch with AI Experts</title>
				<meta
					name="title"
					content="Reach Out to Karini AI – Your AI Solution Partner"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Connect with the Karini AI team for innovative AI solutions. Let's discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta
					name="keywords"
					content="Contact Karini AI,AI Solutions Contact,AI Expert Assistance,Karini AI Support,Generative AI Inquiry"
				/>
				<meta name="robots" content="index,follow" />

				<link rel="canonical" href="https://www.karini.ai/contactus" />
				<link
					rel="alternate"
					href="https://www.karini.ai/contactus"
					hrefLang="en-us"
				/>

				<meta property="og:local" content="en_US" />

				<meta
					property="og:title"
					content="Contact Karini AI: Get in Touch with AI Experts"
				/>
				<meta
					property="og:description"
					content="Connect with the Karini AI team for innovative AI solutions. Let&#x27;s discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta property="og:url" content="https://www.karini.ai/contactus" />
				<meta property="og:site_name" content="Karini AI Contact Us" />

				<meta property="og:image" content="https://www.karini.ai" />
				<meta property="og:image:secure_url" content="https://www.karini.ai" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:height" content="1280" />
				<meta property="og:image:alt" content="karini-ai-contactus" />

				<meta
					name="twitter:description"
					content="Connect with the Karini AI team for innovative AI solutions. Let&#x27;s discuss how we can transform your business with cutting-edge AI technology."
				/>
				<meta
					name="twitter:title"
					content="Contact Karini AI: Get in Touch with AI Experts"
				/>
				<meta name="twitter:site" content="https://www.karini.ai/contactus" />
				<meta name="twitter:image" content="https://www.karini.ai" />
				<meta name="twitter:creator" content="Karini AI" />
			</Head>
			<div className={`font-sans subpixel-antialiased bg-white`}>
				{/* <Hero /> */}
				<ContactUs />
				<OurOffices />
				{/* <section className="bg-white relative">
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
				</section> */}
			</div>
		</>
	);
};

export default contactus;
