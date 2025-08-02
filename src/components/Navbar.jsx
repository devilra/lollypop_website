import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-sm font-light md:px-56 py-12 md:pt-11 relative">
      {/* Navbar Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-base">
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
          <Link>Projects</Link>
          <Link>Process</Link>
          <Link>Industries</Link>
          <Link to="/" className="text-[#FD2E35]">
            Let's Talk
            <div className="w-8 h-[1px] bg-[#FD2E35] mt-1"></div>
          </Link>
          <div className="space-y-2">
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
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex justify-between items-center p-6 border-b">
          <div className="text-lg font-semibold text-[#FD2E35]">
            Global Studio
          </div>
          {/* <button onClick={() => setIsOpen(false)} className="text-2xl">
            <HiX />
          </button> */}
        </div>
        <div className="flex flex-col items-center gap-6 mt-10 text-gray-800 text-lg">
          <Link onClick={() => setIsOpen(false)} to="/service">
            Services
          </Link>
          <Link onClick={() => setIsOpen(false)}>Projects</Link>
          <Link onClick={() => setIsOpen(false)}>Process</Link>
          <Link onClick={() => setIsOpen(false)}>Industries</Link>
          <Link
            to="/"
            className="text-[#FD2E35] underline underline-offset-4"
            onClick={() => setIsOpen(false)}>
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
