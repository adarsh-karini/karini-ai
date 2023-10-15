import React, { useState } from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbBoxModel } from "react-icons/tb";
import { AiFillGolden, AiOutlineCodepenCircle } from "react-icons/ai";

import {
  OurServicesData,
  genaiSubServicesData,
} from "@/content/services/genai/genaiData";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";
import IconOne from "@/svgs/services/IconOne";
import IconFour from "@/svgs/services/IconFour";

const OurServices = () => {
  const iconColor = "#7c3aed";

  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  const genaiServicesButtons = [
    "Generative AI Foundations",
    "Rapid Prototyping",
    "Advanced Services",
  ];

  const [selected, setSelected] = useState(genaiServicesButtons[0]);
  const [showService, setShowService] = useState([genaiSubServicesData[0]]);

  const handleClick = (val) => {
    setSelected(val);

    const data = genaiSubServicesData.filter((service) => service.name === val);
    setShowService(data);
  };

  return (
    <section className="relative bg-white px-4 lg:px-4 xl:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Our Services
          </h1>
        </div>
        <div className="space-y-10">
          <div className="flex justify-center">
            <div className="flex border border-gray-300 bg-white drop-shadow-xl overflow-x-auto rounded-lg">
              {genaiServicesButtons.map((serviceButton, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleClick(serviceButton);
                  }}
                  className={`${
                    serviceButton === selected
                      ? "bg-primary-600 text-white"
                      : "bg-white text-secondary-700"
                  } py-3 px-5 text-xs font-medium whitespace-nowrap border-r-2 last:border-none`}
                >
                  {serviceButton}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <h2 className="text-xl text-black font-semibold text-center">
                {showService[0].name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {showService[0].services.map((service, ind) => (
                  <div
                    key={ind}
                    className=" border border-secondary-300 rounded-lg shadow-2xl shadow-primary-200"
                  >
                    <div className="h-40 bg-about_img bg-cover p-6 rounded-t-lg">
                      <h3 className="text-white font-medium text-sm sm:text-base text-left">
                        <span className="px-2 border-l-2 border-l-white">
                          {service.title}
                        </span>
                      </h3>
                    </div>
                    <div className="flex-1 p-6">
                      <div className=" space-y-2">
                        {service.keyPoints.map((point, ind) => (
                          <div
                            key={ind}
                            className="flex items-center gap-4 text-primary-600"
                          >
                            <IconFour
                              width={20}
                              height={20}
                              color={iconColor}
                            />
                            <p className="flex-1 text-secondary-700 text-sm">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
