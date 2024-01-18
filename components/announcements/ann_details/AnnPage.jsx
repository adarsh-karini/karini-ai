import Image from "next/image";
import React from "react";

const AnnPage = ({ blogData }) => {
	// console.log("iii", blogData);
	return (
		<section className="bg-white px-4 sm:px-10 py-6">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<div className="space-y-8">
					<div className="space-y-1 border-b border-b-secondary-300 pb-2">
						{/* <Image
							alt="announcement-img"
							src={"/assets/images/blogs/Streaming-eye-catcher.png"}
							width={300}
							height={400}
							className="object-contain"
						/> */}
						<h1 className="text-black text-xl md:text-3xl font-semibold text-left">
							{/* {blogData?.title} */}
							Karini AI Launches Streaming for Copilot
						</h1>
						<p className="text-secondary-600 text-sm">
							Posted on: January 18, 2024
						</p>
					</div>
					<div className="space-y-6">
						<div className="space-y-1">
							{/* <h2 className="text-lg text-black font-medium">
								Hype of Generative AI
							</h2> */}
							<p className="text-base text-secondary-700">
								Karini AI is proud to announce a new feature to help businesses
								enhance user experiences by replacing the everlasting ellipsis
								with streaming responses. Following the latest trends in
								open-source generative AI, this leap forward for purpose built
								enterprise-focused AI using natural language questions and
								answers is evolving copilot to the next level.
							</p>
						</div>

						<div className="space-y-1">
							{/* <h2 className="text-lg text-black font-medium">
								Why enterprises struggle with Industrializing Generative AI
							</h2> */}
							<p className="text-base text-secondary-700">
								Today, ChatGPT has set the tone and standard for the copilot
								user experience as it gives us a conversational impression due
								to the streaming tokens appearing on the screen. Creating the
								streaming experience with large models like GPT4 is more
								straightforward but, at the same time, challenging in enterprise
								environments where you may need a wide array of state-of-the-art
								(SOTA) model providers ranging from open source to SaaS. Each
								LLM is nuanced in its capabilities to stream tokens and the
								quality of response. So, it’s tough to build a uniform user
								experience across the ecosystem of model providers, diminishing
								and degrading users&apos; engagement.
							</p>
						</div>

						<div className="space-y-1">
							{/* <h2 className="text-lg text-black font-medium">
								Industrialization of Generative AI applications
							</h2> */}
							<p className="text-base text-secondary-700">
								We are excited to share that Karini AI&apos;s copilot now
								supports the streaming experience for almost all SOTA model
								providers, citations (references), and optional follow-up
								questions. The feature is vital as it allows a uniform
								experience for users when enterprises switch between model
								providers for A/B testing and model upgrades. The feature is
								available out of the box and requires no additional setup.
							</p>
						</div>
						<div className="flex justify-center">
							<img
								src={"/gif/karini_copilot_streaming_demo.gif"}
								height={600}
								width={700}
								alt="blog-img"
								className="rounded border"
							/>
						</div>
						<div>
							<p className="text-base text-secondary-700 font-medium">
								To get started, visit{" "}
								<a
									target="_blank"
									href="https://www.karini.ai"
									className="text-blue-500 underline"
								>
									karini.ai
								</a>{" "}
								or try our platform by quick{" "}
								<a
									target="_blank"
									href="https://app.karini.ai/signup"
									className="text-blue-500 underline"
								>
									sign up
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AnnPage;
