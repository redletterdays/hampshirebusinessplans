import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="before:bg relative before:absolute before:inset-0 before:-z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              Hampshire Business Plans helps write your Business Plan so you can
              take the next step forward with your business
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-primary),transparent)]">
                <Image
                  className="rounded-full bg-gray-300"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <div>
                    <Image
                      className="absolute top-16 -left-28 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute top-7 left-56 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute bottom-24 -left-20 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              What Are The Key Pillars of a Business Plan?
            </h2>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden *:relative *:p-6 *:before:absolute *:before:[inset-inline-start:-1px] *:before:bg-gray-400 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:after:absolute *:after:[inset-inline-start:0] *:after:bg-gray-400 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] sm:grid-cols-2 md:*:p-10 lg:grid-cols-3">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M88 12l-7 0 0 -6c0,-3 -3,-6 -6,-6l-63 0c-3,0 -6,3 -6,6l0 75c0,4 3,6 6,6l7 0 0 7c0,3 3,6 6,6l63 0c3,0 6,-3 6,-6l0 -75c0,-4 -3,-7 -6,-7zm-76 69l0 0 0 -75 63 0 0 75 -63 0zm76 13l0 0 -63 0 0 -7 50 0c3,0 6,-2 6,-6l0 -62 7 0 0 75z" />
                  <path d="M66 19l-32 0c-1,0 -3,1 -3,3 0,2 2,3 3,3l32 0c1,0 3,-1 3,-3 0,-2 -2,-3 -3,-3z" />
                  <path d="M66 38l-44 0c-2,0 -3,1 -3,3 0,1 1,3 3,3l44 0c1,0 3,-2 3,-3 0,-2 -2,-3 -3,-3z" />
                  <path d="M66 50l-44 0c-2,0 -3,1 -3,3 0,2 1,3 3,3l44 0c1,0 3,-1 3,-3 0,-2 -2,-3 -3,-3z" />
                  <path d="M66 63l-44 0c-2,0 -3,1 -3,3 0,1 1,3 3,3l44 0c1,0 3,-2 3,-3 0,-2 -2,-3 -3,-3z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Executive Summary</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                A high-level overview of your business, outlining its purpose,
                key objectives, and how you plan to achieve success. Investors
                and stakeholders often read this first.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="m49.996 19.062c-28.129 0-49.367 29.047-49.367 29.047-0.87109 1.1602-0.83594 2.7695 0.09375 3.8828 0.96875 1.3047 21.809 28.945 49.273 28.945 26.73 0 47.199-26.199 49.172-28.809 0.97266-1.0508 1.1055-2.625 0.33203-3.8242-0.050781-0.074219-0.10547-0.15234-0.16016-0.22266-0.25-0.33984-21.383-29.016-49.344-29.016zm0 6.2578c19.863 0 37.617 18.672 42.812 24.672-5.1953 6.0078-22.949 24.695-42.812 24.695-19.859 0-37.613-18.688-42.812-24.695 5.1992-6 22.953-24.672 42.812-24.672zm0 5.9922c-10.277 0-18.664 8.4102-18.664 18.688 0 10.281 8.3867 18.684 18.664 18.684s18.66-8.4023 18.66-18.684-8.3828-18.688-18.66-18.688zm0 6.25c6.8945 0 12.41 5.5352 12.41 12.438 0 6.9062-5.5117 12.434-12.41 12.434-6.8945 0-12.434-5.5273-12.434-12.434s5.5352-12.438 12.434-12.438z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Vision</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Your long-term mission and goals, defining the impact your
                business aims to make in its industry and the world.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={64}
                  height={64}
                  viewBox="0 0 100 100"
                >
                  {" "}
                  <path d="M18,4.25h-.25V4A2.752,2.752,0,0,0,15,1.25H9A2.752,2.752,0,0,0,6.25,4v.25H6A4.756,4.756,0,0,0,1.25,9v8A4.756,4.756,0,0,0,6,21.75H18A4.756,4.756,0,0,0,22.75,17V9A4.756,4.756,0,0,0,18,4.25ZM7.75,4A1.252,1.252,0,0,1,9,2.75h6A1.252,1.252,0,0,1,16.25,4v.25H7.75Zm-5,5A3.254,3.254,0,0,1,6,5.75H18A3.254,3.254,0,0,1,21.25,9v1A3.254,3.254,0,0,1,18,13.25H14.633a2.733,2.733,0,0,0-5.266,0H6A3.254,3.254,0,0,1,2.75,10Zm10.5,5A1.25,1.25,0,1,1,12,12.75,1.252,1.252,0,0,1,13.25,14ZM18,20.25H6A3.254,3.254,0,0,1,2.75,17V13.446A4.721,4.721,0,0,0,6,14.75H9.367a2.733,2.733,0,0,0,5.266,0H18a4.721,4.721,0,0,0,3.25-1.3V17A3.254,3.254,0,0,1,18,20.25Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Business Description</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                A detailed breakdown of your company, including its history,
                structure, industry, and the problem it aims to solve.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                ></svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Products &amp; Services</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                A comprehensive overview of what your business offers, including
                unique selling points, benefits, and how they meet customer
                needs.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Timing / Why now?</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                An explanation of why this is the perfect time to launch or grow
                your business, considering market trends, demand, and industry
                shifts.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Traction</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Evidence of progress, such as customer growth, revenue,
                partnerships, or milestones, demonstrating business viability.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Business Model - Value Proposition
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                How your company generates revenue and delivers value to
                customers, including pricing strategy and monetization methods.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Competitive Analysis &amp; Your Unique Advantage
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                An assessment of competitors and how your business
                differentiates itself, highlighting strengths and strategic
                advantages.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Market Analysis &amp; Research
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Insights into your target market, customer demographics, trends,
                and demand, backed by industry research.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Management Team &amp; Organisational Structure
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                A breakdown of your team, leadership experience, and company
                hierarchy, showcasing expertise and operational efficiency.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Marketing &amp; Sales Strategy - Go to Market Plan
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Your approach to attracting and retaining customers, including
                advertising, branding, and sales channels.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center gap-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Operational Plan</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                How your business will function daily, covering logistics,
                production, supply chain, and technology needs.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Financial Plan - 3 Year Financial Forecast Model
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Projections of revenue, expenses, and profitability over three
                years, with key financial metrics and assumptions.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Investment Ask &amp; Use of Investment
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                The amount of funding needed, how it will be allocated, and
                expected returns for investors.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">Risk Analysis</span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Potential risks and challenges, along with strategies to
                mitigate them, ensuring business resilience.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-700">
                <svg
                  className="fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 100 100"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <span className="break-words">
                    Appendix of Supporting Documents
                  </span>
                </div>
              </h3>
              <p className="font-open-sans text-[15px] text-gray-400">
                Additional materials such as legal agreements, patents, market
                research data, and references to support your business plan.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
