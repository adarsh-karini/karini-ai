import React from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { TbBoxModel } from "react-icons/tb";

import { whyChooseUsData } from "@/content/services/genai/genaiData";

const WhyChooseUs = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  return (
    <section className="bg-primary-50 px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Why Choose Us
          </h2>
          <p className="text-secondary-700 text-center">
            Leverage a proprietary machine learning engine that multiplies the
            value of labelled data, allowing for better AI.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyChooseUsData.map((data, index) => {
            const IconComponent = IconNames[data.icon];
            return (
              <div
                key={index}
                className=" flex space-x-4 border border-primary-200 border-l-8 border-l-primary-600 p-4 items-center shadow-sm"
              >
                <div>
                  {IconComponent && (
                    <IconComponent
                      size={50}
                      className="text-primary-800 bg-primary-200 rounded-lg p-4"
                    />
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-black font-semibold text-base md:text-lg">
                    {data.title}
                  </h3>
                  <p className="text-secondary-700 text-sm leading-6">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
