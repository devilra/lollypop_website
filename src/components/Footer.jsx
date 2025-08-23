import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaDribbble,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" text-[#221429] md:mt-24  px-6 py-10 md:pb-16 ">
      {/* Section: Social Media */}
      <div className="text-center md:text-left">
        <h4 className="font-medium text-lg mb-4 text-center">
          Follow our work
        </h4>
        <div className="flex flex-wrap justify-center md:justify-between md:text-3xl text-lg gap-6 font-bold">
          <a
            href="#"
            className="hover:text-red-500 font-extrabold text-[#221429] flex items-center gap-2">
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-red-500 font-extrabold text-[#221429] flex items-center gap-2">
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-red-500 font-extrabold text-[#221429] flex items-center gap-2">
            X
          </a>
          <a
            href="#"
            className="hover:text-red-500 font-extrabold text-[#221429] flex items-center gap-2">
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-red-500 font-extrabold text-[#221429] flex items-center gap-2">
            Dribbble
          </a>
        </div>
      </div>

      {/* Section: Locations */}
      <div className="md:flex">
        <div className="grid grid-cols-2 md:flex  sm:grid-cols-4 gap-6 text-sm font-medium md:order-2 mt-10">
          <div>
            <p className="font-bold text-[#221429] mb-1">India</p>
            <ul>
              <li>Bangalore</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Hyderabad</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[#221429] mb-1">USA</p>
            <ul>
              <li>San Jose</li>
              <li>Dallas</li>
              <li>Salt Lake City</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[#221429] mb-1">UAE</p>
            <ul>
              <li>Dubai</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[#221429] mb-1">Vietnam</p>
            <ul>
              <li>Ho Chi Minh City</li>
            </ul>
          </div>
        </div>

        {/* Section: Logo + Description */}
        <div className="mt-12 flex flex-col md:mt-20 items-center md:items-start text-center md:text-left md:order-1">
          <img
            src="/UCD-Logo.png"
            alt="Lollypop Logo"
            className="w-40 h-auto mb-2"
          />
          <p className="text-sm max-w-md md:w-[300px] md:mt-5">
            A <strong>Terralogic</strong> company crafting meaningful
            experiences through Research, Design and Development.
          </p>

          {/* Bottom Footer */}
          <div className="mt-10 border-t pt-4 text-xs flex flex-col md:flex-row justify-between items-center gap-2 text-gray-500">
            <p>© 2025 Ucdglobal - A Terralogic company</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                FAQs
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
