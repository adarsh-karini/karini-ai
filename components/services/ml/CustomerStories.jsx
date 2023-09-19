import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BsArrowRight } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";

import { mlCustomerStoriesData } from "@/content/services/ml/mlData";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/sea-green";

const CustomerStories = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Customer Stories
        </h1>
        <div>
          <Splide
            aria-label="Challenges"
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              loop: true,
              autoplay: true,
              interval: 3000,
              arrows: false,
              speed: 500,
              rewind: true,
              gap: 10,
              pagination: true,
              pauseOnHover: true,
              pauseOnFocus: false,
            }}
          >
            {mlCustomerStoriesData.map((customerStory, index) => (
              <SplideSlide key={index}>
                <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
                  <div className="hidden lg:block bg-primary-400 px-40 py-40 md:py-0"></div>
                  <div className="flex flex-col space-y-4">
                    <h2 className="text-black text-lg md:text-xl font-semibold pb-2 border-b-2 border-primary-600">
                      {customerStory.title}
                    </h2>
                    <div className="space-y-4">
                      {customerStory.points.map((point, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center space-x-2 text-primary-600">
                            <AiFillCloud size={20} />
                            <p className="text-black font-medium text-sm sm:text-base text-left">
                              {point.title}
                            </p>
                          </div>
                          <p className="flex-1 text-secondary-700 text-sm leading-6">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        {/* {mlCustomerStoriesData.map((customerStory, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0"
          >
            <div className="hidden sm:block bg-primary-400 px-40 py-40 md:py-0"></div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-black text-base md:text-lg font-semibold pb-2 border-b-2 border-primary-600">
                {customerStory.title}
              </h2>
              <div className="space-y-4">
                {customerStory.points.map((point, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center space-x-2 text-primary-600">
                      <AiFillCloud size={20} />
                      <p className="text-black font-medium text-sm sm:text-base text-left">
                        {point.title}
                      </p>
                    </div>
                    <p className="flex-1 text-secondary-700 text-sm leading-6">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default CustomerStories;
