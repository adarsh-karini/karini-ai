import IconFive from "@/svgs/aboutus/IconFive";
import IconFour from "@/svgs/aboutus/IconFour";
import IconSix from "@/svgs/aboutus/IconSix";
import IconThree from "@/svgs/aboutus/IconThree";
import React from "react";

const VisionMission = () => {
  const ourVisionOneData = [
    {
      title: "Longitivity",
      icon: <IconThree width={40} height={40} color={"#7c3aed"} />,
      overview:
        " Envisioning a future where the benefits of Generative AI are within reach for every business, while prioritizing safety and governance. ",
    },
    {
      title: "Flexibility",
      icon: <IconFour width={40} height={40} color={"#7c3aed"} />,

      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
  ];

  const ourVisionTwoData = [
    {
      title: "Planning",
      icon: <IconFive width={40} height={40} color={"#7c3aed"} />,

      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Productivity",
      icon: <IconSix width={40} height={40} color={"#7c3aed"} />,

      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
  ];

  return (
    <section className="bg-[#141619] px-4 lg:px-0 py-20 overflow-hidden">
      <div className="max-w-screen-lg mx-auto space-y-12 md:space-y-32">
        <div className="relative">
          <div className="absolute -right-72 -top-20 p-52 rounded-full bg-primary-600 blur-3xl opacity-10"></div>

          <div className="relative z-10 flex justify-between gap-16">
            <div className="-z-10 absolute -left-28 -bottom-16 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
              <div className="p-20 m-8 bg-[#141619] rounded-full"></div>
            </div>
            <div className="flex-1 ">
              <img
                src="assets/images/aboutus/vision_img.jpg"
                alt="vision image"
                className="h-full w-full object-cover object-center rounded-3xl"
              />
            </div>
            <div className="  flex-1 flex items-center">
              <div className="space-y-2">
                <h1 className="text-primary-600 font-bold text-2xl sm:text-3xl text-left">
                  OUR <span className="text-white">VISION</span>
                </h1>
                <p className="text-secondary-100 text-sm 2xl:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-48 bottom-0 p-52 rounded-full bg-primary-600 blur-3xl opacity-10"></div>

          <div className="space-y-28">
            <div className="space-y-2 text-center">
              <h1 className="text-primary-600 font-bold text-2xl sm:text-3xl">
                OUR <span className="text-white">MISSION</span>
              </h1>
              <p className="text-secondary-300 text-sm 2xl:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-8">
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  {ourVisionOneData.map((vision, index) => (
                    <div
                      key={index}
                      className="relative bg-gradient-to-r from-gray-800 to-gray-900 space-y-6 rounded-3xl p-6 text-center"
                    >
                      <div className="flex justify-center">
                        <div className="absolute -top-10 bg-white rounded-3xl p-6">
                          {vision.icon}
                        </div>
                      </div>
                      <div className="space-y-4 pt-12">
                        <h3 className="text-white text-base md:text-lg font-semibold">
                          {vision.title}
                        </h3>
                        <p className="text-secondary-400 text-sm">
                          {vision.overview}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  {ourVisionTwoData.map((vision, index) => (
                    <div
                      key={index}
                      className="relative bg-gradient-to-r from-gray-800 to-gray-900 space-y-6 rounded-3xl p-6 text-center"
                    >
                      <div className="flex justify-center">
                        <div className="absolute -top-10 bg-white rounded-3xl p-6">
                          {vision.icon}
                        </div>
                      </div>
                      <div className="space-y-4 pt-12">
                        <h3 className="text-white text-base md:text-lg font-semibold">
                          {vision.title}
                        </h3>
                        <p className="text-secondary-400 text-sm">
                          {vision.overview}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
