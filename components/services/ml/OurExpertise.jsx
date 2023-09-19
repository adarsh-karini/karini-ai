import React from "react";
import { SiAmazonaws } from "react-icons/si";

import { OurMlExpertiseData } from "@/content/services/ml/mlData";

const OurExpertise = () => {
  return (
    <section className="bg-white px-4 md:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Trusted by popular companies
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {OurMlExpertiseData.map((val, index) => (
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
