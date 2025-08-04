import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-[#f8f4f3] py-12 md:px-4 ">
      <div className="flex  flex-col md:flex-row items-start md:items-center gap-5">
        <label className="border border-black inline-block w-full md:w-[400px] px-6 py-4 cursor-pointer text-sm text-black">
          Attach your Project Document
          <input type="file" className="hidden" />
        </label>
        <p className="text-sm text-gray-400">File size not more than 2 MB</p>
      </div>
      <p className="mt-4 font-semibold text-black text-sm">No Resumes Please</p>
      {/* Title */}
      <h2 className="text-xl md:text-3xl  pt-16 font-extrabold text-[#1e1422] mb-2">
        Your details
      </h2>
      <p className="text-gray-500 mb-8 text-sm">
        Project related discussions only, please!
      </p>

      {/* Form */}
      <form className="space-y-6">
        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full border border-gray-300 p-4 pr-28 rounded text-sm"
          />
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[#FD2E35] font-medium text-sm">
            Important
          </span>
        </div>

        {/* Email & Phone Row */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Email */}
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 pr-28 rounded text-sm"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[#FD2E35] font-medium text-sm">
              Important
            </span>
          </div>

          {/* Phone */}
          <div className="relative flex-1">
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 p-4 pr-28 rounded text-sm"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[#FD2E35] font-medium text-sm">
              Important
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 border-2 duration-500 border-[#FD2E35] text-[#FD2E35] px-8 py-3 rounded-full font-medium hover:bg-[#FD2E35] hover:text-white transition">
          Send Enquiry
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
