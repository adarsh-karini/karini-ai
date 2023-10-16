import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header>
      <div className="relative bg-dark overflow-hidden">
        <section className=" mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center pt-20 pb-10 space-y-12 z-10">
            <div className="z-10 space-y-4 px-4 max-w-screen-md">
              <div className="space-y-8">
                <h1 className="flex flex-col text-center text-xl sm:text-2xl font-semibold text-secondary-200 space-y-2">
                  <span className="text-center">
                    Data to Business Insights using
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-primary-200 text-4xl md:text-5xl lg:text-6xl font-extrabold">
                    Generative AI
                  </span>
                </h1>
                <p className="text-center text-secondary-300 text-sm sm:text-base">
                  We make your applications more intelligent 10x faster
                </p>
              </div>
              <div className="w-full space-x-2 flex justify-center">
                <Link
                  href="#"
                  className=" flex space-x-2 bg-primary-600 px-4 sm:px-4 py-2 sm:py-3 text-xs font-medium text-white transition duration-100 md:text-base rounded"
                >
                  <span>Join waitlist</span>
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </Link>

                {/* <Link
                  href={"/pricing"}
                  className="px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-secondary-300 border border-sectext-secondary-300 transition duration-100 hover:text-primary-600 hover:bg-white md:text-base rounded"
                >
                  View pricing
                </Link> */}
              </div>
            </div>
            <div className="z-10 relative px-4 md:px-20 xl:px-0">
              <div className="absolute -z-10 -right-52 -top-32 p-52 rounded-full bg-primary-500 blur-3xl opacity-30"></div>

              <img
                src="/assets/images/hero_img.png"
                alt="hero image"
                className="shadow-2xl rounded-2xl"
              />
            </div>
          </div>
          {/* <div className=" absolute top-0 left-0 bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100% w-full h-full clip_hero_page"></div> */}
        </section>
      </div>
    </header>
  );
};

export default Hero;
