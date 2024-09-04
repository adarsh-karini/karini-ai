import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<header
			className="relative bg-databricks_img bg-cover"
			style={{ backgroundPosition: "center top -200px" }}
		>
			<div className="h-full w-full opacity-70 absolute bg-black"></div>
			<div className="mx-auto max-w-screen-2xl">
				<section>
					<div className="relative flex flex-col items-center justify-center py-14 md:py-32">
						{/* <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
			  <div className="hidden lg:block absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div> */}
						<div className="z-10 space-y-3 px-4 max-w-screen-lg">
							<div className="flex justify-center">
								<Image
									src={"/assets/images/partners/White_Karini_DB.png"}
									alt="databricks"
									width={400}
									height={100}
									// className="bg-white p-4 rounded"
								/>
							</div>
							<p className="text-center text-secondary-100 text-sm sm:text-base">
								Redefining the future of data and AI solutions. The strategic
								collaboration between Karini’s GenAI Foundation and Databricks
								Mosaic empowers businesses to integrate generative AI
								capabilities seamlessly —supporting the delivery of a GenAI
								portfolio strategy. Affording organizations a tailored journey
								to their unique goals—defending current market positions,
								extending existing processes, and upending industries with
								groundbreaking innovations. Together, Databricks and Karini AI
								are evolving the future of AI.
							</p>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Hero;
