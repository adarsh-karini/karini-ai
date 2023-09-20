import React from "react";

const SectionOne = () => {
  return (
    <section className="bg-white px-4 sm:px-10 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Explore Solutions
        </h1>
      </div>
      <div>
        <div className="flex sapce-x-2">
          <div className="flex-1 p-4 bg-primary-300"></div>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
