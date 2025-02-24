import React from "react";
import { AboutUsIcon } from "./svgicons";

const AboutUs = () => {
  return (
    <>
      <section className="bg overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="mx-auto max-w-6xl px-8">
          <div className="-mx-6 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-8/12">
              <div className="mt-10 lg:mt-0">
                <div className="flex flex-row gap-4">
                  <span className="mb-4 block text-4xl font-semibold text-primary">
                    About Us
                  </span>
                  <AboutUsIcon />
                </div>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[30px]/[38px]">
                  Hampshire Business Plans
                </h2>
                <p className="mb-5 font-open-sans text-base text-body-color">
                  At{" "}
                  <a
                    className="text-primary transition hover:text-secondary"
                    href="/"
                  >
                    Hampshire Business Plans
                  </a>
                  , we empower local entrepreneurs to transform their ideas into
                  actionable, tailored business plans. Our team is dedicated to
                  simplifying the planning process, ensuring every client has a
                  clear roadmap to success.
                </p>
                <p className="mb-8 font-open-sans text-base text-body-color">
                  Based right here in Hampshire, we understand the unique
                  challenges of starting and growing a business in our
                  community. We combine local insight with professional
                  expertise to create comprehensive business plans and financial
                  forecast models that make a real difference.
                </p>
                <p className="mb-8 font-open-sans text-base text-body-color">
                  Whether you’re just launching your venture or looking to
                  refine your strategy, we’re here to support you every step of
                  the way. Let’s build a brighter future for your business
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
