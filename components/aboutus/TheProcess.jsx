import React from "react";

const TheProcess = () => {
  const theProcessData = [
    {
      title: "Planning",
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      title: "Conception",
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      title: "Design",
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
    {
      title: "Development",
      overview: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    },
  ];

  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10 md:space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          The process we follow
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {theProcessData.map((data, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-primary-600 rounded-full text-xs font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 flex space-x-2 justify-between overflow-hidden">
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                  <div className="p-[2px] bg-primary-300 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-black text-base md:text-lg font-semibold">
                  {data.title}
                </h3>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  {data.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default TheProcess;
