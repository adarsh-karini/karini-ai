import React from "react";

const Hero = () => {
  return (
    <header className="bg-about_img bg-cover">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-32 md:pb-52">
            <div className="z-10 space-y-4 lg:space-y-6 px-4 max-w-screen-xl">
              <h1 className="text-center text-lg sm:text-2xl font-extrabold text-white md:text-4xl lg:text-5xl xl:text-6xl lg:!leading-[70px]">
                Our Solutions
              </h1>
              <p className="px-10 lg:px-0 text-center text-secondary-100 text-xs md:text-sm sm:text-base">
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
