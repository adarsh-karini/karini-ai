import Image from "next/image";
import React from "react";

const PracticusAI = () => {
	return (
		<section className="px-4 lg:px-0 py-10">
			<div className="max-w-screen-lg mx-auto space-y-8">
				<div className="flex items-center justify-center">
					<Image
						src={"/assets/images/case_studies/practicus_logo.png"}
						width={250}
						height={100}
						alt="btrade logo"
					/>
					{/* <h1 className="text-center text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
							Practicus AI
						</h1> */}
				</div>
				<div className="space-y-3">
					<p className="text-secondary-700 text-sm sm:text-base leading-relaxed">
						Karini AI has been instrumental in transforming our customer support
						operations. By rapidly developing a GenAI-powered DocBot, we&apos;ve
						witnessed a dramatic reduction in how-to-call volume, exceeding our
						expectations by more than 80%. The platform&apos;s ability to
						quickly compare different language models allowed us to select
						Bedrock Haiku for its optimal cost-performance ratio, which has been
						a critical factor in achieving these impressive results. This
						strategic decision, coupled with the platform&apos;s robust feature
						set, has significantly improved customer satisfaction and is
						anticipated to increase our NPS by over 25%. -{" "}
						<a
							href="mailto:hakan@practicus.ai"
							className="text-blue-600 underline underline-offset-1"
						>
							Hakan
						</a>{" "}
						Eren.CEO, Practicus AI.
					</p>
				</div>
			</div>
		</section>
	);
};

export default PracticusAI;
