import IconSeven from "@/svgs/aboutus/IconSeven";
import React from "react";
import { GiDiamondTrophy } from "react-icons/gi";

const OurLeadership = () => {
  const iconColor = "#7c3aed";

  return (
    <section className="bg-gradient-to-b from-primary-50 from-0% to-white to-100% px-4 md:px-0 py-20 overflow-hidden">
      <div className="max-w-screen-md mx-auto space-y-10 md:space-y-16">
        <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
          Our Leadership
        </h1>
        <div className="relative z-10 flex flex-col-reverse sm:flex-row sm:space-x-8 space-y-reverse space-y-6 sm:space-y-0">
          <div className="-z-10 absolute -right-32 -bottom-20 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
            <div className="p-20 m-8 bg-white rounded-full"></div>
          </div>
          <div className="sm:w-2/3 flex flex-col justify-between space-y-4 sm:space-y-0">
            <p className="text-secondary-700 text-sm text-justify leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis ea corporis similique veniam. Eaque vero dolorem pariatur
              odit cumque, nostrum fugiat alias sit corrupti quis, sequi
              temporibus. Doloribus et deleniti quaerat autem tenetur. Aperiam
              recusandae laboriosam est a consequuntur. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Libero nobis ea corporis
              similique veniam. Eaque vero dolorem pariatur odit cumque, nostrum
              fugiat alias sit corrupti quis, sequi temporibus. Doloribus et
              deleniti quaerat autem tenetur. Aperiam recusandae laboriosam est
              a consequuntur.
            </p>
            <div className="flex space-x-4 items-center">
              <IconSeven width={40} height={40} color={iconColor} />
              <div>
                <h3 className="text-black text-base md:text-lg font-semibold">
                  San Diago
                </h3>
                <p className="text-secondary-600 text-sm font-semibold">
                  Co-founder, karini.ai
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/3 flex justify-center">
            <img
              src="/assets/images/team_members/co_founder.jpg"
              alt="co_founder"
              className="h-52 sm:h-auto w-auto object-cover object-center rounded-md shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
