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
          <p className="text-secondary-700 text-center text-sm">
            Leverage a proprietary machine learning engine that multiplies the
            value of labelled data, allowing for better AI with fewer data
            requirements. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequuntur rerum corrupti necessitatibus sit soluta,
            architecto.
          </p>
        </div>
        {/* <div className="space-y-20">
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
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ourServicesData.map((service, index) => (
            <article key={index} className="relative overflow-hidden">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="h-full relative bg-gradient-to-t from-secondary-900/70 to-secondary-900/50">
                <div className="h-full flex flex-col justify-end space-y-8 p-8">
                  <div className="space-y-4">
                    <h2 className="text-white font-semibold sm:text-base">
                      {service.title}
                    </h2>
                    <p className="text-secondary-100 text-sm leading-relaxed">
                      {service.overview}
                    </p>
                  </div>
                  <Link href={service.path} className="">
                    <button className="text-white text-sm font-medium flex items-center space-x-2 bg-primary-600 border border-primary-600 px-4 py-2 ">
                      <span>Explore all services</span>
                      <BsArrowRight size={20} className="font-semibold" />
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
