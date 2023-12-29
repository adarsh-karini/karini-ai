import Image from "next/image";
import React, { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { ImPlay3 } from "react-icons/im";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const HowItWorks = () => {
	const [active, setActive] = useState(0);
	// const buttons = [
	// 	"Centralized Management of Gen AI apps",
	// 	"Create Model Endpoint",
	// 	"Test Prompts using Playground",
	// 	"Set up Data flows using Recipe",
	// 	"Run Recipe",
	// 	"Evaluate RAG",
	// 	"Export Copilot",
	// 	"Explore Copilot Hub",
	// 	"Start using Copilot",
	// ];

	const howItWorksData = [

		{
			name: "Dashboard",
			image: "/assets/images/platform/Dashboards.jpg",
		},
		{
			name: "Explore Copilot Hub",
			image: "/assets/images/platform/Copilot_Hub.png",
		},
		{
			name: "Create Model Endpoint",
			image: "/assets/images/platform/Model_Hub.png",
		},
		{
			name: "Test Prompts using Playground",
			image: "/assets/images/platform/Prompt_Playground.png",
		},
		{
			name: "Set up and Run Recipe",
			image: "/assets/images/platform/Recipe.png",
		},
		{
			name: "Evaluate RAG",
			image: "/assets/images/platform/RAG_Evaluation.png",
		},
		{
			name: "Export Copilot",
			image: "/assets/images/platform/Export.png",
		},
		{
			name: "Start using Copilot",
			image: "/assets/images/platform/Copilot.png",
		}
	];

	return (
		<section className="bg-white px-4 sm:px-10 py-20 overflow-hidden">
			<div className="z-10 relative max-w-screen-xl mx-auto space-y-10">
				<div className="absolute -left-20 -top-16 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
				<div className="-z-10 absolute right-0 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
					<div className="p-20 m-8 bg-white rounded-full"></div>
				</div>
				<div className="space-y-2">
					<h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
						How It Works
					</h2>
					<p className="text-secondary-600 text-sm text-center">
						Build and Deploy Gen AI application in minutes
					</p>
				</div>
				<div className="space-y-2">
					<div className="flex gap-2 text-sm text-gray-500 overflow-x-auto scrollbar-thin scrollbar-thumb-secondary-400 scrollbar-track-secondary-200">
						{howItWorksData.map((data, index) => (
							<button
								key={index}
								type="button"
								onClick={() => setActive(index)}
								className={`${
									active === index
										? "border-2 border-primary-600 text-primary-600 font-medium"
										: "bg-white text-secondary-700 border-secondary-300"
								} flex items-center space-x-4 border hover:border-primary-600 hover:bg-primary-50 text-xs transition py-3 px-3 mb-4 whitespace-nowrap rounded-lg`}
							>
								<MdOutlineInsertPageBreak
									size={20}
									className={
										active === index ? "text-primary-600" : "text-secondary-700"
									}
								/>
								<span>{data.name}</span>
							</button>
						))}
					</div>
					<div className="w-full flex justify-center">
						{howItWorksData[active] && (
							<Image
								src={howItWorksData[active].image}
								alt="how-it-works-image"
								width={1000}
								height={500}
								className="object-contain rounded-lg shadow border"
							/>
						)}
					</div>
					{/* <div className="bg-primary-100 max-w-screen-lg mx-auto flex justify-center items-center border-8 border-white shadow py-40 rounded-lg">
						
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
