import React, { useState } from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbBoxModel } from "react-icons/tb";
import { AiFillGolden, AiOutlineCodepenCircle } from "react-icons/ai";

import { OurServicesData } from "@/content/services/genai/genaiData";
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

  const genaiSubServicesData = [
    {
      name: "Generative AI Foundations",
      services: [
        {
          title: "Training and Enablement",
          keyPoints: [
            "Introduction to Generative AI",
            "Introduction to Amazon Bedrock",
            "Prompt Engineering Basics",
            "Introduction to Vector databases",
          ],
        },
        {
          title: "Workshops",
          keyPoints: [
            "Building a Retrieval Augmented Generation (RAG) application",
            "Document Management Understanding with Generative AI",
            "Foundational Model finetuning",
            "Generative AI Evaluation",
          ],
        },
        {
          title: "Advisory",
          keyPoints: [
            "Business and technology discovery",
            "Business process evaluation",
            "Business value assessment",
            "Use case brainstorming",
            "Competitive assessment",
          ],
        },
      ],
    },
    {
      name: "Rapid Prototyping",
      services: [
        {
          title: "Retrieval Augmented GenerationI(RAG)",
          keyPoints: [
            "Propose RAG architecture",
            "Perform data preparation",
            "Set up vector indexing pipeline",
            "Propose and set up a LLM pipeline",
          ],
        },
        {
          title: "Prompt Engineering and Prompt Tuning",
          keyPoints: [
            "Qualified prompt engineers  to create training datasets",
            "Provide content creators to review prompt responses",
            "Rank, Classify prompt responses",
            "Provide human in the loop services",
          ],
        },
        {
          title: "Chatbot Integration",
          keyPoints: [
            "Assess your business processes",
            "Propose Gen AI capabilities to improve applications",
            "Build secure chatbot interface",
            "Set up Human review workflows",
          ],
        },
      ],
    },
    {
      name: "Advanced Services",
      services: [
        {
          title: "Model finetuning with RLHF",
          keyPoints: [
            "Create a curated dataset",
            "Data preprocessing",
            "Finetune a SOTA OSS model or SAAS api",
            "Benchmark multiple models against human evaluation score",
            "Set up training pipeline automation",
          ],
        },
        {
          title: "Model Pretraining",
          keyPoints: [
            "Understand use case, dataset, budget",
            "Recommend model, platform and cost",
            "Preparare data and develop a LLM recipe",
            "Perform LLM training and model evaluation against benchmarks",
          ],
        },
        {
          title: "LLMOps",
          keyPoints: [
            "Exploratory data analysis (EDA)",
            "Data prep and prompt engineering",
            "Model fine-tuning",
            "Model review and governance",
            "Model inference and serving",
            "Model monitoring with human feedback",
          ],
        },
      ],
    },
  ];

  const [switchValue, setSwitchValue] = useState(0);
  const [showService, setShowService] = useState(
    genaiSubServicesData[switchValue]
  );

  return (
    <section className="relative bg-white px-4 lg:px-0 py-20">
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
                    setSwitchValue(index);
                    setShowService(genaiSubServicesData[index]);
                  }}
                  className={`${
                    switchValue === index
                      ? "bg-primary-600 text-white"
                      : "bg-white text-primary-600"
                  } py-3 px-5 text-xs font-semibold whitespace-nowrap`}
                >
                  {serviceButton}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <h2 className="text-xl text-black font-semibold text-center pb-2 border-b-2 border-secondary-300">
                {showService.name}
              </h2>
              <div className="space-y-10">
                {showService.services?.map((service, ind) => (
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
        {/* <div className="space-y-6 flex flex-col">
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
                {data?.services.map((service, ind) => (
                  <Link
                    href={service.path}
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
                      <div>
                        <BsArrowRight size={20} className="text-primary-600" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OurServices;
