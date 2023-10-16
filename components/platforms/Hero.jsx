import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-platform_img bg-cover">
      <div className="h-full w-full opacity-70 absolute bg-black"></div>
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32">
            {/* <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="hidden lg:block absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div> */}
            <div className="z-10 space-y-6 px-4 max-w-screen-lg">
              <h1 className="text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                Our Platform
                <span className="text-primary-600"> </span>
              </h1>
              <p className="text-center text-secondary-100 text-sm sm:text-base">
                Simplifying the Power of Generative AI: Our mission is to
                streamline the complex processes of AI for enterprises with our
                no-code, low-code pipelines. Immerse in the wide spectrum of
                Generative AI applications in language, image, and audio, while
                quickly building and fine-tuning Large Language Model
                applications with crowd-sourced wisdom.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
