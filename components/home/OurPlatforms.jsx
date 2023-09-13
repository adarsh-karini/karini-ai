import React from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { TbBoxModel } from "react-icons/tb";

const OurPlatforms = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  const OurPlatformsData = [
    {
      title: "Karini Bot",
      icon: "BsRobot",
      description: "Build a chatbot in minutes using Large Language Model.",
    },
    {
      title: "Human In The Loop",
      icon: "FaCircleNodes",
      description:
        "Karini empowers you to make well-informed business decisions on time.",
    },
    {
      title: "Dataset Management",
      icon: "TbBoxModel",
      description: "Karini offers cutting-edge content moderation workflows.",
    },
    {
      title: "Active Learning",
      icon: "BsCloudFog2",
      description:
        "Experience the perfect blend of human intuition and machine intelligence with Karini AI.",
    },
  ];

  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Our Platforms
          </h1>
          <p className="text-secondary-700 text-center">
            Leverage a proprietary machine learning engine that multiplies the
            value of labelled data, allowing for better AI with fewer data
            requirements. Leverage a proprietary machine learning engine that
            multiplies the value of labelled data, allowing for better AI with
            fewer data requirements.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
            {OurPlatformsData.map((data, index) => {
              const IconComponent = IconNames[data.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between space-y-10 bg-white p-6 shadow-md border border-secondary-200 hover:shadow"
                >
                  <div>
                    <div className="flex flex-col space-y-2">
                      <span>
                        {IconComponent && (
                          <IconComponent
                            size={50}
                            className="text-primary-800 bg-primary-200 rounded-lg p-4"
                          />
                        )}
                      </span>
                      <h1 className="text-secondary-800 font-semibold sm:text-base">
                        {data.title}
                      </h1>
                    </div>
                    <p className="text-secondary-400 text-sm">
                      {data.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-primary-600 font-semibold text-sm">
                      Explore more
                    </span>
                    <button className="">
                      <BsArrowRight size={20} className="text-primary-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlatforms;
