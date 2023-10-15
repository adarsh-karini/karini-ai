import React from "react";

const Hero = () => {
  return (
    <header className="bg-about_img bg-cover">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32">
            {/* <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="hidden lg:block absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div> */}
            <div className="z-10 space-y-6 px-4 max-w-screen-lg">
              <h1 className="text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                Our Platforms
                <span className="text-primary-600"> </span>
              </h1>
              <p className="text-center text-secondary-100 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dolor nihil quasi iste earum, repudiandae, quod
                delectus alias tenetur similique quae sed repellat pariatur sint
                harum beatae atque. Quae ab impedit debitis nam praesentium
                possimus ipsum enim in quibusdam facilis!
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
