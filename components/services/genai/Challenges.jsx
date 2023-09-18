import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Challenges = () => {
  const genaiChallenges = [
    {
      title: "Identification of Use cases",
      overview:
        "How to get started is a big challenge for enterprises as there a Generative AI offers numerous capabilities, but understanding Return on Investment and exploring needle-moving use cases is a big challenge.",
    },
    {
      title: "Use case Prioritization",
      overview:
        "Prioritizing uses cases that improve life of your employees and customers is important and appears easy for POC but may not be feasible in the production.",
    },
    {
      title: "POC to production",
      overview:
        "How to transition a Proof of concept to a production-grade application that adheres to enterprise standard of security, scalability and cost controls.",
    },
    {
      title: "Navigating the maze of SaaS services",
      overview:
        "PThere are many SaaS APIs and Open-source options available for building blocks of Generative AI, and it is essential to use the right tool for your use case.",
    },
    {
      title: "UIP protection and Security",
      overview:
        "Recent data leak of a large enterprise,  highlights the importance of balancing enthusiasm of Generative AI with your IP protection and ensuring Security standards are adhered to.",
    },
    {
      title: "Legal Implications",
      overview:
        " Generative AI applications use crowd-sourced internet-scale text and image datasets. How to ensure that using APIs or certain models does not get into legal situations. The design needs to ensure that whatever APIs and models are used should meet the regulations.",
    },
    {
      title: "Responsible AI",
      overview:
        "Generative AI has a problem of hallucination and bias that can harm brand trust or lose business.",
    },
    {
      title: "Skills",
      overview:
        "Many Enterprises start their Generative AI journey without having adequate domain and technical skills, impacting the on-time delivery and budgets of Generative AI Projects.",
    },
  ];

  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Challenges
          </h1>
        </div>
        {/* <div className="">
          <Splide
            aria-label="Challenges"
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              loop: true,
              autoplay: true,
              interval: 3000,
              arrows: true,
              speed: 500,
              rewind: true,
              gap: 5,
            }}
          >
            {genaiChallenges.map((challenge, index) => (
              <SplideSlide key={index}>
                <div
                  key={index}
                  className="h-full flex flex-col justify-between space-y-10 bg-white p-6 shadow-sm border border-secondary-200"
                >
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-secondary-800 font-semibold sm:text-lg">
                      {challenge.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {challenge.overview}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {genaiChallenges.map((challenge, index) => (
            <div
              key={index}
              className="h-full flex flex-col justify-between space-y-10 bg-white p-6 drop-shadow-md border border-secondary-300"
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-black font-medium sm:text-base">
                  {challenge.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {challenge.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
