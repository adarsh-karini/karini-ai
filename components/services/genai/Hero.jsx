import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-gen_img bg-cover ">
      <div className="h-full w-full opacity-60 absolute bg-black"></div>
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32 md:pb-52">
            <div className="z-10 space-y-2 lg:space-y-3 px-4 max-w-screen-xl">
              <h1 className="text-center text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                Your partner to democratize Generative AI across your enterprise
              </h1>
              <p className="px-10 lg:px-0 text-center text-secondary-100 text-xs sm:text-base">
                We are Artificial Intelligence builders with a proven track
                record to empower you with the latest trends in Generative AI.
                Our platform, backed by domain experts, can quickly take ideas
                to production.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
