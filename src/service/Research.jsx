// StickyTabSections.jsx
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import ServiceFooter from "./SeviceFooter";

const StickyTabSections = () => {
  const [activeTab, setActiveTab] = useState("research");

  const tabBarRef = useRef(null);
  const researchRef = useRef(null);
  const designRef = useRef(null);
  const buildRef = useRef(null);

  const sectionRefs = {
    research: researchRef,
    design: designRef,
    build: buildRef,
  };

  // Scroll listener to highlight active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120; // for sticky buffer

      const sections = Object.entries(sectionRefs);

      for (let i = 0; i < sections.length; i++) {
        const [key, ref] = sections[i];
        const element = ref.current;
        if (element) {
          const top = element.offsetTop - offset;
          const bottom = top + element.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActiveTab(key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (key) => {
    setActiveTab(key);
    //console.log(key);
    const ref = sectionRefs[key];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="bg-[#f8f4f3] text-[#221429] md:w-[700px] md:ml-44 mt-14 md:mt-24 ">
        {/* Sticky Tab Bar */}
        <div
          ref={tabBarRef}
          className="sticky top-0 z-50 bg-[#f8f4f3] py-10 flex justify-between gap-10 border-b border-gray-200">
          {["research", "design", "build"].map((key) => (
            <button
              key={key}
              className={`text-xl  md:text-[40px] font-bold capitalize transition-all ${
                activeTab === key
                  ? "text-black underline underline-offset-4"
                  : "text-[#CDC7CA]"
              }`}
              onClick={() => scrollToSection(key)}>
              {key}
            </button>
          ))}
        </div>

        {/* Section: Research */}
        <section ref={researchRef} className="">
          <p className="mt-4 text-lg md:py-8 md:text-[24px] leading-8 md:w-[600px]">
            We provide meaningful and actionable data-driven insights that
            represent the voice of a user and resonate with business objectives,
            aligning perfectly with our UI/UX design and development services.
          </p>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="mb-3 md:mb-10">
              <h3 className="font-bold text-xl md:text-[28px]">
                Heuristic Analysis
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Expert reviews evaluate the usability of a product based on
                predetermined design principles, ensuring high standards.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[28px]">Design Audit</h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Conducting an evaluation to check various aspects of the quality
                of design of an existing product.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[28px]">
                Usability Testing
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Evaluating a product or service through real-time testing with
                target users to gather qualitative and quantitative data,
                ensuring seamless user experience design.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[28px]">
                Ethnographic Research
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                A qualitative method involving observing users in the context of
                their real technical and social environment.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[28px]">
                Emerging Trends
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Seeing how we can design to incorporate all the latest
                advancements in technology, in all of our projects.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl md:text-[28px]">UX Research</h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Studying and evaluating the target audience while understanding
                their behavioural patterns, experience, interaction, and
                emotion.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl font-bold md:font-extrabold md:leading-tight mt-16 md:mt-24 md:text-[46px]">
                Clients who trusted us with Research
              </h1>
              <div className="grid grid-cols-3 mt-10 md:ml-5 md:space-y-3  md:grid-cols-4 gap-10">
                <img src="/lenova/c1.svg" alt="C1" className="h-8 md:h-7 " />
                <img src="/lenova/c2.svg" alt="C1" className="h-8 md:h-7 " />
                <img src="/lenova/c3.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c4.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c5.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c6.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c7.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c8.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c9.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c10.svg" alt="C1" className="h-8 md:h-7" />
                <img src="/lenova/c11.svg" alt="C1" className="h-8 md:h-7" />
              </div>
              <a
                href="#contact"
                className="mt-16 inline-block text-[#FD2E35]  text-[14px] relative group">
                View Our Clients
                <span className="block h-[1px] mt-1 w-6 bg-[#FD2E35] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="">
            <div className="bg-[#221429] w-full md:h-[400px] md:gap-10 md:flex justify-between  h-[700px] p-10 md:p-10 mt-16">
              <div className="flex flex-col justify-center ">
                <div className="">
                  <img
                    src="/lenova/name1.webp"
                    alt="Name"
                    className="h-[300px]  rounded-md md:w-[480px] md:h-[230px] "
                  />
                </div>
                <h1 className="text-[22px] pl-14 md:pl-10 py-2 text-white font-bold">
                  Ameet Palkar
                </h1>
                <p className="text-[14px] pl-16 md:pl-16 text-white">
                  Design Director
                </p>
              </div>
              <div>
                <div>
                  <h1 className="md:text-[40px] text-xl py-5 md:py-0 md:leading-tight text-white font-extrabold">
                    Talk to our research expert
                  </h1>
                  <p className="text-white md:py-5 ">
                    Struggling with user engagement? Our UI UX design services
                    enhance usability and conversion. Book a free consultation
                    now!
                  </p>
                  <div className="ml-20 md:ml-0 my-10 md:my-0">
                    <button className="text-[#FD2E35] transition duration-700 hover:bg-[#FD2E35] hover:text-white px-7 rounded-full py-3 border-[2px] border-[#FD2E35] font-bold bg-[#221429]">
                      Let's Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Design */}
        <section ref={designRef} className="">
          <div>
            <p className="md:py-16 py-10 text-lg md:w-[600px] md:leading-[36px]  md:text-[24px] ">
              We see design as a collaborative endeavor, requiring inputs from
              all stakeholders in order to create immersive experience and
              scalable solutions through our UI UX Design and consulting
              services.
            </p>
            <div className="grid md:grid-cols-2  gap-7 md:gap-10 mt-10">
              <div className="mb-3 md:mb-16">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Digital Branding
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  A strategic process to help your brand establish a
                  platform-agnostic identity and presence.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  User Experience Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Creating holistic, usable and well structured digital
                  experiences that incorporate best design practices and
                  standards.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  User Interface Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Designing aesthetic, delightful and visually appealing
                  products that are functional and enjoyable to use.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Interaction Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Simplifying human computer interactions to yield intuitive,
                  seamless and task-oriented outcomes.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Digital Prototyping
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Making a prototype of the final product and testing it in real
                  time to get inputs and reliable user feedback.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Motion Graphics
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Integrating input oriented movements in real time, to enhance
                  the quality of interactions within a product.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Digital Illustrations
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Crafting stunning, visually consistent sets of icon styles and
                  illustrations, in line with all relevant brand guidelines.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Data Visualization
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Visualizing your data and immediately representing it in a
                  compelling, easier to analyze and understanding format.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Intelligent Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  A user-centric design for your AI-driven platforms. With
                  journey visualizations, we create futuristic experience for
                  your AI solutions
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold md:font-extrabold md:leading-tight mt-16 md:mt-24 md:text-[40px] md:w-[600px]">
              Clients who trusted us with Design
            </h1>
            <div className="grid grid-cols-3 mt-10 md:ml-5 md:space-y-3  md:grid-cols-4 gap-10 md:gap-14">
              <img src="/design/d1.svg" alt="C1" className="h-8 md:h-7 " />
              <img src="/design/d2.svg" alt="C1" className="h-8 md:h-7 " />
              <img src="/design/d3.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d4.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d5.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d6.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d7.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d8.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d9.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d10.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d11.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/d12.svg" alt="C1" className="h-8 md:h-7" />
            </div>
            <a
              href="#contact"
              className="mt-16 inline-block text-[#FD2E35]  text-[14px] relative group">
              View Our Clients
              <span className="block h-[1px] mt-1 w-6 bg-[#FD2E35] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="">
            <div className="bg-[#221429] w-full md:h-[400px] md:gap-10 md:flex justify-between  h-[700px] p-10 md:p-10 mt-16">
              <div className="flex flex-col justify-center ">
                <div className="">
                  <img
                    src="/design/rama.webp"
                    alt="Name"
                    className="h-[300px]  rounded-md md:w-[400px] md:h-[230px] "
                  />
                </div>
                <h1 className="text-[22px] pl-20 md:pl-14 py-2 text-white font-bold">
                  Rama Kini
                </h1>
                <p className="text-[14px] pl-2 text-center md:pl-1 text-white">
                  EVP, Digital Transformation & Software Services
                </p>
              </div>
              <div>
                <div>
                  <h1 className="md:text-[40px] text-xl py-5 md:py-0 md:leading-tight text-white font-extrabold">
                    Talk to our design expert
                  </h1>
                  <p className="text-white md:py-5 ">
                    Find out how best UX UI design services can empower your
                    business.
                  </p>
                  <div className="ml-20 md:ml-0 my-10 md:my-0">
                    <button className="text-[#FD2E35] transition duration-700 hover:bg-[#FD2E35] hover:text-white px-7 rounded-full py-3 border-[2px] border-[#FD2E35] font-bold bg-[#221429]">
                      Let's Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Build */}
        <section ref={buildRef} className="">
          <div>
            <p className="md:py-16 py-10 text-lg md:w-[600px] md:leading-[36px]  md:text-[24px] ">
              We help you translate any kind of design into functional and
              scalable digital products such as websites, mobile apps, or
              enterprise platforms/solutions.
            </p>
            <div className="grid md:grid-cols-2  gap-7 md:gap-10 mt-10">
              <div className="mb-3 md:mb-16">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Front-End Development
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Implementing the best combination of technologies (full-stack,
                  mean stack, flutter, native-OS) for your project.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Web Applications
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Implementing the perfect blend of agile development to create
                  dynamic and responsive web applications.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Mobile Applications
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Leveraging the latest technologies to develop robust and
                  scalable hybrid and native mobile applications.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Custom Applications
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Implementing the best combination of technologies to develop
                  interfaces for wearables, dashboards and IOTs.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  SAAS Implementation
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Using a cloud-first approach to create anytime-anywhere access
                  based scalable SAAS applications.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  CMS Integration
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Building a platform that is accessible and can be managed by
                  the customers in order to create, manage and modify digital
                  content on their website easily.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold md:font-extrabold md:leading-tight mt-16 md:mt-24 md:text-[40px] md:w-[600px]">
              Clients who trusted us to build their products
            </h1>
            <div className="grid grid-cols-3 mt-10 md:ml-5 md:space-y-3  md:grid-cols-4 gap-10 md:gap-14">
              <img src="/design/b1.svg" alt="C1" className="h-8 md:h-7 " />
              <img src="/design/b2.svg" alt="C1" className="h-8 md:h-7 " />
              <img src="/design/b3.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b4.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b5.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b6.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b7.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b8.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b9.svg" alt="C1" className="h-8 md:h-7" />
              <img src="/design/b10.svg" alt="C1" className="h-8 md:h-7" />
            </div>
            <a
              href="#contact"
              className="mt-16 inline-block text-[#FD2E35]  text-[14px] relative group">
              View Our Clients
              <span className="block h-[1px] mt-1 w-6 bg-[#FD2E35] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="">
            <div className="bg-[#221429] w-full md:h-[400px] md:gap-10 md:flex justify-between  h-[700px] p-10 md:p-10 mt-16">
              <div className="flex flex-col justify-center ">
                <div className="">
                  <img
                    src="/design/chandra.webp"
                    alt="Name"
                    className="h-[300px]  rounded-md md:w-[400px] md:h-[230px] "
                  />
                </div>
                <h1 className="text-[22px] pl-20 md:pl-14 py-2 text-white font-bold">
                  Sri Chandra Dronavalli
                </h1>
                <p className="text-[14px] pl-2 text-center md:pl-1 text-white">
                  Director - Engineer, SW Services
                </p>
              </div>
              <div>
                <div>
                  <h1 className="md:text-[40px] text-xl py-5 md:py-0 md:leading-tight text-white font-extrabold">
                    Talk to our development expert
                  </h1>
                  <p className="text-white md:py-5 ">
                    Get to know how technology can be leveraged to turn your
                    idea into a reality.
                  </p>
                  <div className="ml-20 md:ml-0 my-10 md:my-0">
                    <button className="text-[#FD2E35] transition duration-700 hover:bg-[#FD2E35] hover:text-white px-7 rounded-full py-3 border-[2px] border-[#FD2E35] font-bold bg-[#221429]">
                      Let's Talk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StickyTabSections;
