import React from "react";

const Hero = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-20">
            <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div>
            <div className="z-10 space-y-6 px-4 max-w-screen-lg">
              <h1 className="text-center text-4xl font-extrabold text-black md:text-5xl lg:text-6xl">
                Our
                <span className="text-primary-600"> Platforms</span>
              </h1>
              <p className="text-center text-secondary-600 text-sm sm:text-base">
                By using karini ai to automate business operations, our
                cognitive Intelligent Automation solutions enable customers to
                overcome the most difficult obstacles. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Corporis autem culpa
                eligendi ab velit maxime doloremque enim totam provident unde
                expedita alias voluptatibus vitae possimus ipsam nobis,
                obcaecati dignissimos optio laborum tenetur. Sapiente velit
                explicabo dolore iure exercitationem ad nemo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
