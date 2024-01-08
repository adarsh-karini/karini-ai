import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-platform_img bg-cover">
      <div className="h-full w-full opacity-70 absolute bg-black"></div>
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32">
            {/* <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="hidden lg:block absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div> */}
            <div className="z-10 space-y-3 px-4 max-w-screen-lg">
              <h1 className="text-center text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                Industrialize Generative AI
                <span className="text-primary-600"> </span>
              </h1>
              <p className="text-center text-secondary-100 text-sm sm:text-base">
              Karini is pioneering the future of Generative AI, blending advanced language models with proprietary data to craft a digital co-pilot tailored for every user. Our platform streamlines the journey, offering user-friendly Gen AI templates for swift application development. Embrace the power of versatility with a suite of data processing tools, robust LLMOps practices for deploying Models, Data, and Copilots, and flexible customization options. Embedded with continuous feedback mechanisms, Karini ensures your Generative AI applications evolve and improve, driving innovation and excellence in the enterprise world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
