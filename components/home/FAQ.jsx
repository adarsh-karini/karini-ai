import React from "react";

import { faqData } from "@/content/home/faqData";

const FAQ = () => {
  return (
    <section className="bg-white px-4 lg:px-0 py-20">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-secondary-700 text-center">
            We have put together some commonly asked questions
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group [&_summary::-webkit-details-marker]:hidden"
              close
            >
              <summary className="flex outline-none cursor-pointer items-center justify-between gap-1.5 border bg-secondary-50 py-4 px-4 md:px-6 text-secondary-800">
                <h3 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h3>

                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="py-4 px-2 leading-relaxed text-secondary-500 text-xs md:text-sm">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
