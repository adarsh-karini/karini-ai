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

const OurServices = () => {
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
            <div className="flex p-1 border border-gray-300 bg-white drop-shadow-xl overflow-x-auto">
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
              <h2 className="text-xl text-black font-semibold text-center pb-2 border-b-2 border-secondary-300">
                {showService[0].name}
              </h2>
              {showService[0].services.map((service, ind) => (
                <div key={ind} className="space-y-2">
                  <h3 className="text-black font-medium text-sm sm:text-base text-left">
                    {service.title}
                  </h3>
                  <div className="flex gap-8">
                    <div className="hidden md:block flex-1 bg-primary-600 opacity-40"></div>

                    <div className="flex-1 space-y-2">
                      {service.keyPoints.map((point, ind) => (
                        <div
                          key={ind}
                          className="flex space-x-2 text-primary-600"
                        >
                          <AiFillGolden size={20} />
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
    </section>
  );
};

export default OurServices;
