import React, { useState } from "react";
import { BsRobot, BsCloudFog2, BsArrowRight } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbBoxModel } from "react-icons/tb";
import { AiFillGolden, AiOutlineCodepenCircle } from "react-icons/ai";

import { OurServicesData } from "@/content/services/ml/mlData";
import Link from "next/link";

const OurServices = () => {
  const IconNames = {
    BsRobot,
    FaCircleNodes,
    BsCloudFog2,
    TbBoxModel,
  };

  const mlServicesButtons = [
    "MLOps Foundations",
    "Rapid Prototyping",
    "Platform Solutions",
  ];

  const mlSubServicesData = [
    {
      name: "MLOps Foundations",
      services: [
        {
          title: "MLOps Training",
          keyPoints: [
            "In-depth courses covering MLOps principles, tools, and best practices.",
            "Hands-on labs for version control using Git, model tracking with tools like MLflow, and CI/CD pipeline setups.",
            "Training modules on automating model deployment and monitoring in production.",
            "Learning to address common MLOps challenges and ensuring model reliability.",
          ],
        },
        {
          title: "Data Science Training",
          keyPoints: [
            "Customized training programs for data scientists, data engineers, and analysts.",
            "Workshops on data preprocessing, feature selection, and advanced analytics techniques.",
            "Hands-on experience with popular data science libraries like pandas, scikit-learn, and TensorFlow.",
            "Training in building end-to-end machine learning pipelines from data collection to model deployment.",
          ],
        },
        {
          title: "Workshops and Game Days",
          keyPoints: [
            "Interactive workshops focusing on real-world MLOps scenarios.",
            "Game days simulating MLOps incidents and testing incident response plans.",
            "Machine Learning Hackathons for talent acquisition.",
            "Building cool demo to win for conferences and exhibitions.",
          ],
        },
      ],
    },
    {
      name: "Rapid Prototyping",
      services: [
        {
          title: "Computer Vision",
          keyPoints: [
            "Rapid development of computer vision models using frameworks like TensorFlow and PyTorch.",
            "Prototyping for image classification, object detection, image segmentation, and image generation.",
            "Integration with hardware like cameras and sensors for real-time applications.",
            "Model optimization for edge devices and deployment strategies.",
          ],
        },
        {
          title: "Natural Language Processing",
          keyPoints: [
            "Accelerated NLP model development for tasks like sentiment analysis, chatbots, and named entity recognition.",
            "Customization of pre-trained language models for domain-specific applications.",
            "Building chatbot prototypes with natural language understanding (NLU) capabilities.",
            "Creating text summarization models for content generation.",
          ],
        },
        {
          title: "Forecasting",
          keyPoints: [
            "Rapid implementation of time series forecasting models using libraries like Prophet and ARIMA.",
            "Forecasting demand, sales, financial trends, and more.",
            "Evaluation of model accuracy with metrics like RMSE and MAE.",
            "Hyperparameter tuning and model selection for optimal results.",
          ],
        },
        {
          title: "Recommendation engines",
          keyPoints: [
            "Quick development of recommendation systems based on collaborative filtering and content-based filtering.",
            "Prototyping personalized product recommendation engines for e-commerce.",
            "Implementing hybrid recommendation algorithms that combine multiple approaches.",
            "Evaluation of recommendation quality using precision, recall, and F1-score metrics.",
          ],
        },
      ],
    },
    {
      name: "Platform Solutions",
      services: [
        {
          title: "ML Platform Migrations",
          keyPoints: [
            "Assessment and planning for migrating existing ML platforms to modern, scalable solutions.",
            "Data and model migration strategies to minimize downtime and data loss",
            "Implementation of cloud-based ML platforms like AWS SageMaker or Databricks.",
            "Integration of essential components, such as version control, model tracking, and automated deployment.",
          ],
        },
        {
          title: "Intelligent Document Understanding",
          keyPoints: [
            "Development of AI-driven document understanding solutions for text extraction and classification.",
            "Automated structured data extraction from unstructured documents like invoices, forms, and contracts.",
            "Customized natural language processing (NLP) models for document summarization and sentiment analysis.",
            "Deployment of document understanding systems to enhance data retrieval and decision-making.",
          ],
        },
        {
          title: "Model Migrations",
          keyPoints: [
            "Assessment and strategy development for migrating machine learning models to new environments.",
            "Transition from legacy on-premises models to cloud-based platforms for scalability and efficiency.",
            "Optimization of models for deployment on edge devices and IoT platforms.",
            "Ensuring model performance and reliability during and after migration.",
          ],
        },
      ],
    },
  ];

  const [switchValue, setSwitchValue] = useState(0);
  const [showService, setShowService] = useState(
    mlSubServicesData[switchValue]
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
              {mlServicesButtons.map((serviceButton, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSwitchValue(index);
                    setShowService(mlSubServicesData[index]);
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
                            <AiFillGolden size={40} className="p-2" />
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
