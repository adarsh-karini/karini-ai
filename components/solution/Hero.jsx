import React from "react";

const Hero = () => {
  return (
    <header className="relative bg-solution_img bg-cover ">
      <div className="h-full w-full opacity-60 absolute bg-black"></div>
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32 md:pb-52">
            <div className="z-10 space-y-2 lg:space-y-3 px-4 max-w-screen-xl">
              <h1 className="text-center text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                Our Solutions
              </h1>
              <p className="max-w-screen-lg px-10 lg:px-0 text-center text-secondary-100 text-xs sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, rem quo. Rem dolore accusantium architecto eius
                error, distinctio quibusdam sequi enim quidem excepturi impedit
                vero consequuntur, alias, ratione praesentium voluptatum?
                Explicabo quam vitae accusamus nemo dolores possimus expedita
                error ut.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
