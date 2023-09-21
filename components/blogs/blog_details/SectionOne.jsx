import React from "react";

const SectionOne = ({ blogData }) => {
  console.log("iii", blogData);
  return (
    <section className="bg-white px-4 sm:px-10 py-10">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <div>
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold text-center">
            {blogData?.title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
