import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-ml_img bg-cover">
      <div className="h-full w-full opacity-60 absolute bg-black"></div>
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32 md:pb-52">
            <div className="z-10 space-y-4 lg:space-y-6 px-4 max-w-screen-xl">
              <h1 className="text-center text-lg sm:text-2xl font-extrabold text-white md:text-4xl lg:text-5xl xl:text-6xl lg:!leading-[70px]">
                Your partner to establish MLOPs across your enterprise
              </h1>
              <p className="px-10 lg:px-0 text-center text-secondary-100 text-xs sm:text-base">
                We are ex-Amazon Machine Learning builders with deep expertise
                in Machine Learning, Computer Vision, and Natural Language
                Processing
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
