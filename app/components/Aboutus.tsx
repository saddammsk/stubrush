import React from "react";
import Image from "next/image";
const box_data = [
  {
    id: '1',
    heading: "Boost Attendance",
    para: "Increase efficiency in your events.",
    imageSrc: "/box1.svg",
  },
  {
    heading: "Increase Revenue",
    para: "Generate additional income and enhance your brand exposure.",
    imageSrc: "/box2.svg",
  },
  {
    heading: "Effortless Management",
    para: "Easily list your tickets with our intuitive form, and we’ll take care of the rest.",
    imageSrc: "/box3.svg",
  },
  {
    heading: "Audience Engagement",
    para: "Reach new customers who become loyal fans of your events.",
    imageSrc: "/box4.svg",
  },
];

function Aboutus() {
  return (
    <section className="text-white">
    <div className="flex flex-col items-center">
      <div className="my-[50px] md:my-[75px]">
          <h2 className="text-3xl md:text-4xl font-bold">Why StubRush?</h2>
      </div>
      <div className="w-full px-4 md:px-0">
        <Image
          src="/image2.png"
          width={847}
          height={605}
          alt="Main image"
          className="mx-auto"
        />
      </div>
      <div className="grid lg:grid-cols-4 mx-auto w-full md:max-w-[70%] px-5 sm:grid-cols-2 gap-10 lg:gap-[107px] justify-center -mt-16 lg:mt-[-6px]">
        {box_data.map(({ id, imageSrc, heading, para }) => (
          <div
            key={id}
            className="max-w-[180px] text-center sm:text-left lg:mt-[-76px]"
          >
            <Image
              src={imageSrc}
              width={32}
              height={32}
              alt={heading}
              className="mb-3 mx-auto sm:mx-0"
            />
            <h4 className="font-poppins md:text-xl mg:text-2xl font-bold leading-7 md:leading-9 md:mb-3 mb-1">
              {heading}
            </h4>
            <p className="font-Helvetica text-sm">{para}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
}

export default Aboutus;
