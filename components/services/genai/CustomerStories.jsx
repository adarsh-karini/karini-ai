import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { customerStoriesData } from "@/content/services/genai/genaiData";
import { AiFillCloud } from "react-icons/ai";

const CustomerStories = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10 md:space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Customer Stories
        </h1>
        {customerStoriesData.map((customerStory, index) => (
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
        ))}
      </div>
    </section>
  );
};

export default CustomerStories;
