import React from "react";
import {
  BsArrowRightCircle,
  BsArrowLeftCircle,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { ImUserTie } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ClientReviews = () => {
  const ClientReviewsData = [
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
    <section className="bg-white px-4 lg:px-0 py-20 overflow-hidden">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="space-y-10">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="space-y-1">
              <h1 className="text-black font-bold text-2xl sm:text-3xl text-center">
                Testimonials
              </h1>
              <p className="text-secondary-700 text-sm font-medium">
                The Stunning Results Our Customers Have Experienced
              </p>
            </div>
          </div>
          <div className="z-10 relative">
            <div className="-z-10 absolute -left-32 -bottom-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg">
              <div className="p-20 m-8 bg-white rounded-full"></div>
            </div>
            <div className="-z-10 absolute -right-10 -top-10 p-14 bg-gradient-to-br from-primary-400 to-primary-800 rounded-full shadow-lg"></div>
            <Swiper
              loop={true}
              autoHeight={true}
              // height={200}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              pagination={{ clickable: true }}
              className="mySwiper rounded-2xl border bg-white shadow-2xl shadow-primary-600/20"
            >
              {ClientReviewsData.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-8 space-y-4 ">
                    <div>
                      <h3 className="text-black text-lg font-bold">
                        {" "}
                        {review.name}
                      </h3>
                      <p className="text-secondary-600 text-base font-medium">
                        {review.position}
                      </p>
                    </div>
                    <p className="text-secondary-600 text-base">
                      {review.review}
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(review.ratings)].map((val, ind) => (
                        <AiFillStar
                          key={ind}
                          size={20}
                          className="text-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
