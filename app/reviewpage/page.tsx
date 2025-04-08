"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <section
      className="bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/images/review_bg-1.jpg')" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative pb-4">
            Students Reviews
            <img
              src="/images/border_v1.png"
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-40 object-cover"
            />
          </h2>
        </div>

        <Link
          href="/reviews"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded transition"
        >
          <span className="inline-flex items-center gap-2">
            View All Reviews <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
