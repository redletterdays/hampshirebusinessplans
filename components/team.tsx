import React from "react";
import Image from "next/image";
import { AboutUsIcon } from "./svgicons";

const Team = () => {
  return (
    <>
      <section className="bg overflow-hidden pt-10 pb-12 lg:pt-10 lg:pb-4">
        <div className="mx-auto max-w-6xl px-8">
          <div className="-mx-6 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-8/12">
              <div className="mt-10 pb-8 lg:mt-0">
                <div className="flex flex-row gap-4">
                  <span className="mb-4 block text-4xl font-semibold text-primary">
                    Team
                  </span>
                  <AboutUsIcon />
                </div>
                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[30px]/[38px]">
                  Meet Your Business Planners
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
      <section className="bg overflow-hidden pb-12 lg:pb-4">
        <div className="mx-auto max-w-6xl px-8">
          <div className="-mx-6 flex flex-wrap items-center justify-between">
            <div className="mt-10 flex flex-col flex-wrap lg:mt-0">
              <div className="flex w-full flex-col gap-4 pb-8 md:flex-row">
                <TeamCard
                  name="Paul Thomas"
                  profession="Director"
                  imageSrc="/images/paul.jpeg"
                />
                <div className="items-left flex w-full flex-col px-4 pb-8">
                  <h2 className="mb-5 text-xl font-bold text-dark sm:text-xl">
                    The visionary entrepreneur behind Horízōn.
                  </h2>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    Driven by personal experiences of financial struggle within
                    his family, Paul founded Horízōn to empower business owners
                    with strategic financial decisions.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    Holding a degree in Accounting and Finance from Warwick
                    Business School after successfully securing an investment
                    bank scholarship, he envisions a future where businesses
                    thrive with Horízōn's tools.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    He champions equal opportunities for all, aiming to create a
                    diverse and inclusive environment within Horízōn and beyond.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    As a role model and mentor, Paul inspires young innovators
                    across the world. Through panels, workshops, and personal
                    experiences, he encourages aspiring entrepreneurs to
                    persevere and understand their limits to avoid burnout.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    Paul's mentoring activities extend to competitions and youth
                    panels, where he shares valuable insights and experiences.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <TeamCard
                  name="Shafi Saleh"
                  profession="Director"
                  imageSrc="/images/shafi.jpeg"
                />
                <div className="items-left flex w-full flex-col px-4 pb-8">
                  <h2 className="mb-5 text-xl font-bold text-dark sm:text-xl">
                    Bringing the creativity to our team.
                  </h2>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    Shafi is a seasoned professional with a heart for social
                    impact.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    Find him in his natural habitat capturing street and travel
                    photographs, or in the cinema every week catching the latest
                    art-house film release.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    With a background steeped in the realm of NGOs , Shafi's
                    journey is one of creative solutions and meaningful
                    connections.
                  </p>
                  <p className="mb-3 font-open-sans text-base text-body-color">
                    His tenure with international NGO Action Contre La Faim in
                    Paris and Bangladesh offered him a platform to merge his
                    creative talents with his passion for helping others,
                    demonstrating his versatility and commitment to humanitarian
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

const TeamCard = ({
  imageSrc,
  name,
  profession,
}: {
  imageSrc: string;
  name: string;
  profession: string;
}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-full md:w-4/5 lg:w-1/2 xl:w-1/2">
        <div className="mx-auto mb-10 w-full max-w-370">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={name}
              width={370}
              height={370}
              className="w-full"
            />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5">
                <h3 className="font-op text-base font-semibold">{name}</h3>
                <p className="font-open-sans text-xs text-body-color">
                  {profession}
                </p>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </span>
                  <span className="absolute top-2 right-2">
                    <svg
                      width={40}
                      height={50}
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="0.706257"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 0.706257 24.3533)"
                        fill="#159cae"
                      />
                      <circle
                        cx="6.39669"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 6.39669 24.3533)"
                        fill="#159cae"
                      />
                      <circle
                        cx="12.0881"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 12.0881 24.3533)"
                        fill="#159cae"
                      />
                      <circle
                        cx="17.7785"
                        cy="24.3533"
                        r="0.646687"
                        transform="rotate(-90 17.7785 24.3533)"
                        fill="#159cae"
                      />
                      <circle
                        cx="0.706257"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 0.706257 18.6624)"
                        fill="#159cae"
                      />
                      <circle
                        cx="6.39669"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 6.39669 18.6624)"
                        fill="#159cae"
                      />
                      <circle
                        cx="12.0881"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 12.0881 18.6624)"
                        fill="#159cae"
                      />
                      <circle
                        cx="17.7785"
                        cy="18.6624"
                        r="0.646687"
                        transform="rotate(-90 17.7785 18.6624)"
                        fill="#159cae"
                      />
                      <circle
                        cx="0.706257"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 0.706257 12.9717)"
                        fill="#159cae"
                      />
                      <circle
                        cx="6.39669"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 6.39669 12.9717)"
                        fill="#159cae"
                      />
                      <circle
                        cx="12.0881"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 12.0881 12.9717)"
                        fill="#159cae"
                      />
                      <circle
                        cx="17.7785"
                        cy="12.9717"
                        r="0.646687"
                        transform="rotate(-90 17.7785 12.9717)"
                        fill="#159cae"
                      />
                      <circle
                        cx="0.706257"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 0.706257 7.28077)"
                        fill="#159cae"
                      />
                      <circle
                        cx="6.39669"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 6.39669 7.28077)"
                        fill="#159cae"
                      />
                      <circle
                        cx="12.0881"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 12.0881 7.28077)"
                        fill="#159cae"
                      />
                      <circle
                        cx="17.7785"
                        cy="7.28077"
                        r="0.646687"
                        transform="rotate(-90 17.7785 7.28077)"
                        fill="#159cae"
                      />
                      <circle
                        cx="0.706257"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 0.706257 1.58989)"
                        fill="#159cae"
                      />
                      <circle
                        cx="6.39669"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 6.39669 1.58989)"
                        fill="#159cae"
                      />
                      <circle
                        cx="12.0881"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 12.0881 1.58989)"
                        fill="#159cae"
                      />
                      <circle
                        cx="17.7785"
                        cy="1.58989"
                        r="0.646687"
                        transform="rotate(-90 17.7785 1.58989)"
                        fill="#159cae"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
