import React from "react";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TiFlowSwitch } from "react-icons/ti";

const WhoWe = () => {
  const IconNames = {
    BsSpeedometer,
    FaUsers,
    BsBarChartLineFill,
    TiFlowSwitch,
  };
  const WhoWeData = [
    {
      title: "Who we are",
      icon: "BsSpeedometer",
      description:
        "We specialize in human-in-the-loop AI solutions, blending human intelligence with advanced AI research to drive growth and streamline workflows. Our dedicated team of experts creates innovative and powerful solutions for diverse industries. We're committed to pushing the boundaries of AI, uniting human expertise and cutting-edge technology for a smarter, more efficient future.",
    },
    {
      title: "Our vision",
      icon: "FaUsers",
      description:
        "Our vision is to revolutionize business operations through seamless, invisible human-in-the-loop AI systems. We focus on delivering tangible outcomes by continuously refining AI models, integrating human expertise and streamlining decision-making processes. We aim to transform industries and shape a smarter, more efficient world by uniting the power of humans and machines.",
    },
    {
      title: "Our mission",
      icon: "TiFlowSwitch",
      description:
        "Our mission is to bridge the gap between cutting-edge research and practical business applications, enabling organizations to unlock the full potential of AI-driven solutions. We focus on enhancing AI engineer efficiency, improving human operator productivity and reducing model training costs for businesses of all sizes. Through innovation, we're committed to reshaping the future of work by seamlessly integrating human and artificial intelligence.",
    },
  ];
  return (
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WhoWeData.map((data, index) => {
            const IconComponent = IconNames[data.icon];
            return (
              <div
                key={index}
                className={`${
                  index === 0 ? "sm:col-span-2" : ""
                } flex flex-col space-y-2 bg-white p-6 rounded-lg shadow-sm border`}
              >
                <div className="flex items-center space-x-2">
                  <span className="p-3 bg-primary-200 rounded-lg">
                    {IconComponent && (
                      <IconComponent size={25} className="text-medium" />
                    )}
                  </span>
                  <h1 className="text-gray-800 capitalize font-semibold sm:text-lg">
                    {data.title}
                  </h1>
                </div>
                <p className="text-gray-500 text-base">{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
