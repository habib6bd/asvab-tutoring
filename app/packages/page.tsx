"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaHandPointRight } from "react-icons/fa";

const packages = [
  {
    title: "SIFT",
    price: "$85.00 - $960.00",
    image: "/images/sift.webp",
  },
  {
    title: "AFOQT",
    price: "$85.00 - $960.00",
    image: "/images/afqft_b.webp",
  },
  {
    title: "OAR",
    price: "$85.00 - $960.00",
    image: "/images/oar_g.webp",
  },
  {
    title: "ASTB",
    price: "$85.00 - $960.00",
    image: "/images/astb_b.webp",
  },
  {
    title: "ASVAB",
    price: "$75.00 - $700.00",
    image: "/images/asvab-courses-d.jpg",
  },
];

export default function OurPackagesPage() {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative pb-4">
            Our Packages
            <img
              src="/images/border_v1.png"
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-40 object-cover"
            />
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          ASVAB Tutoring will provide One-on-One online tutoring service. All
          the study materials with a lesson plan will be provided. Each session
          is 2 hours. The tutoring services offered by ASVAB Tutoring are as
          follows.
        </p>

        <h3 className="text-left font-semibold text-lg mb-4">
          Select online Tutoring package:
        </h3>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded shadow-md overflow-hidden transition-transform hover:-translate-y-1"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="text-lg font-bold text-blue-900">{pkg.title}</h4>
                <p className="text-blue-600 font-semibold mb-2">{pkg.price}</p>
                <button className="flex items-center gap-2 text-sm text-blue-900 border border-blue-900 px-3 py-1 hover:bg-blue-900 hover:text-white transition rounded">
                  Details <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-gray-700 text-left max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-red-600">NOTE:</span> No session
          will be scheduled without payment information on file. Students are
          required to submit homework before each session.{" "}
        </p>
        <p className="text-xs text-gray-700 text-left max-w-4xl mx-auto mb-8">
          <span className="font-semibold text-blue-900">
            Cancellation Policy:
          </span>{" "}
          If you want to cancel a session or reschedule, 24 hrs. advance notice
          is required. You can cancel the entire service within 7 days.
        </p>

        {/* Enroll Button */}
        <Link
          href="/tutors"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded transition"
        >
          ENROLL NOW
        </Link>
      </div>

      <div
        className="mt-16 bg-cover bg-center bg-no-repeat py-16 px-6 flex flex-col md:flex-row items-center justify-between text-white rounded-lg"
        style={{ backgroundImage: "url('/images/productimage.jpg')" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-6 md:mb-0 max-w-xl">
          Great News! Take your Free ASVAB and AFQT exam now!
        </h3>

        <Link
          href="/getstarted"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded transition"
        >
          <FaHandPointRight /> Get Started
        </Link>
      </div>
    </section>
  );
}
