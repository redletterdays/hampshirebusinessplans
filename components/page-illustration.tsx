import Image from "next/image";

import Stripes from "@/public/images/stripes.svg";

export default function PageIllustration() {
  return (
    <>
      {/* Stripes illustration */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="w-full max-w-[768px]"
          src={Stripes}
          width={768}
          alt="Stripes"
          priority
        />
      </div>
      {/* Circles */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 ml-0 -translate-x-1/2 md:ml-[220px]"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-primary opacity-50 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute top-[420px] left-1/2 ml-0 -translate-x-1/2 md:ml-[220px]"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-primary to-accent opacity-50 blur-[160px]" />
      </div>
      <div
        className="pointer-events-none absolute top-[640px] left-1/2 ml-0 -translate-x-1/2 md:-ml-[300px]"
        aria-hidden="true"
      >
        <div className="h-80 w-80 rounded-full bg-linear-to-tr from-primary to-accent opacity-50 blur-[160px]" />
      </div>
    </>
  );
}
