import React from "react";
import CaseStudies from "./Industries";
import { Link } from "react-router-dom";

const LatestWork = () => {
  return (
    <div className="md:ml-28 md:mt-10 text-[#221429]">
      <div className="md:ml-36">
        <h1 className="text-xl md:text-5xl font-bold">Industries We Serve</h1>
        <p className="md:text-2xl md:w-[500px] py-5">
          We’ve partnered with startups, enterprises, and everything in between
          across industries like:
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mr-36 gap-5">
        <img
          src="/latest/latest1.webp"
          alt="latest"
          className="h-[400px] w-full "
        />
        <img
          src="/latest/latest2.webp"
          alt="latest"
          className="h-[400px] w-full hidden md:flex"
        />
        <img
          src="/latest/latest3.webp"
          alt="latest"
          className="h-[400px] w-full hidden md:flex"
        />
      </div> */}

      {/* Case Studies */}

      <CaseStudies />

      <div className="mt-10 md:mt-36 md:w-[700px] md:ml-32">
        <h1 className="text-xl md:text-5xl font-bold">
          Trusted by Visionary Brands
        </h1>
        <p className="md:text-2xl md:w-[500px] py-5">
          From global names to rising startups, our partners trust us to bring
          their ideas to life. Sony, TAFE, Citizen Watches, Securra, Aspirestar,
          Maestro’s Music, Tamilnadu Police, Trendalyze & more.
        </p>
        <div className="mt-5 flex gap-6">
          <div className="h-[300px] flex flex-col justify-around items-center w-full rounded-md md:rounded-none md:w-[220px] bg-white">
            <img src="/client/Upstox.svg" alt="Upstox" className="h-6 " />
            <div>
              <h1 className="text-center py-5 text-neutral-950">Upstox</h1>
              <p className="text-center px-20 md:px-5 ">
                Boosted user engagement through custom illustrations & design
                enhancements.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-[300px]  md:flex flex-col justify-around items-center w-full rounded-md md:rounded-none md:w-[220px] bg-white">
              <img src="/client/Aha.svg" alt="Upstox" className="h-10 " />
              <div>
                <h1 className="text-center py-10 text-neutral-950">Aha</h1>
                <p className="text-center px-20 md:px-5 ">
                  Developed a versatile content experience for cross-device
                  users.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-[300px] flex flex-col justify-around items-center w-full rounded-md md:rounded-none md:w-[220px] bg-white">
              <img src="/client/SBIcaps.svg" alt="Upstox" className="h-6 " />
              <div>
                <h1 className="text-center py-5 text-neutral-950">SBI Caps</h1>
                <p className="text-center px-20 md:px-5 ">
                  Led a full-scale website redesign for SBI Caps, elevating
                  their digital identity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" group cursor-pointer mt-10">
          <p className="text-[#FD2E35] text-sm">View All Clients</p>
          <div className="h-[1px] w-[20px] bg-[#FD2E35] transition-all duration-500 group-hover:w-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
