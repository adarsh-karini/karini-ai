import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { ourServicesData } from "@/content/home/ourServicesData";
import Link from "next/link";

const OurServices = () => {
  return (
    <section className="bg-primary-50 px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Our Services
          </h1>
          <p className="text-secondary-700 text-center">
            Leverage a proprietary machine learning engine that multiplies the
            value of labelled data, allowing for better AI with fewer data
            requirements. Leverage a proprietary machine learning engine that
            multiplies the value of labelled data, allowing for better AI with
            fewer data requirements.
          </p>
        </div>
        <div className="space-y-20">
          {ourServicesData.map((service, index) => (
            <div key={index} className="space-y-4">
              <h1 className="text-secondary-800 text-xl sm:text-2xl font-semibold">
                {service.title}
              </h1>
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="hidden md:block flex-1 bg-primary-500 py-20"></div>
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <p className="text-secondary-700 text-sm leading-relaxed">
                    {service.overview}
                  </p>
                  <Link href={service.path} className="flex justify-end">
                    <button className="text-white text-sm font-medium flex items-center space-x-2 bg-primary-600 border border-primary-600 px-4 py-2 ">
                      <span>Learn More</span>{" "}
                      <BsArrowRight size={20} className="font-semibold" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
