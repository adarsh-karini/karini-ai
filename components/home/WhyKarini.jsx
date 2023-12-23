import React from "react";
import {
  BsSpeedometer,
  BsBarChartLineFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TiFlowSwitch } from "react-icons/ti";

import { whyKariniData } from "@/content/home/whyKariniData";
import IconOne from "@/svgs/home/IconOne";
import IconTwo from "@/svgs/home/IconTwo";
import IconThree from "@/svgs/home/IconThree";
import IconFour from "@/svgs/home/IconFour";
import IconFive from "@/svgs/home/IconFive";
import IconSix from "@/svgs/home/IconSix";

const WhyKarini = () => {
  const iconColor = "#7c3aed";

  const IconNames = {
    BsSpeedometer,
    FaUsers,
    BsBarChartLineFill,
    TiFlowSwitch,
  };

  return (
    <section className="bg-dark px-4 lg:px-0 py-20 overflow-hidden">
      <div className="relative z-10 max-w-screen-lg mx-auto">
        <div className="absolute -z-10 -right-52 -top-32 p-52 rounded-full bg-primary-500 blur-3xl opacity-20"></div>
        <div className="absolute -z-10 -left-52 -bottom-40 p-52 rounded-full bg-primary-500 blur-3xl opacity-20"></div>
        <div className="space-y-10">
          <h2 className="text-white font-bold text-2xl sm:text-3xl text-center">
            <span className="text-primary-600">Why</span> Karini
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyKariniData.map((data, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-950 space-y-6 rounded-3xl p-6"
                >
                  <div className="flex justify-center">
                    <div className=" bg-primary-950 rounded-full p-4">
                      {index === 0 && (
                        <IconOne width={40} height={40} color={iconColor} />
                      )}
                      {index === 1 && (
                        <IconTwo width={40} height={40} color={iconColor} />
                      )}
                      {index === 2 && (
                        <IconThree width={40} height={40} color={iconColor} />
                      )}
                      {index === 3 && (
                        <IconFour width={40} height={40} color={iconColor} />
                      )}
                      {index === 4 && (
                        <IconFive width={40} height={40} color={iconColor} />
                      )}
                      {index === 5 && (
                        <IconSix width={40} height={40} color={iconColor} />
                      )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white text-center text-base md:text-lg font-medium">
                      {data.title}
                    </h3>
                    <p className="text-secondary-400 text-center text-sm leading-relaxed">
                      {data.overview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKarini;
