import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

const SectionOne = () => {
  const buttons = [
    "Chatbot Development Challenges",
    "Karini bot: The Future of AI Communication",
  ];

  const [currentData, setCurrentData] = useState(buttons[0]);

  const [sectionOneData, setSectionOneData] = useState([
    {
      title: "Chatbot Development Challenges",
      description:
        "Building a chatbot involves challenges ranging from understanding diverse data types, such as structured semi-structured, and unstructured text, images, and audio, to ensuring appropriate and natural responses. Fine-tuning sophisticated language models is key, requiring a deep understanding of machine learning. Rigorous testing is essential to guarantee correct responses to various user inputs, requiring both automated checks and human review. Lastly, deploying and integrating the chatbot into different platforms for a seamless user experience can pose technical hurdles.",
    },
    {
      title: "Karini bot: The Future of AI Communication",
      description:
        "Discover the future of AI communication with Tensorbot, a robust solution for rapid chatbot development using powerful Large Language Models (LLMs). Tensoract Studio simplifies the process, handling diverse data and offering top models like OpenAI, Azure OpenAI, and HuggingFace. It enhances customer interaction with personalized prompts and ensures quality through thorough testing. Deployment is effortless with Tensoract, making AI communication more accessible than ever.",
    },
  ]);
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl capitalize font-semibold text-primary-900 sm:text-2xl md:text-2xl pb-2 border-b-2 border-gray-300">
          Karini bot - Build Generative AI applications
        </h1>
        <div className="h-[30rem] flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-10 py-14">
          <div className="relative flex-1 flex flex-col items-center space-x-16">
            <div className="absolute left-0 bg-primary-50 rounded-r-full w-2/3 h-full hidden lg:block"></div>
            <BsRobot
              size={200}
              className="text-gray-700 p-2 z-10 hidden lg:block"
            />
            <div className=" text-primary-600 flex lg:flex-col justify-evenly lg:space-y-2 z-10">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  onMouseEnter={() => setCurrentData(button)}
                  className={`${
                    button == currentData
                      ? "text-white bg-primary-600"
                      : "text-primary-600 bg-white"
                  } flex justify-between space-x-2 border border-primary-600 p-4 text-sm font-semibold rounded hover:bg-primary-600 hover:text-white shadow-2xl whitespace-nowrap`}
                >
                  <span>{button}</span>
                  <MdOutlineKeyboardDoubleArrowRight size={20} />
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center">
            {sectionOneData.map((data, index) => {
              if (data.title == currentData) {
                return (
                  <div key={index} className="space-y-4">
                    <h1 className="text-gray-800 text-xl font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-gray-600">{data.description}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
