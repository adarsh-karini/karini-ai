import React from "react";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { ImUserTie } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

const Clients = () => {
  const ClientsData = [
    {
      name: "Briana Patton",
      position: "Manager",
      review:
        "Sed mattis est eget penatibus mauris, sed condimentum vitae viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui aliquet porttitor libero consequat volutpat eget sed turpis. Feugiat maecenas commodo et morbi morbi gravida.",
      ratings: 5,
    },
    {
      name: "Imelda Cowen",
      position: "Consultant",
      review:
        "DSapien praesent tristique iaculis amet sit odio pellentesque. Sit nulla pretium amet, fames aenean. Nascetur augue vulputate sed pretium pretium. Scelerisque amet facilisis ut pulvinar morbi a egestas. Vel vulputate dolor nisl in non. Amet enim ultricies imperdiet ac.",
      ratings: 5,
    },
    {
      name: "Alfred Walton",
      position: "Manager",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra bibendum feugiat diam egestas ornare quisque tincidunt. Ipsum tortor, pretium lectus urna felis condimentum cursus at. Platea a, pulvinar lacinia id. Augue tortor nunc, ultrices nam in augue a.",
      ratings: 5,
    },
  ];
  return (
    <section className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-screen-lg mx-auto space-y-8 sm:space-y-16">
        <div className="flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
          <h1 className="text-primary-900 font-semibold text-2xl sm:text-3xl text-center">
            Karini AI is loved by our clients
          </h1>
          <div className="flex space-x-2 justify-end">
            <BsArrowLeft
              size={50}
              className="text-primary-900 rounded-full border border-primary-600 p-4 hover:cursor-pointer hover:border-2"
            />
            <BsArrowRight
              size={50}
              className="text-primary-900 rounded-full border border-primary-600 p-4 hover:cursor-pointer hover:border-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {ClientsData.map((client, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 bg-white p-6 rounded-lg shadow-sm border"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <span className="p-3 bg-primary-200 rounded-lg">
                    <ImUserTie size={25} className="text-medium" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-semibold sm:text-lg">
                      {client.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {client.position}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-base">{client.review}</p>
              </div>
              <div className="flex space-x-1 text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
