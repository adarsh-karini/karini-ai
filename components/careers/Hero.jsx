import React from "react";

const Hero = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-20">
            <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-0 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
            <div className="z-10 space-y-6 px-4 max-w-screen-lg">
              <h1 className="text-center text-4xl font-extrabold text-black md:text-5xl lg:text-6xl">
                Find your dream job at{" "}
                <span className="text-primary-600">karini.ai</span>
              </h1>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                possimus sed aliquid quo consectetur atque modi fuga assumenda
                repellendus molestiae placeat eos necessitatibus blanditiis
                eaque labore, aut et natus autem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
