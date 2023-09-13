import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

const SectionTwo = () => {
  const buttons = [
    "Karini: Intelligent Document Processing",
    "Simplify Document Processing: Scale Effortlessly",
    "Karini AI: Smart Business Decisions",
  ];

  const [currentData, setCurrentData] = useState(buttons[0]);

  const [sectionTwoData, setSectionTwoData] = useState([
    {
      title: "Karini: Intelligent Document Processing",
      description:
        "Stay ahead in industries like healthcare, finance, legal, retail and manufacturing with Karini's Intelligent document Understanding. Streamline your day-to-day business processes by automating information extraction from various document types and formats, quickly and accurately.",
    },
    {
      title: "Simplify Document Processing: Scale Effortlessly",
      description:
        "Eliminate the need for time-consuming, error-prone, costly manual document processing, experience the ease of scaling with our platform. No machine learning skills required.",
    },
    {
      title: "Karini AI: Smart Business Decisions",
      description:
        "Karini empowers you to make well-informed business decisions on time, enhancing customer satisfaction, expediting onboarding and reducing customer churn, all while minimizing overall costs.",
    },
  ]);
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-xl capitalize font-semibold text-primary-900 sm:text-2xl md:text-2xl border-b-2 border-gray-300 pb-2">
          Intelligent Document Understanding
        </h1>
        <div className="h-[30rem] flex space-x-2 py-14">
          <div className="flex-1 flex items-center">
            {sectionTwoData.map((data, index) => {
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
          <div className="relative flex-1 flex items-center space-x-16">
            <div className="absolute right-0 bg-primary-50 rounded-l-full w-2/3 h-full"></div>

            <div className="text-primary-600 flex flex-col justify-evenly space-y-2 z-10">
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
                  <MdOutlineKeyboardDoubleArrowLeft size={20} />
                  <span>{button}</span>
                </button>
              ))}
            </div>
            <BsRobot size={200} className="text-gray-700 p-2 z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
