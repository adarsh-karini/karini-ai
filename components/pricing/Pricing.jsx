import React, { useState } from "react";
import { pricingData } from "@/content/pricing/pricingData";
import Link from "next/link";
import { IoCheckmarkCircle } from "react-icons/io5";

const Pricing = () => {
  const [switchValue, setSwitchValue] = useState(true);
  return (
    <section className="px-4 lg:px-0 py-10">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="flex p-1 border border-gray-300 bg-white shadow-sm">
              <button
                onClick={() => setSwitchValue(true)}
                className={`${
                  switchValue
                    ? "bg-primary-600 text-white"
                    : "bg-white text-primary-600"
                } py-3 px-5 text-xs font-semibold`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSwitchValue(false)}
                className={`${
                  !switchValue
                    ? "bg-primary-600 text-white"
                    : "bg-white text-primary-600"
                } py-3 px-5 text-xs font-semibold`}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4">
            {switchValue &&
              pricingData.monthly.map((plan, index) => (
                <div
                  key={index}
                  className="border border-secondary-300 shadow-xl hover:scale-105 transition"
                >
                  <div className="p-6 border-b space-y-6">
                    <div className="text-center">
                      <h2 className="text-primary-600 text-2xl font-bold">
                        {plan.name}
                      </h2>
                      <p className="text-secondary-600 text-xs">
                        For individual users
                      </p>
                    </div>
                    <div className="flex justify-center items-center space-x-1">
                      <h3 className="text-black font-semibold text-4xl">
                        {plan.price}
                      </h3>
                      {plan.price === "Contact Us" ? (
                        ""
                      ) : (
                        <p className="text-secondary-500 text-sm">/month</p>
                      )}
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-black font-semibold text-sm">
                        This plan includes:
                      </h3>
                      <div className="space-y-3">
                        {plan.benefits.map((benefit, ind) => (
                          <div key={ind} className="flex space-x-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="text-primary-600"
                            />
                            <p className="text-secondary-600 text-sm">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-red-500 flex">
                      <a
                        href={plan.url}
                        target="_blank"
                        className="w-full shadow-md transition bg-primary-600 border hover:bg-white border-primary-600 text-white hover:text-primary-600 text-xs text-center font-semibold px-6 py-4"
                      >
                        Select plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            {!switchValue &&
              pricingData.yearly.map((plan, index) => (
                <div
                  key={index}
                  className="border border-secondary-300 shadow-xl hover:scale-105 transition"
                >
                  <div className="p-6 border-b space-y-6">
                    <div className="text-center">
                      <h2 className="text-primary-600 text-2xl font-bold">
                        {plan.name}
                      </h2>
                      <p className="text-secondary-600 text-xs">
                        For individual users
                      </p>
                    </div>
                    <div className="flex justify-center items-center space-x-1">
                      <h3 className="text-black font-semibold text-4xl">
                        {plan.price}
                      </h3>
                      {plan.price === "Contact Us" ? (
                        ""
                      ) : (
                        <p className="text-secondary-500 text-sm">/month</p>
                      )}
                    </div>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-black font-semibold text-sm">
                        This plan includes:
                      </h3>
                      <div className="space-y-3">
                        {plan.benefits.map((benefit, ind) => (
                          <div key={ind} className="flex space-x-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="text-primary-600"
                            />
                            <p className="text-secondary-600 text-sm">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-red-500 flex">
                      <a
                        href={plan.url}
                        target="_blank"
                        className="w-full shadow-md transition bg-primary-600 border hover:bg-white border-primary-600 text-white hover:text-primary-600 text-xs text-center font-semibold px-6 py-4"
                      >
                        Select plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-900 from-0% to-primary-600 to-90% p-8">
          <div className="flex justify-center items-center space-x-10">
            <h2 className="text-white text-xl md:text-2xl font-semibold">
              Looking for a custom plan?
            </h2>
            <button className="px-4 py-2 bg-white hover:bg-primary-900 text-primary-600 hover:text-white transition font-semibold text-sm">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
