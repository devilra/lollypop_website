import React from "react";
import Research from "./Research";
import LatestWork from "./LatestWork";
import Studio from "./Studio";

const Hero = () => {
  return (
    <section className="md:px-2 py-5 md:py-12">
      <div className="md:pl-40">
        <div className=" font-bold flex justify-start items-start ">
          <span className="md:w-[5px] hidden md:h-12 md:mr-10 md:mt-10 md:inline-block md:bg-[#FD2E35] rounded-full"></span>
          <h1 className="md:mt-7 text-3xl text-[#221429] md:text-6xl">
            We're a Global UI UX Design
            <br />
            Agency Curating User <br />
            Experiences That <br />
            <span className="text-[#FD2E35] text-3xl md:text-6xl  inline-block md:my-5 my-3">
              scale businesses
            </span>
          </h1>
        </div>
      </div>
      <div className="flex gap-5 md:gap-16 md:ml-10 my-5 md:pl-40 ">
        <div>
          <h1 className="text-[#221429] font-bold text-lg md:xl">
            Two Billion+
          </h1>
          <p className="text-[13px] text-[#221429]">Lives Touched</p>
        </div>
        <div>
          <h1 className="text-[#221429] font-bold text-lg md:xl">50+</h1>
          <p className="text-[13px] md:text-[15px] text-[#221429]">
            Global Awards
          </p>
        </div>
        <div>
          <h1 className="text-[#221429] font-bold text-lg md:xl">1000+</h1>
          <p className="text-[13px] md:text-[15px] text-[#221429]">Clients</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/burger/burger.jpg"
          alt="burger"
          className="w-full h-52 md:h-[480px] md:w-[990px] my-10 md:my-20 "
        />
      </div>
      <div className="md:max-w-[700px] mx-auto ">
        <p className="font-bold text-2xl text-[#221429] tracking-[0.3px] md:text-5xl">
          Lollypop Redefines User Experiences Through AI-Powered Innovative,
          Intuitive, and Impactful Designs!
        </p>
        <p className="text-[#221429] mt-5 md:text-2xl pb-8 md:pb-24 tracking-[1px]">
          Be it turning complex ideas into scalable solutions or redefining your
          entire brand to be sustainable and futuristic, Lollypop, a global
          UI/UX design studio, will transform your brand with visually
          captivating user interface designs and build human-centric products
          and solutions that seamlessly enhance users' digital
        </p>
      </div>
      <Research />
      <LatestWork />
    </section>
  );
};

export default Hero;
