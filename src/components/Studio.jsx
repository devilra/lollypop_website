import React from "react";
import Achievement from "./Achievement";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlayMethods from "./Carosel";

const services = [
  {
    img: "/studio/studio1.webp",
    className: "h-[400px] md:h-[500px] md:rounded-md  w-full",
  },

  {
    img: "/studio/studio2.webp",
    className: "h-[400px] md:h-[500px] md:rounded-md w-full",
  },
  {
    img: "/studio/studio3.webp",
    className: "h-[400px] md:h-[500px] md:rounded-md w-full",
  },
];

const Coresettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640, // below 640px (mobile)
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Studio = () => {
  return (
    // Outer div full width background

    <div className="mt-10 md:mt-36 bg-[#221429] w-full text-white md:text-black over">
      {/* Inner div for centered content */}
      <div className="max-w-[1000px] text-white mx-auto h-[3420px] md:h-[3570px]">
        <div className="md:w-[700px] md:ml-24">
          <p className="font-extrabold text-2xl px-4 md:px-0 pt-16 md:pt-28 pb-5 text-white md:leading-[55px] tracking-[0.3px] md:text-[50px]">
            UCDGlobal Design Studio is a Leading UI UX design agency driven by
            innovation, impact, culture, and creativity!
          </p>
          <p className="text-lg px-5 md:text-2xl md:px-0 pb-5 md:leading-[40px] md:w-[500px]">
            We're a group of 180+ creative minds spread across the USA, India,
            UAE, and Vietnam, driven by innovation and technology touching more
            than two billion lives with our well-crafted, award-winning UI/UX
            designs, products, and solutions.
          </p>
          <div>
            <ul className="flex gap-3 md:gap-5 text-[12px] text-white pt-5 px-5 md:px-0 md:text-[16px]">
              <li>India</li>
              <li>USA</li>
              <li>UAE</li>
              <li>Vietnam</li>
            </ul>
            <h1 className="text-[#FD2E35] pl-5 md:pl-0 pt-5  text-[13px]">
              About Us
            </h1>
            <div className="w-[20px] h-[1px] ml-5 md:ml-0 bg-[#FD2E35] rounded-2xl mt-2"></div>
          </div>
        </div>

        {/* Images */}

        <div className="mt-10">
          <Slider {...Coresettings}>
            {services.map((service, index) => (
              <div className="" key={index}>
                <img
                  src={service.img}
                  alt="image"
                  className={service.className}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="px-4 md:px-0">
          <Achievement />
        </div>
      </div>
    </div>
  );
};

export default Studio;
