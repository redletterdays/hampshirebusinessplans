import Accordion from "./accordion";

export default function Faq() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
        <h2 className="text-3xl font-bold text-black md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-primary">
        <Accordion title="What is a Business Plan?" id="services text-primary">
          A business plan is...
        </Accordion>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-primary">
        <Accordion title="What is a Financial Forecast Model?" id="services">
          A business plan is...
        </Accordion>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-primary">
        <Accordion title="What is Primary Research?" id="services">
          Primary research is{" "}
          <strong className="bold text-accent">
            speaking to your customers
          </strong>{" "}
          first hand. This can be done through{" "}
          <strong className="bold text-accent">
            customers surveys, interviews
          </strong>{" "}
          or a <strong className="bold text-accent">focus groups</strong>.
        </Accordion>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-primary">
        <Accordion title="What is Secondary Research?" id="services">
          Secondary research is{" "}
          <strong className="bold text-accent">running online research</strong>{" "}
          to find more about your{" "}
          <strong className="bold text-accent">potential business</strong>. This
          includes finding out{" "}
          <strong className="bold text-accent">
            industry trends, growth rate, competitors
          </strong>{" "}
          and etc.
        </Accordion>
      </div>
    </section>
  );
}
