import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className="relative bg-white px-4 lg:px-0 py-10">
      <div className="max-w-screen-lg mx-auto space-y-16">
        <div className="flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-black font-medium text-2xl">Our Offices</h1>
              <div className="space-y-4">
                <div className=" bg-secondary-100 rounded-md">
                  <img src="/assets/images/worldmap.svg" alt="" />
                </div>
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div className=" flex flex-col space-y-2 bg-secondary-100 rounded-md p-4">
                    <h1 className="text-secondary-800 font-semibold">
                      Alpharetta, USA
                    </h1>
                    <a
                      href="https://goo.gl/maps/ijU4uLmdDACUPZxc8"
                      target="_blank"
                      className="flex space-x-2"
                    >
                      <FaLocationDot size={20} className="text-primary-900" />
                      <address className="text-secondary-600 hover:text-primary-600 text-sm">
                        2300 Lakeview Parkway, Suite 700, Alpharetta, Georgia,
                        30009
                      </address>
                    </a>
                    <a
                      href="mailto:support@karini.ai"
                      className="text-secondary-600 flex space-x-2 items-center text-sm"
                    >
                      <MdAlternateEmail
                        size={20}
                        className="text-primary-900"
                      />
                      <span className="text-sm">support@karini.ai</span>
                    </a>
                    <a
                      href="tel:+987 657 342"
                      className="text-secondary-600 flex space-x-2 items-center"
                    >
                      <FaPhone size={15} className="text-primary-900" />
                      <span className="text-sm">+487 237 112</span>
                    </a>
                  </div>
                  <div className="flex flex-col space-y-2 bg-secondary-100 rounded-md p-4">
                    <h1 className="text-secondary-800 font-semibold">
                      Pune, India
                    </h1>
                    <a
                      href="https://goo.gl/maps/YSF6fWUXGhG7Acmg6"
                      target="_blank"
                      className="flex space-x-2"
                    >
                      <FaLocationDot size={20} className="text-primary-900" />
                      <address className="text-secondary-600 hover:text-primary-600 text-sm">
                        No. 204, Second Floor, B Wing, Building - GO Square,
                        Near Mankar Chowk, Wakad, Pune
                      </address>
                    </a>
                    <a
                      href="mailto:support@karini.ai"
                      className="text-secondary-600 flex space-x-2 items-center text-sm"
                    >
                      <MdAlternateEmail
                        size={20}
                        className="text-primary-900"
                      />
                      <span className="text-sm">support@karini.ai</span>
                    </a>
                    <a
                      href="tel:+987 657 342"
                      className="text-secondary-600 flex space-x-2 items-center"
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
              <h1 className="text-black font-medium text-2xl">Get in touch</h1>
            </div>
            <form class="grid gap-4 sm:grid-cols-2 rounded-md shadow-xl p-8 border">
              <div>
                <label for="first-name" class="text-sm text-secondary-700">
                  First name*
                </label>
                <input
                  name="first-name"
                  class="w-full rounded border bg-secondary-50 px-3 py-2 text-secondary-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div>
                <label for="last-name" class="text-sm text-secondary-700">
                  Last name*
                </label>
                <input
                  name="last-name"
                  class="w-full rounded border bg-secondary-50 px-3 py-2 text-secondary-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="company" class=" text-sm text-secondary-700">
                  Company
                </label>
                <input
                  name="company"
                  class="w-full rounded border bg-secondary-50 px-3 py-2 text-secondary-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="text-sm text-secondary-700">
                  Email*
                </label>
                <input
                  name="email"
                  class="w-full rounded border bg-secondary-50 px-3 py-2 text-secondary-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="subject" class="text-sm text-secondary-700">
                  Subject*
                </label>
                <input
                  name="subject"
                  class="w-full rounded border bg-secondary-50 px-3 py-2 text-secondary-800 outline-primary-600 transition duration-100"
                />
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="text-sm text-secondary-700">
                  Message*
                </label>
                <textarea
                  name="message"
                  class="w-full rounded border bg-secondary-50 px-3 py-2 text-secondary-800 outline-primary-600 transition duration-100"
                ></textarea>
              </div>

              <div class=" sm:col-span-2">
                <button class="border border-primary-600 bg-primary-600 px-8 py-4 text-center text-xs font-semibold text-white hover:text-primary-600 hover:bg-white hover:border-primary-600 outline-primary-600 transition duration-100">
                  Send
                </button>
              </div>

              <p class="text-xs text-secondary-400">
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
