import React from "react";

const ClientLogos = () => {
  const clientsLogos = [
    "/assets/images/Amazon_logo.png",
    "/assets/images/aws_comprehend.png",
    "/assets/images/Deloitte_Logo.png",
    "/assets/images/huggingface_new.png",
    "/assets/images/openai.png",
    "/assets/images/ubi_logo.png",
  ];
  return (
    <section className="bg-white py-20 px-4 sm:px-10 space-y-8">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <h2 class="text-xl text-center font-semibold text-primary-900 sm:text-2xl">
          Our mission is to help you grow your business
        </h2>
      </div>
      <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 gap-16 sm:gap-8">
        {clientsLogos.map((logo, index) => (
          <div key={index} className=" shadow-sm">
            <img src={logo} alt="client logo" className="w-[10rem]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
