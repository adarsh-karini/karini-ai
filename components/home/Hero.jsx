import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header className="overflow-hidden bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100%">
      <div className="mx-auto max-w-screen-2xl">
        <header className="border-b border-gray-600">
          <div className="px-4 md:px-8 py-4 md:py-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-semibold md:text-2xl"
              aria-label="logo"
            >
              <span className="text-white">karini.</span>
              <span className="text-purple-700">ai</span>
            </Link>

            <nav className="hidden lg:flex space-x-8 text-gray-200">
              <Link href="#">Platforms</Link>
              <Link href="#">Solutions</Link>
              <Link href="#">Blogs</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">About us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact us</Link>
            </nav>

            <Link
              href="#"
              className="hidden lg:inline-block rounded bg-purple-700 border border-purple-700 px-6 py-2 text-center text-sm font-semibold text-white hover:text-purple-700 transition duration-100 hover:bg-white hover:border-purple-700"
            >
              Try It Free
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Menu
            </button>
          </div>
        </header>

        <section className=" relative">
          <div className="absoulte let-0 top-0 flex flex-col items-center justify-center pt-14 pb-20 sm:pt-24 space-y-12">
            <div className="space-y-4 px-4">
              <h1 className="text-center text-2xl font-bold text-white sm:text-2xl md:text-5xl">
                Advanced Analytics to grow{" "}
                <span className="text-primary-600">your business</span>
              </h1>
              <p className="text-center text-gray-100 text-sm sm:text-base">
                Boost labeling speed 10x with TensorBot for computer vision and
                generative AI
              </p>

              <div className="w-full space-x-2 flex justify-center">
                <Link
                  href="#"
                  className=" rounded-full bg-primary-600 px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-white transition duration-100 md:text-base"
                >
                  Try it free
                </Link>

                <Link
                  href="#"
                  className="rounded-full px-4 sm:px-8 py-2 sm:py-3 text-xs font-medium text-white border border-white transition duration-100 hover:text-primary-600 hover:bg-white md:text-base"
                >
                  View pricing
                </Link>
              </div>
            </div>
            <div className="z-10 px-4 md:px-20 xl:px-0">
              <img
                src="/assets/images/hero_img.png"
                alt="hero image"
                className="shadow-2xl rounded-2xl"
              />
            </div>
          </div>
          <div className="absolute left-0 -bottom-[38rem] lg:-bottom-[43rem] w-[130rem] h-full flex items-end">
            <div className="w-full h-[56rem] -rotate-[14deg] lg:-rotate-[5deg] bg-white"></div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
