import React from "react";

const Hero = () => {
  const imagePaths = [
    "/assets/images/aboutus/about_img1.jpg",
    "/assets/images/aboutus/about_img2.jpg",
    "/assets/images/aboutus/about_img3.jpg",
  ];
  return (
    <header className="relative z-10 bg-about_img bg-cover">
      <div className="h-full w-full opacity-60 absolute bg-black"></div>

      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-40">
            {/* <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div> */}

            <div className="z-10 max-w-screen-lg space-y-10 px-4">
              <div className="space-y-6 ">
                <h1 className="text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                  We are proud of our product
                </h1>
                <p className="text-center text-gray-200 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              {/* <div className="flex space-x-4">
                {imagePaths.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt="about images"
                      className=" h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
