import { ourOfficesData } from "@/content/contactus/ourOfficesData";
import React from "react";

const OurOffices = () => {
	return (
		<section className="bg-white px-4 lg:px-10 xl:px-0 py-20 overflow-hidden">
			<div className="max-w-screen-xl mx-auto space-y-16">
				<div className="space-y-10">
					<div className="">
						<h1 className="text-black text-center font-semibold text-lg md:text-2xl xl:text-4xl">
							<span className="text-primary-600">Our</span> Offices
						</h1>
					</div>
					<div className="z-10 relative space-y-10">
						{/* <div className="-z-10 absolute top-0 -left-32 p-52 rounded-full bg-primary-600 blur-3xl opacity-10"></div> */}
						<div className="-z-10 absolute -right-32 -top-20 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
							<div className="p-20 m-8 bg-white rounded-full"></div>
						</div>

						<div className="flex justify-center">
							<div>
								<div className="grid grid-cols-2 gap-4">
									{ourOfficesData.map((data, index) => (
										<div
											key={index}
											className="bg-white p-4 border rounded shadow space-y-2"
										>
											<div className="h-full flex flex-col justify-between space-y-2">
												<div className="space-y-2">
													<h1 className="text-black font-medium pb-1 border-b-2 border-primary-600">
														{data.location}
													</h1>
													<div className="flex flex-col space-y-2">
														<address className="text-secondary-700 text-sm font-semibold">
															{data.address}
														</address>
														<a
															href={data.phone}
															className="text-blue-600 text-sm"
														>
															{data.email}
														</a>
														<a
															href={data.phone}
															className="text-secondary-700 text-sm"
														>
															{data.phone}
														</a>
													</div>
												</div>
												<div>
													<iframe
														src={data.iframeURL}
														style={{ border: 0 }}
														allowfullscreen=""
														loading="lazy"
														referrerpolicy="no-referrer-when-downgrade"
														className="w-full h-full rounded-md"
													></iframe>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurOffices;
