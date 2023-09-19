import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/sea-green";

import { mlChallenges } from "@/content/services/ml/mlData";

const Challenges = () => {
  return (
    <section className="bg-white px-4 lg:px-0 py-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Challenges
          </h1>
          <p className="text-secondary-700 text-center">
            Adopting MLOps in an enterprise setting can be a transformative
            journey, but it also comes with its fair share of challenges
          </p>
        </div>
        <div>
          <Splide
            aria-label="Challenges"
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              loop: true,
              autoplay: true,
              interval: 2000,
              arrows: true,
              speed: 500,
              rewind: true,
              gap: 10,
              pagination: false,
              pauseOnHover: false,
              pauseOnFocus: false,
              breakpoints: {
                640: {
                  perPage: 1,
                },
                768: {
                  perPage: 2,
                },
                1024: {
                  perPage: 3,
                },
              },
            }}
          >
            {mlChallenges?.map((challenge, index) => (
              <SplideSlide key={index}>
                <div
                  key={index}
                  className="h-full flex flex-col justify-between space-y-10 bg-secondary-50 p-6 shadow-sm border border-secondary-200 border-t-4 border-t-primary-600"
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
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mlChallenges.map((challenge, index) => (
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
        </div> */}
      </div>
    </section>
  );
};

export default Challenges;
