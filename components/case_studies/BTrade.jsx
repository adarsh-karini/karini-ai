import Image from "next/image";
import React from "react";

const BTrade = () => {
	return (
		<section className="px-4 lg:px-0 py-10">
			<div className="max-w-screen-lg mx-auto space-y-8">
				<div className="flex items-center justify-center">
					<Image
						src={"/assets/images/case_studies/btrade-logo.svg"}
						width={500}
						height={200}
						alt="btrade logo"
					/>
					{/* <h1 className="text-center text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
							BTrade
						</h1> */}
				</div>
				<div className="space-y-3">
					<p className="text-secondary-700 text-sm sm:text-base leading-relaxed">
						Our file transfer platform is integral to the operations of global
						banks, handling mission-critical ACH and other time-sensitive
						transactions. Ensuring that all failures are resolved quickly and
						within SLA is crucial to avoid penalties. Traditionally, our
						operators had to manually sift through log files to diagnose issues
						and follow standard operating procedures (SOPs) for remediation—a
						process that was both time-consuming and required significant
						expertise.
					</p>
					<p className="text-secondary-700 text-sm sm:text-base leading-relaxed">
						With Karini AI’s GenAI on AWS platform, we were able to develop an
						Agentic RAG solution that provides operators with a summarized
						diagnosis and remediation steps without the need to manually review
						log files. This chatbot has improved our resolution times by over
						40% compared to traditional methods, and it can even be used by less
						experienced operators. - Andrei Olin, CTO, BTrade
					</p>
				</div>
			</div>
		</section>
	);
};

export default BTrade;
