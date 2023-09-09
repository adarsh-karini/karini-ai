import React from "react";

const Hero = () => {
  return (
    <header className="overflow-hidden bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100% clip_bg_cover">
      <div className="mx-auto max-w-screen-2xl pb-24">
        <section className="">
          <div className="flex flex-col items-center justify-center py-28 space-y-12">
            <div className="space-y-2 px-4 max-w-screen-md">
              <h1 className="flex flex-col text-center text-xl font-bold text-gray-100 sm:text-2xl md:text-4xl">
                <span>We&apos;d love to hear from you</span>
              </h1>
              <p className="text-center text-gray-300 text-sm sm:text-base">
                We have offices and teams all around the world.
              </p>
            </div>
          </div>
          {/* <div className="absolute w-[100vw] h-[20rem] -skew-y-6 bg-white text-black"></div> */}
        </section>
      </div>
    </header>
  );
};

export default Hero;
