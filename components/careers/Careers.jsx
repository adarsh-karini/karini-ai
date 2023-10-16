import React, { useEffect, useState } from "react";
import { BsHexagonFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { careersData } from "@/content/careers/careersData";
import Link from "next/link";

const Careers = () => {
  return (
    <section className="bg-white px-4 xl:px-0 py-10">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Current Openings
          </h1>
          <p className="text-secondary-700 text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            placeat facere quasi eveniet dolore fugiat perspiciatis quia quaerat
            perferendis ducimus.
          </p>
        </div>
        <div>
          <div className="space-y-2">
            {careersData.map((job, index) => (
              <div
                key={index}
                className="p-4 bg-white border border-secondary-300 shadow-md rounded-lg"
              >
                <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-2 lg:space-y-0">
                  <h3 className="flex-1 text-black text-base font-medium">
                    {job.title}
                  </h3>
                  <div className="flex-1 flex justify-start space-x-4">
                    <p className="text-secondary-900 text-sm font-medium">
                      {job.location}
                    </p>
                    <p className="text-secondary-900 text-sm font-medium">
                      {job.exp}
                    </p>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <Link href={job.path}>
                      <button className="flex space-x-4 items-center bg-primary-600 px-4 py-2 text-white font-medium rounded-md">
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
            ))}
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {careersData.map((job, index) => (
              <div
                key={index}
                className="bg-white flex flex-col justify-between p-6 border border-secondary-300 shadow-xl space-y-4 hover:scale-105 transition"
              >
                <div className="pb-2 border-b-2 border-primary-600">
                  <h2 className="text-black text-lg font-semibold">
                    {job.title}
                  </h2>
                  <p className="text-secondary-600 text-sm italic">{job.exp}</p>
                </div>
                <h3 className="text-primary-600 text-sm font-semibold">
                  {job.timings}
                </h3>
                <div className="space-y-2">
                  {job.requirements.map((req, ind) => (
                    <div
                      key={ind}
                      className="flex space-x-2 text-secondary-700"
                    >
                      <span>-</span>
                      <p className="flex-1 text-secondary-700 text-sm">{req}</p>
                    </div>
                  ))}
                </div>
                <Link href={job.path}>
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
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Careers;
