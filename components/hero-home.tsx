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
          (prevIndex) => (prevIndex + 1) % businessNames.length
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
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
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
              {/* Top animated border */}
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[96px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-accent"></div>
              {/* Bottom animated border */}
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[96px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-accent"></div>
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
                    href="#0"
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
            <div className="relative aspect-video rounded-3xl bg- px-5 py-3 before:pointer-events-none before:absolute before:-inset-0 ">
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
