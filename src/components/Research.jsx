import React from "react";

const Research = () => {
  return (
    <div className="md:ml-32">
      <div className="md:ml-[200px] md:flex gap-14 md:px-5 md:pb-10 ">
        <div>
          <h1 className="font-bold text-xl text-[#221429] md:text-3xl pb-4 md:pb-0 ">
            Research
          </h1>
        </div>
        <div className="flex flex-col text-[#221429] order-1 md:order-none">
          <p className="md:w-[300px] text-[#221429]">
            We represent the user’s voice. At Lollypop Design Studio, with our
            research, we will provide you with data-driven insights backed by a
            strong UX strategy that will resonate with your brand objectives to
            build an engaging experience.
          </p>
          <div className="mt-5 md:block hidden">
            <button className=" text-[#FD2E35]  text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 order-2">
          <ul className="w-full list-disc text-[15px] text-[#221429] marker:text-[8px] space-y-4">
            <li className="">Heuristic Analysis</li>
            <li>Design Audit</li>
            <li>Usability Testing</li>
            <li>Ethnographic Research</li>
            <li>Emerging Trends</li>
            <li>UX research</li>
          </ul>
          <div className="mt-5 md:hidden block">
            <button className="text-[#FD2E35]  text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
      </div>
      <div className="md:ml-[210px] md:flex gap-14 md:pb-10 ">
        <div>
          <h1 className="font-bold text-xl  text-[#221429] md:text-3xl pb-4 md:pb-0 pr-12 ">
            Design
          </h1>
        </div>
        <div className="flex flex-col order-1 md:order-none">
          <p className="md:w-[200px]  text-[#221429]">
            We go beyond website design—we're an award-winning UI/UX design
            company. Our talented 200+ designers craft intuitive, scalable, and
            impactful designs that users fall in love with. With design thinking
            and creativity at its core, powered by AI, we are your trusted user
            experience design agency.
          </p>
          <div className="mt-5 md:block hidden">
            <button className=" text-[#FD2E35]  text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 order-2">
          <ul className="w-full list-disc text-[15px] md:pl-24 text-[#221429] marker:text-[8px] space-y-4">
            <li className="">Heuristic Analysis</li>
            <li>Digital Branding</li>
            <li>User Experience Design</li>
            <li>User interface Design</li>
            <li>Interaction Design</li>
            <li>AI Design Solutions</li>
            <li>Digital Prototyping</li>
            <li>Motion Graphics</li>
            <li>Illustrations and Iconography</li>
          </ul>
          <div className="mt-5 md:hidden block">
            <button className="text-[#FD2E35]  text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
      </div>
      <div className="md:ml-[210px] md:flex gap-14 md:pb-6 ">
        <div>
          <h1 className="font-bold text-xl text-[#221429] md:text-3xl pb-4 md:pb-0 md:pr-14 ">
            Build
          </h1>
        </div>
        <div className="flex flex-col order-1 md:order-none">
          <p className="md:w-[300px] md:pl-3 text-[#221429]">
            We enable you to translate any UI/UX design into pixel-perfect,
            adaptable, scalable digital products and solutions that will drive
            your business. As a leading UI/UX Design and Development Agency, we
            build seamless digital experiences that will enhance your user
            engagement and business growth.
          </p>
          <div className="mt-5 md:block hidden">
            <button className=" text-red-500 md:pl-3">Learn More</button>
            <div className="w-[35px] h-1 bg-red-500 rounded-2xl md:ml-3 mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 order-2 ">
          <ul className="w-full list-disc text-[15px] md:pl-3 text-[#221429] marker:text-[8px] space-y-4">
            <li className="">Front-End Development</li>
            <li>Web Application Development</li>
            <li>Mobile Application Development</li>
            <li>Custom Application Development</li>
            <li>AI solution Development</li>
            <li>SAAS Implementation</li>
          </ul>
          <div className="mt-5 md:hidden block">
            <button className="text-[#FD2E35] text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
