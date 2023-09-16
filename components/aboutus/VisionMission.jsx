import React from "react";

const VisionMission = () => {
  const ourVisionData = [
    {
      title: "Longitivity",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Flexibility",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Planning",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Productivity",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
  ];

  const ourMissionData = [
    {
      title: "Longitivity",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Flexibility",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Planning",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
    {
      title: "Productivity",
      overview:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde deleniti et dolorum consequuntur temporibus voluptatibus eum incidunt accusamus illo!",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-dark from-30% to-medium to-80% px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-12 md:space-y-20">
        <div className="space-y-4">
          <h1 className="text-primary-600 font-bold text-2xl sm:text-3xl text-left sm:text-right">
            OUR <span className="text-white">VISION</span>
          </h1>
          <div className="flex justify-between gap-8">
            <div className="flex-1">
              <div className="grid grid-c grid-cols-2 gap-2 sm:gap-4">
                {ourVisionData.map((vision, index) => (
                  <div
                    key={index}
                    className="bg-dark space-y-2 border border-r-4 border-b-4 border-secondary-400 p-6"
                  >
                    <h3 className="text-white text-base md:text-lg font-semibold">
                      {vision.title}
                    </h3>
                    <p className="text-secondary-300 text-sm">
                      {vision.overview}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 hidden lg:block">
              <img
                src="assets/images/aboutus/vision_img.jpg"
                alt="vision image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-primary-600 font-bold text-2xl sm:text-3xl text-left">
            OUR <span className="text-white">MISSION</span>
          </h1>
          <div className="flex justify-between gap-8">
            <div className="flex-1 hidden lg:block">
              <img
                src="assets/images/aboutus/mission_img.jpg"
                alt="mission image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex-1">
              <div className="grid grid-c grid-cols-2 gap-2 sm:gap-4">
                {ourVisionData.map((vision, index) => (
                  <div
                    key={index}
                    className="bg-dark space-y-2 border border-r-4 border-b-4 border-secondary-400 p-6"
                  >
                    <h3 className="text-white text-base md:text-lg font-semibold">
                      {vision.title}
                    </h3>
                    <p className="text-secondary-300 text-sm">
                      {vision.overview}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
