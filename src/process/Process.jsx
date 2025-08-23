import React from "react";
import Navbar from "../components/Navbar";
import ProcessHero from "./ProcessHero";
import ProcessFooter from "./ProcessFooter";

const Process = () => {
  console.log("Service Page");
  return (
    <div>
      <div className="h-[100vh]  bg-[#F7F4F2] px-4  pb-32 md:ml-5 md:bg-[#f8f4f3]  overflow-y-auto md:w-[98%]  md:fixed top-4 ">
        <div className=" md:px-0">
          <Navbar />
        </div>
        <ProcessHero />
        <ProcessFooter />
      </div>
    </div>
  );
};

export default Process;
