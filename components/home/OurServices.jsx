import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { ourServicesData } from "@/content/home/ourServicesData";
import Link from "next/link";
import IconOne from "@/svgs/aboutus/IconOne";
import IconSeven from "@/svgs/home/IconSeven";
import IconEight from "@/svgs/home/IconEight";

const OurServices = () => {
  const iconColor = "#7c3aed";

  return (
    <section className="bg-dark px-4 lg:px-0 py-20 lg:py-40 overflow-hidden">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="h-full relative z-10 flex gap-20">
          <div className="-z-10 absolute -right-32 -top-16 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
            <div className="p-20 m-8 bg-dark rounded-full"></div>
          </div>
          <div className="-z-10 absolute -left-32 -bottom-14 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="flex flex-col items-center space-y-4 py-4">
              <h2 className="text-white font-bold text-2xl sm:text-3xl text-center md:text-left">
                <span className="text-primary-600">Our</span> Services
              </h2>
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ourServicesData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between bg-gradient-to-br from-gray-800 to-gray-950 space-y-6 border border-secondary-800 shadow-lg shadow-primary-800/10 rounded-lg p-6"
                  >
                    <div className="h-full flex space-x-6">
                      <div className="">
                        {index === 0 && (
                          <IconSeven width={40} height={40} color={iconColor} />
                        )}
                        {index === 1 && (
                          <IconEight width={40} height={40} color={iconColor} />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between space-y-6">
                        <div className="space-y-2">
                          <h2 className="text-white font-semibold sm:text-base lg:text-lg">
                            {data.title}
                          </h2>
                          <p className="text-secondary-300 text-sm leading-relaxed">
                            {data.overview}
                          </p>
                        </div>
                        <div className="flex justify-start">
                          <Link
                            href={data.path}
                            className="flex items-center space-x-2 text-primary-600"
                          >
                            <span className=" font-semibold text-sm">
                              Explore more
                            </span>
                            <button className="">
                              <BsArrowRight size={20} className="" />
                            </button>
                          </Link>
                        </div>
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
