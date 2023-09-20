import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { solutionTypes, solutionsData } from "@/content/solutions/solutionData";

const Solutions = () => {
  const [selected, setSelected] = useState(solutionTypes[0]);
  const [showSolution, setShowSolution] = useState([solutionsData[0]]);
  const [solutionsDropdown, setSolutionDropdown] = useState(false);

  const handleClick = (value) => {
    setSelected(value);
    setSolutionDropdown(false);

    const data = solutionsData.filter(
      (solutionData) => solutionData.type == value
    );
    setShowSolution(data);
  };

  return (
    <section className="bg-white px-4 sm:px-10 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Explore Solutions
        </h1>
        <div>
          <div className="space-y-10">
            <div className="lg:w-3/4 mx-auto">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-center md:space-x-4">
                <h3 className="text-secondary-600 text-sm font-medium">
                  Browse Solutions:
                </h3>
                <div className="w-full md:flex-1 relative">
                  <div
                    onClick={() => setSolutionDropdown((prev) => !prev)}
                    className=" bg-secondary-100 flex justify-between px-4 py-3 cursor-pointer"
                  >
                    <p className="text-secondary-700 text-sm font-medium disabled:select-text">
                      {selected}
                    </p>
                    {solutionsDropdown ? (
                      <FaChevronUp size={20} className="text-secondary-700" />
                    ) : (
                      <FaChevronDown size={20} className="text-secondary-700" />
                    )}
                  </div>
                  <div
                    className={`${
                      solutionsDropdown ? "block" : "hidden"
                    } w-full absolute bg-white border shadow-md`}
                  >
                    {solutionTypes.map((solution, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleClick(solution);
                        }}
                        className="w-full hover:bg-primary-600 text-secondary-700 hover:text-white transition p-3 text-sm text-left border-b"
                      >
                        {solution}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {showSolution[0]?.solutions.map((solution, ind) => (
                  <Link
                    href={solution.path}
                    key={ind}
                    className="h-full flex-1 flex flex-col justify-between space-y-10 bg-white p-6 shadow-md border border-secondary-200 hover:border-primary-300 hover:scale-105 hover:cursor-pointer transition"
                  >
                    <div className="flex flex-col space-y-6">
                      <AiOutlineCodepenCircle
                        size={50}
                        className="text-primary-800 bg-primary-200 rounded-lg p-3"
                      />
                      <h3 className="text-secondary-800 font-medium text-sm">
                        {solution.title}
                      </h3>
                    </div>
                    <div className="flex space-x-2 hover:cursor-pointer">
                      <span className="text-primary-600 font-semibold text-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
