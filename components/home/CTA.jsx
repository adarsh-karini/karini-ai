import React from "react";

const CTA = () => {
  return (
    <section className="py-14 bg-primary-50">
      <div className=" mx-auto space-y-16">
        <div class="flex flex-col items-center rounded-lg  p-4 sm:p-8">
          <div class="mb-4 sm:mb-8">
            <h2 class="text-center text-xl font-bold text-primary-600 sm:text-2xl lg:text-3xl">
              Get the latest updates
            </h2>
            <p class="text-center text-gray-500">Sign up for our newsletter</p>
          </div>

          <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
            <input
              placeholder="Email"
              class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />

            <button
              disabled
              class="inline-block rounded bg-primary-600 px-8 py-2 text-center text-sm font-semibold text-white transition duration-100 hover:bg-primary-900 md:text-base"
            >
              Send
            </button>
          </form>

          <p class="text-center text-xs text-gray-400">
            By signing up to our newsletter you agree to our{" "}
            <a
              href="#"
              class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Term of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
