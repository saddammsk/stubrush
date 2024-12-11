"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper as SwiperCore } from "swiper";

interface Testimonial {
  id: string;
  name: string;
  dis: string;
  comment: string;
  date: string;
}

const customerData: Testimonial[] = [
  {
    id: "1",
    name: "Jackie R.",
    dis: "Event Coordinator, CityFest",
    comment:
      "StubRush saved the day for our last-minute event. Within hours the seats started filling up and we ended the night with an energetic, engaged audience. Well definitely use them again!",
    date: "United States, 2 days ago",
  },
  {
    id: "2",
    name: "Mark T.",
    dis: "Manager, Uptown Jazz Club",
    comment:
      "StubRush is a game-changer for our small music venue. Before, we struggled to fill seats for midweek shows, but now we consistently see packed audiences. The process was so easy, and the results speak for themselves!",
    date: "United States, 1 week ago",
  },
  {
    id: "3",
    name: "Sarah L.",
    dis: "Artistic Director, Willow Theater",
    comment:
      "I was skeptical at first about offering discounted tickets, but StubRush helped us fill empty seats and create a buzz for our performances. Many attendees have since become regular patrons. Highly recommend!",
    date: "United States, 2 weeks ago",
  },
  {
    id: "4",
    name: "Aaliyah R.",
    dis: "Owner, Laugh Lounge",
    comment:
      "Our comedy club went from 40% capacity to nearly sold-out shows thanks to StubRush. The team is responsive, the platform is intuitive, and the results are incredible. We’ve even increased bar revenue!",
    date: "United States, 3 days ago",
  },
  {
    id: "5",
    name: "Jackie R.",
    dis: "Event Coordinator, CityFest",
    comment:
      "StubRush saved the day for our last-minute event. Within hours the seats started filling up and we ended the night with an energetic, engaged audience. Well definitely use them again!",
    date: "United States, 2 days ago",
  },
  {
    id: "6",
    name: "Jackie R.",
    dis: "Event Coordinator, CityFest",
    comment:
      "StubRush saved the day for our last-minute event. Within hours the seats started filling up and we ended the night with an energetic, engaged audience. Well definitely use them again!",
    date: "United States, 2 days ago",
  },
];

const Testimonial: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleBack = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  return (
    <>
      <section className=" w-full lg:mt-[189px] lg:mb-[256px] py-20">
        <div className="w-full max-w-[1340px] mx-auto px-4">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-center font-poppins">Trusted by Businesses Everywhere.</h2>
        </div>
        <div className="w-full relative">
        <Swiper className="md:mt-[95px] mt-14 lg:!p-10"
         onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 46,
            },
          }}
        >
          {customerData.map(({ id, name, dis, comment, date }) => (
            <SwiperSlide key={id}>
              <h4 className="mb-1 text-xs text-white font-bold">{name}</h4>
              <Image
                className="my-1.5"
                src="/star.svg"
                alt="rating"
                width={100}
                height={14}
              />
              <div className="flex md:justify-start my-1.5 gap-[5px]">
                <Image src="/verify.svg" alt="verified" width={16} height={14} />
                <p className="text-xs font-normal opacity-70">Verified Customer</p>
              </div>
              <p className="mb-2.5 text-xs font-light italic opacity-70">{dis}</p>
              <p className="mb-[40px] text-xs font-poppins leading-5">{comment}</p>
              <p className="text-[10px] opacity-70 font-normal font-poppins">{date}</p>
            </SwiperSlide>
          ))}
        </Swiper>

         {/* Custom Navigation */}
         <div className="lg:w-[calc(100%_+_100px)] w-full mx-auto flex lg:justify-between justify-center gap-5 mt-12 lg:mt-20 lg:-left-12 lg:absolute z-20">
          <button
            onClick={handleBack}
            className="disabled:opacity-50 rotate-180 lg:mt-[-490px]"
          >
            <Image src="/arrow.svg" alt="previous" width={50} height={50} />
          </button>
          <button
            onClick={handleNext}
            className="disabled:opacity-50 lg:mt-[-490px]"
          >
            <Image src="/arrow.svg" alt="next" width={50} height={50} />
          </button>
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
