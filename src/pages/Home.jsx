import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Studio from "../components/Studio";
import ImageSlider from "../components/Studio";

const Home = () => {
  return (
    <div className="">
      <div className="h-[100vh]  bg-[#F7F4F2]  pb-52 md:pb-72 md:ml-5 md:bg-[#f8f4f3]  overflow-y-auto md:w-[98%]  md:fixed top-4     ">
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
