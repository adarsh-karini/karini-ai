import React from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { TbBoxModel } from "react-icons/tb";

const OurSolutions = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  const OurSolutionsData = [
    {
      title: "Karini Bot",
      icon: "BsRobot",
      description: "Build a chatbot in minutes using Large Language Model.",
    },
    {
      title: "Intelligent Document Understanding",
      icon: "FaCircleNodes",
      description:
        "Karini empowers you to make well-informed business decisions on time.",
    },
    {
      title: "Content Moderation",
      icon: "TbBoxModel",
      description: "Karini offers cutting-edge content moderation workflows.",
    },
    {
      title: "Human in the Loop",
      icon: "BsCloudFog2",
      description:
        "Experience the perfect blend of human intuition and machine intelligence with Karini AI.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <div className="space-y-2">
          <h1 className="text-primary-900 font-semibold text-3xl text-center">
            Our Solutions
          </h1>
          <p className="text-gray-500 text-center">
            We make it easy for users to use our platform, that&apos;s why we
            provide this benefit.
          </p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {OurSolutionsData.map((data, index) => {
              const IconComponent = IconNames[data.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between space-y-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow"
                >
                  <div>
                    <div className="flex flex-col space-y-2">
                      <span>
                        {IconComponent && (
                          <IconComponent
                            size={50}
                            className="text-medium bg-primary-200 rounded-lg p-4"
                          />
                        )}
                      </span>
                      <h1 className="text-gray-800 font-semibold sm:text-base">
                        {data.title}
                      </h1>
                    </div>
                    <p className="text-gray-400 text-sm">{data.description}</p>
                  </div>
                  <div className="">
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

export default OurSolutions;
