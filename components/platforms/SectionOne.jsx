import React from "react";

const SectionOne = () => {
  const platformsData = [
    {
      title: "Karini Bot",
      points: [
        {
          title: "Lorem ipsum dolor sit amet",
          overview:
            " We specialize in human-in-the-loop AI solutions, blending human intelligence with advanced AI research to drive growth and streamline workflows. Our dedicated team of experts creates innovative and powerful solutions for diverse industries. We are committed to pushing the boundaries of AI, uniting human expertise and cutting-edge technology for a smarter, more efficient future.",
        },
      ],
    },
    {
      title: "Human In The Loop",
      points: [
        {
          title: "Lorem ipsum dolor sit amet",
          overview:
            " We specialize in human-in-the-loop AI solutions, blending human intelligence with advanced AI research to drive growth and streamline workflows. Our dedicated team of experts creates innovative and powerful solutions for diverse industries. We are committed to pushing the boundaries of AI, uniting human expertise and cutting-edge technology for a smarter, more efficient future.",
        },
      ],
    },
    {
      title: "Dataset Management",
      points: [
        {
          title: "Lorem ipsum dolor sit amet",
          overview:
            " We specialize in human-in-the-loop AI solutions, blending human intelligence with advanced AI research to drive growth and streamline workflows. Our dedicated team of experts creates innovative and powerful solutions for diverse industries. We are committed to pushing the boundaries of AI, uniting human expertise and cutting-edge technology for a smarter, more efficient future.",
        },
      ],
    },
  ];
  return (
    <section className="relative bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-16">
        {platformsData.map((platform, index) => (
          <div key={index} className="space-y-4">
            <h1 className="text-black font-bold text-base sm:text-xl text-left">
              {platform.title}
            </h1>
            {platform.points.map((point, ind) => (
              <div key={ind} className="flex gap-8">
                <div className="hidden md:block flex-1 bg-primary-600 opacity-40"></div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-black text-base font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-secondary-700 text-sm text-justify leading-6">
                    {point.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionOne;
