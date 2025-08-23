import React, { useEffect, useRef, useState } from "react";

const ProcessSticky = () => {
  const [activeTab, setActiveTab] = useState("agile");

  const tabBarRef = useRef(null);
  const agileRef = useRef(null);
  const buildRef = useRef(null);

  const sectionRef = {
    agile: agileRef,
    build: buildRef,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120; // for sticky buffer

      const sections = Object.entries(sectionRef);

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
    console.log(key);
    setActiveTab(key);
    const ref = sectionRef[key];
    console.log(ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="bg-[#f8f4f3] text-[#221429] md:w-[800px] md:ml-[80px]  mt-14 md:mt-24 ">
        {/* Sticky Tab Bar */}
        <div
          ref={tabBarRef}
          className="flex justify-between  sticky top-0 gap-5  bg-[#f8f4f3] py-10 ">
          {[
            {
              title: "For SMEs and Conglomerates",
              but: "For Startups",
              key: "agile",
            },
            {
              title: "For Startups",
              but: "For SMEs & Enterprises",
              key: "build",
            },
          ].map(({ title, but, key }) => (
            <div
              key={but}
              className="flex flex-col justify-center gap-2 items-center">
              <h1 className="text-[12px] md:text-[15px]">{title}</h1>
              <button
                onClick={() => scrollToSection(key)}
                className={`text-[17px] md:text-3xl font-bold capitalize transition-all ${
                  activeTab === key
                    ? "text-[#FD2E35] underline underline-offset-4"
                    : "font-extrabold"
                } `}>
                {but}
              </button>
            </div>
          ))}
        </div>
        {/* Section: Agile Design Process */}

        <section ref={agileRef}>
          <div className="bg-white h-1/2 p-5 md:p-10 ">
            <h1 className="text-lg md:text-2xl font-extrabold">
              Build Fast. Launch Smart. Learn Always.
            </h1>
            <div className="md:flex justify-between mt-10">
              <p className="text-md mt-5">
                Suited for:
                <br />
                <span className="font-extrabold">
                  Startups & Early-Stage Founders
                </span>
              </p>
              <p className=" mt-5">
                Timelines:
                <br /> <span className="font-extrabold ">2–3 Months</span>
              </p>
              <p className=" mt-5">
                Engagement Mode:
                <br />
                <span className="font-extrabold ">Fixed Duration</span>
              </p>
            </div>
            <h1 className="font-extrabold py-5">Steps:</h1>
            <ul className="list-decimal marker:text-[12px] text-[14px] ml-10 space-y-3 ">
              <li>Discover</li>
              <li>Design</li>
              <li>Build</li>
              <li>Amplify</li>
            </ul>
          </div>
          <div>
            <div className="mt-14 md:flex justify-between gap-10">
              <div>
                <h1>Step 1</h1>
                <h1 className="md:text-5xl font-extrabold py-2">Discover:</h1>

                <h1 className="text-[15px] md:text-lg md:mt-5 font-extrabold ">
                  Where strategy begins with listening.
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  We kick off with a discovery sprint to align on goals, user
                  behavior, and the competitive landscape. This phase builds the
                  foundation for every decision we make.
                </p>
              </div>
              <div>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  Activities include:
                </h1>
                <ul className="list-disc space-y-3 mt-5 marker:text-[12px] text-[14px] ml-10">
                  <li>Stakeholder Interviews & Workshops</li>
                  <li>User Needs & Persona Mapping</li>
                  <li>Market & Competitor Research</li>
                  <li>Heuristic Analysis & UX Audits</li>
                  <li>Journey Mapping</li>
                </ul>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  What to expect:
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  A 2–3 week deep dive workshop led by our UX strategists to
                  align your vision, define pain points, and gather insights
                  that drive clarity and direction.
                </p>
              </div>
            </div>
            <div className="mt-14 md:flex justify-between gap-10">
              <div>
                <h1>Step 2</h1>
                <h1 className="md:text-5xl font-extrabold py-2">Design:</h1>

                <h1 className="text-[15px] md:text-lg md:mt-5 font-extrabold ">
                  Ideas take shape through user-centered creativity.
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  Using everything we’ve learned, we build interfaces and
                  interactions that are human, functional, and brand-aligned.
                  You’ll see your product evolve with every round of feedback.
                </p>
              </div>
              <div>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  Activities include:
                </h1>
                <ul className="list-disc space-y-3 mt-5 marker:text-[12px] text-[14px] ml-10">
                  <li>Information Architecture</li>
                  <li>Wireframes & Low-Fidelity Sketches</li>
                  <li>UI Design & Visual Systems</li>
                  <li>Design Systems & Component Libraries</li>
                  <li>Interactive Prototyping</li>
                  <li>Usability Testing</li>
                </ul>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  What to expect:
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  Collaborative design sprints with frequent reviews, iteration
                  loops, and visual storytelling to align business goals with
                  user expectations.
                </p>
              </div>
            </div>
            <div className="mt-14 md:flex justify-between gap-10">
              <div>
                <h1>Step 3</h1>
                <h1 className="md:text-5xl font-extrabold py-2">Build:</h1>

                <h1 className="text-[15px] md:text-lg md:mt-5 font-extrabold ">
                  Turning design into reliable, responsive products.
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  Our engineering team brings your vision to life with scalable,
                  secure technology. We ensure performance across devices and
                  readiness for launch.
                </p>
              </div>
              <div>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  Activities include:
                </h1>
                <ul className="list-disc space-y-3 mt-5 marker:text-[12px] text-[14px] ml-10">
                  <li>Frontend & Backend Development</li>
                  <li>Web & App Engineering</li>
                  <li>CMS/Headless Builds</li>
                  <li>3rd-Party Integrations</li>
                  <li>Testing, QA & Automation</li>
                  <li>DevOps & Deployment Pipelines</li>
                </ul>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  What to expect:
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  End-to-end implementation, from code to launch. We focus on
                  performance, security, and seamless integration with your tech
                  stack.
                </p>
              </div>
            </div>
            <div className="mt-14 md:flex justify-between gap-10">
              <div>
                <h1>Step 4</h1>
                <h1 className="md:text-5xl font-extrabold py-2">Amplify:</h1>

                <h1 className="text-[15px] md:text-lg md:mt-5 font-extrabold ">
                  Build is not the end. It’s the beginning of growth.
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  Now we take your product to market—strategically. Our
                  marketing, content, and analytics team ensures the right
                  people discover, use, and love your product.
                </p>
              </div>
              <div>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  Activities include:
                </h1>
                <ul className="list-disc space-y-3 mt-5 marker:text-[12px] text-[14px] ml-10">
                  <li>Go-to-Market Planning</li>
                  <li>SEO & Content Optimization</li>
                  <li>Brand Messaging & Campaign Strategy</li>
                  <li>Social Media & Paid Marketing</li>
                  <li>Product Video Assets</li>
                  <li>Growth Analytics & Feedback Loops</li>
                </ul>
                <h1 className="text-[15px] md:text-lg font-extrabold mt-5">
                  What to expect:
                </h1>
                <p className="text-md md:text-lg mt-5 ">
                  A strategic post-launch phase that ensures visibility,
                  traction, and continuous learning based on real user behavior.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProcessSticky;
