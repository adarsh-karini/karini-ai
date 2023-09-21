import React from "react";

const JobDetails = ({ jobData }) => {
  return (
    <section className="bg-white px-4 sm:px-10 pb-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full lg:w-3/4 space-y-10">
          <div className="space-y-4">
            {jobData?.description.map((description, index) => (
              <p key={index} className="text-secondary-700 text-sm text-left">
                {description}
              </p>
            ))}
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-black font-semibold">
              The impact you will have:
            </h2>
            <div className="space-y-2">
              {jobData?.sectionOne.map((points, ind) => (
                <p key={ind} className="text-sm text-secondary-700">
                  {points}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-black font-semibold">
              What we are looking for:
            </h2>
            <div className="space-y-2">
              {jobData?.sectionTwo.map((points, ind) => (
                <p key={ind} className="text-sm text-secondary-700">
                  {points}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-black font-semibold">Benefits</h2>
            <div className="space-y-2">
              {jobData?.sectionThree.map((points, ind) => (
                <p key={ind} className="text-sm text-secondary-700">
                  {points}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg text-black font-semibold">
              About Karini.ai
            </h2>
            <p className="text-secondary-700 text-sm text-left">
              {jobData?.aboutUs}
            </p>
          </div>
          <div>
            <h2 className="text-lg text-black font-semibold">Our Commitment</h2>
            <p className="text-secondary-700 text-sm text-left">
              {jobData?.commitment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
