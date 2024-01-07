import IconSeven from "@/svgs/aboutus/IconSeven";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiDiamondTrophy } from "react-icons/gi";
import { ourLeadershipData } from "@/content/aboutus/OurLeadershipData";

const OurLeadership = () => {
	const iconColor = "#7c3aed";

	return (
		<section className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20 overflow-hidden">
			<div className="max-w-screen-md mx-auto space-y-10 md:space-y-16">
				<h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Our Leadership
				</h2>
				<div className="grid sm:grid-cols-1 gap-10">
					{ourLeadershipData.map((data, index) => (
						<div
							key={index}
							className="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4"
						>
							<div className="md:w-1/4 flex flex-col items-center space-y-4">
								<Image
									src={data.image}
									alt="team member image"
									width={100}
									height={100}
									className="h-32 w-32 rounded-full shadow-xl object-cover" // object-contain object-cover object-fill object-none object-scale-down
									priority={true}
									quality={100}
								/>
								<div className="flex space-x-4 items-center">
									<a
										href={data.linkedIn}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-primary-100 p-1 rounded-md cursor-pointer"
									>
										<IconSeven width={30} height={30} color={iconColor} />
									</a>
									<div>
										<h3 className="text-black text-base font-semibold">
											{data.name}
										</h3>
										<p className="text-secondary-600 text-sm font-semibold">
											{data.position}
										</p>
									</div>
								</div>
							</div>
							<div className="md:w-3/4">
								<p className="text-secondary-700 text-sm text-justify leading-6">
									{data.summary}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurLeadership;
