import React from "react";

const CTA = () => {
  return (
    <section className="bg-white relative py-28">
      <div className="w-full absolute -bottom-1/2">
        <div className="bg-dark mx-auto max-w-screen-lg p-4">
          <div className="overflow-hidden relative flex flex-col items-center border border-secondary-400 w-full h-full py-10 space-y-4">
            <div className="p-20 absolute -left-20 -bottom-24 bg-primary-600 rounded-full opacity-50"></div>
            <div className="p-20 absolute -right-20 -top-1/2 bg-primary-600 rounded-full opacity-50"></div>

            <div className="space-y-1">
              <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                NEWSLETTER
              </h2>
              <p className="text-center text-secondary-300">
                Subscribe our newsletter to get our latest update & news.
              </p>
            </div>

            <form className="z-10 flex space-x-2 md:w-2/3">
              <input
                placeholder="Email"
                className="bg-gray-white w-full flex-1 border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none transition duration-100"
              />

              <button
                disabled
                className="inline-block bg-primary-600 px-8 py-2 text-center text-sm font-semibold text-white transition duration-100 hover:bg-primary-900 md:text-base"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
