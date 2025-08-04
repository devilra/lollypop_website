import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ProjectHero = () => {
  const [activeTab, setActiveTab] = useState("project");

  const tabs = [
    { key: "project", label: "Project", sub: "Let’s Talk" },
    { key: "jobs", label: "Jobs / Careers", sub: "Join Us" },
    { key: "general", label: "General", sub: "Say Hello" },
  ];

  return (
    <div className="min-h-screen px-2 md:px-4 py-16 bg-[#f7f4f2] text-[#1a1523]">
      {/* Tabs */}
      <div className="flex md:ml-40 justify-start gap-12">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="cursor-pointer text-center">
            <p className="text-xs text-gray-600">{tab.sub}</p>
            <p
              className={`text-lg font-bold ${
                activeTab === tab.key ? "text-[#FD2E35]" : "text-black"
              }`}>
              {tab.label}
            </p>
            {activeTab === tab.key && (
              <div className="w-6 h-1 mt-1 bg-[#FD2E35] rounded-sm"></div>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="mt-16  md:max-w-4xl mx-auto ">
        <div className="flex items-start gap-3">
          {/* Left Red Line */}
          <div className="w-1 h-[40px] mt-2 hidden md:block bg-[#FD2E35]"></div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading ">
              Lets craft <br />
              <span className="text-4xl md:text-5xl font-bold">
                brilliance together
              </span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Got something in mind? We’d love to help.
            </p>
            <h1 className="mt-10 text-lg font-extrabold md:text-[24px]">
              Tell us about your project requirement
            </h1>
            <p className="text-[13px] md:w-[500px] text-[#776E7A] mt-3">
              Looking for UX/UI research or product branding? Post your query
              now, and we'll get in touch with you soon!
            </p>
            <textarea
              className="md:w-[800px] w-full h-[120px] pl-3 md:pl-10 pt-5 md:h-[220px] border mt-5 focus:border-[#FD2E35] p-2 "
              placeholder="How can we help?"></textarea>
            <div>
              <h1 className="text-[13px] md:w-[500px] text-[#776E7A] mt-5">
                If you have a requirement brief or document, share it with us
                here.
              </h1>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>

      {/* Floating Icon (bottom right) */}
      {/* <div className="fixed bottom-6 right-6 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg">
        💬
      </div> */}
    </div>
  );
};

export default ProjectHero;
