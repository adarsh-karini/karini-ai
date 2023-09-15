import React from "react";

const KeyPoints = ({ keyPoints }) => {
  return (
    <section className="bg-white px-4 lg:px-0 py-10">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {keyPoints?.map((keyPoint, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-10 bg-white p-6 shadow-sm border border-secondary-200"
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-secondary-800 font-semibold sm:text-lg">
                  {keyPoint.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {keyPoint.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
