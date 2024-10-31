import Image from "next/image";
import React from "react";

const Swagelok = () => {
	return (
		<section className="px-4 lg:px-0 py-10">
			<div className="max-w-screen-lg mx-auto space-y-8">
				<div className="flex items-center justify-center">
					<Image
						src={"/assets/images/case_studies/swagelok.png"}
						width={500}
						height={200}
						alt="btrade logo"
						className=""
					/>
					{/* <h1 className="text-center text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
							BTrade
						</h1> */}
				</div>
				<div className="space-y-6 px-4 sm:px-8 py-6 bg-white shadow-md rounded-lg">
    <h2 className="text-xl sm:text-2xl font-bold text-secondary-800">
        Case Study: Swagelok Southeast Texas
    </h2>
    
    <p className="text-secondary-700 text-sm sm:text-lg leading-relaxed">
        <strong>Challenge:</strong> Swagelok Southeast Texas aimed to streamline and elevate customer experience throughout the procure-to-pay process. The existing system depended on highly skilled resources, frequent code changes, and prolonged setup times for each distributor onboarding. Swagelok required a versatile Generative AI platform capable of integrating seamlessly across multiple supply chains, databases, and ticketing systems.
    </p>
    
    <p className="text-secondary-700 text-sm sm:text-lg leading-relaxed">
        <strong>Solution:</strong> Karini AI’s GenAIFoundation platform, built on AWS, was the ideal fit. By creating a native multi-tenant AI environment, Swagelok was able to securely isolate supply chain workflows. The platform’s Human-in-the-Loop Agentic workflow allowed for proactive issue resolution, while reusable GenAI agents supported fluid interactions across system-driven processes and chatbot interfaces. Karini AI utilized Amazon Bedrock for large language models (LLMs) and Amazon EKS for scalable deployment.
    </p>
    
    <p className="text-secondary-700 text-sm sm:text-lg leading-relaxed">
        <strong>Impact:</strong> Swagelok is projected to reduce new distributor onboarding time by 50%, bringing it down to under a week. The integration of intelligent document processing and self-service conversational AI empowers both customers and customer service representatives (CSRs) to interact efficiently with ticketing systems, SAP, and databases through a Microsoft Teams chatbot. The platform future-proofs agent deployment, enabling seamless addition of new integrations without coding—delivering accelerated time-to-value and substantial ROI.
    </p>
</div>

			</div>
		</section>
	);
};

export default Swagelok;
