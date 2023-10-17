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
          <div className="sm:w-2/3 flex flex-col justify-between space-y-4 sm:space-y-8">
            <p className="text-secondary-700 text-sm text-justify leading-6">
              Deepali Rajale stands out as an AI aficionado with a remarkable
              tenure as a Global Machine Learning Specialist at Amazon Web
              Services. At AWS, she not only penned insightful blogs on Amazon
              SageMaker but also became a notable figure in various AI circles.
              She&apos;s been instrumental in propelling Fortune-100 companies
              towards a seamless AI integration. Her passion has driven
              substantial advancements in Generative AI, MLOps, and TCO for
              Amazon Machine Learning and AI Services. Before her illustrious
              journey with Amazon, Deepali spearheaded product engineering at
              renowned firms like Paypal and Blue Yonder. Beyond her corporate
              achievements, Deepali is a celebrated author, having penned
              hundreds of soul-stirring poems in her native tongue, published a
              book and is cherished by thousands on Facebook. She&apos;s also in
              the midst of crafting a definitive book on MLOps on AWS.
            </p>
            <div className="flex space-x-4 items-center">
              <div className="bg-primary-100 p-2 rounded-md">
                <IconSeven width={40} height={40} color={iconColor} />
              </div>
              <div>
                <h3 className="text-black text-base md:text-lg font-semibold">
                  Deepali Rajale
                </h3>
                <p className="text-secondary-600 text-sm font-semibold">
                  Founder, karini.ai
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/3 flex justify-center">
            <img
              src="/assets/images/team_members/deepali.jpg"
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
