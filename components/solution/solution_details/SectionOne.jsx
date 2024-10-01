import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const SectionOne = () => {
  return (
    <section className="bg-white px-4 sm:px-10 py-20">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <div>
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0">
            <div className="hidden sm:block bg-primary-400 px-40 py-40 md:py-0"></div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-black text-base md:text-lg font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
                magnam.
              </h3>
              <p className="text-secondary-700 text-sm text-justify leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                recusandae fuga tenetur nostrum accusamus. Culpa magnam, debitis
                perferendis est sit facere! Quam illo ratione quis!
              </p>
              <hr className="h-1 bg-primary-600" />
              <div className="flex flex-col space-y-2">
                {/* {tab.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 text-primary-600"
                          >
                            <IoCheckmarkCircle size={20} />
                            <p className="text-secondary-700 text-sm">
                              {point}
                            </p>
                          </div>
                        ))} */}
                <div className="flex items-center space-x-2 text-primary-600">
                  <IoCheckmarkCircle size={20} />
                  <p className="text-secondary-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-primary-600">
                  <IoCheckmarkCircle size={20} />
                  <p className="text-secondary-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-primary-600">
                  <IoCheckmarkCircle size={20} />
                  <p className="text-secondary-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-primary-600">
                  <IoCheckmarkCircle size={20} />
                  <p className="text-secondary-700 text-sm">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
