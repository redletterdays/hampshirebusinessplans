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
                  width={20}
                  height={20}
                  viewBox="0 0 27 27"
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
                  width={25}
                  height={25}
                  viewBox="0 0 400 200"
                >
                  <path d="M10 20c-13,0 -13,-20 0,-20l63 0c5,0 9,3 9,8l2 4 230 0c7,0 12,7 10,13l-46 120c-1,4 -5,7 -9,7l-156 0c-4,0 -8,-3 -10,-7 -12,-42 -25,-84 -38,-125l-55 0zm80 12l30 100 142 0 38 -100 -210 0z" />
                  <path d="M10 20c-13,0 -13,-20 0,-20l63 0c5,0 9,3 9,8l2 4 230 0c7,0 12,7 10,13l-46 120c-1,4 -5,7 -9,7l-156 0c-4,0 -8,-3 -10,-7 -12,-42 -25,-84 -38,-125l-55 0zm80 12l30 100 142 0 38 -100 -210 0z" />
                  <path d="M138 159c16,0 29,13 29,29 0,15 -13,28 -29,28 -16,0 -28,-13 -28,-28 0,-16 12,-29 28,-29zm0 20c-5,0 -8,4 -8,9 0,4 3,8 8,8 5,0 9,-4 9,-8 0,-5 -4,-9 -9,-9z" />
                  <path d="M243 159c15,0 28,13 28,29 0,15 -13,28 -28,28 -16,0 -29,-13 -29,-28 0,-16 13,-29 29,-29zm0 20c-5,0 -9,4 -9,9 0,4 4,8 9,8 4,0 8,-4 8,-8 0,-5 -4,-9 -8,-9z" />
                </svg>
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
                  width={20}
                  height={20}
                  viewBox="0 0 110 100"
                >
                  <path d="m50 6.25c-24.125 0-43.75 19.625-43.75 43.75s19.625 43.75 43.75 43.75 43.75-19.625 43.75-43.75-19.625-43.75-43.75-43.75zm0 81.25c-20.688 0-37.5-16.812-37.5-37.5s16.812-37.5 37.5-37.5 37.5 16.812 37.5 37.5-16.812 37.5-37.5 37.5zm3.125-62.5v25c0 0.84375-0.34375 1.625-0.90625 2.2188l-12.938 12.938c-0.625 0.625-1.4062 0.90625-2.2188 0.90625s-1.5938-0.3125-2.2188-0.90625c-1.2188-1.2188-1.2188-3.1875 0-4.4062l12.031-12.031v-23.719c0-1.7188 1.4062-3.125 3.125-3.125s3.125 1.4062 3.125 3.125z" />
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
                  width={25}
                  height={25}
                  viewBox="0 0 50 50"
                ></svg>
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
                  width={30}
                  height={30}
                  viewBox="0 0 20 20"
                >
                  <path
                    d="m 8.4063583,0.7925242 a 0.26458349,0.26458349 0 0 0
                  -0.2656179,0.265617 v 2.046903 a 0.26458349,0.26458349 0 0 0
                  0.2656179,0.26355 0.26458349,0.26458349 0 0 0
                  0.2640647,-0.26355 V 1.0581412 A 0.26458349,0.26458349 0 0 0
                  8.4063583,0.7925242 Z m -4.3986979,1.157552 a
                  0.26458349,0.26458349 0 0 0 -0.1441794,0.03617
                  0.26458349,0.26458349 0 0 0 -0.093533,0.361218 l
                  1.0448977,1.773535 a 0.26458349,0.26458349 0 0 0
                  0.3632835,0.09353 0.26458349,0.26458349 0 0 0
                  0.093535,-0.363285 L 4.2247008,2.0797842 A
                  0.26458349,0.26458349 0 0 0 4.0076604,1.9500762 Z m
                  8.7973956,0 a 0.26458349,0.26458349 0 0 0 -0.217043,0.129708 l
                  -1.046448,1.771468 a 0.26458349,0.26458349 0 0 0
                  0.09353,0.363285 0.26458349,0.26458349 0 0 0 0.363287,-0.09353
                  l 1.044897,-1.773535 a 0.26458349,0.26458349 0 0 0
                  -0.09353,-0.361218 0.26458349,0.26458349 0 0 0
                  -0.144693,-0.03617 z m -8.3850187,3.520199 a
                  0.26460897,0.26460897 0 0 0 -0.2284095,0.130741 l
                  -2.0133151,3.458187 a 0.26460995,0.26460995 0 0 0
                  -0.00517,0.0088 l -0.00465,0.0078 a 0.26460897,0.26460897 0 0
                  0 -0.024286,0.05684 0.26460995,0.26460995 0 0 0
                  -0.00517,0.02532 0.26460897,0.26460897 0 0 0 -0.00465,0.05323
                  0.26460995,0.26460995 0 0 0 0,0.02377 0.26460897,0.26460897 0
                  0 0 0.016018,0.06511 0.26460995,0.26460995 0 0 0
                  0.012404,0.02687 0.26460897,0.26460897 0 0 0 0.032557,0.05013
                  0.26460995,0.26460995 0 0 0 0.0062,0.0093 l
                  6.0704306,6.6683258 a 0.26460995,0.26460995 0 0 0 0.3906758,0
                  L 14.731034,9.3863732 a 0.26460995,0.26460995 0 0 0
                  0.01757,-0.02325 0.26460897,0.26460897 0 0 0 10e-4,-0.0021
                  0.26460995,0.26460995 0 0 0 0.02687,-0.04547
                  0.26460897,0.26460897 0 0 0 10e-4,-0.0031
                  0.26460995,0.26460995 0 0 0 0.0088,-0.02274
                  0.26460897,0.26460897 0 0 0 0.0062,-0.02222
                  0.26460995,0.26460995 0 0 0 0.0052,-0.08733
                  0.26460995,0.26460995 0 0 0 -0.02997,-0.09767
                  0.26460897,0.26460897 0 0 0 -0.0036,-0.0067 l
                  -2.021581,-3.474724 a 0.26460897,0.26460897 0 0 0
                  -0.230478,-0.130741 z m 0.4609545,0.529683 h 3.1253906 l
                  -1.5626953,2.683558 z m 4.0467808,0 h 3.1238404 l
                  -1.561145,2.683558 z m -4.5077353,0.261483 1.5626953,2.681491
                  H 2.8599244 Z m 4.0472968,0 1.5621789,2.681491 H 6.9046388 Z m
                  4.0447149,0.0021 1.562695,2.679424 H 10.951422 Z M
                  2.9963515,9.4726152 H 6.2468 l 1.6247057,5.3552268 z m
                  3.8044199,0 H 10.133384 L 8.4673341,14.961684 Z m 3.8850336,0
                  h 3.251999 L 9.0616148,14.829392 Z"
                  />
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
                  width={21}
                  height={21}
                  viewBox="0 0 90 90"
                >
                  <path d="M19.63,59.4c2.68,0,4.86-2.18,4.86-4.86c0-1.53-0.73-2.88-1.84-3.78L35.7,31.45c0.74,0.45,1.59,0.72,2.51,0.72  c1.47,0,2.77-0.67,3.66-1.7l10.76,10.51c-0.44,0.73-0.71,1.58-0.71,2.49c0,2.68,2.18,4.86,4.86,4.86s4.86-2.18,4.86-4.86  c0-1.49-0.69-2.81-1.75-3.7l14.21-26.1c0.41,0.11,0.83,0.19,1.27,0.19c2.68,0,4.86-2.18,4.86-4.86s-2.18-4.86-4.86-4.86  s-4.86,2.18-4.86,4.86c0,1.44,0.64,2.71,1.63,3.6L57.9,38.75c-0.36-0.09-0.73-0.14-1.12-0.14c-0.96,0-1.84,0.29-2.6,0.77  L42.94,28.39c0.08-0.35,0.13-0.71,0.13-1.08c0-2.68-2.18-4.86-4.86-4.86s-4.86,2.18-4.86,4.86c0,0.93,0.28,1.8,0.74,2.54  L20.63,49.79c-0.32-0.07-0.65-0.1-0.99-0.1c-2.68,0-4.86,2.18-4.86,4.86S16.96,59.4,19.63,59.4z M75.37,6.36  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S73.92,6.36,75.37,6.36z M56.79,40.84  c1.45,0,2.63,1.18,2.63,2.63c0,1.45-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63C54.16,42.02,55.34,40.84,56.79,40.84z M38.21,24.69  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63s-2.63-1.18-2.63-2.63S36.76,24.69,38.21,24.69z M19.63,51.91  c1.45,0,2.63,1.18,2.63,2.63s-1.18,2.63-2.63,2.63c-1.45,0-2.63-1.18-2.63-2.63S18.18,51.91,19.63,51.91z M91.34,88.64h-8.96v-61.7  c0-0.61-0.5-1.11-1.11-1.11H69.46c-0.61,0-1.11,0.5-1.11,1.11v61.7H63.8V59.05c0-0.62-0.5-1.11-1.11-1.11H50.88  c-0.61,0-1.11,0.5-1.11,1.11v29.58h-4.54V44.65c0-0.61-0.5-1.11-1.11-1.11H32.31c-0.61,0-1.11,0.5-1.11,1.11v43.99h-4.54v-19.2  c0-0.62-0.5-1.11-1.11-1.11H13.73c-0.61,0-1.11,0.5-1.11,1.11v19.2H3.66c-0.61,0-1.11,0.5-1.11,1.11s0.5,1.11,1.11,1.11h10.07h11.81  h6.77h11.81h6.77h11.81h6.77h11.81h10.07c0.61,0,1.11-0.5,1.11-1.11S91.95,88.64,91.34,88.64z M14.84,88.64V70.56h9.58v18.08H14.84z   M33.42,88.64V45.76H43v42.88H33.42z M52,88.64V60.17h9.58v28.47H52z M70.57,88.64V28.05h9.58v60.59H70.57z" />
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
                  width={20}
                  height={20}
                  viewBox="0 0 100 100"
                >
                  <path d="m92.844 88.406-25.812-25.812c4.9688-5.9688 7.9688-13.625 7.9688-21.969 0-18.969-15.406-34.375-34.375-34.375s-34.375 15.406-34.375 34.375 15.406 34.375 34.375 34.375c8.3438 0 16.031-3 21.969-7.9688l25.812 25.812c0.625 0.625 1.4062 0.90625 2.2188 0.90625s1.5938-0.3125 2.2188-0.90625c1.2188-1.2188 1.2188-3.1875 0-4.4062zm-80.344-47.781c0-15.5 12.625-28.125 28.125-28.125s28.125 12.625 28.125 28.125-12.625 28.125-28.125 28.125-28.125-12.625-28.125-28.125z" />
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
                  width={23}
                  height={23}
                  viewBox="0 0 100 100"
                >
                  <path
                    d="m 22.3141,21.8038 c 4.9479,0 8.9537,4.0041 8.9537,8.937
                  0,4.9329 -4.0058,8.937 -8.9537,8.937 -4.9479,0 -8.9538,-4.0041
                  -8.9538,-8.937 0,-4.9329 4.0059,-8.937 8.9538,-8.937 z m
                  12.9537,8.937 c 0,-7.1478 -5.8025,-12.937 -12.9537,-12.937
                  -7.1513,0 -12.95376,5.7892 -12.95376,12.937 0,7.1478
                  5.80246,12.937 12.95376,12.937 7.1512,0 12.9537,-5.7892
                  12.9537,-12.937 z m 33.4644,0 c 0,-4.9329 4.0058,-8.937
                  8.9537,-8.937 4.9479,0 8.9538,4.0041 8.9538,8.937 0,4.9329
                  -4.0059,8.937 -8.9538,8.937 -4.9479,0 -8.9537,-4.0041
                  -8.9537,-8.937 z m 8.9537,-12.937 c -7.1512,0 -12.9537,5.7892
                  -12.9537,12.937 0,7.1478 5.8025,12.937 12.9537,12.937 7.1513,0
                  12.9538,-5.7892 12.9538,-12.937 0,-7.1478 -5.8025,-12.937
                  -12.9538,-12.937 z M 65.8983,54.9794 c 1.9841,-2.3599
                  4.9602,-3.8551 8.3083,-3.8551 h 6.9586 C 87.174,51.1243
                  92,55.9473 92,61.9394 v 9.0422 c 0,1.1046 0.8954,2 2,2
                  1.1046,0 2,-0.8954 2,-2 V 61.9394 C 96,53.7324 89.3774,47.1243
                  81.1652,47.1243 h -6.9586 c -4.57,0 -8.6525,2.0488
                  -11.37,5.281 -0.7108,0.8455 -0.6016,2.1071 0.2438,2.8179
                  0.8455,0.7109 2.1071,0.6017 2.8179,-0.2438 z M 50,31.0183 c
                  -4.9479,0 -8.9537,4.0041 -8.9537,8.937 0,4.9329 4.0058,8.937
                  8.9537,8.937 4.9479,0 8.9537,-4.0041 8.9537,-8.937 0,-4.9329
                  -4.0058,-8.937 -8.9537,-8.937 z m -12.9537,8.937 c 0,-7.1478
                  5.8024,-12.937 12.9537,-12.937 7.1513,0 12.9537,5.7892
                  12.9537,12.937 0,7.1478 -5.8024,12.937 -12.9537,12.937
                  -7.1513,0 -12.9537,-5.7892 -12.9537,-12.937 z m
                  -1.3604,31.1985 c 0,-5.992 4.826,-10.8151 10.8348,-10.8151 h
                  6.9586 c 6.0088,0 10.8348,4.8231 10.8348,10.8151 v 9.0424 c
                  0,1.1045 0.8954,2 2,2 1.1045,0 2,-0.8955 2,-2 v -9.0424 c
                  0,-8.207 -6.6227,-14.8151 -14.8348,-14.8151 h -6.9586 c
                  -8.2122,0 -14.8348,6.6081 -14.8348,14.8151 v 9.0424 c 0,1.1045
                  0.8954,2 2,2 1.1046,0 2,-0.8955 2,-2 V 71.1538 z M
                  18.8348,47.1243 C 10.6226,47.1243 4,53.7324 4,61.9394 v 9.0422
                  c 0,1.1046 0.89543,2 2,2 1.10457,0 2,-0.8954 2,-2 V 61.9394 C
                  8,55.9473 12.826,51.1243 18.8348,51.1243 h 6.9586 c 3.3481,0
                  6.3242,1.4952 8.3083,3.8551 0.7108,0.8455 1.9724,0.9547
                  2.8179,0.2438 0.8454,-0.7108 0.9546,-1.9724 0.2438,-2.8179
                  -2.7174,-3.2322 -6.8,-5.281 -11.37,-5.281 h -6.9586 z"
                  />
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
                  width={21}
                  height={21}
                  viewBox="0 0 100 100"
                >
                  <path d="m48.527 48.527c-0.8125 0.8125-0.8125 2.1328 0 2.9453 0.40625 0.40625 0.94141 0.60938 1.4727 0.60938s1.0664-0.20312 1.4727-0.60938l10.012-10.012c0.33203 0.085937 0.65625 0.20312 1.0156 0.20312h12.496c1.1055 0 2.1641-0.4375 2.9453-1.2188l12.383-12.383c0.82812-0.76172 1.3477-1.8516 1.3477-3.0625 0-2.3008-1.8555-4.1641-4.1562-4.1641h-8.3516v-8.332c0-1.6836-1.0156-3.2031-2.5703-3.8477-0.51562-0.21484-1.0586-0.31641-1.5938-0.31641-1.0859 0-2.1484 0.42188-2.9453 1.2188l-12.5 12.5c-0.78125 0.78125-1.2188 1.8398-1.2188 2.9453v12.496c0 0.35938 0.11719 0.68359 0.20312 1.0156zm13.969-23.523 12.496-12.496v12.496h12.496l-12.492 12.5h-12.496v-12.5zm-12.496 2.1797c0 1.0781-0.82031 1.9727-1.8945 2.0703-10.879 0.98047-19.348 10.328-18.922 21.559 0.41016 10.797 9.207 19.594 20.004 20.004 11.23 0.42578 20.574-8.0391 21.559-18.922 0.097656-1.0742 0.99219-1.8945 2.0703-1.8945h0.003906c1.2148 0 2.1836 1.0391 2.0742 2.25-1.1758 13.121-12.531 23.355-26.09 22.719-12.793-0.59766-23.176-10.98-23.773-23.773-0.63672-13.559 9.5977-24.914 22.719-26.09 1.2109-0.10938 2.25 0.85938 2.25 2.0742zm41.148 16.484c0.33203 2.0625 0.51562 4.1758 0.51562 6.332 0 23.52-19.59 42.547-43.309 41.629-21.625-0.83594-39.148-18.359-39.984-39.984-0.91797-23.719 18.109-43.305 41.629-43.305 2.1562 0 4.2656 0.18359 6.3281 0.51172 1.668 0.26953 2.3164 2.3281 1.1211 3.5234-0.46484 0.46484-1.1211 0.6875-1.7734 0.58594-1.8516-0.28906-3.7422-0.46094-5.6797-0.46094-20.707 0-37.496 16.785-37.496 37.492 0 20.691 16.805 37.496 37.496 37.496 20.707 0 37.496-16.785 37.496-37.496 0-1.9336-0.17188-3.8281-0.46094-5.6797-0.10156-0.64844 0.12109-1.3086 0.58594-1.7734 1.1992-1.1875 3.2617-0.53906 3.5312 1.1289zm-45.312 6.4492c0.058593 2.1758 1.8711 3.9844 4.0469 4.0469 1.8828 0.050782 3.4961-1.1484 4.0664-2.8242 0.27344-0.82031 1.082-1.3398 1.9453-1.3398 1.4141 0 2.4453 1.3906 1.9805 2.7266-1.1797 3.3945-4.4922 5.7969-8.3281 5.5938-4.2031-0.22266-7.6445-3.6641-7.8672-7.8672-0.20313-3.8359 2.1992-7.1484 5.5938-8.3281 1.3359-0.46484 2.7266 0.56641 2.7266 1.9805 0 0.86328-0.51953 1.6719-1.3398 1.9453-1.6797 0.57031-2.8789 2.1836-2.8242 4.0664z" />
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
                  width={20}
                  height={20}
                  viewBox="0 0 100 100"
                >
                  <path d="M62.158,83.255l-0.989,9.637c-0.123,1.205-1.141,2.103-2.327,2.102V95H41.159c-1.272,0-2.308-1.013-2.345-2.276  l-0.972-9.469c-3.847-1.41-7.408-3.475-10.548-6.107l-8.86,3.971c-1.103,0.492-2.385,0.06-2.976-0.963l-0.002,0.001L6.614,64.843  c-0.629-1.087-0.287-2.47,0.758-3.141l7.754-5.604c-0.703-4.073-0.703-8.123,0-12.196l-7.852-5.675  c-1.004-0.722-1.264-2.094-0.62-3.129l8.802-15.245c0.603-1.049,1.896-1.453,2.977-0.969l0.001-0.002l8.86,3.971  c3.141-2.633,6.7-4.697,10.548-6.107l0.989-9.637c0.123-1.205,1.141-2.103,2.327-2.102V5h17.683c1.272,0,2.308,1.013,2.345,2.276  l0.972,9.469c3.847,1.41,7.408,3.475,10.548,6.107l8.86-3.971c1.103-0.492,2.385-0.061,2.976,0.963l0.002-0.001l8.841,15.314  c0.629,1.087,0.287,2.47-0.758,3.141l-7.754,5.604c0.703,4.073,0.703,8.123,0,12.196l7.852,5.675  c1.004,0.722,1.264,2.094,0.62,3.129l-8.802,15.245c-0.603,1.049-1.896,1.453-2.977,0.969l-0.001,0.002l-8.86-3.971  C69.567,79.78,66.005,81.846,62.158,83.255L62.158,83.255z M50,31.659c-10.129,0-18.341,8.212-18.341,18.341  c0,16.287,19.784,24.495,31.31,12.969C74.496,51.442,66.286,31.659,50,31.659L50,31.659z M59.652,40.348  c-8.577-8.577-23.301-2.47-23.301,9.652s14.724,18.229,23.301,9.652C64.982,54.321,64.982,45.679,59.652,40.348L59.652,40.348z   M56.73,90.308c1.5-14.613-0.318-8.531,8.617-13.696c1.912-1.105,3.682-2.397,5.282-3.848c0.665-0.676,1.704-0.905,2.621-0.496  l8.301,3.72l6.731-11.659c-10.302-7.446-8.398-4.965-7.746-10.997c0.359-3.321,0.173-6.697-0.54-9.95l0.006-0.001  c-0.19-0.881,0.142-1.83,0.919-2.39l7.357-5.318l-6.732-11.66l-8.297,3.718L73.25,27.73c-0.823,0.367-1.821,0.237-2.528-0.41  c-3.265-2.986-7.178-5.255-11.443-6.605l0.001-0.004c-0.863-0.273-1.525-1.036-1.623-1.993L56.73,9.692H43.27  c-1.5,14.613,0.317,8.531-8.617,13.696c-1.911,1.105-3.682,2.397-5.282,3.848c-0.665,0.676-1.704,0.905-2.621,0.496l-8.301-3.72  l-6.731,11.659c10.302,7.446,8.398,4.965,7.746,10.997c-0.359,3.321-0.173,6.697,0.54,9.95l-0.006,0.001  c0.19,0.881-0.142,1.83-0.919,2.39l-7.357,5.318l6.732,11.66l8.297-3.718l0.001,0.002c0.823-0.367,1.821-0.237,2.528,0.41  c3.265,2.986,7.178,5.255,11.443,6.605l-0.001,0.004c0.863,0.273,1.525,1.036,1.623,1.993l0.926,9.026H56.73z" />
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
                ></svg>
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
                  width={23}
                  height={23}
                  viewBox="0 0 100 100"
                >
                  <path d="m87.07 69.012-28-48.492c-1.8906-3.2812-5.2891-5.2383-9.0703-5.2383s-7.1797 1.9609-9.0703 5.2383l-28 48.492c-1.8906 3.2812-1.8906 7.1914 0 10.469 1.8906 3.2812 5.2812 5.2383 9.0703 5.2383h55.988c3.7891 0 7.1797-1.9609 9.0703-5.2383 1.8906-3.2812 1.8906-7.1914 0-10.469zm-6.0586 6.9688c-0.30078 0.51953-1.1992 1.7383-3.0117 1.7383h-56c-1.8086 0-2.7109-1.2109-3.0117-1.7383-0.30078-0.51953-0.91016-1.9102 0-3.4688l28-48.492c0.91016-1.5703 2.4102-1.7383 3.0117-1.7383s2.1016 0.17188 3.0117 1.7383l28 48.488c0.91016 1.5703 0.30078 2.9492 0 3.4688z" />
                  <path d="m50 34.512c-1.9297 0-3.5 1.5703-3.5 3.5v21c0 1.9297 1.5703 3.5 3.5 3.5s3.5-1.5703 3.5-3.5v-21c0-1.9297-1.5703-3.5-3.5-3.5z" />
                  <path d="m53.5 69.012c0 4.6641-7 4.6641-7 0 0-4.668 7-4.668 7 0" />
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
