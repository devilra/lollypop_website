import React from "react";
import Research from "./Research";
import LatestWork from "./LatestWork";
import Studio from "./Studio";
import AutoPlayMethods from "./Carosel";

const Hero = () => {
  return (
    <section className="md:px-2 py-5 md:py-12">
      <div className="md:pl-40">
        <div className=" font-bold flex justify-start items-start ">
          <span className="md:w-[5px] hidden md:h-12 md:mr-10 md:mt-12 md:inline-block md:bg-[#FD2E35] rounded-full"></span>
          <h1 className="md:mt-7 text-2xl font-extrabold md:leading-[75px] md:pb-5 text-[#221429] md:w-[800px] md:text-[65px]">
            Crafting Digital Products That Feel Natural, Work
            Seamlessly,Experiences <br />
            <span className="text-2xl md:text-[65px] text-[#FD2E35]">
              That and Grow With You
            </span>
            {/* <span className="text-[#20202b] text-lg  md:text-3xl pt-10 inline-block md:my-5 my-3">
              At UCD, we blend design, <br /> strategy, technology, and
              marketing
              <br />{" "}
              <span className="text-[#FD2E35]  inline-block ">
                to create experiences people love and businesses need.
              </span>
            </span> */}
          </h1>
        </div>
      </div>
      <div className="flex gap-5 md:gap-16 md:ml-12 my-5 md:pl-40 ">
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
        <p className="font-extrabold text-2xl text-[#221429] md:leading-[60px] tracking-[0.3px] md:text-[50px]">
          At UCD, we blend design, strategy, technology, and marketing to create
          experiences people love and businesses need.
        </p>
        <p className="text-[#221429] mt-5 md:text-2xl pb-8 md:pb-24 tracking-[1px]">
          Be it turning Looking to build something exceptional? UCD is a
          full-service UI/UX, branding, and digital growth agency that helps
          turn bold ideas into well-designed, scalable digital experiences.
          Whether you're building a product from scratch, reimagining an
          existing platform, or launching your brand into new markets — we
          partner with you every step of the way. We focus on creating
          user-centric experiences that deliver real impact.
        </p>
      </div>
      <Research />
      <LatestWork />
    </section>
  );
};

export default Hero;
