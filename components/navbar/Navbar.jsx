import Logo from "@/svgs/logo/Logo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	BsBookmarkStarFill,
	BsCloudFog2,
	BsInfoCircleFill,
} from "react-icons/bs";
import { FaAngleDown, FaAws } from "react-icons/fa";
import { GiArtificialHive, GiFlatPlatform } from "react-icons/gi";
import { IoPricetags } from "react-icons/io5";
import { MdMiscellaneousServices, MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Navbar2 = () => {
	const [servicesDropdown, setServicesDropdown] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [partnersDropdown, setPartnersDropdown] = useState(false);
	return (
		<div className="bg-dark fixed w-full z-50">
			<div className="mx-auto max-w-screen-2xl">
				<nav className="relative flex justify-between items-center border-b border-gray-800 px-4 py-5">
					<div>
						<Link
							href="/"
							onClick={() => setMobileMenu(false)}
							// className="text-xl font-semibold md:text-2xl"
							aria-label="logo"
						>
							<Logo width={100} />
							{/* <span className="text-white">karini.</span>
              <span className="text-primary-600">ai</span> */}
						</Link>
					</div>
					<div className="hidden lg:flex justify-between space-x-8 text-base text-secondary-300">
						<Link href={"/platforms"}>Platform</Link>
						<div
							className="relative flex items-end space-x-1 cursor-pointer select-none"
							onClick={() => {
								setServicesDropdown((prev) => !prev);
								setPartnersDropdown(false);
							}}
						>
							<span>Services</span>
							<FaAngleDown size={15} />
							{servicesDropdown && (
								<div
									onMouseLeave={() => setServicesDropdown(false)}
									className="z-20 border absolute top-10 bg-white drop-shadow-md p-2 rounded"
								>
									<Link
										href={"/services/genai"}
										onClick={() => setServicesDropdown(false)}
										className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
									>
										<BsCloudFog2
											size={35}
											className="text-primary-600 p-2 group-hover:text-white"
										/>
										<h3 className="cursor-pointer text-sm text-black font-semibold group-hover:text-white whitespace-nowrap">
											Generative AI
										</h3>
									</Link>
									<Link
										href={"/services/ml"}
										onClick={() => setServicesDropdown(false)}
										className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
									>
										<BsCloudFog2
											size={35}
											className="text-primary-600 p-2 group-hover:text-white"
										/>
										<h3 className="cursor-pointer text-sm text-black font-semibold group-hover:text-white whitespace-nowrap">
											Machine Learning
										</h3>
									</Link>
								</div>
							)}
						</div>
						<div
							className="relative flex items-end space-x-1 cursor-pointer select-none"
							onClick={() => {
								setPartnersDropdown((prev) => !prev);
								setServicesDropdown(false);
							}}
						>
							<span>Partners</span>
							<FaAngleDown size={15} />
							{partnersDropdown && (
								<div
									onMouseLeave={() => setPartnersDropdown(false)}
									className="min-w-[200px] z-20 border absolute top-10 bg-white drop-shadow-md p-2 rounded space-y-3"
								>
									<div className="space-y-2">
										<p className="py-1 text-sm text-primary-600 border-b">
											Cloud Partners
										</p>
										<div className="">
											<Link
												href={"/partners#aws"}
												onClick={() => setPartnersDropdown(false)}
												className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
											>
												<FaAws size={25} className="p-1" color={"#FF9900"} />
												<h3 className="cursor-pointer text-sm text-black font-semibold group-hover:text-white whitespace-nowrap">
													AWS
												</h3>
											</Link>
											<Link
												href={"/partners#microsoft"}
												onClick={() => setPartnersDropdown(false)}
												className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
											>
												<VscAzure size={25} className="p-1" color={"#069AF3"} />
												<h3 className="cursor-pointer text-sm text-black font-semibold group-hover:text-white whitespace-nowrap">
													Microsoft Azure
												</h3>
											</Link>
										</div>
									</div>
									<div className="space-y-2">
										<p className="py-1 text-sm text-primary-600 border-b">
											Technology Partners
										</p>
										<div>
											<Link
												href={"/partners/databricks"}
												onClick={() => setPartnersDropdown(false)}
												className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
											>
												<SiDatabricks
													size={25}
													className="p-1"
													color={"#FF3621"}
												/>
												<h3 className="cursor-pointer text-sm text-black font-semibold group-hover:text-white whitespace-nowrap">
													Databricks
												</h3>
											</Link>
										</div>
									</div>
									<div className="space-y-2">
										<p className="py-1 text-sm text-primary-600 border-b">
											Our Resellers
										</p>
										<div>
											<Link
												href={"/partners#dtg"}
												onClick={() => setPartnersDropdown(false)}
												className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
											>
												<Image
													src={"/assets/images/partners/dtg_icon.png"}
													alt="dtg_icon"
													height={25}
													width={25}
													className="p-1"
												/>
												<h3 className="cursor-pointer text-sm text-black font-semibold group-hover:text-white whitespace-nowrap">
													DTG
												</h3>
											</Link>
										</div>
									</div>
								</div>
							)}
						</div>
						{/* <Link href={"/solutions"}>Solutions</Link> */}
						{/* <Link href={"/partners"}>Partners</Link> */}
						<Link href={"/blogs"}>Blogs</Link>
						{/* <Link href={"/pricing"}>Pricing</Link> */}
						<Link href={"/aboutus"}>About us</Link>
						{/* <Link href={"/careers"}>Careers</Link> */}
						<Link href={"https://docs.karini.ai/"}>Docs</Link>
					</div>
					<div className="flex space-x-2">
						{/* <Link
              href={"/joinwaitlist"}
              className="hidden lg:block bg-primary-600 border border-primary-600 px-6 py-2 text-center text-sm font-semibold text-white hover:text-primary-600 transition duration-100 hover:bg-white rounded"
            >
              Join waitlist
            </Link> */}
						<Link
							href={"/contactus"}
							className="hidden lg:block text-primary-600 hover:text-white border border-primary-600 px-4 py-1 text-center text-sm font-semibold bg-primary-100 hover:bg-primary-600 transition duration-100  rounded"
						>
							Book a demo
						</Link>
						<Link
							href={"https://app.karini.ai/signin"}
							className="hidden lg:block bg-primary-600 border border-primary-600 px-4 py-1 text-center text-sm font-semibold text-white hover:text-primary-600 transition duration-100 hover:bg-white rounded"
						>
							Log in
						</Link>
					</div>
					<div className="lg:hidden">
						{!mobileMenu && (
							<RiMenu3Fill
								size={30}
								className="text-secondary-100"
								onClick={() => setMobileMenu((prev) => !prev)}
							/>
						)}
						{mobileMenu && (
							<MdOutlineClose
								size={30}
								className="text-secondary-100"
								onClick={() => setMobileMenu((prev) => !prev)}
							/>
						)}
						<div
							className={`${
								mobileMenu ? "block" : "hidden"
							} absolute w-full px-4 left-0 top-16`}
						>
							<div className=" bg-white shadow-xl">
								<div className="space-y-4 border-b border-secondary-3x`00 p-4">
									<Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"/platforms"}
										className="flex items-center gap-2 rounded-lg text-secondary-600"
									>
										<GiFlatPlatform size={20} className="text-secondary-600" />

										<span className="text-sm font-medium"> Platforms </span>
									</Link>

									<details className="group [&_summary::-webkit-details-marker]:hidden">
										<summary className="group flex items-center justify-between rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600">
											<div className="flex items-center gap-2">
												<MdMiscellaneousServices
													size={20}
													className="text-secondary-600"
												/>

												<span className="text-sm font-medium"> Services </span>
												<span className="shrink-0 transition duration-300 group-open:-rotate-180">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</span>
											</div>
										</summary>

										<ul className="space-y-2 px-4 py-2">
											<Link
												onClick={() => setMobileMenu((prev) => !prev)}
												href={"/services/genai"}
												className="flex items-center space-x-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
											>
												<GiArtificialHive
													size={20}
													className="text-secondary-600"
												/>
												<span>Generative AI</span>
											</Link>

											<Link
												onClick={() => setMobileMenu((prev) => !prev)}
												href={"/services/ml"}
												className="flex items-center space-x-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
											>
												<BsCloudFog2 size={20} className="text-secondary-600" />
												<span> Machine Learning</span>
											</Link>
										</ul>
									</details>

									<details className="group [&_summary::-webkit-details-marker]:hidden">
										<summary className="group flex items-center justify-between rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600">
											<div className="flex items-center gap-2">
												<BsBookmarkStarFill
													size={20}
													className="text-secondary-600"
												/>

												<span className="text-sm font-medium"> Partners </span>
												<span className="shrink-0 transition duration-300 group-open:-rotate-180">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path
															fillRule="evenodd"
															d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
															clipRule="evenodd"
														/>
													</svg>
												</span>
											</div>
										</summary>

										<ul className="space-y-3 px-4 py-4">
											<div className="space-y-2">
												<p className="py-1 text-sm text-primary-600 border-b">
													Cloud Partners
												</p>
												<div className="space-y-2 py-1">
													<Link
														onClick={() => setMobileMenu((prev) => !prev)}
														href={"/partners#aws"}
														className="flex items-center space-x-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
													>
														<FaAws
															size={20}
															// className="text-secondary-600"
															color={"#FF9900"}
														/>
														<span className="text-sm"> AWS</span>
													</Link>

													<Link
														onClick={() => setMobileMenu((prev) => !prev)}
														href={"/partners#microsoft"}
														className="flex items-center space-x-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
													>
														<VscAzure
															size={20}
															// className="text-secondary-600"
															color={"#069AF3"}
														/>
														<span className="text-sm"> Microsoft Azure</span>
													</Link>
												</div>
											</div>

											<div className="space-y-2">
												<p className="py-1 text-sm text-primary-600 border-b">
													Technology Partners
												</p>
												<div className="space-y-2 py-1">
													<Link
														onClick={() => setMobileMenu((prev) => !prev)}
														href={"/partners/databricks"}
														className="flex items-center space-x-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
													>
														<SiDatabricks
															size={20}
															// className="text-secondary-600"
															color={"#FF3621"}
														/>
														<span className="text-sm"> Databricks</span>
													</Link>
												</div>
											</div>

											<div className="space-y-2">
												<p className="py-1 text-sm text-primary-600 border-b">
													Our Resellers
												</p>
												<div className="space-y-2 py-1">
													<Link
														onClick={() => setMobileMenu((prev) => !prev)}
														href={"/partners#dtg"}
														className="flex items-center space-x-2 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
													>
														<Image
															src={"/assets/images/partners/dtg_icon.png"}
															alt="dtg_icon"
															height={22}
															width={22}
															className="text-secondary-600"
														/>
														<span className="text-sm"> DTG</span>
													</Link>
												</div>
											</div>
										</ul>
									</details>

									{/* <Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"/solutions"}
										className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
									>
										<BiSolidBarChartAlt2
											size={20}
											className="text-secondary-600"
										/>

										<span className="text-sm font-medium"> Solutions </span>
									</Link> */}
									{/* <Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"/partners"}
										className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
									>
										<BsBookmarkStarFill
											size={20}
											className="text-secondary-600"
										/>

										<span className="text-sm font-medium"> Partners </span>
									</Link> */}

									<Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"/blogs"}
										className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
									>
										<BsBookmarkStarFill
											size={20}
											className="text-secondary-600"
										/>

										<span className="text-sm font-medium"> Blogs </span>
									</Link>

									{/* <Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"/pricing"}
										className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
									>
										<IoPricetags size={20} className="text-secondary-600" />

										<span className="text-sm font-medium"> Pricing </span>
									</Link> */}

									<Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"/aboutus"}
										className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
									>
										<BsInfoCircleFill
											size={20}
											className="text-secondary-600"
										/>

										<span className="text-sm font-medium"> About Us </span>
									</Link>
									<Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"https://docs.karini.ai/"}
										className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
									>
										<BsInfoCircleFill
											size={20}
											className="text-secondary-600"
										/>

										<span className="text-sm font-medium"> Docs </span>
									</Link>

									{/* <Link
                    onClick={() => setMobileMenu((prev) => !prev)}
                    href={"/careers"}
                    className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
                  >
                    <AiOutlineRise size={20} className="text-secondary-600" />

                    <span className="text-sm font-medium"> Careers </span>
                  </Link> */}
								</div>
								<div className="flex p-4">
									<Link
										onClick={() => setMobileMenu((prev) => !prev)}
										href={"https://app.karini.ai/signin"}
										className="w-full rounded bg-primary-600 border border-primary-600 px-6 py-2 text-center text-sm font-semibold text-white hover:text-primary-600 transition duration-100 hover:bg-white"
									>
										Log in
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar2;
