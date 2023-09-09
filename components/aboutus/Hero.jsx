import React from "react";

const Hero = () => {
  return (
    <header className="overflow-hidden bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100% clip_bg_cover">
      <div className="mx-auto max-w-screen-2xl pb-24">
        <section className="">
          <div className="flex flex-col items-center justify-center py-28 space-y-12">
            <div className="space-y-4 px-4 max-w-screen-md">
              <h1 className="flex flex-col text-center text-xl font-bold text-gray-100 sm:text-2xl md:text-4xl">
                <span>Our tool dedicate to make your</span>
                <span className="text-primary-600"> business smoother</span>
              </h1>
              <p className="text-center text-gray-200 text-sm sm:text-base">
                Empowering businesses with Human in the loop AI-powered
                solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
