import React, { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { ImPlay3 } from "react-icons/im";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const buttons = [
    "Connect to your Data source",
    "Select Embedding Model",
    "Set up Recipes",
    "Run Evaluation tests",
    "Make your application smarter",
    "Monitor Quality",
    "Finetune a model",
  ];
  return (
    <section className="bg-white px-4 sm:px-10 py-20 overflow-hidden">
      <div className="z-10 relative max-w-screen-xl mx-auto space-y-10">
        <div className="absolute -left-20 -top-16 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
        <div className="-z-10 absolute right-0 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
          <div className="p-20 m-8 bg-white rounded-full"></div>
        </div>
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            How It Works
          </h1>
          <p className="text-secondary-600 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            delectus beatae, non velit temporibus dignissimos consequatur eius
            sit eveniet ea.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2 text-sm text-gray-500 overflow-x-auto scrollbar-thin scrollbar-thumb-secondary-400 scrollbar-track-secondary-200">
            {buttons.map((button, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`${
                  active === index
                    ? "border-2 border-primary-600 text-primary-600 font-medium"
                    : "bg-white text-secondary-700 border-secondary-300"
                } flex items-center space-x-4 border hover:border-primary-600 hover:bg-primary-50 text-xs transition py-3 px-3 mb-4 whitespace-nowrap rounded-lg`}
              >
                <MdOutlineInsertPageBreak
                  size={20}
                  className={
                    active === index ? "text-primary-600" : "text-secondary-700"
                  }
                />
                <span>{button}</span>
              </button>
            ))}
          </div>
          <div className="bg-primary-300 h-96 max-w-screen-lg mx-auto flex justify-center items-center border-8 border-white shadow">
            <ImPlay3
              size={60}
              className="text-primary-300 bg-primary-900 p-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
