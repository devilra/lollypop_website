import React from "react";

const Research = () => {
  return (
    <div className="md:ml-32">
      <div className="md:ml-[210px] md:flex gap-14   md:pb-10 ">
        <div>
          <h1 className="font-bold text-xl text-[#221429] md:text-3xl pb-4 md:pb-0 ">
            Research & Strategy
          </h1>
        </div>
        <div className="flex flex-col text-[#221429] order-1 md:order-none md:ml-12">
          <p className="md:w-[300px] text-[#221429] ">
            Great experiences begin with real understanding. Before we design or
            build anything, we take time to understand your users and your
            goals. Through detailed UX research, journey mapping, and usability
            testing, we uncover insights that guide better product decisions.
          </p>
          <div className="mt-5 md:block hidden">
            <button className=" text-[#FD2E35]  text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 order-2">
          <ul className="w-full list-disc text-[15px] text-[#221429] marker:text-[8px] space-y-4">
            <li className="">UX Audits & Heuristics</li>
            <li>User Interviews</li>
            <li>Persona & Journey Mapping</li>
            <li>Competitor Analysis</li>
            <li>Information Architecture</li>
            <li>Product Strategy</li>
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
            Design & Branding
          </h1>
        </div>
        <div className="flex flex-col order-1 md:order-none">
          <p className="md:w-[300px]  text-[#221429]">
            We create designs that look beautiful and work brilliantly. From
            intuitive user interfaces to complete brand systems, we design with
            people in mind. Our creative process balances emotion, usability,
            and brand clarity to make every touchpoint count.
          </p>
          <div className="mt-5 md:block hidden">
            <button className=" text-[#FD2E35]  text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 md:pl-0 order-2">
          <ul className="w-full list-disc text-[15px] md:pl-5 text-[#221429] marker:text-[8px] space-y-4">
            <li className="">UI/UX Design for Apps & Web</li>
            <li>Brand Identity Design</li>
            <li>Prototyping & Wireframes</li>
            <li>Design Systems</li>
            <li>Microinteractions & Motion</li>
            <li>Visual Content & Storytelling</li>
            {/* <li>Digital Prototyping</li>
            <li>Motion Graphics</li>
            <li>Illustrations and Iconography</li> */}
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
            Build & Engineering
          </h1>
        </div>
        <div className="flex flex-col order-1 md:order-none">
          <p className="md:w-[300px] text-[#221429] md:-ml-14">
            We bring your ideas to life — with clean code and scalable tech. Our
            engineering team works hand-in-hand with design to build fast,
            secure, and flexible digital products — from marketing sites to
            full-fledged platforms.
          </p>
          <div className="mt-5 md:block hidden md:-ml-14">
            <button className=" text-[#FD2E35] text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 order-2 md:ml-2 ">
          <ul className="w-full list-disc text-[15px]  text-[#221429] marker:text-[8px] space-y-4">
            <li className=""> Frontend & Backend Development</li>
            <li>Web & Mobile App Development</li>
            <li>CMS & API Integrations</li>
            <li>Headless Architecture</li>
            <li>DevOps & Automation</li>
            <li>QA & Testing</li>
          </ul>
          <div className="mt-5 md:hidden block">
            <button className="text-[#FD2E35] text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
      </div>
      <div className="md:ml-[210px] md:flex gap-14 md:pb-6 ">
        <div>
          <h1 className="font-bold text-xl text-[#221429] md:text-3xl pb-4 md:pb-0 md:pr-14 ">
            Amplify & Growth
          </h1>
        </div>
        <div className="flex flex-col order-1 md:order-none">
          <p className="md:w-[300px] text-[#221429] md:ml-2">
            Designing is only the beginning — let’s get you seen and heard. We
            help your product or brand get the visibility it deserves through
            digital marketing strategies, SEO, content, and performance
            campaigns tailored to your audience.
          </p>
          <div className="mt-5 md:block hidden md:ml-2">
            <button className=" text-[#FD2E35] text-[13px]">Learn More</button>
            <div className="w-[20px] h-[1px] bg-[#FD2E35] rounded-2xl mt-1"></div>
          </div>
        </div>
        <div className="w-full my-5 md:my-0 pl-4 order-2 md:ml-2 ">
          <ul className="w-full list-disc text-[15px]  text-[#221429] marker:text-[8px] space-y-4">
            <li className=""> Go-to-Market Strategy</li>
            <li>SEO & Content Marketing</li>
            <li>Paid Media & Campaigns</li>
            <li>Brand Positioning & Messaging</li>
            <li>Social Media Strategy</li>
            <li>Growth Analytics</li>
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
