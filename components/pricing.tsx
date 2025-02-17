import React from "react";
import { ReactNode } from "react";

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-2xl text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Hampshire Business Plans
              </span>
              <h2 className="mb-3 text-2xl font-bold leading-[1.208] text-dark sm:text-2xl md:text-[40px]">
                Choose A Business Plan Offering Thats Right For You
              </h2>
              <p className="text-base text-body-color"></p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Compass"
              svgPath1="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z"
              svgPath2="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z"
              price="495 GBP"
              subscription=""
              description=""
              buttonText="Choose Compass"
            >
              <List>Refining Your Business Plan</List>
              <List>Reviewing Your Financial Forecast Model</List>
              <List>
                Personalised Step by Step Guide To Moving Forward with Your
                Business Plan
              </List>
              <List>
                Strategic Meeting to Provide Recommendations for Your Business
                Plan & Financial Forecast Model
              </List>
            </PricingCard>
            <PricingCard
              type="Map"
              svgPath1="M14.29 .614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z"
              svgPath2="M14.29 .614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z"
              price="795 GBP"
              subscription=""
              description=""
              buttonText="Choose Map"
              active
            >
              <List>Writing Your Business Plan</List>
              <List>Creating Your Financial Forecast Model</List>
              <List>
                Personalised Step by Step Guide To Moving Forward with Your
                Business Plan
              </List>
              <List>Research Review Meeting</List>
              <List>Designing Your Primary Research Questions</List>
              <List>Designing Your Secondary Research Questions</List>
              <List>
                Strategic Meeting to Provide Recommendations for Your Business
                Plan & Financial Forecast Model
              </List>
            </PricingCard>
            <PricingCard
              type="Full Expedition"
              svgPath1="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z"
              svgPath2="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z"
              price="1,195 GBP"
              subscription=""
              description=""
              buttonText="Choose Full Expedition"
            >
              <List>Writing Your Business Plan</List>
              <List>Creating Your Financial Forecast Model</List>
              <List>
                In-House Team Will Conduct Your Secondary Research In-Depth
              </List>
              <List>
                Personalised Step by Step Guide To Moving Forward with Your
                Business Plan
              </List>
              <List>Research Review Meeting</List>
              <List>Designing Your Primary Research Questions</List>
              <List>
                Strategic Meeting to Provide Recommendations for Your Business
                Plan & Financial Forecast Model
              </List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  svgPath1,
  svgPath2,
  subscription,
  buttonText,
  active = false, // ✅ Default value ensures it's optional
}: {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  svgPath1: string;
  svgPath2: string;
  subscription: string;
  buttonText: string;
  active?: boolean; // ✅ Mark as optional
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 flex">
        <div className="relative z-10 mb-10 flex flex-col overflow-hidden rounded-[10px] border-1 border-stroke bg-white/70 px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <div className="flex flex-col-1 gap-4">
            <span className="mb-3 block text-3xl font-semibold text-primary">
              {type}
            </span>
            <svg
              className="fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
            >
              <path d={svgPath1} opacity=".3" />
              <path d={svgPath2} />
            </svg>
          </div>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color">
            {description}
          </p>
          <div className="mb-8 flex flex-col space-y-5 flex-grow font-open-sans">
            {children}
          </div>
          <a
            href="/#"
            className={` ${
              active
                ? "mb-8 block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-secondary"
                : "mb-8 block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            } `}
          >
            {buttonText}
          </a>
          <h2 className="mb-2xl text-2xl font-medium text-dark font-open-sans">
            {price}
            <span className="text-base font-medium text-body-color">
              {subscription}
            </span>
          </h2>
          <div>
            <span className="absolute right-0 top-7 z-[-1]"></span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#159cae"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#159cae"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#159cae"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#159cae"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#159cae"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }: { children: ReactNode }) => {
  return (
    <p className="flex items-center space-x-2 text-base text-body-color">
      <svg
        className="w-7 h-7 flex-shrink-0 text-primary" // ✅ Consistent tick size
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L9 11.586l6.293-6.293a1 1 0 0 1 1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-base">{children}</span>{" "}
      {/* ✅ Ensures text size remains constant */}
    </p>
  );
};
