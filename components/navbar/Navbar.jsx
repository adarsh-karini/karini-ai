import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { BsCloudFog2 } from "react-icons/bs";

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <div className="bg-dark fixed w-full z-50">
      <div className="mx-auto max-w-screen-2xl">
        <nav className="border-b border-secondary-700">
          <div className="px-4 md:px-8 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-semibold md:text-2xl"
              aria-label="logo"
            >
              <span className="text-white">karini.</span>
              <span className="text-primary-600">ai</span>
            </Link>

            <nav className="relative hidden lg:flex space-x-8 text-gray-300">
              <Link href="/platforms">Platforms</Link>
              <div
                href="/services/genai"
                className="flex items-end space-x-1 cursor-pointer"
                onMouseEnter={() => setServicesDropdown(true)}
              >
                <span>Services</span>
                <FaAngleDown size={20} />
                {servicesDropdown && (
                  <div
                    onMouseLeave={() => setServicesDropdown(false)}
                    className="z-20 border absolute top-10 bg-white drop-shadow-md grid grid-cols-1 gap-4 py-4 px-4"
                  >
                    <Link
                      href={"/services/genai"}
                      className="flex items-center space-x-2"
                    >
                      <BsCloudFog2
                        size={35}
                        className="text-primary-600 bg-primary-100 p-2"
                      />
                      <h3 className="cursor-pointer text-sm text-black font-semibold">
                        Generative AI
                      </h3>
                    </Link>
                    <Link
                      href={"/services/ml"}
                      className="flex items-center space-x-2"
                    >
                      <BsCloudFog2
                        size={35}
                        className="text-primary-600 bg-primary-100 p-2"
                      />
                      <h3 className="cursor-pointer text-sm text-black font-semibold">
                        Machine Learning
                      </h3>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/blogs">Blogs</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/aboutus">About us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contactus">Contact us</Link>
            </nav>

            <Link
              href="#"
              className="hidden lg:inline-block bg-primary-600 border border-primary-600 px-6 py-2 text-center text-sm font-semibold text-white hover:text-primary-600 transition duration-100 hover:bg-white hover:border-primary-600"
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
