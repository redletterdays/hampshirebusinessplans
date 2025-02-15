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
          A business plan is...
        </Accordion>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-primary">
        <Accordion title="What is Secondary Research?" id="services">
          A business plan is...
        </Accordion>
      </div>
    </section>
  );
}
