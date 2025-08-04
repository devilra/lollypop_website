import React from "react";
import Ideas from "./Ideas";
import StickySteps from "./Research";
import StickyTabSections from "./Research";
import ServiceFooter from "./SeviceFooter";

const ServiceHero = () => {
  return (
    <section>
      <div className="md:pl-40 md:pt-16">
        <h1 className="md:pl-14 text-[14px]">
          Designing, Building & Elevating Digital Experiences That Put People
          First
        </h1>
        <div className="flex justify-start items-start ">
          <span className="md:w-[5px] hidden md:h-12 md:mr-10 md:mt-10 md:inline-block md:bg-[#FD2E35] rounded-full"></span>
          <h1 className="md:mt-5 text-3xl py-5 md:py-0 font-bold text-[#221429] md:text-4xl">
            We blend research,
            <br />
            creativity, technology, and marketing to craft user-first products
            and digital <br />
            brands that stand out and scale. <br />
            <span className="text-[#221429] text-xl md:text-2xl font-light md:w-[700px] inline-block md:my-5 my-3">
              We thrive at the intersection of design and business through our
              UI UX design services and craft beautiful and functional
              experiences that can be launched quickly.
            </span>
          </h1>
        </div>

        <section className="py-6 md:pl-10 flex ">
          <div className="relative  w-full pl-6 border-l-4 border-[#FD2E35] py-6 min-h-[160px]">
            {/* Gradient background -z-10 */}
            <div className="absolute  inset-0 w-full h-full bg-gradient-to-r from-[#F2EEEB] to-transparent rounded-sm " />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#221429]">
                Call to Action Section
              </h2>
              <p className="text-base sm:text-lg text-[#221429] mt-2">
                Your next big digital move starts here.
              </p>
              <p className="text-[12px] text-[#535153] mt-3 md:text-[18px]">
                Whether you're crafting a new idea or refining what already
                exists — our team is here to help you shape, design, and grow
                your product with clarity and care.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block text-[#FD2E35] text-[14px]  relative group">
                Let’s Talk
                <span className="block h-[1px] mt-1 w-6 bg-[#FD2E35] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-20 ">
        <div className="md:flex gap-10 md:pl-16 ">
          <img
            src="/service/service.webp"
            alt="Service"
            className="h-[300px] md:h-[450px] object-cover md:w-[350px]"
          />
          <img
            src="/service/service.webp"
            alt="Service"
            className="h-[300px] hidden md:block md:h-[450px] object-cover md:w-[350px]"
          />
          <img
            src="/service/service.webp"
            alt="Service"
            className="h-[300px] hidden md:block md:h-[450px] object-cover md:w-[350px]"
          />
        </div>
        <a
          href="#contact"
          className="mt-4 inline-block text-[#FD2E35] md:pl-44 text-[14px]  relative group">
          View all portfolios
          <span className="block h-[1px] mt-1 w-6 bg-[#FD2E35] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <Ideas />
      <StickyTabSections />
    </section>
  );
};

export default ServiceHero;
