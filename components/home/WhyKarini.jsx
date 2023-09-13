import React from "react";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TiFlowSwitch } from "react-icons/ti";

const WhyKarini = () => {
  const IconNames = {
    BsSpeedometer,
    FaUsers,
    BsBarChartLineFill,
    TiFlowSwitch,
  };

  const whyKariniData = [
    {
      title: "Easy Integration",
      icon: "BsSpeedometer",
      description:
        "Elevate your complex business processes with TensorAct Studio, a powerful platform designed for seamless integration with cloud AI APIs and Machine Learning solutions.",
    },

    {
      title: "Active Learning",
      icon: "TiFlowSwitch",
      description:
        "Active Learning is a technique designed to select the most valuable samples from an unlabeled dataset and submit them for labeling. This approach minimizes labeling expenses while maintaining optimal model performance.",
    },
    {
      title: "Flexible Experience",
      icon: "BsBarChartLineFill",
      description:
        "Machine Learning involves a cyclical process,data annotation tasks may evolve throughout their development.",
    },
  ];

  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Why Karini AI ?
        </h1>
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {whyKariniData.map((data, index) => {
              const IconComponent = IconNames[data.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-4 bg-primary-50 px-8 py-10 border-b-8 border-primary-600 drop-shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <span className="p-2 bg-primary-700">
                      {IconComponent && (
                        <IconComponent size={25} className="text-white" />
                      )}
                    </span>
                    <h1 className="text-secondary-800 font-semibold sm:text-lg">
                      {data.title}
                    </h1>
                  </div>
                  <p className="text-secondary-800 text-sm leading-loose">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKarini;
