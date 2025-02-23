import React from "react";
import { ReactNode } from "react";
import { MapIcon, CompassIcon, FullExpeditionIcon } from "./svgicons";

const Pricing = () => {
  return (
    <section className="bg relative z-10 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-2xl text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Hampshire Business Plans
              </span>
              <h2 className="mb-3 text-2xl leading-[1.208] font-bold text-dark sm:text-2xl md:text-[40px]">
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
              SvgIcons={[CompassIcon]}
              price="495 GBP"
              subscription=""
              description=""
              buttonText="Choose Compass"
              buttonLink="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
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
              SvgIcons={[MapIcon]}
              price="795 GBP"
              subscription=""
              description=""
              buttonText="Choose Map"
              buttonLink="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
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
              SvgIcons={[FullExpeditionIcon]}
              price="1,195 GBP"
              subscription=""
              description=""
              buttonText="Choose Full Expedition"
              buttonLink="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
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
  SvgIcons = [],
  subscription,
  buttonText,
  active = false, // ✅ Default value ensures it's optional
  buttonLink,
}: {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  SvgIcons?: React.FC[];
  subscription: string;
  buttonText: string;
  active?: boolean; // ✅ Mark as optional
  buttonLink: string;
}) => {
  return (
    <>
      <div className="flex w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 flex flex-col overflow-hidden rounded-[10px] border-1 border-stroke bg-white/70 px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <div className="mb-3 flex flex-row items-center gap-4">
            <span className="block text-3xl font-semibold whitespace-nowrap text-primary sm:text-xl md:text-2xl">
              {type}
            </span>
            <div>
              {SvgIcons.map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>
          </div>
          <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color">
            {description}
          </p>
          <div className="mb-8 flex flex-grow flex-col space-y-5 font-open-sans">
            {children}
          </div>
          <a
            href={buttonLink}
            className={` ${
              active
                ? "mb-8 block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-secondary"
                : "mb-8 block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            } `}
          >
            {buttonText}
          </a>
          <h2 className="mb-2xl font-open-sans text-2xl font-medium text-dark">
            {price}
            <span className="text-base font-medium text-body-color">
              {subscription}
            </span>
          </h2>
          <div>
            <span className="absolute top-7 right-0 z-[-1]"></span>
            <span className="absolute top-4 right-4 z-[-1]">
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
        className="h-7 w-7 flex-shrink-0 text-primary" // ✅ Consistent tick size
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
