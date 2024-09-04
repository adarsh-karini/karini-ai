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
import { FiExternalLink } from "react-icons/fi";

const OurPartners = () => {
	return (
		<section className="">
			<div className="bg-primary-50 px-4 base:px-0 py-20 overflow-hidden">
				<div className="max-w-screen-lg mx-auto space-y-2">
					<h3 className="text-primary-600 font-medium text-base sm:text-xl text-center">
					Karini&apos;s GenAI Foundation: The Key to Empowering Strategic AI Initiatives
					</h3>
					<p className="text-secondary-700 text-base text-center leading-6">
					We&apos;re transforming how businesses harness the power of GenAI through our unique GenAI Foundation. With its unique features tailored for organizations adopting a portfolio approach to their AI initiatives, this robust platform allows them to align their solutions with their strategic goals. By collaborating with a network of industry-leading partners, we significantly enhance our customers&apos; time-to-value (TTV) and return on investment (ROI).
					</p>
				</div>
				<br/>
				<div className="max-w-screen-lg mx-auto space-y-2">
					<h3 className="text-primary-600 font-medium text-base sm:text-xl text-center">
					Why Partner with the Leaders in GenAI?
					</h3>
					<p className="text-secondary-700 text-base text-center leading-6">
					We&apos;re not just partners; we&apos;re collaborators. Together, we deliver a wealth of experience and expertise from the most savvy GenAI professionals, allowing our customers to benefit from tailored solutions that hit the bullseye. This collaborative approach ensures businesses get the most out of Karini&apos;s GenAI Foundation, maximizing GenAI&apos;s impact on their operations.
					</p>
				</div>
			</div>
			<div className="bg-white px-4 base:px-0 py-20 overflow-hidden max-w-screen-lg mx-auto space-y-10 md:space-y-20">
				<div id="our_cloud_partners" className="space-y-6">
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
								id={data.id}
								className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow p-6"
							>
								<div className="relative md:w-1/3 flex justify-center items-center">
									<Link href={data.link} target="_blank" title={data.link}>
										<FiExternalLink
											size={20}
											className="absolute top-2 right-2 text-blue-500 cursor-pointer"
										/>
									</Link>
									<Link href={data.link} target="_blank" title={data.link}>
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
				<div id="our_technology_partners" className="space-y-6">
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
								id={data.id}
								className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow p-6"
							>
								<div className="relative md:w-1/3 flex justify-center items-center">
									<Link href={data.link} target="_blank" title={data.link}>
										<FiExternalLink
											size={20}
											className="absolute top-2 right-2 text-blue-500 cursor-pointer"
										/>
									</Link>
									<Link href={data.link} target="_blank" title={data.link}>
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
				<div id="our_resellers" className="space-y-6">
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
								id={data.id}
								className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow p-6"
							>
								<div className="relative md:w-1/3 flex justify-center items-center">
									<Link href={data.link} target="_blank" title={data.link}>
										<FiExternalLink
											size={20}
											className="absolute top-2 right-2 text-blue-500 cursor-pointer"
										/>
									</Link>
									<Link href={data.link} target="_blank" title={data.link}>
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
			<div
				id="#become_partner"
				className="bg-primary-50 px-4 base:px-0 py-20 overflow-hidden space-y-10 md:space-y-16"
			>
				<div className="max-w-screen-lg mx-auto space-y-4">
					<h3 className="text-black font-medium text-base sm:text-xl text-left">
					Unlock the Future of AI: Become a Karini AI Strategic Partner
					</h3>
					<div className="space-y-2">
						<p className="text-secondary-700 text-base leading-6">
						By leveraging the GenAI Foundation and our strategic partnerships, Karini enables businesses to embrace a portfolio approach to AI, driving innovation and maximizing ROI. Our collaborative ecosystem ensures clients can rapidly deploy, scale, and optimize AI solutions, transforming their operations and achieving sustainable success.
						</p>
						<br/>
						<p className="text-secondary-700 text-base leading-6">
						Are you ready to revolutionize the AI landscape? Join Karini&apos;s exclusive partner network and harness the transformative power of our GenAI Foundation. As a strategic partner, you&apos;ll gain privileged access to cutting-edge GenAI solutions, empowering you to deliver unparalleled value to your clients. Our partnership program is designed to leverage your unique expertise, fostering a collaborative ecosystem that drives innovation and accelerates AI adoption across industries. By aligning with Karini, you&apos;ll position yourself at the forefront of the AI revolution, opening new avenues for growth and differentiation in the rapidly evolving tech market. Don&apos;t just witness the AI transformation – be a driving force behind it. Partner with Karini today and shape the future of GenAI.
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
