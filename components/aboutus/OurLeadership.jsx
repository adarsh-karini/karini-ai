import IconSeven from "@/svgs/aboutus/IconSeven";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiDiamondTrophy } from "react-icons/gi";
import { ourLeadershipData } from "@/content/aboutus/OurLeadershipData";
import { FaLinkedin } from "react-icons/fa";

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
									className="h-32 w-32 rounded-md shadow-xl object-contain" // object-contain, object-cover, object-fill, object-none, object-scale-down
									priority={true}
									quality={100}
								/>
								<div className="flex items-center space-x-2">
									<div>
										<Link
											href={data.linkedIn}
											target="_blank"
											rel="noopener noreferrer"
											className=""
										>
											<FaLinkedin
												size={25}
												className="cursor-pointer"
												color="#0077b5"
											/>
										</Link>
									</div>
									<div className="flex-1 ">
										<h3 className="text-primary-600 text-base font-semibold">
											{data.name}
										</h3>
										<p className="text-secondary-600 text-sm italic">
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
