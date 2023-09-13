import React from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbBoxModel } from "react-icons/tb";
import { AiOutlineCodepenCircle } from "react-icons/ai";

const OurServices = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  const OurServicesData = [
    {
      title: "ML Foundations",
      services: [
        {
          title: "MLOps Training",
          path: "/services/genai_services/1",
        },
        {
          title: "Data Science Training",
          path: "/services/genai_services/2",
        },
        {
          title: "Workshops & Game Days",
          path: "/services/genai_services/3",
        },
      ],
    },
    {
      title: "Prototyping",
      services: [
        {
          title: "Computer Vision",
          path: "/services/rapid_prototypes/1",
        },
        {
          title: "Natural Language Processing",
          path: "/services/rapid_prototypes/2",
        },
        {
          title: "Generative AI",
          path: "/services/rapid_prototypes/3",
        },
      ],
    },
    {
      title: "Solutions",
      services: [
        {
          title: "ML Platform Migrations",
          path: "/services/solutioning/1",
        },
        {
          title: "Intelligent Document Processing",
          path: "/services/solutioning/2",
        },
        {
          title: "Demand Forecasting",
          path: "/services/solutioning/3",
        },
      ],
    },
  ];

  return (
    <section className="relative bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        {/* <div className="absolute p-40 rounded-full -left-40 -top-40 bg-primary-100 blur-xl"></div> */}
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Our Services
          </h1>
          <p className="text-secondary-700 text-center">
            Leverage a proprietary machine learning engine that multiplies the
            value of labelled data, allowing for better AI.
          </p>
        </div>
        <div className="space-y-6 flex flex-col">
          {OurServicesData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0"
            >
              <div className="md:w-1/4 bg-primary-600 p-2 md:p-4 flex flex-row items-center justify-between space-x-2 md:space-x-0">
                <h2 className="text-white text-left font-semibold text-base md:text-xl flex items-center">
                  {data.title}
                </h2>
                <BsArrowRight
                  size={30}
                  className="hidden md:block text-white"
                />
              </div>
              <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {data.services.map((service, ind) => (
                  <div
                    onClick={() => alert("Clicked!!!!")}
                    key={ind}
                    className="flex-1 flex flex-col justify-between space-y-10 bg-white p-6 shadow-md border border-secondary-200 hover:border-primary-500 hover:cursor-pointer"
                  >
                    <div className="flex flex-col space-y-6">
                      <AiOutlineCodepenCircle
                        size={50}
                        className="text-primary-800 bg-primary-200 rounded-lg p-3"
                      />
                      <h3 className="text-secondary-800 font-medium sm:text-base">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2 hover:cursor-pointer">
                      <span className="text-primary-600 font-semibold text-sm hover:font-bold">
                        Explore more
                      </span>
                      <button className="">
                        <BsArrowRight size={20} className="text-primary-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
