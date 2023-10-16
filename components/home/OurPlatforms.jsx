import React from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { TbBoxModel } from "react-icons/tb";

import { OurPlatformsData } from "@/content/home/ourPlatformData";
import Link from "next/link";

const OurPlatforms = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="flex flex-col items-center space-y-4 py-4">
            <h1 className="text-black font-bold text-2xl sm:text-3xl text-center md:text-left">
              <span className="text-primary-600">Our</span> Platform
            </h1>

            <Link
              href={"/platforms"}
              className="inline-flex items-center space-x-2 bg-primary-600 px-4 py-2 rounded-md"
            >
              <span className="text-white font-semibold text-sm">
                Explore more
              </span>
              <button className="">
                <BsArrowRight size={20} className="text-white" />
              </button>
            </Link>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {OurPlatformsData.map((data, index) => {
                const IconComponent = IconNames[data.icon];
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-between space-y-6 bg-gradient-to-r from-primary-50 to-white border border-primary-100 shadow-sm rounded-md p-4"
                  >
                    <div className="flex space-x-4">
                      <div className="">
                        <span>
                          {IconComponent && (
                            <IconComponent
                              size={40}
                              className="text-primary-600"
                            />
                          )}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-primary-600 font-semibold sm:text-base lg:text-lg">
                          {data.title}
                        </h2>
                        <p className="text-secondary-600 text-sm leading-relaxed">
                          {data.overview}
                        </p>
                      </div>
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

export default OurPlatforms;
