import IconSeven from "@/svgs/aboutus/IconSeven";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ourLeadershipData } from "@/content/aboutus/OurLeadershipData";
import { FaLinkedin } from "react-icons/fa";

const ProjectSection = () => {
	const iconColor = "#7c3aed";

	return (
		<section className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20 overflow-hidden">
			<div className="max-w-screen-md mx-auto space-y-10 md:space-y-16">
				<h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Our Projects
				</h2>
				<div className="space-y-6 px-4 lg:px-0">
					<div className="pb-1 border-b">
						<h1 className="text-primary-600 font-semibold tracking-tighter text-3xl">
							Built with Karini AI
						</h1>
						<p className="text-lg text-secondary-700 font-medium">
							Unleash the Power of Generative AI: Build with Karini
						</p>
					</div>
					<div className="space-y-4 py-3 border-b">
						<div className="space-y-1">
							<p className="text-black font-medium">
								Empower Your Business with Streamlined GenAI Application
								Development
							</p>
							<p className="text-secondary-700 text-sm leading-relaxed">
								Karini AI isn&apos;t just another AI development tool. It&apos;s
								a revolutionary platform designed to empower organizations to
								leverage the transformative potential of Generative AI (GenAI)
								applications. Forget complex coding and fragmented workflows.
								Karini provides a user-friendly, unified environment that
								simplifies the entire GenAI development process.
							</p>
						</div>
						<div className="space-y-1">
							<p className="text-black font-medium">
								Unparalleled Collaboration for Superior Results
							</p>
							<p className="text-secondary-700 text-sm leading-relaxed">
								Karini AI bridges the gap between your subject matter experts
								(SMEs) and your technical teams. SMEs can effortlessly
								contribute their valuable domain knowledge while data scientists
								and developers seamlessly translate that expertise into
								effective AI prompts. Our intuitive &quot;prompt
								playground&quot; fosters collaboration, ensuring the AI grasps
								the nuances of your specific needs and goals.
							</p>
						</div>
						<div className="space-y-1">
							<p className="text-black font-medium">
								Streamlined Development for Faster Time-to-value
							</p>
							<p className="text-secondary-700 text-sm leading-relaxed">
								Karini AI streamlines the entire application development
								lifecycle. Its intuitive interface facilitates the management
								and orchestration of all application components, simplifying
								functionality creation. Karini&apos;s robust testing and
								comparison capabilities also ensure you select the optimal AI
								model for peak performance, accuracy, and reliability to meet
								your business objectives.
							</p>
						</div>
						<div className="space-y-1">
							<p className="text-black font-medium">
								Future-Proof Your Innovation with Confidence
							</p>
							<p className="text-secondary-700 text-sm leading-relaxed">
								Built with scalability and maintainability, Karini AI&apos;s
								persistent application journey record provides a comprehensive
								history of your AI development process. This minimizes technical
								debt and empowers your team to manage and confidently update
								your application well into the future.
							</p>
						</div>
						<div className="space-y-1">
							<p className="text-black font-medium">
								Build with Karini AI and unlock the full potential of Generative
								AI.{" "}
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
					<div className="space-y-6">
						<div>
							<p className="text-black text-lg font-medium">
								GenAI Possible is: Built with Karini AI
							</p>
							<img src="/karini-logo.png" alt="karini-logo" width={200} />
						</div>
						<div>
							<a
								href="https://www.karini.legal/"
								className="text-sm text-blue-600 font-medium hover:underline"
							>
								karinilegal.in
							</a>
							<p className="text-sm text-black font-medium">
								Built by the Lawyers for the Legal Community to transform the
								legal profession
							</p>
						</div>
						<div>
							<ul className="text-secondary-600 text-sm space-y-3">
								<ol>
									<strong>AI-enabled Knowledge Base:</strong>Our AI-enabled
									knowledge base helps you get the right legal advice at the
									right time. Our AI engine is trained by top legal experts to
									provide you with the best possible advice
								</ol>
								<ol>
									<strong>
										Multiple Skills Chatbot (Research, Summarization, Opinions):
									</strong>{" "}
									Our multifaceted chatbot can perform extensive research,
									provide concise summarizations, and offer expert opinions,
									streamlining your legal processes and decision-making.
								</ol>
								<ol>
									<strong>Smart Search:</strong> Leveraging advanced algorithms,
									our Smart Search feature quickly finds the most relevant legal
									documents, cases, and precedents, ensuring you have all the
									necessary information.
								</ol>
								<ol>
									<strong>Document Management:</strong> Our document management
									system simplifies your legal document handling. It offers easy
									storage, retrieval, and organization of documents, making your
									legal practice more efficient.
								</ol>
								<ol>
									<strong>Citations for References:</strong> Our platform
									automatically generates accurate citations for all your legal
									references, ensuring your documents comply with legal
									standards and saving you time on manual citation work.
								</ol>
							</ul>
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
