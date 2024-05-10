import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { mlCustomerStoriesData } from "@/content/services/ml/mlData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import IconOne from "@/svgs/services/IconOne";
import IconTwo from "@/svgs/services/IconTwo";
import IconThree from "@/svgs/services/IconThree";

const CustomerStories = () => {
	const iconColor = "#7c3aed";

	return (
		<section className="bg-secondary-100 px-6 md:px-20 py-5 overflow-hidden">
			<div className="z-10 relative max-h-[55rem] md:h-[40rem] max-w-screen-lg mx-auto space-y-8">
				<div className="absolute -left-14 -top-0 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
				<div className="-z-10 absolute -right-32 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
					<div className="p-20 m-8 bg-white rounded-full"></div>
				</div>
				<h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
					<span className="text-primary-600">Customer</span> Stories
				</h2>
				<div className="hidden lg:block">
					<Swiper
						loop={true}
						autoHeight={true}
						// height={200}
						autoplay={{
							delay: 4000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						modules={[Autoplay, Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{ clickable: true }}
						className="rounded-2xl border bg-white shadow-md"
					>
						{mlCustomerStoriesData.map((story, index) => (
							<SwiperSlide key={index}>
								<div className="bg-white flex space-x-4 p-6 md:p-12">
									<div className="flex-1 space-y-8">
										<h2 className="text-xl md:text-3xl font-semibold text-black">
											{story.title}
										</h2>
										<div className="space-y-6">
											{story.points.map((point, ind) => (
												<div key={ind} className="flex items-center space-x-4">
													<div>
														{ind === 0 && (
															<IconOne
																width={40}
																height={40}
																color={iconColor}
															/>
														)}
														{ind === 1 && (
															<IconTwo
																width={40}
																height={40}
																color={iconColor}
															/>
														)}
														{ind === 2 && (
															<IconThree
																width={40}
																height={40}
																color={iconColor}
															/>
														)}
													</div>
													<div className="flex-1 space-y-2">
														<h3 className="text-black font-semibold text-base">
															{point.title}
														</h3>
														<p className="text-secondary-700 text-sm leading-relaxed">
															{point.description}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="hidden lg:block w-60 bg-primary-600 rounded-lg"></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="block lg:hidden">
					<Swiper
						loop={true}
						autoHeight={true}
						// height={200}
						autoplay={{
							delay: 7000,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						}}
						modules={[Autoplay, Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						pagination={{ clickable: true }}
						className="rounded-2xl border bg-white shadow-md"
					>
						{mlCustomerStoriesData.map((story, index) => (
							<SwiperSlide key={index}>
								<div className="bg-white flex space-x-4 p-6 md:p-12">
									<div className="flex-1 space-y-8">
										<h2 className="text-xl md:text-3xl font-semibold text-black">
											{story.title}
										</h2>
										<div className="space-y-6">
											{story.points.map((point, ind) => (
												<div key={ind} className="flex items-center space-x-4">
													<div>
														{ind === 0 && (
															<IconOne
																width={40}
																height={40}
																color={iconColor}
															/>
														)}
														{ind === 1 && (
															<IconTwo
																width={40}
																height={40}
																color={iconColor}
															/>
														)}
														{ind === 2 && (
															<IconThree
																width={40}
																height={40}
																color={iconColor}
															/>
														)}
													</div>
													<div className="flex-1 space-y-2">
														<h3 className="text-black font-semibold text-base">
															{point.title}
														</h3>
														<p className="text-secondary-700 text-sm leading-relaxed">
															{point.description}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="hidden lg:block w-60 bg-primary-600 rounded-lg"></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default CustomerStories;
