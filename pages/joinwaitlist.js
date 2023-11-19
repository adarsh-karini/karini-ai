import axios from "axios";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["devanagari"],
});

const Joinwaitlist = () => {
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
	});

	const handleClick = (e) => {
		const { value, name } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const apiEndpoint =
				"https://4tqk6pfqye.execute-api.us-east-1.amazonaws.com/v1/";

			const res = await axios.post(apiEndpoint, formData);

			console.log("Response Data:", res);
			setShow(true);
		} catch (error) {
			console.error("Error during POST request:", error);
		}

		setFormData({ email: "" });

		setTimeout(() => {
			setShow(false);
		}, 2500);
	};
	return (
		<>
			<Head>
				<title>Join waitlist | Karini AI</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Data to Insights using Generative AI "
				/>
				<meta
					name="keywords"
					content="AWS ML,Databricks,OpenAI,ChatGPT,Bedrock,RAG,Artificial Intelligence,LLM,HuggingFace,LLMOps,Dolly"
				/>
			</Head>
			<div className={`${poppins.variable} ${inter.className} bg-white`}>
				<section className="bg-dark px-4 xl:px-0 overflow-hidden">
					<div className="max-w-screen-lg mx-auto space-y-8">
						<div className="h-[70vh] w-full flex justify-center items-center">
							<div className="space-y-8">
								<h1 className="text-center text-xl sm:text-2xl font-semibold text-secondary-200">
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-200 text-4xl md:text-5xl lg:text-6xl font-extrabold">
										Join the waitlist
									</span>
								</h1>
								<div className="z-10 relative">
									<div className="-z-10 absolute top-0 left-32 p-20 rounded-full bg-primary-600 blur-3xl opacity-20"></div>

									<form onSubmit={handleSubmit} className="space-y-4">
										<div className="flex flex-col space-y-2">
											{/* <input
												type="text"
												name="full_name"
												className="bg-dark border border-secondary-700 rounded-md focus:outline-secondary-600 text-white font-medium text-sm p-3"
												placeholder="Full name"
												onChange={handleClick}
												value={formData.full_name}
											/> */}
											<input
												type="email"
												name="email"
												className="bg-dark border border-secondary-700 rounded-md focus:outline-secondary-600 text-white font-medium text-sm p-3"
												placeholder="email"
												onChange={handleClick}
												value={formData.email}
												required
											/>
										</div>
										<div>
											<button
												type="submit"
												className="w-full py-4 text-white text-sm text-center font-medium bg-primary-600 rounded-md cursor-pointer"
											>
												Send
											</button>
										</div>
									</form>
								</div>
								{show && (
									<div>
										<p className="text-sm text-center text-green-400">
											🎉 We&apos;ve added to our waitlist!
										</p>
										<p className="text-secondary-300 text-sm text-center">
											We will let you know when karini.ai is ready.
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Joinwaitlist;
