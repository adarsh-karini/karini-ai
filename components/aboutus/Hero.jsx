import React from "react";

const Hero = () => {
  const imagePaths = [
    "/assets/images/aboutus/about_img1.jpg",
    "/assets/images/aboutus/about_img2.jpg",
    "/assets/images/aboutus/about_img3.jpg",
  ];
  return (
    <header className="relative z-10 bg-about_img bg-cover">
      <div className="h-full w-full opacity-60 absolute bg-black"></div>

      <div className="mx-auto max-w-screen-2xl">
        <section>
          <div className="relative flex flex-col items-center justify-center py-14 md:py-40">
            {/* <div className="absolute p-20 md:p-32 rounded-full left-0 md:left-1/4 top-10 md:top-20 bg-primary-100 blur-2xl"></div>
            <div className="absolute p-20 md:p-32 rounded-full right-0 bottom-0 bg-primary-100 blur-2xl"></div> */}

            <div className="z-10 max-w-screen-lg space-y-10 px-4">
              <div className="space-y-3">
                <h1 className="text-center text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                  Making Generative AI accessible to all enterprises
                </h1>
                <p className="text-center text-gray-200 text-sm sm:text-base">
                  Karini is on a mission to democratize the power of Generative
                  AI. We believe that every enterprise, regardless of size or
                  industry, should have access to cutting-edge AI technology.
                  Our team of experts combines a deep understanding of AI with a
                  passion for simplifying complex solutions, making it easier
                  than ever for businesses to harness the potential of
                  Generative AI in their operations. With a focus on innovation,
                  reliability, and user-friendliness, we&apos;re dedicated to
                  empowering your organization with the tools you need to thrive
                  in the AI-driven future.
                </p>
              </div>
              {/* <div className="flex space-x-4">
                {imagePaths.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt="about images"
                      className=" h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
