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
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Platforms
          </h1>
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
                  } py-3 px-5 text-sm font-semibold whitespace-nowrap border-r-2 last:border-none rounded-md`}
                >
                  {platformButton}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/4 space-y-4">
              <h2 className="text-4xl text-left text-black font-semibold">
                {showPlatform[0]?.title}
              </h2>
              <p className="text-secondary-600 text-sm text-left">
                {showPlatform[0]?.overview}
              </p>
            </div>
            <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {showPlatform[0]?.points.map((point, index) => {
                const IconComponent = IconNames[point.icon];
                return (
                  <div
                    key={index}
                    className=" flex space-x-8 bg-secondary-50 border border-primary-200 border-l-8 border-l-primary-600 p-4 shadow-sm rounded-lg"
                  >
                    <div>
                      {IconComponent && (
                        <IconComponent
                          size={60}
                          className="text-primary-800 bg-primary-200 rounded-lg p-4"
                        />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-primary-600 font-semibold text-sm md:text-base">
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
      </div>
    </section>
  );
};

export default Platforms;
