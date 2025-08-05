import React from "react";
import ProcessSticky from "./ProcessSticky";

const ProcessHero = () => {
  return (
    <section>
      <div className="md:pl-40 md:pt-16">
        <h1 className="md:pl-14 text-[14px]">Process</h1>
        <div className="flex justify-start items-start ">
          <span className="md:w-[5px] hidden md:h-12 md:mr-10 md:mt-10 md:inline-block md:bg-[#FD2E35] rounded-full"></span>
          <h1 className="md:mt-5 md:w-[800px] text-3xl py-5 md:py-0 font-extrabold text-[#221429] md:text-6xl">
            A Process Designed
            <br />
            Around Your User best for your business
            <br />
            <span className="text-[#221429] text-lg md:text-xl font-light md:w-[600px] inline-block md:my-7 my-3">
              At UCD, we believe great products aren’t born—they’re built
              through deep understanding, iterative thinking, and strategic
              execution. Our Four Touchpoint Framework ensures we engage with
              your users at every level, turning ideas into intuitive, scalable,
              and memorable digital experiences.
            </span>
          </h1>
        </div>
      </div>
      <div className="md:pl-40 md:pt-16">
        <ProcessSticky />
      </div>
    </section>
  );
};

export default ProcessHero;
