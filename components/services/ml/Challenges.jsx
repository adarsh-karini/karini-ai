import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { mlChallenges } from "@/content/services/ml/mlData";

const Challenges = () => {
	return (
		<section className="px-4 lg:px-0 py-10">
			<div className="max-w-screen-xl mx-auto">
				<div className="">
					<div className="space-y-6">
						<div className="space-y-2 text-center">
							<h2 className="inline-block text-black font-semibold text-lg sm:text-2xl text-center">
								Challenges: Building MLOps Platform
							</h2>
						</div>
						<div className="hidden lg:block px-2">
							<Swiper
								spaceBetween={10}
								loop={true}
								slidesPerView={1}
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									1024: {
										slidesPerView: 3,
										spaceBetween: 10,
									},
								}}
								autoplay={{
									delay: 4000,
									pauseOnMouseEnter: true,
									disableOnInteraction: false,
								}}
								navigation={false}
								pagination={{ clickable: true }}
								modules={[Autoplay, Pagination]}
								className="mySwiper bg-white rounded-lg"
							>
								{mlChallenges?.map((challenge, index) => (
									<SwiperSlide key={index}>
										<div
											key={index}
											className="h-60 space-y-10 bg-white p-6 border border-primary-200 rounded-lg"
										>
											<div className="h-full flex flex-col space-y-4">
												<h3 className="text-primary-600 font-semibold sm:text-lg ">
													{challenge.title}
												</h3>
												<p className="text-secondary-600 text-sm leading-relaxed">
													{challenge.overview}
												</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
						<div className="block lg:hidden px-2">
							<Swiper
								spaceBetween={10}
								loop={true}
								slidesPerView={1}
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 10,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									1024: {
										slidesPerView: 3,
										spaceBetween: 10,
									},
								}}
								autoplay={{
									delay: 7000,
									pauseOnMouseEnter: true,
									disableOnInteraction: false,
								}}
								navigation={false}
								pagination={{ clickable: true }}
								modules={[Autoplay, Pagination]}
								className="mySwiper bg-white rounded-lg"
							>
								{mlChallenges?.map((challenge, index) => (
									<SwiperSlide key={index}>
										<div
											key={index}
											className="h-60 space-y-10 bg-white p-6 border border-primary-200 rounded-lg"
										>
											<div className="h-full flex flex-col space-y-4">
												<h3 className="text-primary-600 font-semibold sm:text-lg ">
													{challenge.title}
												</h3>
												<p className="text-secondary-600 text-sm leading-relaxed">
													{challenge.overview}
												</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Challenges;
