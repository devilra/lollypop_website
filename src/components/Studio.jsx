import React from "react";
import Achievement from "./Achievement";

const Studio = () => {
  return (
    <div className="mt-10 md:mt-36 text-white md:text-black  bg-[#221429] md:bg-[#f8f4f3] max-w-[600px] mx-auto md:bg-none h-[1200px] w-full ">
      <div>
        <p className=" py-10  text-2xl px-5 md:px-0 md:text-5xl font-bold">
          Lollypop Design Studio is a Leading UI UX design agency driven by
          innovation, impact, culture, and creativity!
        </p>
        <p className="text-lg px-5 md:text-2xl md:px-0 pb-5">
          We're a group of 180+ creative minds spread across the USA, India,
          UAE, and Vietnam, driven by innovation and technology touching more
          than two billion lives with our well-crafted, award-winning UI/UX
          designs, products, and solutions.
        </p>
        <div>
          <ul className="flex gap-3 md:gap-5 text-[12px] text-neutral-300 pt-5 px-5 md:px-0 md:font-bold md:text-neutral-700 md:text-[16px]">
            <li>India</li>
            <li>USA</li>
            <li>UAE</li>
            <li>Vietnam</li>
          </ul>
          <h1 className="pt-8 px-5 md:px-0 text-[#FD2E35]">About Us</h1>
          <div className="w-10 mx-5 md:mx-0 h-1 bg-[#FD2E35] rounded-3xl"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 pt-10 ">
        <img src="/studio/studio1.webp" alt="" className="h-[400px] w-full" />
      </div>
      <Achievement />
    </div>
  );
};

export default Studio;
