"use client";

import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-auto/90 relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="hover: flex flex-1 items-center">
            <Logo />
          </div>
          <div className="flex flex-20 items-center">
            <NavLink href="/">Home</NavLink>
          </div>

          {/* CTA Links */}

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Contact us Today
              </Link>
            </li>
            <li>
              <Link
                href="https://tidycal.com/horizon/hampshire-business-plan-initial-consultation"
                className="btn-sm bg-primary text-gray-200 shadow-sm hover:bg-secondary"
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

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base font-medium transition ease-in-out hover:text-primary ${
        isActive ? "hidden" : ""
      }`}
    >
      {children}
    </Link>
  );
};
