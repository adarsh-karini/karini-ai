import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const CTA = () => {
	const { pathname } = useRouter();
	return (
		<section id="become-a-partner" className="bg-white relative">
			<div className="bg-gradient-to-br from-primary-900 from-30% via-primary-700 to-primary-500 overflow-hidden z-10 relative">
				<div className="-z-10 absolute -right-32 -top-16 bg-gradient-to-br from-primary-100 to-primary-500 rounded-full shadow-lg">
					<div className="p-20 m-8 bg-primary-600 rounded-full"></div>
				</div>
				<div className="-z-10 absolute -left-10 -bottom-10 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
				<div className="mx-auto max-w-screen-lg p-4 rounded-lg">
					<div className=" flex flex-col items-center w-full h-full py-4 space-y-4">
						<div className="p-20 absolute -left-20 -bottom-24 bg-primary-600 rounded-full opacity-50"></div>
						<div className="p-20 absolute -right-20 -top-1/2 bg-primary-600 rounded-full opacity-50"></div>

						<div className=" z-10 space-y-1">
							<p className="text-lg md:text-2xl text-center text-white font-semibold">
								Contact us to learn more about Our Partner Programs Today
							</p>
							{/* <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
										Generative AI
									</h2> */}
						</div>

						<div className="flex justify-center space-x-2">
							<Link
								href="/contactus"
								className=" flex items-center space-x-2 bg-primary-200 px-3 sm:px-4 py-2 text-xs font-medium text-primary-900 transition duration-100 md:text-sm rounded"
							>
								<span>Contact us</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
