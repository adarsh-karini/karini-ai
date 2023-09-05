import React from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Quisquam voluptas dolorum sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Adipisci consectetur tempora quidem?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Voluptatem illo natus quibusdam facilis?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Quis autem vel eum iure reprehenderit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
  ];
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-lg px-4 py-12 sm:px-6 md:py-16 lg:px-8 space-y-8">
        <div className="space-y-1 px-4">
          <h1 className="text-center text-xl capitalize font-semibold text-primary-900 sm:text-2xl md:text-2xl">
            Frequently asked questions
          </h1>
          <p className="text-center text-gray-700 text-sm sm:text-base">
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
              <summary className="flex outline-none cursor-pointer items-center justify-between gap-1.5 border rounded-lg bg-gray-50 py-4 px-4 md:px-6 text-gray-800">
                <h2 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h2>

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

              <p className="py-4 px-2 leading-relaxed text-gray-500 text-xs md:text-sm">
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
