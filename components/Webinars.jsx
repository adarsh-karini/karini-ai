import { webinarsData } from "@/content/webinars/webinarsData";
import Image from "next/image";
import React from "react";

const Webinars = () => {
	return (
		<div className="bg-primary-50 px-4 sm:px-10 py-14">
			<div className="max-w-screen-lg mx-auto space-y-10">
				<h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
					Webinars
				</h1>
				<div className="space-y-8">
					{webinarsData &&
						webinarsData.map((webinar, index) => (
							<div
								key={index}
								className="h-full bg-white rounded-md border shadow p-5"
							>
								<div className="hidden md:flex space-x-4 space-y-0">
									<div className="flex items-start w-40">
										<Image
											alt={webinar.imageAltName}
											title={webinar.imageAltName}
											src={webinar.image}
											width={500}
											height={500}
											className="w-full rounded"
										/>
									</div>
									<div className="flex-1 space-y-2">
										<div className="flex items-start space-x-2 border-b border-b-secondary-300 pb-2">
											<h1 className="flex-1 text-black font-medium text-base">
												{webinar.title}
											</h1>
											<small className="text-green-600 font-medium italic px-2 py-1 border rounded-full bg-green-100">
												{webinar.date}
											</small>
										</div>
										<div className="space-y-5">
											<p
												dangerouslySetInnerHTML={{
													__html: webinar.description,
												}}
												className="text-sm text-secondary-700"
											></p>
											<div className="space-y-4 flex flex-col">
												<div
													className="flex-1 flex justify-center items-center"
													dangerouslySetInnerHTML={{
														__html: webinar.videoPath,
													}}
												></div>
											</div>
										</div>
									</div>
								</div>
								<div className="block md:hidden space-y-2">
									<div className="flex items-start space-x-3">
										<Image
											alt={webinar.imageAltName}
											title={webinar.imageAltName}
											src={webinar.image}
											width={500}
											height={500}
											className="w-28 rounded"
										/>
										<div className="flex items-start space-x-2">
											<h1 className="flex-1 text-black font-medium text-base">
												{webinar.title}
											</h1>
											<small className="text-green-600 text-xs font-medium italic px-2 py-1 border rounded-full bg-green-100">
												{webinar.date}
											</small>
										</div>
									</div>
									<div className="h-full flex-1 space-y-4 flex flex-col">
										<p className="text-sm text-secondary-700">
											{webinar.description}
										</p>
										<div
											dangerouslySetInnerHTML={{
												__html: webinar.videoPath,
											}}
											className="flex-1 flex justify-center items-center"
										></div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Webinars;
