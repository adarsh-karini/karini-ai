import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const CTA = () => {
	const { pathname } = useRouter();
	return (
		<>
			{pathname === "/services/genai" ||
			pathname === "/services/ml" ||
			pathname === "/aboutus" ||
			pathname === "/contactus" ? (
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

								<div className="block md:hidden space-y-1">
									<p className="text-center text-white">
										Let us help to accelerate your GenAI
									</p>
									{/* <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
										Generative AI
									</h2> */}
								</div>
								<div className="md:hidden flex justify-center space-x-2">
									<Link
										href="https://app.karini.ai/contactus"
										target="_blank"
										className=" flex items-center space-x-2 bg-white px-3 sm:px-4 py-2 text-xs font-medium text-primary-900 transition duration-100 md:text-sm rounded"
									>
										<span>Get in touch</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : (
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

								<div className="block md:hidden space-y-1">
									<p className="text-center text-white">
										Karini AI: Building Better AI, Faster. <br /> Orchestrating
										GenAI Apps for Enterprises GenAiOps at scale.
									</p>
									{/* <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
										Generative AI
									</h2> */}
								</div>

								<div className="md:hidden flex justify-center space-x-2">
									<Link
										href="https://karini.ai/contactus"
										className=" flex items-center space-x-2 bg-primary-200 px-3 sm:px-4 py-2 text-xs font-medium text-primary-900 transition duration-100 md:text-sm rounded"
									>
										<span>Book a demo</span>
									</Link>
									<Link
										href="https://app.karini.ai/signin"
										className=" flex space-x-2 bg-dark text-secondary-300 text-xs font-medium border border-dark px-3 sm:px-4 py-2 transition duration-100 md:text-sm rounded"
									>
										<span>Login</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default CTA;
