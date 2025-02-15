import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
              Tailored Business Plans for <br className="max-lg:hidden" />
              Hampshire Entrepreneurs
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-800"
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
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
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
            <div className="relative aspect-video rounded-3xl bg- px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] after:w-[41px]">
                <span className="text-[13px] font-medium text-black">
                  Hampshire Business Plans
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_12s_infinite] text-gray-800">
                  Writing Your Business Plan
                </span>{" "}
                <br />
                <br />
                <span className="animate-[code-2_12s_infinite] text-gray-800">
                  Creating Your Financial Forecast Model
                </span>
                <br />
                <br />
                <span className="animate-[code-3_12s_infinite] text-gray-800">
                  Personalised Step by Step Guide To Moving Forward with Your
                  Business Plan
                </span>{" "}
                <br />
                <br />
                <span className="animate-[code-4_12s_infinite] text-gray-800">
                  Research Review Meeting
                </span>
                <br />
                <br />
                <span className="animate-[code-5_12s_infinite] text-gray-800">
                  Designing Your Primary Research Questions
                </span>
                <br />
                <br />
                <span className="animate-[code-6_12s_infinite] text-gray-800">
                  Designing Your Secondary Research Questions
                </span>
                <br />
                <br />
                <span className="animate-[code-7_12s_infinite] text-gray-800">
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
