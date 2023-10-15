import { genaiCustomerStoriesData } from "@/content/services/genai/genaiData";
import IconOne from "@/svgs/services/IconOne";
import IconThree from "@/svgs/services/IconThree";
import IconTwo from "@/svgs/services/IconTwo";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CustomerStories = () => {
  const iconColor = "#7c3aed";
  return (
    <section className="bg-secondary-100 px-6 md:px-20 py-20 overflow-hidden">
      <div className="z-10 relative max-w-screen-lg mx-auto space-y-8">
        <div className="absolute -left-14 -top-0 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
        <div className="-z-10 absolute -right-32 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
          <div className="p-20 m-8 bg-white rounded-full"></div>
        </div>
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          <span className="text-primary-600">Customer</span> Stories
        </h1>
        <div>
          <Swiper
            loop={true}
            autoHeight={true}
            // height={200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="rounded-2xl border bg-white shadow-md"
          >
            {genaiCustomerStoriesData.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white flex space-x-4 p-12">
                  <div className="flex-1 space-y-8">
                    <h2 className="text-3xl font-semibold text-black">
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
