import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6" data-aos="zoom-y-out">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex animate-[breath_8s_ease-in-out_infinite_both]">
              <svg
                className="absolute -top-2 -left-6 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={100}
                height={100}
                alt="Large testimonial"
                loading="lazy"
                quality={80}
                priority={false}
                placeholder="blur"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “Working with Hampshire Business Plans helped me establish a{" "}
              <em className="text-accent italic">step by step</em> process to
              growing my capacity so that I could onboard more clients,
              efficiently.”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Jon Simmons</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-primary" href="#0">
                Content Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
