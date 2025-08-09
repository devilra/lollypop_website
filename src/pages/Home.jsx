import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Studio from "../components/Studio";

const Home = () => {
  return (
    <div className="">
      <div className="h-[100vh]  bg-[#F7F4F2] md:w-full pb-52 md:ml-5 md:bg-[#f8f4f3]  overflow-y-auto md:max-w-[98%]  md:fixed top-4     ">
        <div className="px-4 md:px-0">
          <Navbar />
          <Hero />
        </div>
        <Studio />
      </div>
    </div>
  );
};

export default Home;
