import Image from "next/image";
import React from "react";

const AnnPage = ({ blogData }) => {
	// console.log("iii", blogData);
	return (
		<section className="bg-white px-4 sm:px-10 py-10">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<div className="space-y-8">
					<h1 className="text-black text-xl md:text-3xl font-semibold text-left">
						{/* {blogData?.title} */}
						Karini.ai Launches Streaming for CoPilot
					</h1>
					<div className="space-y-6">
						<div className="space-y-1">
							{/* <h2 className="text-lg text-black font-medium">
								Hype of Generative AI
							</h2> */}
							<p className="text-base text-secondary-700">
								Karini.ai is proud to announce a new feature to help businesses
								enhance user experiences by replacing the everlasting ellipsis
								with streaming responses. Following the latest trends in
								open-source generative artificial intelligence, this leap
								forward for purpose built enterprise-focused artificial
								intelligence using natural language questions and answers is
								evolving CoPilot to the next level.
							</p>
						</div>
						<div className="flex justify-center">
							<Image
								src={"/assets/images/blogs/Streaming-eye-catcher.png"}
								height={100}
								width={300}
								alt="blog-img"
								className="rounded"
							/>
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
								We are excited to share that Karini.ai’s CoPilot now supports
								the streaming experience for almost all SOTA model providers,
								citations (references), and optional follow-up questions. The
								feature is vital as it allows a uniform experience for users
								when enterprises switch between model providers for A/B testing
								and model upgrades. The feature is available out of the box and
								requires no additional setup.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AnnPage;
