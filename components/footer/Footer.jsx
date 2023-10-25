import Logo from "@/svgs/logo/Logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="overflow-hidden bg-white px-4">
      <footer className="relative z-10 max-w-screen-2xl mx-auto">
        <div className="-z-10 absolute -right-52 top-10 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg opacity-10">
          <div className="p-20 m-8 bg-white rounded-full"></div>
        </div>
        <div className="-z-10 absolute -left-32 -bottom-14 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg opacity-10"></div>
        {/* <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4 md:px-0 py-6 border-b border-secondary-400">
          <h1 className="text-black font-semibold text-xl">
            Welcome to a Smarter Way to Label Data.
          </h1>
          <Link
            href={"/joinwaitlist"}
            className=" bg-primary-600 border border-primary-600 px-6 py-2 text-center text-sm font-semibold text-white hover:text-primary-600 transition duration-100 hover:bg-white rounded"
          >
            Join waitlist
          </Link>
        </div> */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 py-10">
          <div className="md:w-2/5 space-y-2">
            <div>
              <Logo width={100} height={30} />
            </div>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed">
              Make Intelligent decisions with Generative AI.
            </p>
          </div>
          <div className="md:w-3/5">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Link href={"/platforms"}>
                  <h1 className="inline text-primary-600 font-semibold text-lg">
                    Platform
                  </h1>
                </Link>
              </div>
              <div className="space-y-2">
                <h1 className="text-primary-600 font-semibold text-lg">
                  Services
                </h1>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href={"/services/genai"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    Generative AI
                  </Link>
                  <Link
                    href={"/services/ml"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    Machine Learning
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-primary-600 font-semibold text-lg">
                  Company
                </h1>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href={"/aboutus"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    About us
                  </Link>
                  <Link
                    href={"/contactus"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    Contact us
                  </Link>
                  <Link
                    href={"/careers"}
                    className="text-secondary-700 hover:text-primary-600 hover:underline text-sm font-medium"
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 border-t border-secondary-400">
          <h1 className="text-secondary-700 font-semibold text-sm">
            © 2023 karini.ai. All Rights Reserved.
          </h1>
          <div className="space-x-6">
            <Link
              href={"/privacypolicy"}
              className="text-secondary-500 text-sm hover:text-black hover:font-semibold font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/termsofuse"}
              className="text-secondary-500 text-sm hover:text-black hover:font-semibold font-medium"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
