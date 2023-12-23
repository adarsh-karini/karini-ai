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

  const [selected, setSelected] = useState(platformsButtons[0]);
  const [showPlatform, setShowPlatform] = useState([platformsData[0]]);

  const handleClick = (val) => {
    setSelected(val);

    const data = platformsData.filter((platform) => platform.title === val);
    setShowPlatform(data);
  };

  return (
    <section className="bg-white px-4 lg:px-8 xl:px-0 py-10">
      <div className="max-w-screen-xl mx-auto space-y-8">
        <div className="">
          <h2 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Platform Capabilities
          </h2>
        </div>
        <div className="space-y-16">
          <div className="flex justify-center">
            <div className="flex border border-gray-300 bg-white drop-shadow-xl overflow-x-auto rounded-md">
              {platformsButtons.map((platformButton, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleClick(platformButton);
                  }}
                  className={`${
                    platformButton === selected
                      ? "bg-primary-600 text-white"
                      : "bg-white text-secondary-500"
                  } py-3 px-5 text-xs md:text-sm font-semibold whitespace-nowrap border-r-2 last:border-none rounded-md`}
                >
                  {platformButton}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4 space-y-4">
              <h2 className="text-2xl lg:text-4xl text-center lg:text-left text-black font-semibold">
                {showPlatform[0]?.title}
              </h2>
              <p className="text-secondary-600 text-sm text-center lg:text-left">
                {showPlatform[0]?.overview}
              </p>
            </div>
            <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {showPlatform[0]?.points.map((point, index) => {
                const IconComponent = IconNames[point.icon];
                return (
                  <div
                    key={index}
                    className="relative flex space-x-8 bg-gradient-to-br from-primary-200 from-10% to-primary-50 border border-primary-200 p-4 shadow-md shadow-primary-100 rounded-lg"
                  >
                    <div>
                      {IconComponent && (
                        <IconComponent
                          size={60}
                          className="text-primary-100 bg-primary-900 rounded-lg p-4"
                        />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-black font-semibold text-sm lg:text-base">
                        {point.title}
                      </h3>
                      <p className="text-secondary-700 text-xs lg:text-sm leading-relaxed">
                        {point.overview}
                      </p>
                    </div>
                    {point.tag && (
                      <div className="absolute -top-4 -right-2">
                        <h3 className="text-white text-xs font-medium bg-primary-600 p-2 rounded-md">
                          {point.tag}
                        </h3>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
