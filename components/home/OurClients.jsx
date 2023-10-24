import Image from "next/image";
import React from "react";
import { SiAmazonaws } from "react-icons/si";

const OurClients = () => {
  const ClientLogos = [
    "/assets/images/services/aws-sagemaker.png",
    "/assets/images/services/aws_textract.png",
    "/assets/images/services/aws_bedrock.jpg",
    "/assets/images/services/databricks.png",
    "/assets/images/services/anthropic.svg",
    "/assets/images/services/anyscale.svg",
    "/assets/images/services/hugging_face.svg",
    "/assets/images/services/azure_openai.png",
  ];

  return (
    <section className="bg-white px-4 md:px-10 py-20">
      <div className="max-w-screen-xl mx-auto space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          <span className="text-primary-600">Our</span> Expertise
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {ClientLogos.map((val, index) => (
            <div
              key={index}
              className="py-4 border border-secondary-200 rounded-lg shadow-md shadow-primary-100 flex justify-center"
            >
              <Image
                src={val}
                alt="client logo"
                width={150}
                height={1000}
                className="object-contain"
                priority={true}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
