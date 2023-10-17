import React from "react";

const CTA = () => {
  return (
    <section className="bg-white relative">
      <div className="bg-gradient-to-br from-primary-900 from-30% via-primary-700 to-primary-500 overflow-hidden z-10 relative">
        {/* <div className="-z-10 absolute -right-32 -top-16 bg-gradient-to-br from-primary-100 to-primary-500 rounded-full shadow-lg">
          <div className="p-20 m-8 bg-primary-600 rounded-full"></div>
        </div>
        <div className="-z-10 absolute -left-10 -bottom-10 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div> */}
        <div className=" mx-auto max-w-screen-lg p-4 rounded-lg">
          <div className=" flex flex-col items-center w-full h-full py-10 space-y-4">
            {/* <div className="p-20 absolute -left-20 -bottom-24 bg-primary-600 rounded-full opacity-50"></div>
            <div className="p-20 absolute -right-20 -top-1/2 bg-primary-600 rounded-full opacity-50"></div> */}

            <div className="space-y-1">
              <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                NEWSLETTER
              </h2>
              <p className="text-center text-white">
                Subscribe our newsletter to get our latest update & news.
              </p>
            </div>

            <form className="z-10 flex space-x-2 md:w-2/3">
              <input
                placeholder="Email"
                className="bg-gray-white w-full flex-1 border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none transition duration-100 rounded-md"
              />

              <button
                disabled
                className="inline-block border border-primary-900 bg-primary-900 px-8 py-2 text-center text-sm font-semibold text-white transition duration-100 hover:bg-primary-900 md:text-base rounded-md"
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
