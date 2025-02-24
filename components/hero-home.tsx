"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";

const businessNames = [
  "Entrepreneurs",
  "Bakers",
  "Photographers",
  "Fashion Designers",
  "Real Estate Agents",
  "Fitness Trainers",
  "Restaurants",
  "Tech Startups",
  "Marketing Agencies",
  "Consultants",
  "Event Planners",
  "Beauty Salons",
  "Craftsmen",
  "Law Firms",
  "Medical Practices",
  "Financial Advisors",
  "Travel Agencies",
  "Interior Designers",
  "Freelance Writers",
  "Software Developers",
  "Art Galleries",
];

export default function HeroHome() {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsFading(true);
      // After the fade-out duration, update the name and fade in
      setTimeout(() => {
        setCurrentNameIndex(
          (prevIndex) => (prevIndex + 1) % businessNames.length,
        );
        setIsFading(false);
      }, 500); // fade duration of 500ms
    }, 3000); // change name every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 flex flex-row justify-center border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <svg
                  className="box-content rounded-full border-2 border-gray-50 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 90 90"
                >
                  <path d="M19.63,59.4c2.68,0,4.86-2.18,4.86-4.86c0-1.53-0.73-2.88-1.84-3.78L35.7,31.45c0.74,0.45,1.59,0.72,2.51,0.72  c1.47,0,2.77-0.67,3.66-1.7l10.76,10.51c-0.44,0.73-0.71,1.58-0.71,2.49c0,2.68,2.18,4.86,4.86,4.86s4.86-2.18,4.86-4.86  c0-1.49-0.69-2.81-1.75-3.7l14.21-26.1c0.41,0.11,0.83,0.19,1.27,0.19c2.68,0,4.86-2.18,4.86-4.86s-2.18-4.86-4.86-4.86  s-4.86,2.18-4.86,4.86c0,1.44,0.64,2.71,1.63,3.6L57.9,38.75c-0.36-0.09-0.73-0.14-1.12-0.14c-0.96,0-1.84,0.29-2.6,0.77  L42.94,28.39c0.08-0.35,0.13-0.71,0.13-1.08c0-2.68-2.18-4.86-4.86-4.86s-4.86,2.18-4.86,4.86c0,0.93,0.28,1.8,0.74,2.54  L20.63,49.79c-0.32-0.07-0.65-0.1-0.99-0.1c-2.68,0-4.86,2.18-4.86,4.86S16.96,59.4,19.63,59.4z M75.37,6.36  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S73.92,6.36,75.37,6.36z M56.79,40.84  c1.45,0,2.63,1.18,2.63,2.63c0,1.45-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63C54.16,42.02,55.34,40.84,56.79,40.84z M38.21,24.69  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S36.76,24.69,38.21,24.69z M19.63,51.91  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63c-1.45,0-2.63-1.18-2.63-2.63S18.18,51.91,19.63,51.91z M91.34,88.64h-8.96v-61.7  c0-0.61-0.5-1.11-1.11-1.11H69.46c-0.61,0-1.11,0.5-1.11,1.11v61.7H63.8V59.05c0-0.62-0.5-1.11-1.11-1.11H50.88  c-0.61,0-1.11,0.5-1.11,1.11v29.58h-4.54V44.65c0-0.61-0.5-1.11-1.11-1.11H32.31c-0.61,0-1.11,0.5-1.11,1.11v43.99h-4.54v-19.2  c0-0.62-0.5-1.11-1.11-1.11H13.73c-0.61,0-1.11,0.5-1.11,1.11v19.2H3.66c-0.61,0-1.11,0.5-1.11,1.11s0.5,1.11,1.11,1.11h10.07h11.81  h6.77h11.81h6.77h11.81h6.77h11.81h10.07c0.61,0,1.11-0.5,1.11-1.11S91.95,88.64,91.34,88.64z M14.84,88.64V70.56h9.58v18.08H14.84z   M33.42,88.64V45.76H43v42.88H33.42z M52,88.64V60.17h9.58v28.47H52z M70.57,88.64V28.05h9.58v60.59H70.57z" />
                </svg>
              </div>
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <svg
                  className="box-content rounded-full border-2 border-gray-50 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 90 90"
                >
                  <path d="M19.63,59.4c2.68,0,4.86-2.18,4.86-4.86c0-1.53-0.73-2.88-1.84-3.78L35.7,31.45c0.74,0.45,1.59,0.72,2.51,0.72  c1.47,0,2.77-0.67,3.66-1.7l10.76,10.51c-0.44,0.73-0.71,1.58-0.71,2.49c0,2.68,2.18,4.86,4.86,4.86s4.86-2.18,4.86-4.86  c0-1.49-0.69-2.81-1.75-3.7l14.21-26.1c0.41,0.11,0.83,0.19,1.27,0.19c2.68,0,4.86-2.18,4.86-4.86s-2.18-4.86-4.86-4.86  s-4.86,2.18-4.86,4.86c0,1.44,0.64,2.71,1.63,3.6L57.9,38.75c-0.36-0.09-0.73-0.14-1.12-0.14c-0.96,0-1.84,0.29-2.6,0.77  L42.94,28.39c0.08-0.35,0.13-0.71,0.13-1.08c0-2.68-2.18-4.86-4.86-4.86s-4.86,2.18-4.86,4.86c0,0.93,0.28,1.8,0.74,2.54  L20.63,49.79c-0.32-0.07-0.65-0.1-0.99-0.1c-2.68,0-4.86,2.18-4.86,4.86S16.96,59.4,19.63,59.4z M75.37,6.36  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S73.92,6.36,75.37,6.36z M56.79,40.84  c1.45,0,2.63,1.18,2.63,2.63c0,1.45-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63C54.16,42.02,55.34,40.84,56.79,40.84z M38.21,24.69  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S36.76,24.69,38.21,24.69z M19.63,51.91  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63c-1.45,0-2.63-1.18-2.63-2.63S18.18,51.91,19.63,51.91z M91.34,88.64h-8.96v-61.7  c0-0.61-0.5-1.11-1.11-1.11H69.46c-0.61,0-1.11,0.5-1.11,1.11v61.7H63.8V59.05c0-0.62-0.5-1.11-1.11-1.11H50.88  c-0.61,0-1.11,0.5-1.11,1.11v29.58h-4.54V44.65c0-0.61-0.5-1.11-1.11-1.11H32.31c-0.61,0-1.11,0.5-1.11,1.11v43.99h-4.54v-19.2  c0-0.62-0.5-1.11-1.11-1.11H13.73c-0.61,0-1.11,0.5-1.11,1.11v19.2H3.66c-0.61,0-1.11,0.5-1.11,1.11s0.5,1.11,1.11,1.11h10.07h11.81  h6.77h11.81h6.77h11.81h6.77h11.81h10.07c0.61,0,1.11-0.5,1.11-1.11S91.95,88.64,91.34,88.64z M14.84,88.64V70.56h9.58v18.08H14.84z   M33.42,88.64V45.76H43v42.88H33.42z M52,88.64V60.17h9.58v28.47H52z M70.57,88.64V28.05h9.58v60.59H70.57z" />
                </svg>
              </div>
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <svg
                  className="box-content rounded-full border-2 border-gray-50 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 90 90"
                >
                  <path d="M19.63,59.4c2.68,0,4.86-2.18,4.86-4.86c0-1.53-0.73-2.88-1.84-3.78L35.7,31.45c0.74,0.45,1.59,0.72,2.51,0.72  c1.47,0,2.77-0.67,3.66-1.7l10.76,10.51c-0.44,0.73-0.71,1.58-0.71,2.49c0,2.68,2.18,4.86,4.86,4.86s4.86-2.18,4.86-4.86  c0-1.49-0.69-2.81-1.75-3.7l14.21-26.1c0.41,0.11,0.83,0.19,1.27,0.19c2.68,0,4.86-2.18,4.86-4.86s-2.18-4.86-4.86-4.86  s-4.86,2.18-4.86,4.86c0,1.44,0.64,2.71,1.63,3.6L57.9,38.75c-0.36-0.09-0.73-0.14-1.12-0.14c-0.96,0-1.84,0.29-2.6,0.77  L42.94,28.39c0.08-0.35,0.13-0.71,0.13-1.08c0-2.68-2.18-4.86-4.86-4.86s-4.86,2.18-4.86,4.86c0,0.93,0.28,1.8,0.74,2.54  L20.63,49.79c-0.32-0.07-0.65-0.1-0.99-0.1c-2.68,0-4.86,2.18-4.86,4.86S16.96,59.4,19.63,59.4z M75.37,6.36  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S73.92,6.36,75.37,6.36z M56.79,40.84  c1.45,0,2.63,1.18,2.63,2.63c0,1.45-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63C54.16,42.02,55.34,40.84,56.79,40.84z M38.21,24.69  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S36.76,24.69,38.21,24.69z M19.63,51.91  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63c-1.45,0-2.63-1.18-2.63-2.63S18.18,51.91,19.63,51.91z M91.34,88.64h-8.96v-61.7  c0-0.61-0.5-1.11-1.11-1.11H69.46c-0.61,0-1.11,0.5-1.11,1.11v61.7H63.8V59.05c0-0.62-0.5-1.11-1.11-1.11H50.88  c-0.61,0-1.11,0.5-1.11,1.11v29.58h-4.54V44.65c0-0.61-0.5-1.11-1.11-1.11H32.31c-0.61,0-1.11,0.5-1.11,1.11v43.99h-4.54v-19.2  c0-0.62-0.5-1.11-1.11-1.11H13.73c-0.61,0-1.11,0.5-1.11,1.11v19.2H3.66c-0.61,0-1.11,0.5-1.11,1.11s0.5,1.11,1.11,1.11h10.07h11.81  h6.77h11.81h6.77h11.81h6.77h11.81h10.07c0.61,0,1.11-0.5,1.11-1.11S91.95,88.64,91.34,88.64z M14.84,88.64V70.56h9.58v18.08H14.84z   M33.42,88.64V45.76H43v42.88H33.42z M52,88.64V60.17h9.58v28.47H52z M70.57,88.64V28.05h9.58v60.59H70.57z" />
                </svg>
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Tailored Business Plans
              <br /> for Hampshire
              <br />
              <span
                className={`transition-opacity duration-500 ease-in-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                {businessNames[currentNameIndex]}
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 font-open-sans text-lg text-gray-800"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Wanting to start a business but you're unsure how to begin with
                your business plan?
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-primary to-secondary bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started Now{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={500}
          >
            <div className="bg- relative aspect-video rounded-3xl px-5 py-3 before:pointer-events-none before:absolute before:-inset-0">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] after:w-[41px]">
                <span className="text-[16px] font-semibold text-primary">
                  Creating Your Business Plan
                </span>
              </div>
              <div className="font-open-sans text-lg font-semibold text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-800">
                  Writing Your Business Plan
                </span>{" "}
                <br />
                <br />
                <span className="animate-[code-2_10s_infinite] text-gray-800">
                  Creating Your Financial Forecast Model
                </span>
                <br />
                <br />
                <span className="animate-[code-3_10s_infinite] text-gray-800">
                  Personalised Step by Step Guide To Moving Forward with Your
                  Business Plan
                </span>{" "}
                <br />
                <br />
                <span className="animate-[code-4_10s_infinite] text-gray-800">
                  Research Review Meeting
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-800">
                  Designing Your Primary Research Questions
                </span>
                <br />
                <br />
                <span className="animate-[code-6_10s_infinite] text-gray-800">
                  Designing Your Secondary Research Questions
                </span>
                <br />
                <br />
                <span className="animate-[code-7_10s_infinite] text-gray-800">
                  Strategic Meeting to Provide Recommendations for Your Business
                  Plan & Financial Forecast Model
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
