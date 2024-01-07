import Image from "next/image";
import React from "react";
import { SiAmazonaws } from "react-icons/si";

const OurClients2 = () => {
	const ClientLogos = [
		"/assets/images/services/aws_sagemaker.svg",
		"/assets/images/services/aws_textract.svg",
		"/assets/images/services/aws_bedrock.jpg",
		"/assets/images/services/databricks.png",
		"/assets/images/services/anthropic.svg",
		"/assets/images/services/anyscale.svg",
		"/assets/images/services/hugging_face.svg",
		"/assets/images/services/azure_openai.png",
	];

	return (
		<section className="bg-dark px-4 md:px-10 py-20">
			<div className="max-w-screen-xl mx-auto space-y-16">
				<h2 className="text-white font-bold text-2xl sm:text-3xl text-center">
					<span className="text-primary-600">Our</span> Expertise
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{ClientLogos.map((val, index) => (
						<div
							key={index}
							className="bg-white h-20 md:h-28 py-4 rounded-lg shadow-md flex justify-center"
						>
							<Image
								src={val}
								alt="client logo"
								width={150}
								height={1000}
								className="object-contain"
								// priority={true}
								// quality={100}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurClients2;
