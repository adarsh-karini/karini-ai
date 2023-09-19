import React, { useState } from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { TbBoxModel } from "react-icons/tb";

import { platformsData } from "@/content/platforms/platformsData";

const Platforms = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  const platformsButtons = [
    "Generative AI Recipes",
    "Dataset Management",
    "Security & Governance",
    "Quality Management",
  ];

  const [switchValue, setSwitchValue] = useState(0);
  const [showPlatform, setShowPlatform] = useState(platformsData[switchValue]);

  return (
    <section className="bg-white px-4 md:px-0 py-10">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Platforms
          </h1>
        </div>
        <div className="space-y-16">
          <div className="flex justify-center">
            <div className="flex p-1 border border-gray-300 bg-white drop-shadow-xl overflow-x-auto">
              {platformsButtons.map((platformButton, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSwitchValue(index);
                    setShowPlatform(platformsData[index]);
                  }}
                  className={`${
                    switchValue === index
                      ? "bg-primary-600 text-white"
                      : "bg-white text-secondary-500"
                  } py-3 px-5 text-xs font-semibold whitespace-nowrap border-r-2 last:border-none`}
                >
                  {platformButton}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl text-black font-semibold text-left">
                {showPlatform.title}
              </h2>
              <p className="text-secondary-700 text-base">
                {showPlatform.overview}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {showPlatform.points?.map((point, index) => {
                const IconComponent = IconNames[point.icon];
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
                      <h3 className="text-black font-medium text-sm md:text-base">
                        {point.title}
                      </h3>
                      <p className="text-secondary-600 text-xs md:text-sm leading-relaxed">
                        {point.overview}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div>
          {platformsData.map((platform, index) => (
            <div key={index}>
              <div className="space-y-1">
                <h3 className="text-black font-medium text-sm sm:text-base text-left">
                  {platform.title}
                </h3>
                <p className=" text-secondary-700 text-sm text-left">
                  {platform.overview}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Platforms;
