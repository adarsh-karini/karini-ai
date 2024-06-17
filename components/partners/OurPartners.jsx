import React from "react";
import IconSeven from "@/svgs/aboutus/IconSeven";
import Image from "next/image";
import Link from "next/link";
import { GiDiamondTrophy } from "react-icons/gi";
import { ourLeadershipData } from "@/content/aboutus/OurLeadershipData";
import { FaLinkedin } from "react-icons/fa";
import { BsCloudFog2 } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import { GrSystem } from "react-icons/gr";
import { MdSettingsSystemDaydream } from "react-icons/md";
import {
	ourCloudPartners,
	ourResellers,
	ourTechnologyPartners,
	whyPartnersData,
} from "@/content/partners/ourPartnersData";
import CTA from "./CTA";

const OurPartners = () => {
	return (
		<section className="">
			<div className="bg-primary-50 px-4 base:px-0 py-20 overflow-hidden">
				<div className="max-w-screen-lg mx-auto space-y-2">
					<h3 className="text-primary-600 font-medium text-base sm:text-xl text-center">
						Why Partner with the Leaders in GenAI?
					</h3>
					<p className="text-secondary-700 text-base text-center leading-6">
						Our partners are not just clients, they&apos;re collaborators. They
						bring a wealth of experience and expertise to the table, allowing
						them to tailor GenAI solutions that hit the bullseye. This
						collaborative approach ensures businesses get the most out of
						Karini.ai&apos;s GenAIOps platform, maximizing GenAI&apos;s impact
						on their operations.
					</p>
				</div>
			</div>
			<div className="bg-white px-4 base:px-0 py-20 overflow-hidden max-w-screen-lg mx-auto space-y-10 md:space-y-20">
				<div className="space-y-6">
					<div className="flex items-center space-x-2 pb-2 border-b">
						<BsCloudFog2 size={30} className="text-primary-500" />
						<p className="text-black font-medium text-lg sm:text-xl text-left">
							Our Cloud Partners
						</p>
					</div>
					<div className="space-y-6">
						{ourCloudPartners.map((data, index) => (
							<div
								key={index}
								className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow p-6"
							>
								<div className="md:w-1/3 flex justify-center items-center">
									<Link href={data.link}>
										<Image
											src={data.image}
											alt="partners image"
											width={200}
											height={100}
											className="w-40 md:w-52 rounded-md object-contain" // object-contain, object-cover, object-fill, object-none, object-scale-down
											priority={true}
											quality={100}
										/>
									</Link>
								</div>
								<div className="flex-1">
									<p className="text-secondary-700 text-sm text-justify leading-6">
										{data.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="space-y-6">
					<div className="flex items-center space-x-2 pb-2 border-b">
						<RiOrganizationChart size={30} className="text-primary-500" />
						<p className="text-black font-medium text-lg sm:text-xl text-left">
							Our Technology Partners
						</p>
					</div>
					<div className="space-y-6">
						{ourTechnologyPartners.map((data, index) => (
							<div
								key={index}
								className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow p-6"
							>
								<div className="md:w-1/3 flex justify-center items-center">
									<Link href={data.link}>
										<Image
											src={data.image}
											alt="partners image"
											width={200}
											height={100}
											className="w-40 md:w-52 rounded-md object-contain" // object-contain, object-cover, object-fill, object-none, object-scale-down
											priority={true}
											quality={100}
										/>
									</Link>
								</div>
								<div className="flex-1">
									<p className="text-secondary-700 text-sm text-justify leading-6">
										{data.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="space-y-6">
					<div className="flex items-center space-x-2 pb-2 border-b">
						<MdSettingsSystemDaydream size={30} className="text-primary-500" />
						<p className="text-black font-medium text-lg sm:text-xl text-left">
							Our Value Added Resellers and System Integrators
						</p>
					</div>
					<div className="space-y-6">
						{ourResellers.map((data, index) => (
							<div
								key={index}
								className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow p-6"
							>
								<div className="md:w-1/3 flex justify-center items-center">
									<Link href={data.link}>
										<Image
											src={data.image}
											alt="partners image"
											width={200}
											height={100}
											className="w-40 md:w-52 rounded-md object-contain" // object-contain, object-cover, object-fill, object-none, object-scale-down
											priority={true}
											quality={100}
										/>
									</Link>
								</div>
								<div className="flex-1">
									<p className="text-secondary-700 text-sm text-justify leading-6">
										{data.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bg-primary-50 px-4 base:px-0 py-20 overflow-hidden space-y-10 md:space-y-16 sapce-y-2">
				<div className="max-w-screen-lg mx-auto space-y-4">
					<h3 className="text-black font-medium text-base sm:text-xl text-left">
						Are you interested in becoming a partner?
					</h3>
					<div className="space-y-2">
						<p className="text-secondary-700 text-base leading-6">
							Experience the Exclusive Power of GenAI: Partner Exclusively with
							Karini.ai. By joining our select group of partners, you&apos;re
							not just gaining access to cutting-edge GenAI solutions, but also
							becoming part of a community that values your expertise and
							contribution.
						</p>
						<p className="text-secondary-700 text-base leading-6">
							The future of AI is generative. At Karini.ai, we&apos;re on a
							mission to empower businesses and organizations to harness the
							transformative power of Generative AI (GenAI). We believe that
							GenAI has the potential to revolutionize countless industries, and
							we&apos;re committed to making it accessible and efficient for
							everyone, inspiring a new era of innovation.
						</p>
					</div>
				</div>
			</div>
			<CTA />
			<div className="bg-white px-4 base:px-0 py-20 overflow-hidden max-w-screen-lg mx-auto space-y-10">
				<h3 className="text-primary-600 font-medium text-lg sm:text-xl text-center">
					Why Partner with Karini.ai?
				</h3>
				<div className="space-y-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{whyPartnersData.map((data, index) => (
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
					<div className="space-y-1">
						<p className="text-black font-medium text-base">
							Join a Thriving Ecosystem of Innovation:
						</p>
						<p className="text-secondary-700 text-sm italic">
							As a Karini.ai partner, you&apos;ll gain access to a thriving
							ecosystem of leading innovators and early adopters of GenAI
							technology. This includes companies from various industries, such
							as healthcare, finance, and manufacturing, leveraging GenAI to
							transform their operations. Together, we can push the boundaries
							of what&apos;s possible and shape the future of AI.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-primary-50 px-4 base:px-0 py-20 overflow-hidden">
				<div className="max-w-screen-lg mx-auto space-y-2">
					<h3 className="text-black font-medium text-base sm:text-xl text-left">
						Ready to unlock the potential of GenAI for your business and
						clients?
					</h3>
					<div className="space-y-2">
						<p className="text-secondary-700 text-base leading-6">
							Ready to unlock the potential of GenAI for your business and
							clients? Explore our partnership opportunities today. You&apos;ll
							discover how Karini.ai can help you become a leader in the GenAI
							revolution.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurPartners;
