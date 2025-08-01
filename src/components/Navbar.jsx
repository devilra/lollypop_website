import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-sm font-medium md:px-56 py-12 md:pt-11 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-red-500 font-bold text-base">
          <span>Global</span>
          <span className="text-black font-normal hidden text-[14px] sm:inline">
            UX UI Design Studio
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link>Services</Link>
          <Link>Projects</Link>
          <Link>Process</Link>
          <Link>Industries</Link>
          <Link className="text-red-500">
            Let's Talk
            <div className="w-10 border-b-2 border-red-500  mt-1"></div>
          </Link>
          <div className="space-y-2">
            <div className="w-5 h-[2px] bg-red-500 rounded-full"></div>
            <div className="w-5 h-[2px] bg-red-500 rounded-full"></div>
          </div>
        </div>
        <div
          className=" md:hidden text-red-500 text-2xl"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Hi /> : <HiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
