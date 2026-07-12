"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "نحن", active: true },
  { href: "#services", label: "الخدمات" },
  { href: "#portfolio", label: "معرض الاعمال" },
  { href: "#contact", label: "تواصل معانا" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      {open ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      )}
    </svg>
  );
}

const NAVBAR_HEIGHT = 92;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        dir="rtl"
        className="fixed top-0 right-0 left-0 z-50 w-full transform-gpu border-b border-gray-100 bg-white"
      >
        <nav className="mx-auto flex h-[92px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="NextGen Software House"
            width={191}
            height={68}
            className=" w-[140px] h-[68px] object-cover"
            priority
          />
        </Link>

        {/* links in large screen */}
        <ul className="hidden flex-1 items-center justify-center gap-6 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${link.href}`}
                className={`text-sm font-bold transition-colors lg:text-base ${
                  link.active
                    ? "text-[#0066FF]"
                    : "text-gray-800 hover:text-[#0066FF]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* div contains login button and menu icon */}
        <div className="flex shrink-0 items-start gap-2 sm:gap-3">
          <Link
            href="#login"
            className="hidden rounded-lg bg-[#0066FF] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#0052cc] sm:inline-flex lg:px-6"
          >
            تسجيل دخول
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>
      </header>

      {/* Spacer — keeps content below the fixed bar only */}
      <div aria-hidden="true" className="h-[92px] shrink-0" />

      {/* Mobile menu — overlays content when open */}
      <div
        className={`fixed inset-x-0 z-40 transform-gpu border-b border-gray-100 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "translate-y-0"
            : "pointer-events-none -translate-y-full"
        }`}
        style={{ top: `${NAVBAR_HEIGHT}px` }}
        aria-hidden={!menuOpen}
      >
        <div className="px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`block rounded-lg px-3 py-2.5 text-base font-bold transition-colors ${
                    link.active
                      ? "bg-blue-50 text-[#0066FF]"
                      : "text-gray-800 hover:bg-gray-50 hover:text-[#0066FF]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#login"
            tabIndex={menuOpen ? 0 : -1}
            className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#0066FF] px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-[#0052cc] sm:hidden"
            onClick={() => setMenuOpen(false)}
          >
            تسجيل دخول
          </Link>
        </div>
      </div>
    </>
  );
}
