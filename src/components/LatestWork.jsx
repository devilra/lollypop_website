import React from "react";

const LatestWork = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-xl md:text-5xl font-bold">Our Latest Work</h1>
        <p className="md:text-2xl md:w-[500px] py-5">
          Check out our stories of how process-driven creativity helps brands
          transform ideas into real results—step by step
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5">
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
      </div>
      <div className="mt-10 md:mt-36 md:w-[700px] mx-auto">
        <h1 className="text-xl md:text-5xl font-bold">Our Recent Clients</h1>
        <p className="md:text-2xl md:w-[500px] py-5">
          From early-stage startups to Fortune 500 companies, we have crafted
          many stories that have made the real impact.
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
                <h1 className="text-center py-5 text-neutral-950">Upstox</h1>
                <p className="text-center px-20 md:px-5 ">
                  Boosted user engagement through custom illustrations & design
                  enhancements.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-[300px] flex flex-col justify-around items-center w-full rounded-md md:rounded-none md:w-[220px] bg-white">
              <img src="/client/SBIcaps.svg" alt="Upstox" className="h-6 " />
              <div>
                <h1 className="text-center py-5 text-neutral-950">Upstox</h1>
                <p className="text-center px-20 md:px-5 ">
                  Boosted user engagement through custom illustrations & design
                  enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
