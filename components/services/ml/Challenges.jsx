import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/sea-green";

// Import Swiper styles
import "swiper/css";

import { mlChallenges } from "@/content/services/ml/mlData";

const Challenges = () => {
  return (
    <section className="px-4 lg:px-0 py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="inline-block text-black font-semibold text-lg sm:text-2xl text-center">
                Challenges: Building MLOps Platform
              </h1>
            </div>
            <div className="px-2">
              <Swiper
                spaceBetween={30}
                loop={true}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={false}
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
