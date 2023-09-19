import React from "react";
import { SiAmazonaws } from "react-icons/si";

import { ourGenaiExpertiseData } from "@/content/services/genai/genaiData";

const OurExpertise = () => {
  return (
    <section className="bg-white px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Our Expertise
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {ourGenaiExpertiseData.map((val, index) => (
            <SiAmazonaws
              key={index}
              size={40}
              className=" text-secondary-700 justify-self-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
