"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center py-12"
      style={{ backgroundImage: 'url("/images/footer_bg.jpg")' }}
    >
      <div className="container mx-auto px-6 text-white">
        {/* Footer Sections Container */}
        <div className="flex flex-wrap justify-between md:flex-row space-y-8 md:space-y-0">
          {/* ABOUT US Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">ABOUT US</h2>
            <p className="text-sm">
              The days are gone when you need to prove yourself as a good
              student by memorizing whole subjects. Nowadays you can just learn
              the tech.
            </p>
            <Link
              href="/about"
              className="text-[#f2a155] hover:underline text-sm mt-4 inline-block"
            >
              READ MORE &gt;&gt;
            </Link>
          </div>

          {/* FEATURED LINKS Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">FEATURED LINKS</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {/* First column with extra left padding */}
              <li className="pl-8">
                <Link
                  href="/pricing"
                  className="flex items-center hover:text-[#f2a155]"
                >
                  <span className="mr-2">&gt;&gt;</span> Pricing
                </Link>
              </li>
              <li className="pl-8">
                <Link
                  href="/courses"
                  className="flex items-center hover:text-[#f2a155]"
                >
                  <span className="mr-2">&gt;&gt;</span> Courses
                </Link>
              </li>
              <li className="pl-8">
                <Link
                  href="/about"
                  className="flex items-center hover:text-[#f2a155]"
                >
                  <span className="mr-2">&gt;&gt;</span> About Us
                </Link>
              </li>

              {/* Second column without extra padding */}
              <li className="pl-8">
                <Link
                  href="/blog"
                  className="flex items-center hover:text-[#f2a155]"
                >
                  <span className="mr-2">&gt;&gt;</span> Blog
                </Link>
              </li>
              <li className="pl-8">
                <Link
                  href="/faqs"
                  className="flex items-center hover:text-[#f2a155]"
                >
                  <span className="mr-2">&gt;&gt;</span> FAQs
                </Link>
              </li>
              <li className="pl-8">
                <Link
                  href="/sitemap"
                  className="flex items-center hover:text-[#f2a155]"
                >
                  <span className="mr-2">&gt;&gt;</span> Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* KEEP IN TOUCH Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">KEEP IN TOUCH</h2>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-white hover:text-[#f2a155]"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-white hover:text-[#f2a155]"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="text-white hover:text-[#f2a155]"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-white hover:text-[#f2a155]"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* CONTACT Section */}
          <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-semibold mb-4">CONTACT</h2>
            <p className="text-sm">United States</p>
            <p className="text-sm">info@asvab-tutoring.com</p>
            <p className="text-sm">(718)-200-6396</p>
          </div>
        </div>

        {/* COPYRIGHT Section */}
        <div className="text-center text-sm mt-8">
          <p>© 2022 ASVAB TUTORING LLC All Rights Reserved</p>
          <div>
            <Link
              href="/privacy-policy"
              className="text-[#f2a155] hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              href="/terms-of-service"
              className="text-[#f2a155] hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
