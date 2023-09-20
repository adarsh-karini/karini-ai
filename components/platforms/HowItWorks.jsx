import React, { useState } from "react";
import { GrPlayFill } from "react-icons/gr";
import { ImPlay3 } from "react-icons/im";

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
    <section className="bg-white px-4 sm:px-10 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          How It Works
        </h1>
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-500">
            {buttons.map((button, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`${
                  active === index
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-secondary-700 border-secondary-300"
                } hover:bg-primary-600 hover:text-white text-xs transition py-2 px-3 border`}
              >
                {button}
              </button>
            ))}
          </div>
          <div className="bg-primary-300 h-96 w-full flex justify-center items-center">
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
