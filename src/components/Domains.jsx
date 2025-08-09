import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Domains = () => {
  return (
    <div className="mt-16 md:mt-40">
      <div>
        <h1 className="text-3xl md:w-[600px] md:ml-36 text-[#221429] font-bold md:text-5xl leading-2 md:leading-1">
          Our work spans across 15+ domains and 8+ industries in transforming
          brands digitally.
        </h1>
        <p className="py-7 md:w-[700px] md:ml-36 text-lg md:text-2xl w-full">
          Our knowledge & experience across industries empower us to take up new
          challenges and build impactful products and solutions.
        </p>
        <div className="mt-5 md:flex md:ml-36 md:w-[700px] md:justify-between gap-10 w-full">
          <div className="">
            <h1 className="font-bold text-lg md:text-2xl">
              Healthcare and Wellness
            </h1>
            <div className="w-14 mt-1 h-[2px] bg-black rounded-2xl "></div>
            <p className="pt-3">
              From wearables and e-patient records to in-patient care and
              pharmaceutical services, our interactive UI UX design solutions
              seamlessly connect and elevate every aspect of the healthcare
              ecosystem.
            </p>
          </div>
          <div className="mt-5 md:mt-0">
            <h1 className="font-bold text-lg md:text-2xl">
              Fintech and Banking
            </h1>
            <div className="w-14 mt-1 h-[2px] bg-black rounded-2xl "></div>
            <p className="pt-3">
              From online banking services to stock trading platforms and
              cryptocurrency exchanges to digital wallets, our design solutions
              and products have helped simplify the digital financial landscape.
            </p>
          </div>
        </div>
        <div className="mt-5 md:flex md:justify-between md:ml-36 md:w-[700px] gap-10 w-full md:mt-20">
          <div className="">
            <h1 className="font-bold text-lg md:text-2xl">
              Healthcare and Wellness
            </h1>
            <div className="w-14 mt-1 h-[2px] bg-black rounded-2xl "></div>
            <p className="pt-3">
              From wearables and e-patient records to in-patient care and
              pharmaceutical services, our interactive UI UX design solutions
              seamlessly connect and elevate every aspect of the healthcare
              ecosystem.
            </p>
          </div>
          <div className="mt-5 md:mt-0">
            <h1 className="font-bold text-lg md:text-2xl">
              Fintech and Banking
            </h1>
            <div className="w-14 mt-1 h-[2px] bg-black rounded-2xl "></div>
            <p className="pt-3">
              From online banking services to stock trading platforms and
              cryptocurrency exchanges to digital wallets, our design solutions
              and products have helped simplify the digital financial landscape.
            </p>
          </div>
        </div>
        <div className="md:mt-16 mt-10 md:ml-36 md:text-[14px]">
          <Link className="text-[#FD2E35]  font-sans  ">
            View All Industries
          </Link>
          <div className="w-14 mt-1 h-[2px] bg-[#FD2E35] rounded-2xl "></div>
        </div>
      </div>
      <div className="mt-16 md:mt-28">
        <div className="md:ml-36">
          <h1 className="text-2xl md:text-[52px]  text-[#221429] font-bold">
            Our Stories
          </h1>
          <p className="md:py-10 py-5 text-[#221429] text-xl md:text-2xl">
            Discover the heart of what we do—our culture, research methods,
            design thinking, and product development.
          </p>
          <div className="mt-3">
            <div className="md:flex ">
              <img
                src="/stories/story1.webp"
                alt="story"
                className="w-full object-cover transform transition-transform  hover:scale-110 duration-500 md:h-[330px] md:w-[310px] md:mt-10 md:object-cover "
              />
              <div className="md:pl-10 mt-5 md:mt-0 ">
                <h1 className="text-[#221429] font-extrabold text-[12px]">
                  WHITE PAPER
                </h1>
                <h1 className="text-[#221429] text-xl pt-3 md:text-3xl font-extrabold ">
                  UX Audit eBook: The Ultimate Guide to Spot UX Problems
                </h1>
                <p className="text-[#877c88] pt-2 pb-1 md:pb-3">
                  This eBook offers an overview of UX Design Audits — from key
                  benefits to the ideal timing for conducting. Inside, you’ll
                  find a detailed UX checklist and step-by-step process to help
                  you identify and resolve…
                </p>
                <p className="text-[#221429] text-[12px] md:text-[13px]">
                  Posted on 20 June, 2025
                </p>
              </div>
            </div>
            <div className="md:mt-16 mt-10 md:text-[14px]">
              <Link className="text-[#FD2E35]  font-sans  ">
                View all Whitepapers
              </Link>
              <div className="w-14 mt-1 h-[2px] bg-[#FD2E35] rounded-2xl "></div>
            </div>
          </div>
          <div className="mt-3">
            <div className="md:flex ">
              <img
                src="/studio/studio4.webp"
                alt="story"
                className="w-full hidden object-cover transform transition-transform  hover:scale-110 duration-500 md:block md:h-[210px] md:w-[310px] md:mt-10 md:object-contain "
              />
              <img
                src="/stories/story3.webp"
                alt="story"
                className="w-full block md:hidden md:h-[230px] md:w-[310px] md:mt-10 md:object-cover "
              />
              <div className="md:pl-10 mt-5 md:mt-0 ">
                <h1 className="text-[#221429] font-extrabold text-[12px]">
                  BLOG
                </h1>
                <h1 className="text-[#221429] text-xl pt-3 md:text-3xl font-extrabold ">
                  How AI is Reshaping the Banking Customer Experience
                </h1>

                <p className="text-[#221429] text-[12px] pt-1 md:pt-3 md:text-[13px]">
                  By Minh Anh Trần on 5 July, 2025
                </p>
              </div>
            </div>
            <div className="md:mt-16 mt-10 md:text-[14px]">
              <Link className="text-[#FD2E35]  font-sans  ">
                View All Blogs
              </Link>
              <div className="w-14 mt-1 h-[2px] bg-[#FD2E35] rounded-2xl "></div>
            </div>
          </div>
          <div className="mt-16 md:mt-48">
            <div className="bg-[#221429] h-[600px] md:h-[520px] w-full flex flex-col pt-16 px-10 md:px-28 items-center">
              <h1 className="text-white text-2xl md:text-3xl">
                Call to Action
              </h1>
              <p className="text-3xl md:text-5xl py-8 md:py-10 text-center md:leading-[60px] text-white font-extrabold">
                Got an idea? Let’s build something remarkable together.
              </p>
              <button className="text-[#FD2E35] transition duration-700 hover:bg-[#FD2E35] hover:text-white px-7 rounded-full py-3 border-[2px] border-[#FD2E35] font-bold bg-[#221429]">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Domains;
