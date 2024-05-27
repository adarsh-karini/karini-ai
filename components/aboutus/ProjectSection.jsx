import IconSeven from "@/svgs/aboutus/IconSeven";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ourLeadershipData } from "@/content/aboutus/OurLeadershipData";
import { FaLinkedin } from "react-icons/fa";
import {
	kariniLegalData,
	projectSectionData,
} from "@/content/aboutus/ProjectSectionData";

const ProjectSection = () => {
	const iconColor = "#7c3aed";

	return (
		<section
			id="ourprojects"
			className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20 overflow-hidden"
		>
			<div className="max-w-screen-md mx-auto space-y-10 md:space-y-16">
				<h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Our Projects
				</h2>
				<div className="space-y-14 px-4 lg:px-0">
					<div className="space-y-6">
						<div className="pb-1 border-b">
							<h2 className="text-primary-600 font-semibold tracking-tighter text-3xl">
								Built with Karini AI
							</h2>
							<p className="text-lg text-secondary-700 font-medium">
								Unleash the Power of Generative AI: Build with Karini
							</p>
						</div>
						<div className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{projectSectionData.map((project, index) => (
									<div
										key={index}
										className="space-y-2 rounded shadow-md border p-5"
									>
										<h3 className="text-sm text-black font-medium pb-2 border-b">
											{project.title}
										</h3>
										<p className="text-secondary-700 text-sm leading-relaxed">
											{project.description}
										</p>
									</div>
								))}
							</div>
							<div className="space-y-1">
								<p className="text-black italic">
									Build with Karini AI and unlock the full potential of
									Generative AI.{" "}
									<a
										href="https://www.karini.ai/contactus"
										className="text-blue-600 hover:underline"
									>
										Contact us
									</a>{" "}
									today to learn how Karini can accelerate your innovation
									journey.
								</p>
							</div>
						</div>
					</div>
					<div className="space-y-6">
						<div>
							<p className="text-black text-lg font-medium">
								GenAI Possible is: Built with Karini AI
							</p>
							<img src="/karini-logo.png" alt="karini-logo" width={200} />
						</div>
						<div>
							<a
								href="https://www.karinilegal.in/"
								target="_blank"
								className="text-base text-blue-600 font-medium hover:underline"
							>
								karinilegal.in
							</a>
							<p className="text-sm text-black font-medium">
								Built by the Lawyers for the Legal Community to transform the
								legal profession
							</p>
						</div>
						<div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{kariniLegalData.map((data, index) => (
									<div
										key={index}
										className="space-y-2 rounded shadow-md border p-5"
									>
										<h3 className="text-sm text-black font-medium pb-2 border-b">
											{data.title}
										</h3>
										<p className="text-secondary-700 text-sm leading-relaxed">
											{data.description}
										</p>
									</div>
								))}
							</div>
						</div>
						<p className="text-sm italic text-primary-600 font-medium">
							Every lawyer&apos;s dream AI companion is to make you the most
							efficient.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
