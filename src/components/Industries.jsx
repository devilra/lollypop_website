import React from "react";

const CaseStudies = () => {
  const data = [
    {
      title: "Health & Wellness",
      image: "/studies/s1.jpg",
    },
    {
      title: "Fintech",
      image: "/studies/s2.jpg",
    },
    {
      title: "Education",
      image: "/studies/s3.avif",
    },
    {
      title: "Ecommerce",
      image: "/studies/s4.webp",
    },
    {
      title: "Government",
      image: "/studies/s5.jpg",
    },
    {
      title: "SaaS & Platforms",
      image: "/studies/s6.jpg",
    },
    {
      title: "Travel, Culture & Lifestyle",
      image: "/studies/s7.jpg",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden shadow-md group transform transition-transform duration-500 hover:scale-95">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white p-4">
              <h2 className="font-semibold text-lg text-black">{item.title}</h2>
              <div className="mt-1 cursor-pointer">
                <p className="text-[#FD2E35] text-sm">View Case Study</p>
                <div className="h-[1px] w-[20px] bg-[#FD2E35] transition-all duration-500 group-hover:w-[100px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
