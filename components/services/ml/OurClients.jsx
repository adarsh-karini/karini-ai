import Image from "next/image";
import React from "react";
import { SiAmazonaws } from "react-icons/si";

const OurClients = () => {
  const ClientLogos = [
    "/assets/images/services/aws_sagemaker.webp",
    "/assets/images/services/databricks.png",
    "/assets/images/services/aws_textract.png",
    "/assets/images/services/hugging_face.svg",
    "/assets/images/services/aws_bedrock.jpg",
    "/assets/images/services/anyscale.svg"
  ];

  return (
    <section className="bg-white px-4 md:px-10 py-20">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Our Expertise and Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ClientLogos.map((val, index) => (
            <div
              key={index}
              className=" py-8 border border-secondary-200 rounded-lg shadow-md shadow-primary-100 flex justify-center"
            >
              <Image
                src={val}
                alt="client logo"
                width={200}
                height={1000}
                className="rounded-lg"
                objectFit="contain"
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
