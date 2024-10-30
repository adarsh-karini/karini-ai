import Logo from "@/svgs/logo/Logo";
import Link from "next/link";
import React from "react";
import { BiSolidMapPin } from "react-icons/bi";
import {
	FaLinkedin,
	FaPhone,
	FaPhoneAlt,
	FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="overflow-hidden bg-white px-4 border-t border-t-secondary-300">
			<footer className="relative z-10 max-w-screen-2xl mx-auto">
				<div className="-z-10 absolute -right-52 top-10 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg opacity-10">
					<div className="p-20 m-8 bg-white rounded-full"></div>
				</div>
				<div className="-z-10 absolute -left-32 -bottom-14 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg opacity-10"></div>
				<div className="flex flex-col md:flex-row gap-10 lg:gap-20 py-10">
					<div className="md:w-1/5 lg:w-2/5 space-y-2">
						<Link href={"/"}>
							<Logo width={100} height={30} />
						</Link>
						<p className="text-secondary-600 text-sm font-medium leading-relaxed">
							Powering Evolution in Generative AI.
						</p>
						<div className="flex space-x-2">
							<Link
								href={"https://www.linkedin.com/company/karini-ai/"}
								target="_blank"
							>
								<FaLinkedin
									size={25}
									className="cursor-pointer"
									color="#0077b5"
								/>
							</Link>
							<Link href={"https://twitter.com/karini_ai"} target="_blank">
								<Image
									src={"/assets/images/xtwitter.png"}
									alt={"twitter"}
									target="_blank"
									width={25}
									height={25}
								/>
							</Link>
						</div>
					</div>
					<div className="md:w-4/5 lg:w-3/5">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
							{/* <div className="space-y-2">
								<Link href={"/platforms"}>
									<p className="text-primary-600 font-semibold text-lg">
										Platform
									</p>
								</Link>
							</div> */}
							<div className="space-y-2">
								<p className="text-black font-semibold text-lg">Quick links</p>
								<div className="grid grid-cols-1 gap-2">
									<Link
										href={"/platforms#platforms"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Platform
									</Link>
									<Link
										href={"/aboutus#ourprojects"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Our Projects
									</Link>
									<Link
										href={"/partners"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Partners
									</Link>
								</div>
							</div>
							<div className="space-y-2">
								<p className="text-black font-semibold text-lg">Services</p>
								<div className="grid grid-cols-1 gap-2">
									<Link
										href={"/services/genai#genai"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Generative AI
									</Link>
									<Link
										href={"/services/ml#ml"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Machine Learning
									</Link>
								</div>
							</div>
							<div className="space-y-2">
								<p className="text-black font-semibold text-lg">Company</p>
								<div className="grid grid-cols-1 gap-2">
									<Link
										href={"/blogs"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Resources
									</Link>
									<Link
										href={"/aboutus#aboutus"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										About us
									</Link>
									<Link
										href={"/contactus#contactus"}
										className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
									>
										Contact us
									</Link>
									{/* <Link
                    href={"/careers"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    Careers
                  </Link> */}
								</div>
							</div>
							<div className="space-y-2">
								<p className="text-black font-semibold text-lg">Contact us</p>
								<div className="grid grid-cols-1 gap-2">
									<div className="text-black flex items-center space-x-1">
										<BiSolidMapPin
											size={20}
											className="text-primary-600 mr-1"
										/>
										{/* <Link
											href={"https://maps.app.goo.gl/1sPWPSUeyfnm6dVj7"}
											target="_blank"
											className="flex-1 text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
										>
											Georgia, USA
										</Link> */}{" "}
										Alpharetta, GA, US
									</div>
									<div className="text-black flex items-center space-x-1">
										<BiSolidMapPin
											size={20}
											className="text-primary-600 mr-1"
										/>{" "}
										Pune, India
										{/* <Link
											href={"https://maps.app.goo.gl/StY3Yd6iZaqZqEFY9"}
											target="_blank"
											className="flex-1 text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
										>
											Pune, India
										</Link> */}
									</div>
									<div className="flex items-center space-x-1">
										<FaPhoneAlt size={15} className="text-primary-600" />
										<a
											href="tel:(404) 891-0255"
											className="flex-1 text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
										>
											(404) 891-0255
										</a>
									</div>
									<div className="flex items-center space-x-1">
										<MdAlternateEmail size={20} className="text-primary-600" />
										<a
											href="mailto:sales@karini.ai"
											className="flex-1 text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
										>
											sales@karini.ai
										</a>
									</div>
									{/* <Link
                    href={"/careers"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    Careers
                  </Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 py-3 border-t border-secondary-400">
					<p className="text-secondary-700 font-semibold text-sm">
						© 2023-2024{" "}
						<Link
							href={"https://www.karini.ai/"}
							className="text-blue-500 hover:underline underline-offset-1"
						>
							karini.ai
						</Link>
						. All Rights Reserved.
					</p>
					<div className="space-x-3">
						{/* <Link
							href={"/privacypolicy#privacypolicy"}
							className="text-primary-600 text-sm hover:underline underline-offset-2 hover:font-semibold font-medium"
						>
							Privacy Policy
						</Link> */}
						<Link
							href={"/termsofuse#termsofuse"}
							className="text-primary-600 text-sm hover:underline underline-offset-2 hover:font-semibold font-medium"
						>
							Terms of Use
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
