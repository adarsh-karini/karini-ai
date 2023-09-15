import React from "react";

const Hero = ({ title, overview }) => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-20 md:py-28">
            <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div>

            <div className="z-10 space-y-6 px-4 max-w-screen-lg">
              <h1 className="text-left text-3xl font-extrabold text-black md:text-5xl">
                {title}
              </h1>
              <p className="text-left text-gray-600 text-sm sm:text-base">
                {overview}
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
