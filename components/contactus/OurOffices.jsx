import React from "react";

const OurOffices = () => {
  return (
    <section className="bg-white px-4 lg:px-10 xl:px-0 py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto space-y-16">
        <div className="space-y-10">
          <div className="">
            <h1 className="text-black text-center lg:text-left font-semibold text-lg md:text-2xl xl:text-4xl">
              <span className="text-primary-600">Our</span> Offices
            </h1>
          </div>
          <div className="z-10 relative space-y-10">
            {/* <div className="-z-10 absolute top-0 -left-32 p-52 rounded-full bg-primary-600 blur-3xl opacity-10"></div> */}
            <div className="-z-10 absolute -right-32 bottom-20 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
              <div className="p-20 m-8 bg-white rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-4">
              <div className="col-span-1 lg:cols-span-1 bg-gradient-to-r from-primary-50 to-white space-y-4 border border-primary-100 rounded-md p-4">
                <h1 className="text-black font-bold text-lg border-b-2 border-primary-600">
                  USA
                </h1>
                <div className="space-y-4">
                  <address className="text-secondary-700 font-medium text-sm">
                    2300 Lakeview Parkway, Suite 700, Alpharetta, Georgia, 30009
                  </address>
                </div>
                <div className="space-y-2">
                  <p className="text-secondary-700 text-sm">sales@karini.ai</p>
                  <p className="text-secondary-700 text-sm">+1-800-619-1584</p>
                </div>
              </div>
              <div className="col-span-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6610.844071508329!2d-84.29013!3d34.058694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5757345d6fabf%3A0x9a74d3386ade04d6!2s2300%20Lakeview%20Pkwy%20%23700a%2C%20Alpharetta%2C%20GA%2030009%2C%20USA!5e0!3m2!1sen!2sin!4v1697526874419!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-4">
              <div className="cols-span-1 bg-gradient-to-r from-primary-50 to-white space-y-4 border border-primary-100 rounded-md p-4">
                <h1 className="text-black font-bold text-lg border-b-2 border-primary-600">
                  Pune, India
                </h1>
                <div className="space-y-4">
                  <address className="text-secondary-700 font-medium text-sm">
                    No. 204, Second Floor, B Wing, Building - GO Square, Near
                    Mankar Chowk, Wakad, Pune
                  </address>
                </div>
                <div className="space-y-2">
                  <p className="text-secondary-700 text-sm">
                    sales@tensoract.com
                  </p>
                  <p className="text-secondary-700 text-sm">+91-000-000-0000</p>
                </div>
              </div>
              <div className="col-span-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7563.27169855239!2d73.770829!3d18.590449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9400e933acd%3A0x895493d5741afa4c!2sGO%20(Ganga%20Osian)%20Square%20-%20Building%20B!5e0!3m2!1sen!2sin!4v1697528003881!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
