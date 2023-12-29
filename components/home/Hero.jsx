import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/core";
// import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

const Hero = () => {
	const imagesData = [
		{
			title: "Dashboard",
			path: "/assets/images/platform/Dashboards.jpg",
			altText: "dashboard",
		},
		{
			title: "Explore Copilot Hub",
			path: "/assets/images/platform/Copilot_Hub.png",
			altText: "explore-copilot-hub",
		},
		{
			title: "Connect to SAAS and Proprietary Models",
			path: "/assets/images/platform/Model_Hub.png",
			altText: "connect-to-saas-and-proprietary-models",
		},
		{
			title: "Prompt Engineering",
			path: "/assets/images/platform/Prompt_Playground.png",
			altText: "prompt-engineering",
		},
		{
			title: "Low Code Recipes",
			path: "/assets/images/platform/Recipe.png",
			altText: "low-code-recipes",
		},
		{
			title: "Evaluate RAG",
			path: "/assets/images/platform/RAG_Evaluation.png",
			altText: "evaluate-rag",
		},
		{
			title: "Export Copilot",
			path: "/assets/images/platform/Export.png",
			altText: "export copilot",
		},
		{
			title: "Integrate Chatbot with your Applications",
			path: "/assets/images/platform/Copilot.png",
			altText: "intergrate-chatbot-with-your-applications",
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit");
	};

	return (
		<header>
			<div className="relative bg-dark overflow-hidden px-4 py-20">
				<section className="mx-auto max-w-screen-2xl">
					<div className="z-10 md:flex md:items-center space-y-10 md:space-y-0 md:space-x-10">
						<div className="md:w-2/6 flex justify-center md:justify-start md:items-center">
							<div className="space-y-4">
								<div className="space-y-1 text-center md:text-left">
									<div className="space-y-2">
										<span className="md:ml-1 md:text-sm text-primary-100 border border-primary-600 px-2 py-1 rounded-full">
											Data to Business Insights using
										</span>
										<h1 className="flex flex-col text-xl sm:text-2xl">
											<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-200 text-3xl md:text-4xl lg:text-5xl font-extrabold">
												Generative AI
											</span>
										</h1>
									</div>
									<p className="md:ml-1 text-white text-sm lg:text-base">
										Make your applications more intelligent 10x faster
									</p>
								</div>
								<div className="md:ml-1 w-full flex justify-center md:justify-start space-x-2">
									<Link
										href="https://app.karini.ai/chat"
										target="_blank"
										className=" flex items-center space-x-2 bg-primary-600 px-3 sm:px-4 py-2 text-xs font-medium text-white transition duration-100 md:text-sm rounded"
									>
										<span>Try copilot</span>
										<FiExternalLink size={20} className="text-white" />
									</Link>
									<Link
										href="https://app.karini.ai/signup"
										className=" flex space-x-2 bg-dark text-secondary-300 text-xs font-medium border border-secondary-400 px-3 sm:px-4 py-2 transition duration-100 md:text-sm rounded"
									>
										<span>Sign up</span>
										<span
											aria-hidden="true"
											className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
										>
											&rarr;
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="hidden lg:block flex-1 shadow-2xl rounded">
							<Splide
								options={{
									type: "loop",
									arrows: false,
									perPage: 1,
									perMove: 1,
									speed: 1500,
									interval: 3500,
									gap: 4,
									autoplay: true,
									rewind: true,
									rewindSpeed: 2000,
									drag: true,
									pauseOnHover: true,
									omitEnd: true,
									pauseOnFocus: true,
								}}
								className="heroSliderHome rounded"
							>
								{imagesData.map((val, index) => (
									<SplideSlide key={index} className="">
										<div className="space-y-1 h-full">
											<p className="min-h-[5px] text-white text-sm font-semibold text-left">
												{val.title}
											</p>
											<Image
												src={val.path}
												alt={val.altText}
												width={1500}
												height={1000}
												className="w-full shadow-2xl rounded"
												priority={true}
												quality={100}
											/>
										</div>
									</SplideSlide>
								))}
							</Splide>
						</div>
						<div className="block lg:hidden flex-1 shadow-2xl rounded">
							<Splide
								options={{
									type: "loop",
									arrows: false,
									perPage: 1,
									perMove: 1,
									speed: 1500,
									interval: 7000,
									gap: 4,
									autoplay: true,
									rewind: true,
									rewindSpeed: 2000,
									drag: true,
									pauseOnHover: true,
									omitEnd: true,
									pauseOnFocus: true,
								}}
								className="heroSliderHome rounded"
							>
								{imagesData.map((val, index) => (
									<SplideSlide key={index} className="">
										<div className="space-y-1 h-full">
											<p className="min-h-[5px] text-white text-sm font-semibold text-left">
												{val.title}
											</p>
											<Image
												src={val.path}
												alt={val.altText}
												width={1500}
												height={1000}
												className="w-full shadow-2xl rounded"
												priority={true}
												quality={100}
											/>
										</div>
									</SplideSlide>
								))}
							</Splide>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Hero;
