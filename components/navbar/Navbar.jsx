import Logo from "@/svgs/logo/Logo";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	BsBookmarkStarFill,
	BsCloudFog2,
	BsInfoCircleFill,
} from "react-icons/bs";
import { FaAngleDown, FaAws, FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiArtificialHive, GiFlatPlatform } from "react-icons/gi";
import { IoPricetags } from "react-icons/io5";
import { MdMiscellaneousServices, MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { SiDatabricks } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Navbar = () => {
	const [servicesDropdown, setServicesDropdown] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [partnersDropdown, setPartnersDropdown] = useState(false);

	const menuArray = [
		{ name: "Platform", href: "/platforms#platforms" },
		{
			name: "Services",
			submenu: [
				{
					name: "Generative AI",
					href: "/services/genai#genai",
					icon: BsCloudFog2,
					iconType: "svg",
				},
				{
					name: "Machine Learning",
					href: "/services/ml#ml",
					icon: BsCloudFog2,
					iconType: "svg",
				},
			],
		},
		{
			name: "Partners",
			submenu: [
				{
					name: "Our partners",
					nameCss: "font-medium",
					href: "/partners#partners",
					icon: (
						<Image
							src={"/karini-favicon.png"}
							alt="aws_icon"
							height={22}
							width={22}
							className="text-secondary-600"
						/>
					),
					className: "mb-2 border-b border-b-secondary-200",
				},
				{
					name: "Cloud Partners",
					items: [
						{
							name: "AWS",
							href: "/partners#aws",
							icon: (
								<Image
									src={
										"https://d189ftywc9pie0.cloudfront.net/assets/images/partners/aws_icon.jpeg"
									}
									alt="aws_icon"
									height={25}
									width={25}
								/>
							),
						},
						{
							name: "Microsoft Azure",
							href: "/partners#microsoft",
							icon: (
								<Image
									src={
										"https://d189ftywc9pie0.cloudfront.net/assets/images/partners/azure_icon.jpeg"
									}
									alt="azure_icon"
									height={25}
									width={25}
								/>
							),
						},
					],
				},
				{
					name: "Technology Partners",
					items: [
						{
							name: "Databricks",
							href: "/partners/databricks#databricks",
							icon: SiDatabricks,
							iconType: "svg",
							svgColor: "#FF3621",
						},
						{
							name: "Nvidia",
							href: "/partners#nvidia",
							icon: (
								<Image
									src={
										"https://d189ftywc9pie0.cloudfront.net/assets/images/partners/Nvidia_logo.png"
									}
									alt="nvidia_icon"
									height={25}
									width={25}
								/>
							),
						},
						{
							name: "Teradata",
							href: "/partners#teradata",
							icon: (
								<Image
									src={
										"https://d189ftywc9pie0.cloudfront.net/assets/images/partners/teradata_icon.png"
									}
									alt="teradata_icon"
									height={25}
									width={25}
								/>
							),
						},
						{
							name: "Protect AI",
							href: "/partners#protect-ai",
							icon: (
								<Image
									src={
										"https://d189ftywc9pie0.cloudfront.net/assets/images/partners/Protect-AI.png"
									}
									alt="protectai_icon"
									height={25}
									width={25}
								/>
							),
						},
					],
				},
				{
					name: "Become a Partner",
					nameCss: "font-medium",
					href: "/partners#become-a-partner",
					// icon: (
					// 	<Image
					// 		src={"/karini-favicon.png"}
					// 		alt="aws_icon"
					// 		height={22}
					// 		width={22}
					// 		className="text-secondary-600"
					// 	/>
					// ),
					className: "mt-3 border-t border-t-secondary-200",
				},
			],
		},
		{ name: "Resources", href: "/blogs" },
		{ name: "About us", href: "/aboutus#aboutus" },
		{ name: "Docs", href: "https://docs.karini.ai/" },
	];

	const renderSubMenu = (submenu) =>
		submenu.map((item, idx) => (
			<Link
				key={idx}
				href={item.href}
				onClick={() => setMobileMenu(false)}
				className="flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded"
			>
				{item.iconType === "svg" ? (
					<item.icon size={25} color={item.svgColor} />
				) : (
					item.icon
				)}
				<h3 className="cursor-pointer text-sm text-black group-hover:text-white whitespace-nowrap">
					{item.name}
				</h3>
			</Link>
		));

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
						{menuArray.map((menu, idx) => (
							<div key={idx}>
								{menu.submenu ? (
									<div
										className="relative flex items-center space-x-1 cursor-pointer select-none"
										onClick={() => {
											if (menu.name === "Services") {
												setServicesDropdown(!servicesDropdown);
												setPartnersDropdown(false);
											} else if (menu.name === "Partners") {
												setPartnersDropdown(!partnersDropdown);
												setServicesDropdown(false);
											}
										}}
									>
										<span>{menu.name}</span>
										<FaAngleDown size={15} />
										{(menu.name === "Services" && servicesDropdown) ||
										(menu.name === "Partners" && partnersDropdown) ? (
											<div
												className="min-w-[250px] z-20 border absolute top-10 bg-white drop-shadow-md p-2 rounded"
												onMouseLeave={() =>
													menu.name === "Services"
														? setServicesDropdown(false)
														: setPartnersDropdown(false)
												}
											>
												{menu.submenu.map((submenu, idx) =>
													submenu.items ? (
														<div key={idx} className="space-y-2">
															<p className="py-1 px-2 text-sm text-primary-600 font-medium border-b">
																{submenu.name}
															</p>
															{renderSubMenu(submenu.items)}
														</div>
													) : (
														<Link
															key={idx}
															href={submenu.href}
															onClick={() =>
																menu.name === "Services"
																	? setServicesDropdown(false)
																	: setPartnersDropdown(false)
															}
															className={`${submenu.className} group flex items-center space-x-2 hover:bg-primary-600 group transition px-2 py-1 rounded`}
														>
															{submenu.iconType === "svg" ? (
																<submenu.icon
																	size={25}
																	className="text-primary-600 group-hover:text-white"
																/>
															) : (
																submenu.icon
															)}
															<h3
																className={`${submenu.nameCss} cursor-pointer text-sm text-black group-hover:text-white whitespace-nowrap`}
															>
																{submenu.name}
															</h3>
														</Link>
													)
												)}
											</div>
										) : null}
									</div>
								) : (
									<Link href={menu.href}>{menu.name}</Link>
								)}
							</div>
						))}
					</div>
					<div className="flex space-x-2">
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
							<div className="bg-white shadow-xl">
								<div className="space-y-4 border-b border-secondary-300 p-4">
									{menuArray.map((menu, idx) => (
										<div key={idx}>
											{menu.submenu ? (
												<details className="group [&_summary::-webkit-details-marker]:hidden">
													<summary className="group flex items-center justify-between rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600">
														<div className="flex items-center gap-2">
															<BsBookmarkStarFill
																size={20}
																className="text-secondary-600"
															/>
															<span className="text-sm font-medium">
																{menu.name}
															</span>
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
														{menu.submenu.map((submenu, subIdx) =>
															submenu.items ? (
																<div key={subIdx} className="space-y-2">
																	<p className="py-1 text-sm text-primary-600 font-medium border-b">
																		{submenu.name}
																	</p>
																	{submenu.items.map((item, itemIdx) => (
																		<Link
																			key={itemIdx}
																			href={item.href}
																			className="flex items-center space-x-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
																			onClick={() => setMobileMenu(false)}
																		>
																			{item.iconType === "svg" ? (
																				<item.icon
																					size={20}
																					className="text-primary-600"
																				/>
																			) : (
																				item.icon
																			)}
																			<span className="text-black">
																				{item.name}
																			</span>
																		</Link>
																	))}
																</div>
															) : (
																<Link
																	key={subIdx}
																	href={submenu.href}
																	className={`${submenu.className} flex items-center space-x-2 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:text-secondary-600`}
																	onClick={() => setMobileMenu(false)}
																>
																	{submenu.iconType === "svg" ? (
																		<submenu.icon size={20} />
																	) : (
																		submenu.icon
																	)}
																	<span
																		className={`${submenu.nameCss} text-black`}
																	>
																		{submenu.name}
																	</span>
																</Link>
															)
														)}
													</ul>
												</details>
											) : (
												<Link
													href={menu.href}
													className="flex items-center gap-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-secondary-600"
													onClick={() => setMobileMenu(false)}
												>
													<span className="text-sm font-medium">
														{menu.name}
													</span>
												</Link>
											)}
										</div>
									))}
								</div>
								<div className="flex p-4">
									<Link
										href={"https://app.karini.ai/signin"}
										className="w-full rounded bg-primary-600 border border-primary-600 px-6 py-2 text-center text-sm font-semibold text-white hover:text-primary-600 transition duration-100 hover:bg-white"
										onClick={() => setMobileMenu(false)}
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

export default Navbar;
