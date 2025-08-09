// StickyTabSections.jsx
import React, { useEffect, useRef, useState } from "react";

const StickyTabSections = () => {
  const [activeTab, setActiveTab] = useState("research");

  const tabBarRef = useRef(null);
  const researchRef = useRef(null);
  const designRef = useRef(null);
  const buildRef = useRef(null);
  const amplifyRef = useRef(null);

  const sectionRefs = {
    research: researchRef,
    design: designRef,
    build: buildRef,
    amplify: amplifyRef,
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
      <div className="bg-[#f8f4f3] text-[#221429] md:w-[800px] md:ml-72 mt-14 md:mt-24 ">
        {/* Sticky Tab Bar */}
        <div
          ref={tabBarRef}
          className="sticky top-0 z-50 bg-[#f8f4f3] py-10 flex justify-between gap-14 border-b border-gray-200">
          {["research", "design", "build", "amplify"].map((key) => (
            <button
              key={key}
              className={`text-[16px]  md:text-[40px] font-extrabold capitalize transition-all ${
                activeTab === key
                  ? "text-black underline underline-offset-4"
                  : "text-[#beb6be]"
              }`}
              onClick={() => scrollToSection(key)}>
              {key}
            </button>
          ))}
        </div>

        {/* Section: Research */}
        <section ref={researchRef} className="">
          <p className="mt-5 text-lg md:py-8 md:text-[24px] leading-8 md:w-[600px]">
            Insight-first, always. Every product decision should be informed,
            not assumed. Our research and strategy team helps you deeply
            understand your users, business needs, and market opportunities — so
            your product has a clear direction from day one.
          </p>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="mb-3 md:mb-10">
              <h3 className="font-extrabold text-xl md:text-[28px]">
                Heuristic Evaluation
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                A methodical expert review of your product’s usability to flag
                areas that could hinder user flow or satisfaction.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-xl md:text-[28px]">
                Design Audits
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                A visual and experience check of your existing product to
                highlight inconsistencies, design debt, and alignment gaps.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-xl md:text-[28px]">
                Usability Testing
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Gathering direct user feedback through hands-on testing to
                understand how real people interact with your product.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-xl md:text-[28px]">
                Ethnographic Research
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Observing users in their own environments to discover hidden
                pain points, patterns, and unmet needs.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-xl md:text-[28px]">
                Emerging Trends Research
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Staying ahead by identifying how new design, tech, or behavioral
                trends could impact or elevate your product experience.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-xl md:text-[28px]">
                UX Research (Quant & Qual)
              </h3>
              <p className="text-[16px] md:w-[250px] pt-2">
                Combining user interviews, analytics, and survey data to build a
                clear understanding of your audience and their goals.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl font-extrabold md:font-extrabold md:leading-tight mt-16 md:mt-24 md:text-[46px]">
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
              Where creativity meets clarity. Good design is more than visuals —
              it’s about intention, usability, and connection. We design brand
              systems and digital products that make things simpler for users
              and more powerful for businesses.
            </p>
            <div className="grid md:grid-cols-2  gap-7 md:gap-10 mt-10">
              <div className="mb-3 md:mb-16">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Brand Identity Systems
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Creating the building blocks of your brand — from logos and
                  colors to tone of voice and visual consistency.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  User Experience Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Creating holistic, usable and well structured digital
                  experiences that incorporate best design practices and
                  standards.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  UI/UX Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Designing web and mobile interfaces that are easy to use, easy
                  to love, and built around real user behavior.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Interaction Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Enhancing digital moments with meaningful motion, feedback,
                  and visual responses that support usability.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Design Systems
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Developing scalable component libraries to help teams work
                  faster and more consistently across products.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Wireframes & Prototyping
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Creating quick, clickable prototypes to test layouts and user
                  journeys before a single line of code is written.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Visual Storytelling
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Using illustration, iconography, and thoughtful layout to
                  simplify communication and connect emotionally.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Accessibility-First Design
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Designing experiences that are inclusive, WCAG-compliant, and
                  usable by all people regardless of ability.
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
              Building with care, scaling with confidence. Our engineering
              approach is as thoughtful as our design. We bring digital products
              to life using secure, scalable technology that evolves as you
              grow.
            </p>
            <div className="grid md:grid-cols-2  gap-7 md:gap-10 mt-10">
              <div className="mb-3 md:mb-16">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Frontend Development
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Building responsive interfaces that look great across devices
                  and feel smooth to interact with.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Backend Development
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Developing robust server-side architecture to power your
                  platform’s logic, features, and data handling.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Web & Mobile Apps
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Custom app and website development for both startups and
                  scale-ups, using the tech stack that fits best.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Headless CMS & Frameworks
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Flexible content and modular architecture setups that give
                  your teams more control and your users faster load times.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  API Integrations
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Securely connecting third-party tools, CRMs, payment gateways,
                  and data sources to your product.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Testing & QA
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Systematic testing — both manual and automated — to ensure
                  stability, usability, and performance at every stage.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  DevOps & Cloud Setup
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Smooth deployment pipelines, cloud infrastructure, and CI/CD
                  to support your product beyond launch.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold md:font-extrabold md:leading-tight mt-16 md:mt-24 md:text-[40px] md:w-[600px]">
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

        {/* Amplify section */}

        <section ref={amplifyRef} className="">
          <div>
            <p className="md:py-16 py-10 text-lg md:w-[600px] md:leading-[36px]  md:text-[24px] ">
              You’ve built it. Now let’s make sure they find it. A great product
              deserves great reach. Our growth team helps you launch, scale, and
              market your product through data-informed campaigns and smart
              brand positioning.
            </p>
            <div className="grid md:grid-cols-2  gap-7 md:gap-10 mt-10">
              <div className="mb-3 md:mb-16">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Go-to-Market Launch Strategy
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Helping you prepare your product or platform for a successful
                  public debut — with clarity, messaging, and momentum.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Messaging & Positioning
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Sharpening your brand story and tone so people understand who
                  you are and why you matter — fast.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-bold text-xl md:text-[28px]">
                  Performance Campaigns
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Running targeted, measurable campaigns across digital channels
                  to attract users and maximize ROI.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  SEO & Organic Content
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Improving discoverability through content optimization,
                  keyword strategy, and on-site SEO.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Social Strategy & Community
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Building consistent brand presence through social media
                  content, community engagement, and creator-led formats.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Explainers, Reels & Motion Assets
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Producing high-impact visuals and video content that
                  communicate, persuade, and perform.
                </p>
              </div>
              <div className="mb-3 md:mb-14">
                <h3 className="font-extrabold text-xl md:text-[28px]">
                  Data & Funnel Analytics
                </h3>
                <p className="text-[16px] md:w-[250px] pt-2">
                  Setting up dashboards and tracking tools to understand what’s
                  working — and what’s not — so we can keep improving.
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="grid grid-cols-3 mt-10 md:ml-5 md:space-y-3  md:grid-cols-4 gap-10 md:gap-14">
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
            </div> */}
            {/* <a
              href="#contact"
              className="mt-16 inline-block text-[#FD2E35]  text-[14px] relative group">
              View Our Clients
              <span className="block h-[1px] mt-1 w-6 bg-[#FD2E35] transition-all duration-300 group-hover:w-full"></span>
            </a> */}
          </div>
          {/* <div className="">
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
          </div> */}
        </section>
        <div className="mt-5">
          <h1 className="font-bold text-xl md:text-[28px]">
            Industries We Work With
          </h1>
          <p className="pt-2 text-[16px] ">
            We’ve worked across domains, but what ties our projects together is
            a shared focus on people their needs, behaviors, and goals.
          </p>
          <ul className="my-5 list-disc marker:text-[11px] space-y-2 ml-2 text-neutral-600 text-[14px]">
            <li>Health & Wellness</li>
            <li>EdTech & Learning Platforms</li>
            <li>Fintech & Insurance</li>
            <li>Ecommerce & Consumer Tech</li>
            <li>Civic & Government Services</li>
            <li>Mobility, Travel & Automotive</li>
            <li>B2B SaaS Platforms</li>
            <li>Culture, Music & Media</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl md:text-[28px]">
            Who We’ve Worked With
          </h1>
          <p className="pt-2 text-[16px]">
            Trusted by leading brands, government missions, and ambitious
            startups.
            <br />{" "}
            <span className="text-neutral-950 font-semibold tracking-[1px] inline-block mt-5 text-[12px]">
              Sony | Citizen | Maruti Suzuki | Aspirestar | Maestro’s Music |
              WHL | Securra | Tamilnadu Police | Trendalyze
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyTabSections;
