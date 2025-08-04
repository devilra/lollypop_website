import React from "react";
import Navbar from "../components/Navbar";
import ProjectHero from "./ProjectHero";
import ProjectFooter from "./ProjectFooter";

const ProjectEnquiry = () => {
  return (
    <div>
      <div className="h-[100vh] bg-[#F7F4F2] md:w-full pb-52 md:ml-5 md:bg-[#f8f4f3] pl-6 overflow-y-auto md:max-w-[98%]  md:fixed top-4  pr-6  md:px-5 lg:px-10 ">
        <div className="">
          <Navbar />
        </div>
        <ProjectHero />
        <ProjectFooter />
      </div>
    </div>
  );
};

export default ProjectEnquiry;
