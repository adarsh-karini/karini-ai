import { sectionOne } from "@/content/partner/databricks/sectionOne";
import { sectionThree } from "@/content/partner/databricks/sectionThree";
import { sectionTwo } from "@/content/partner/databricks/sectionTwo";
import BuildIcon from "@/svgs/partners/BuildIcon";
import DrawIcon from "@/svgs/partners/DrawIcon";
import KeyIcon from "@/svgs/partners/KeyIcon";
import SpaceshipIcon from "@/svgs/partners/SpaceshipIcon";
import React, { useState } from "react";

const SectionThree = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="max-w-screen-lg mx-auto py-6">
			<section>
				<div className="relative flex flex-col items-center justify-center py-10">
					<div className="-z-10 absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-0 bg-primary-100 blur-2xl"></div>
					<div className="absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
					<div className="z-10 space-y-3 px-4 max-w-screen-lg">
						<div className="flex justify-center">
							<KeyIcon width={50} height={50} color={"#7c3aed"} />
						</div>
						<h1 className="text-center text-base sm:text-lg md:text-2xl font-semibold text-black flex flex-col">
							<span>Build Compound AI System with</span>
							<span className="text-primary-600">Databricks and Karini</span>
						</h1>
					</div>
				</div>
			</section>
			{/* <div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 lg:px-0">
				{sectionThree.map((data, index) => {
					return (
						<div
							key={index}
							className="flex flex-col justify-between space-y-6 bg-gradient-to-r from-primary-50 to-white border border-primary-100 shadow-sm rounded-md p-4"
						>
							<div className="space-y-2">
								<div className="flex items-center space-x-4">
									<div className="w-10">
										{index === 0 && (
											<BuildIcon width={35} height={35} color={"#7c3aed"} />
										)}
										{index === 1 && (
											<DrawIcon width={35} height={35} color={"#7c3aed"} />
										)}
										{index === 2 && (
											<SpaceshipIcon width={35} height={35} color={"#7c3aed"} />
										)}
									</div>

									<h3 className="flex-1 text-primary-600 font-semibold sm:text-base">
										{data.title}
									</h3>
								</div>
								<p className="text-secondary-600 text-sm leading-relaxed">
									{data.overview}
								</p>
							</div>
						</div>
					);
				})}
			</div> */}
			<div className="h-[30rem] z-10 flex border rounded shadow p-4">
				<div className="h-full w-[300px] break-words border-r">
					{sectionThree.map((data, index) => (
						<div
							key={index}
							onClick={() => setActive(index)}
							className={`${
								active === index
									? "text-white font-medium bg-primary-600"
									: "text-secondary-700 hover:bg-primary-50"
							} flex items-center space-x-2 border-b border-b-secondary-300 rounded px-3 py-2 cursor-pointer transition text-sm`}
						>
							<div className="w-10">
								{index === 0 && (
									<BuildIcon
										width={28}
										height={28}
										color={active === index ? "#fff" : "#7c3aed"}
									/>
								)}
								{index === 1 && (
									<DrawIcon
										width={28}
										height={28}
										color={active === index ? "#fff" : "#7c3aed"}
									/>
								)}
								{index === 2 && (
									<SpaceshipIcon
										width={28}
										height={28}
										color={active === index ? "#fff" : "#7c3aed"}
									/>
								)}
							</div>

							<h3 className="flex-1">{data.title}</h3>
						</div>
					))}
				</div>
				<div className="h-full flex-1 p-4 space-y-4 flex flex-col">
					<p className="text-sm text-secondary-700">
						{sectionThree[active].overview}
					</p>
					<div className="flex-1 flex justify-center items-center border border-black h-full">
						<p className="text-black">Video will be HERE</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
