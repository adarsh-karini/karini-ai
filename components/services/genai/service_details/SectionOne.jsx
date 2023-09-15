import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const SectionOne = ({ SectionOne }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="relative bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <h1 className="text-black text-left font-bold text-2xl sm:text-3xl">
            {SectionOne?.title}
          </h1>
          <p className="text-secondary-900 text-left md:text-right">
            {SectionOne?.overview}
          </p>
        </div>
        <div className="space-y-10">
          <ul className="flex justify-betwen space-x-8 overflow-x-auto border-b-2 border-secondary-300">
            {SectionOne?.tabs.map((option, index) => (
              <li key={index} className=" ">
                <button
                  onClick={() => setActiveItem(index)}
                  className={`${
                    activeItem === index
                      ? "border-b-4 border-primary-600 text-primary-600"
                      : "text-black border-b-0"
                  } w-full relative block font-medium pr-2 py-4 outline-none`}
                >
                  <div className="flex items-center justify-center gap-4 whitespace-nowrap scroll-smooth scrollbar-hide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 flex-shrink-0 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>

                    <h1 className="text-sm"> {option.buttonValue} </h1>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div>
            {SectionOne?.tabs.map(
              (tab, ind) =>
                activeItem === ind && (
                  <div
                    key={ind}
                    className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0"
                  >
                    <div className="hidden sm:block bg-primary-400 px-40 py-40 md:py-0"></div>
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-black text-base md:text-lg font-semibold">
                        {tab.title}
                      </h3>
                      <p className="text-secondary-700 text-sm text-justify leading-6">
                        {tab.description}
                      </p>
                      <hr className="h-1 bg-primary-600" />
                      <div className="flex flex-col space-y-2">
                        {tab.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 text-primary-600"
                          >
                            <IoCheckmarkCircle size={20} />
                            <p className="text-secondary-700 text-sm">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
