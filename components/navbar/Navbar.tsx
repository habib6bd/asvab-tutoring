"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaApple, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensures this code runs only on the client side
  useEffect(() => {
    setIsClient(true); // Will trigger a re-render once mounted on the client
  }, []);

  // Prevent rendering on the server side, only client-side rendering
  if (!isClient) {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#04203c] text-white py-4 px-6">
      {/* Top Contact Section (Visible only on larger screens) */}
      <div className="hidden md:flex justify-between items-center text-sm text-[#f2a155]">
        {/* Left Side: Contact Info */}
        <div className="flex items-center space-x-4">
          <FaPhone />
          <span>(718)-200-6396</span>
          <FaEnvelope />
          <span>info@asvab-tutoring.com</span>
        </div>
        {/* Right Side: Our Mobile Apps */}
        <div className="flex items-center space-x-2">
          <FaApple />
          <span>Our Mobile Apps</span>
        </div>
      </div>

      {/* Main Navbar Section */}
      <div className="flex justify-between items-center py-4 flex-wrap">
        {/* Logo Centered on all screen sizes */}
          <Link href="/">
        <div className="flex justify-center w-full md:w-auto">
          <Image
            src="/images/asvab-tutoring-logo.webp"
            alt="ASVAB Tutoring Logo"
            width={80}
            height={80}
          />
        </div>
          </Link>

        {/* Left Side: Menu Links (Visible only on larger screens) */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <Link href="/" className="hover:text-[#f2a155] transition">
            HOME
          </Link>
          <Link href="/services" className="hover:text-[#f2a155] transition">
            SERVICES
          </Link>
          <Link href="/how-it-works" className="hover:text-[#f2a155] transition">
            HOW IT WORKS
          </Link>
          <Link href="/pricing" className="hover:text-[#f2a155] transition">
            PRICING
          </Link>
          <Link href="/about" className="hover:text-[#f2a155] transition">
            ABOUT US
          </Link>
          <Link
            href="/online-test"
            className="bg-[#f2a155] text-[#04203c] px-4 py-2 rounded-md font-semibold hover:bg-[#e58a34] transition"
          >
            ONLINE TEST
          </Link>
        </div>

        {/* Hamburger Icon (Visible only on small screens) */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={toggleMobileMenu}
            className="text-[#f2a155] focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#04203c] text-white py-4 px-6 space-y-4">
          <Link
            href="/"
            className="hover:text-[#f2a155] transition block"
          >
            HOME
          </Link>
          <Link
            href="/services"
            className="hover:text-[#f2a155] transition block"
          >
            SERVICES
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-[#f2a155] transition block"
          >
            HOW IT WORKS
          </Link>
          <Link
            href="/pricing"
            className="hover:text-[#f2a155] transition block"
          >
            PRICING
          </Link>
          <Link
            href="/about"
            className="hover:text-[#f2a155] transition block"
          >
            ABOUT US
          </Link>
          <Link
            href="/online-test"
            className="bg-[#f2a155] text-[#04203c] px-4 py-2 rounded-md font-semibold hover:bg-[#e58a34] transition block"
          >
            ONLINE TEST
          </Link>
        </div>
      )}
    </nav>
  );
}
