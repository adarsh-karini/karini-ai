import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header className="overflow-hidden bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100%">
      <div className="mx-auto max-w-screen-2xl pb-32">
        <section className=" relative">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="space-y-4 px-4 pt-16 max-w-screen-md">
              <h1 className="flex flex-col text-center text-xl font-bold text-gray-100 sm:text-2xl md:text-4xl">
                <span>Advanced Analytics to grow</span>
                <span className="text-primary-600"> your business</span>
              </h1>
              <p className="text-center text-gray-300 text-sm sm:text-base">
                Boost labeling speed 10x with TensorBot for computer vision and
                generative AI
              </p>
              <div className="w-full space-x-2 flex justify-center">
                <Link
                  href="#"
                  className=" rounded-full bg-primary-600 px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-white transition duration-100 md:text-base"
                >
                  Try it free
                </Link>

                <Link
                  href="#"
                  className="rounded-full px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-gray-300 border border-gray-300 transition duration-100 hover:text-primary-600 hover:bg-white md:text-base"
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
          <div className="absolute w-[100vw] h-[20rem] -skew-y-[9deg] bg-white text-black"></div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
