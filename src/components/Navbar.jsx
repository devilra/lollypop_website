import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="text-sm font-light md:px-40 py-12 md:pt-11 relative">
      {/* Navbar Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 text-base">
          <Link to="/">
            <img src="/UCD-Logo.png" alt="UCD" className="h-10 md:h-12" />
          </Link>
          <span className="text-[#FD2E35] md:text-[14px]">Global</span>
          <span className="text-black font-normal hidden text-[14px] sm:inline">
            UX UI Design Studio
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link
            to="/service"
            className="hover:text-[#FD2E35] transition duration-700">
            Services
          </Link>
          <Link className="hover:text-[#FD2E35] transition duration-700">
            Projects
          </Link>
          <Link
            to="/process"
            className="hover:text-[#FD2E35] transition duration-700">
            Process
          </Link>
          <Link className="hover:text-[#FD2E35] transition duration-700">
            Industries
          </Link>
          <Link to="/" className="text-[#FD2E35] ">
            Let's Talk
            <div className="w-8 h-[1px] bg-[#FD2E35] mt-1"></div>
          </Link>
          <div
            className="space-y-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            <div className="w-4 h-[3px] bg-[#FD2E35] rounded-lg"></div>
            <div className="w-4 h-[3px] bg-[#FD2E35] rounded-lg"></div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-red-500 text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={` fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex justify-between   items-center p-6 border-b">
          <div className="text-lg font-semibold text-[#FD2E35]">
            <Link to="/">
              <img src="/UCD-Logo.png" alt="UCD" className="h-10 md:h-12" />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl hidden md:block">
            <HiX />
          </button>
        </div>
        <div className="flex bg-[#FD2E35] md:h-[84vh]  flex-col md:flex-row md:justify-evenly">
          <div className="flex flex-col items-center gap-6 pt-10 w-full font-bold text-white md:space-y-5  md:text-[36px] text-[16px]">
            <Link
              className="hover:opacity-60 transition duration-500"
              to="/"
              onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              className="hover:opacity-60 transition duration-500"
              onClick={() => setIsOpen(false)}
              to="/service">
              Services
            </Link>
            <Link
              className="hover:opacity-60 transition duration-500"
              onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link
              className="hover:opacity-60 transition duration-500"
              onClick={() => setIsOpen(false)}>
              Process
            </Link>
            <Link
              className="hover:opacity-60 transition duration-500"
              onClick={() => setIsOpen(false)}>
              Industries
            </Link>
            <Link
              to="/"
              className="text-[#FD2E35] underline underline-offset-4"
              onClick={() => setIsOpen(false)}>
              Let's Talk
            </Link>
          </div>
          <div className="flex flex-col items-center bg-[#221429] h-[50vh] md:h-full w-full gap-6 pt-10 text-gray-800 text-lg">
            <div className="text-white flex flex-col items-start justify-center  mt-20">
              <h1 className="px-5">Got An Idea?</h1>
              <p className="text-[34px] px-5 leading-10 md:w-[400px] py-5 md:py-10">
                Let's craft brilliance together!
              </p>
              <div className="ml-5  my-10 md:my-0">
                <button
                  onClick={() => navigate("/project-enquiry")}
                  className="text-[#FD2E35] transition duration-700 hover:bg-[#FD2E35] hover:text-white px-7 rounded-full py-3 border-[2px] border-[#FD2E35] font-bold bg-[#221429]">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
