import React from "react";
import { ListTick } from "./listtick";
import {
  MapIcon,
  CompassIcon,
  FullExpeditionIcon,
  PrivacyIcon,
} from "./svgicons";

const Privacy = () => {
  return (
    <>
      <section className="bg overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <div className="flex flex-row gap-4">
                  <span className="mb-4 block text-4xl font-semibold text-primary">
                    Privacy
                  </span>
                  <PrivacyIcon />
                </div>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                  You’ve done the legwork of writing the business plan
                </h2>
                <p className="mb-5 font-open-sans text-base text-body-color">
                  You did some research and started to build the financial
                  model, but if you’re unsure if you’re on the right track,
                  we're here to guide you.
                </p>
                <p className="mb-8 font-open-sans text-base text-body-color">
                  We can help with refining your Business Plan and Financial
                  Forecast Model so you can move forward with confidence.
                </p>
                <p className="mb-8 font-open-sans text-base text-body-color">
                  We will have a Strategic Meeting to thoroughly review your
                  Business Plan, Financial Forecast Model and provide
                  recommendations.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center rounded-md border border-stroke bg-transparent px-7 py-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  Choose Compass
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 space-y-4 lg:mt-0">
                <ListTick>Refining Your Business Plan</ListTick>
                <ListTick>Reviewing Your Financial Forecast Model</ListTick>
                <ListTick>
                  Personalised Step by Step Guide To Moving Forward with Your
                  Business Plan
                </ListTick>
                <ListTick>
                  Strategic Meeting to Provide Recommendations for Your Business
                  Plan & Financial Forecast Model
                </ListTick>
                <span className="text-md px-17 font-open-sans font-normal text-body-color">
                  495 GBP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
