import React from "react";
import { BsArrowRight } from "react-icons/bs";

const SuccessStories = () => {
  const successStoryData = {
    title:
      "Marine Classification Services Company Automates Regulatory Queries",
    description:
      "We specialize in human-in-the-loop AI solutions, blending human intelligence with advanced AI research to drive growth and streamline workflows. Our dedicated team of experts creates innovative and powerful solutions for diverse industries. ch to drive growth and streamline workflows. Our dedicated team of experts creates innovative and powerful solutions for diverse industries.",
    points: [
      "80% automation of all internal regulatory answers",
      "40% increase in surveyor productivity",
      "15-20% improvement in classification accuracy",
    ],
    picture: "....................",
  };
  return (
    <section className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10 md:space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Success Stories
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
          <div className="hidden sm:block bg-primary-400 px-40 py-40 md:py-0"></div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-black text-base md:text-lg font-semibold">
              {successStoryData.title}
            </h3>
            <p className="text-secondary-700 text-sm text-justify leading-6">
              {successStoryData.description}
            </p>
            <div className="flex">
              {successStoryData.points.map((point, index) => (
                <p
                  key={index}
                  className="flex-1 text-secondary-700 text-sm leading-6 border-r-4 border-primary-400 last:border-none px-2"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white text-sm font-medium flex items-center space-x-2 bg-primary-600 border border-primary-600 px-6 py-4 ">
            <span>Explore more stories</span>{" "}
            <BsArrowRight size={20} className="font-semibold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
