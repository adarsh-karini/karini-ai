import Link from "next/link";
import React from "react";

const Hero = ({ jobData }) => {
  return (
    <header className="bg-white">
      <div className="max-w-screen-lg mx-auto">
        <section>
          <div className="relative flex flex-col justify-start px-4 sm:px-10 lg:px-0 py-14 md:py-10">
            <div className="z-10 space-y-4">
              <h1 className="text-left text-xl font-extrabold text-black md:text-3xl lg:text-4xl">
                {jobData?.title}
              </h1>
              <p className="w-full lg:w-2/4 text-left text-secondary-600 text-sm sm:text-base">
                {jobData?.overview}
              </p>
              <div>
                <Link href={"#apply"}>
                  <button className="flex space-x-4 items-center bg-primary-600 px-4 py-2 text-white font-medium">
                    <span className="text-sm">Apply</span>
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
