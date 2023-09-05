import React from "react";

const Hero = () => {
  return (
    <header className="overflow-hidden bg-gradient-to-b from-dark from-0% via-medium via-50% to-light to-100%">
      <div className="mx-auto max-w-screen-lg pb-24">
        <section className=" relative">
          <div className="flex items-center justify-center pt-20 pb-28 space-y-12">
            <div className="flex-1 space-y-2">
              <h1 className="text-xl font-bold text-gray-100 sm:text-2xl md:text-6xl">
                Let&apos;s talk
              </h1>
              <div className="inline-block space-y-2">
                <div className="text-primary-600 text-sm bg-white px-4 py-4 rounded-sm space-x-10">
                  <span className="font-semibold">Call with us</span>
                  <span className="text-gray-600">+987 678 345</span>
                </div>
                <div className="text-primary-600 text-sm bg-white px-4 py-4 rounded-sm space-x-10">
                  <span className="font-semibold">Email us</span>
                  <span className="text-gray-600">support@karini.ai</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-md text-black p-8 space-y-4">
                <div className="space-y-2">
                  <h1 className="text-primary-600 text-lg sm:text-2xl font-semibold">
                    Get in touch
                  </h1>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt exercitationem fuga at expedita eligendi veritatis.
                    Nulla cum alias laborum quis?
                  </p>
                </div>
                <div>
                  <form className="space-y-4 text-gray-900">
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border p-2 rounded outline-primary-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="border p-2 rounded outline-primary-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Company</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border p-2 rounded outline-primary-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Phone</label>
                      <input
                        type="number"
                        name=""
                        id=""
                        className="border p-2 rounded outline-primary-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="">Message</label>
                      <textarea
                        name=""
                        id=""
                        className="border p-2 rounded outline-primary-600"
                        rows="5"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[100vw] h-[20rem] -skew-y-6 bg-white text-black"></div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
