import React from "react";

const Hero = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-40">
            <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-0 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
            <div className="z-10 space-y-3 px-4 max-w-screen-lg">
              <h1 className="text-center text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
                We would love to{" "}
                <span className="text-primary-600">hear from you</span>
              </h1>
              {/* <p className="text-center text-gray-600 text-sm sm:text-base">
                We have offices and teams all around the world.
              </p> */}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
