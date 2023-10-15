import React from "react";
import { SiAmazonaws } from "react-icons/si";

const OurExpertise = () => {
  const ClientLogos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="bg-white px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Trusted by popular companies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {ClientLogos.map((val, index) => (
            <div
              key={index}
              className="py-4 border border-secondary-300 rounded-lg shadow-lg shadow-primary-100 flex justify-center"
            >
              <SiAmazonaws
                size={50}
                className=" text-secondary-700 justify-self-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
