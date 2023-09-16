import React from "react";

const WhoWeAre = () => {
  return (
    <section className="relative bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto bg-primary-50">
        <div className="px-6 py-8 space-y-6">
          <div className="space-y-4">
            <h1 className="text-black font-extrabold text-3xl sm:text-4xl text-left">
              WHO <span className="text-primary-600">WE ARE</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-4">
            <div className="space-y-2">
              <h2 className="text-black text-left font-bold text-base md:text-xl flex items-center">
                Goal Focussed
              </h2>
              <p className="text-secondary-600 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-black text-left font-bold text-base md:text-xl flex items-center">
                Continuous Improvement
              </h2>
              <p className="text-secondary-600 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="assets/images/aboutus/who_we_are_img.jpg"
            alt="who_we_are_image"
            className="h-96 w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
