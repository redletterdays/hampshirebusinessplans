import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-14 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; hampshirebusinessplans.co.uk - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Business Plans</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  Key Pillars
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Locations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="#0"
                >
                  Southampton
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Portsmouth
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Winchester
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Aldershot
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Alresford
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Andover
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Basingstoke
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Eastleigh
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Farnborough
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/"
                >
                  Fleet
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Gosport
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Havant
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Southsea
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Havant
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Stockbridge
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Whitchurch
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-primary"
                  href="/privacy"
                >
                  Yateley
                </Link>
              </li>
            </ul>
          </div>

          {/* 6th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-primary transition hover:text-secondary"
                  href="https://www.linkedin.com/"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] leading-none font-bold before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['HBP'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['HBP'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-primary blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
