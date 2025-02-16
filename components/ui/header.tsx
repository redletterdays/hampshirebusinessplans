import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="relative top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-auto/90 px-3 shadow-black/[0.03] backdrop-blur-xs 
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
        >
          {/* Left column (empty to center the logo) */}
          <div className="flex flex-1" />
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Site name */}

          <div className="flex flex-1 justify-center font-bold text-gray-800 text-base md:text-2xl lg:text-3xl whitespace-nowrap">
            Hampshire Business Plans
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3 md:gap-3">
            <li>
              <Link
                href="/"
                className="btn-sm bg-primary text-white hover:bg-secondary"
              >
                Get Started Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
