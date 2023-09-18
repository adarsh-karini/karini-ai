import React from "react";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TiFlowSwitch } from "react-icons/ti";

import { whyKariniData } from "@/content/home/whyKariniData";

const WhyKarini = () => {
  const IconNames = {
    BsSpeedometer,
    FaUsers,
    BsBarChartLineFill,
    TiFlowSwitch,
  };

  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Why Karini AI ?
        </h1>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyKariniData.map((data, index) => {
              const IconComponent = IconNames[data.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-4 bg-primary-50 px-8 py-10 border border-primary-100 border-b-8 border-b-primary-600 drop-shadow"
                >
                  <div className="flex items-center space-x-2">
                    <span className="p-2 bg-primary-700">
                      {IconComponent && (
                        <IconComponent size={20} className="text-white" />
                      )}
                    </span>
                    <h1 className="text-secondary-800 font-semibold text-base">
                      {data.title}
                    </h1>
                  </div>
                  <p className="text-secondary-800 text-sm leading-relaxed">
                    {data.overview}
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
