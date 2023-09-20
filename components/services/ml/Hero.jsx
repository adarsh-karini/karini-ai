import React from "react";

const Hero = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-28">
            <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div>

            <div className="z-10 space-y-6 px-4 max-w-screen-lg">
              <h1 className="text-center text-2xl font-extrabold text-black md:text-4xl lg:text-5xl">
                Karini AI is your partner to establish
                <span className="text-primary-600"> MLOPs </span>to within your
                Enterprise
              </h1>
              <p className="text-center text-gray-600 text-sm sm:text-base">
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
