import IconOne from "@/svgs/aboutus/IconOne";
import IconTwo from "@/svgs/aboutus/IconTwo";
import React from "react";

const WhoWeAre = () => {
  const iconColor = "#7c3aed";

  return (
    <section className="relative bg-white px-4 lg:px-0 py-20 overflow-hidden">
      <div className="max-w-screen-lg mx-auto">
        <div className="px-6 py-8 space-y-6 lg:space-y-10">
          <div className="">
            <h1 className="text-black font-extrabold text-3xl sm:text-4xl text-center">
              WHO <span className="text-primary-600">WE ARE</span>
            </h1>
          </div>
          <div className="relative flex flex-col lg:flex-row gap-6">
            <div className="absolute -right-72 -top-20 p-52 rounded-full bg-gradient-to-br from-primary-600 to-primary-200 blur-2xl opacity-10"></div>
            <div className="flex items-center lg:items-start space-x-10">
              <div className="flex items-start">
                <IconOne width={50} height={50} color={iconColor} />
              </div>
              <div className="space-y-2">
                <h2 className="text-black text-left font-bold text-base md:text-xl flex">
                  Goal Focussed
                </h2>
                <p className="text-secondary-600 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="hidden lg:block w-1 h-[150px] bg-secondary-400"></div>
            <div className="flex items-center lg:items-start space-x-10">
              <div className="flex items-start">
                <IconTwo width={50} height={50} color={iconColor} />
              </div>
              <div className="space-y-2">
                <h2 className="text-black text-left font-bold text-base md:text-xl flex ">
                  Continuous Improvement
                </h2>
                <p className="text-secondary-600 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 relative">
          <div className="-z-10 absolute -left-32 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
            <div className="p-20 m-8 bg-white rounded-full"></div>
          </div>
          <div className="-z-10 absolute -right-10 -top-10 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
          <img
            src="assets/images/aboutus/who_we_are_img.jpg"
            alt="who_we_are_image"
            className="h-96 w-full object-cover object-center rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
