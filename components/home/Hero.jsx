import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header className="">
      <div className="mx-auto max-w-screen-2xl">
        <section className=" relative">
          <div className="flex flex-col items-center justify-center pt-20 pb-10 space-y-12 z-10">
            <div className="z-10 space-y-4 px-4 max-w-screen-md">
              <h1 className="flex flex-col text-center text-xl font-bold text-secondary-100 sm:text-2xl md:text-4xl">
                <span>Advanced Analytics to grow</span>
                <span className="text-primary-600"> your business</span>
              </h1>
              <p className="text-center text-secondary-300 text-sm sm:text-base">
                Boost labeling speed 10x with TensorBot for computer vision and
                generative AI
              </p>
              <div className="w-full space-x-2 flex justify-center">
                <Link
                  href="#"
                  className=" bg-primary-600 px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-white transition duration-100 md:text-base"
                >
                  Try it free
                </Link>

                <Link
                  href="#"
                  className="px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-secondary-300 border border-sectext-secondary-300 transition duration-100 hover:text-primary-600 hover:bg-white md:text-base"
                >
                  View pricing
                </Link>
              </div>
            </div>
            <div className="z-10 px-4 md:px-20 xl:px-0">
              <img
                src="/assets/images/hero_img.png"
                alt="hero image"
                className="shadow-2xl rounded-2xl"
              />
            </div>
          </div>
          <div className=" absolute top-0 left-0 bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100% w-full h-full clip_hero_page"></div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
