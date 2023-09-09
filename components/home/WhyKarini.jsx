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
      title: "Easy Integration with business processing or ML platform",
      icon: "BsSpeedometer",
      description:
        "Elevate your complex business processes with TensorAct Studio, a powerful platform designed for seamless integration with cloud AI APIs and Machine Learning solutions. Our web components effortlessly blend into your workflows unlocking AI potential without additional training for your business users.",
    },
    {
      title: "No code Pipelines for Business users",
      icon: "FaUsers",
      description:
        "Discover seamless AI solutions with our cutting-edge platform, designed to effortlessly integrate with leading cloud AI services. We offer built-in compatibility with OpeanAI LLMs, Amazon Text, Vision, Translation, OCR services and Huggingface Model Hub, accelerating your human review business workflows.",
    },
    {
      title: "Bring your models to build active learning workflows",
      icon: "TiFlowSwitch",
      description:
        "Active Learning is a technique designed to select the most valuable samples from an unlabeled dataset and submit them for labeling. This approach minimizes labeling expenses while maintaining optimal model performance. You can effortlessly establish an end-to-end active learning workflow by utilizing dataset management and integrating custom models.",
    },
    {
      title: "Flexible yet Relaxed Experience",
      icon: "BsBarChartLineFill",
      description:
        "Machine Learning involves a cyclical process,data annotation tasks may evolve throughout their development. As an ML professional, you can begin by using default settings, a limited number of labeling categories and open-source models for initial labeling. Subsequently, you can incrementally incorporate more advanced ML models to enhance assisted labeling capabilities.",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-10 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <h1 className="text-primary-900 font-semibold text-2xl sm:text-3xl text-center">
          Why Karini AI ?
        </h1>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyKariniData.map((data, index) => {
              const IconComponent = IconNames[data.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-2 bg-white p-6 rounded-lg shadow-sm border"
                >
                  <div className="flex items-center space-x-2">
                    <span className="p-3 bg-primary-200 rounded-lg">
                      {IconComponent && (
                        <IconComponent size={25} className="text-medium" />
                      )}
                    </span>
                    <h1 className="text-gray-800 font-semibold sm:text-lg">
                      {data.title}
                    </h1>
                  </div>
                  <p className="text-gray-500 text-base">{data.description}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="text-primary-600 text-base font-semibold flex items-center space-x-2 border-2 border-primary-600 px-4 py-2 rounded-lg">
              <span>Learn More</span>{" "}
              <BsArrowRight size={20} className="font-semibold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKarini;
