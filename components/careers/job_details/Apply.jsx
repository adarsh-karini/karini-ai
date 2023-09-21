import React from "react";

const Apply = ({ jobTitle }) => {
  return (
    <section
      id="apply"
      className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-10"
    >
      <div className="max-w-screen-lg mx-auto space-y-8">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Apply here
        </h1>
        <div className="max-w-screen-md mx-auto">
          <form className="bg-white p-10 border border-secondary-300 shadow-md space-y-6">
            <div className="text-secondary-800 text-sm font-medium space-y-4">
              <div className="flex flex-col space-y-1">
                <label>Applying for</label>
                <input
                  required
                  type="text"
                  name="applyingfor"
                  id=""
                  value={jobTitle}
                  disabled
                  className="border bg-secondary-100 italic font-normal p-2 focus:bg-white focus:outline-none focus:border-black cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label>First name</label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    id=""
                    className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label>Last name</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    id=""
                    className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label>Email address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id=""
                    className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label>Phone</label>
                  <input
                    required
                    type="tel"
                    name="lastName"
                    id=""
                    className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label>Current designation</label>
                  <input
                    required
                    type="text"
                    name="currDesignation"
                    id=""
                    className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label>Organization</label>
                  <input
                    required
                    type="text"
                    name="orgnization"
                    id=""
                    className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label>Tell us about yourself</label>
                <textarea
                  name=""
                  id=""
                  className="border bg-secondary-100 font-normal p-2 focus:bg-white focus:outline-none focus:border-black"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div>
              <button className="flex space-x-4 items-center bg-primary-600 px-8 py-2 text-white font-medium">
                <span className="text-sm">Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Apply;
