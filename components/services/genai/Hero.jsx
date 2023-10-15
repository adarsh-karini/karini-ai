import React from "react";

const Hero = () => {
  return (
    <header className="bg-about_img bg-cover">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32 md:pb-52">
            <div className="z-10 space-y-4 lg:space-y-6 px-4 max-w-screen-xl">
              <h1 className="text-center text-lg sm:text-2xl font-extrabold text-white md:text-4xl lg:text-5xl xl:text-6xl lg:!leading-[70px]">
                Karini AI is your partner to democratize Generative AI to within
                your Enterprise
              </h1>
              <p className="px-10 lg:px-0 text-center text-secondary-100 text-xs md:text-sm sm:text-base">
                We are Artificial Intelligence builders with a proven track
                record to empower you with the latest trends in Generative AI.
                Our product, backed by domain experts, can quickly take ideas to
                production.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
