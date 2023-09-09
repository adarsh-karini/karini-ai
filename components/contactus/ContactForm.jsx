import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 space-y-14">
        <div className="space-y-2 flex flex-col text-center">
          <h1 className="text-primary-900 text-3xl sm:text-4xl font-semibold">
            Let&apos;s talk
          </h1>
          <p className="text-gray-600">
            Have questions about pricing, plans, or karini.ai? Fill out the form
            and our product analytics expert will be in touch directly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-800">
                Our Offices
              </h1>
              <div className="space-y-4">
                <div className=" bg-gray-100 rounded-md">
                  <img src="/assets/images/worldmap.svg" alt="" />
                </div>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div className=" flex flex-col space-y-2 bg-gray-100 rounded-md p-4">
                    <h1 className="text-gray-800 font-semibold">
                      Alpharetta, USA
                    </h1>
                    <a
                      href="https://goo.gl/maps/ijU4uLmdDACUPZxc8"
                      target="_blank"
                      className="flex space-x-2"
                    >
                      <FaLocationDot size={20} className="text-primary-900" />
                      <address className="text-gray-600 hover:text-primary-600 text-sm">
                        2300 Lakeview Parkway, Suite 700, Alpharetta, Georgia,
                        30009
                      </address>
                    </a>
                    <a
                      href="mailto:support@karini.ai"
                      className="text-gray-600 flex space-x-2 items-center text-sm"
                    >
                      <MdAlternateEmail
                        size={20}
                        className="text-primary-900"
                      />
                      <span className="text-sm">support@karini.ai</span>
                    </a>
                    <a
                      href="tel:+987 657 342"
                      className="text-gray-600 flex space-x-2 items-center"
                    >
                      <FaPhone size={15} className="text-primary-900" />
                      <span className="text-sm">+487 237 112</span>
                    </a>
                  </div>
                  <div className="flex flex-col space-y-2 bg-gray-100 rounded-md p-4">
                    <h1 className="text-gray-800 font-semibold">Pune, India</h1>
                    <a
                      href="https://goo.gl/maps/YSF6fWUXGhG7Acmg6"
                      target="_blank"
                      className="flex space-x-2"
                    >
                      <FaLocationDot size={20} className="text-primary-900" />
                      <address className="text-gray-600 hover:text-primary-600 text-sm">
                        No. 204, Second Floor, B Wing, Building - GO Square,
                        Near Mankar Chowk, Wakad, Pune
                      </address>
                    </a>
                    <a
                      href="mailto:support@karini.ai"
                      className="text-gray-600 flex space-x-2 items-center text-sm"
                    >
                      <MdAlternateEmail
                        size={20}
                        className="text-primary-900"
                      />
                      <span className="text-sm">support@karini.ai</span>
                    </a>
                    <a
                      href="tel:+987 657 342"
                      className="text-gray-600 flex space-x-2 items-center"
                    >
                      <FaPhone size={15} className="text-primary-900" />
                      <span className="text-sm">+91 65740 55342</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col space-y-2">
            <div>
              <h1 className="text-gray-800 text-2xl font-semibold">
                Get in touch
              </h1>
            </div>
            <form class="grid gap-4 sm:grid-cols-2 rounded-md shadow-xl p-10 border">
              <div>
                <label
                  for="first-name"
                  class="text-sm text-gray-700 sm:text-base"
                >
                  First name*
                </label>
                <input
                  name="first-name"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div>
                <label
                  for="last-name"
                  class="text-sm text-gray-700 sm:text-base"
                >
                  Last name*
                </label>
                <input
                  name="last-name"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="company"
                  class=" text-sm text-gray-700 sm:text-base"
                >
                  Company
                </label>
                <input
                  name="company"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="text-sm text-gray-700 sm:text-base">
                  Email*
                </label>
                <input
                  name="email"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="subject" class="text-sm text-gray-700 sm:text-base">
                  Subject*
                </label>
                <input
                  name="subject"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="text-sm text-gray-700 sm:text-base">
                  Message*
                </label>
                <textarea
                  name="message"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-primary-600 transition duration-100"
                ></textarea>
              </div>

              <div class=" sm:col-span-2">
                <button class="rounded-md border border-primary-600 bg-primary-600 px-8 py-3 text-center text-sm font-semibold text-white hover:text-primary-600 hover:bg-white hover:border-primary-600 outline-primary-600 transition duration-100 md:text-base">
                  Send
                </button>
              </div>

              <p class="text-xs text-gray-400">
                By signing up to our newsletter you agree to our{" "}
                <a
                  href="#"
                  class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
