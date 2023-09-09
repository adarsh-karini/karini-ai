import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-dark">
      <div className="mx-auto max-w-screen-2xl">
        <nav className="border-b border-gray-600">
          <div className="px-4 md:px-8 py-4 md:py-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-semibold md:text-2xl"
              aria-label="logo"
            >
              <span className="text-white">karini.</span>
              <span className="text-purple-700">ai</span>
            </Link>

            <nav className="hidden lg:flex space-x-8 text-gray-300">
              <Link href="/platforms">Platforms</Link>
              <Link href="/services">Services</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/aboutus">About us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contactus">Contact us</Link>
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
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
