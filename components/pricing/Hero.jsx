import React from "react";

const Hero = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-20">
            <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-0 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-10 bg-primary-100 blur-2xl"></div>
            <div className="z-10 space-y-3 px-4 max-w-screen-md">
              <h1 className="text-center text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
                One tool for your{" "}
                <span className="text-primary-600">whole team needs</span>
              </h1>
              <div className="flex flex-col justify-center">
                <p className="text-center text-secondary-600 text-sm sm:text-base">
                  Try Karini free for 30 days to start connected with your all
                  teams.
                </p>
                <p className="text-center text-secondary-600 text-sm sm:text-base">
                  Cancel any time. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
