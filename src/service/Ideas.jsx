import React from "react";

const Ideas = () => {
  return (
    <div>
      <div className="md:ml-44 mt-10 md:mt-28">
        <h1 className="text-2xl md:text-[40px] md:w-[600px] md:leading-tight font-bold">
          Call to Action Section
        </h1>
        <p className="py-5 md:text-[24px] md:w-[500px]">
          Your next big digital move starts here. Whether you're crafting a new
          idea or refining what already exists — our team is here to help you
          shape, design, and grow your product with clarity and care.
        </p>
        <h1 className="text-2xl md:text-[40px] md:w-[600px] md:leading-tight font-bold">
          Our Work Preview
        </h1>
        <p className="py-5 md:text-[24px] md:w-[500px]">
          Real solutions for real business challenges. We’ve teamed up with
          product-led companies, social impact missions, and digital-first
          brands to bring clarity, usability, and long-term value to users.
        </p>

        <p className="py-2 font-bold text-xl md:text-2xl">Case studies:</p>
        <ul className="mb-4 list-disc marker:text-[10px] ml-2 md:ml-5">
          <li>Securra Health</li>
          <li>Aspirestar</li>
          <li>TNRTP</li>
          <li>Maestro’s Music</li>
        </ul>

        <h1 className="font-bold text-[24px] md:text-[28px]">
          Introduction Section
        </h1>
        <h1 className="font-semibold text-[15px] md:text-[18px]">
          From Concepts to User-Driven Solutions
        </h1>
        <p className="pt-5 md:w-[600px]">
          At UCD, our strength lies in untangling complexity and creating
          experiences that feel intuitive and purposeful. From the earliest idea
          to the final push for scale — we’re your partner in building things
          that matter.
        </p>

        {/* <div className="md:mt-10 md:flex justify-between md:mr-80">
          <div className="md:w-[300px]">
            <h1 className="font-bold text-[24px] md:text-[28px]">
              Outstanding Design
            </h1>
            <p className="text-16px">
              Our portfolio is full of products that push the boundaries of UI
              UX design, and reach audiences far and wide.
            </p>
          </div>
          <div className="md:w-[300px] mt-5 md:mt-0">
            <h1 className="font-bold text-[24px] md:text-[28px]">
              Customised Processes
            </h1>
            <p className="text-16px">
              Our UI UX designers approach every project with flexible processes
              in order to find the best course of action.
            </p>
            
          </div>
        </div> */}
        {/* <div className="md:mt-10 md:flex justify-between md:mr-80">
          <div className="md:w-[300px] mt-5 md:mt-0">
            <h1 className="font-bold text-[24px] md:text-[28px]">
              Ethics and Principles
            </h1>
            <p className="text-16px">
              We believe in ethical and accessible UI UX design solutions that
              provide equal opportunities to everyone.
            </p>
          </div>
          <div className="md:w-[300px] mt-5 md:mt-0">
            <h1 className="font-bold text-[24px] md:text-[28px]">
              Experiential Wisdom
            </h1>
            <p className="text-16px">
              Our time-tested, tried and proved approach has made us the go-to
              option for design, across industries.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Ideas;
