"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

type Testimonial = {
  text: string;
  name: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    text: `I bought several from amazon to study the ASTB exam. None of the book has everything you need to pass the test. I also realize that all the contents in the books are very old. If you want all the materials in one place, this is the best. It has ASTB prediction test. Surprisingly, my OAR score is 5 points off of the actual oar score. my score is OAR 59 with 5,6,8. Highly recommended.`,
    name: "Hunder007",
    image: "/images/default_profile.png",
  },
  {
    text: `This platform gave me a better understanding of the ASVAB content than any book. The interface is smooth and the lessons are focused. I improved significantly in just 3 weeks.`,
    name: "Taker91",
    image: "/images/default_profile.png",
  },
  {
    text: `Great resource! The practice tests were very accurate, and the tutoring sessions helped me boost my scores.`,
    name: "MarineHopeful",
    image: "/images/default_profile.png",
  },
];

export default function ReviewsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className="bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/images/review_bg-1.jpg')" }}
    >
      <div className="max-w-5xl mx-auto text-center text-gray-800 relative overflow-hidden">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-bold inline-block relative pb-4">
            Students Reviews
            <Image
              src="/images/border_v1.png"
              alt="underline"
              width={160}
              height={8}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 object-cover"
            />
          </h2>
        </div>

        {/* Slide Container */}
        <div className="relative h-[300px] md:h-[200px] overflow-hidden">
          {/* Previous Slide */}
          {prevIndex !== null && isAnimating && (
            <div
              key={`prev-${prevIndex}`}
              className="absolute inset-0 z-10 slide-out-left"
            >
              <TestimonialCard testimonial={testimonials[prevIndex]} />
            </div>
          )}

          {/* Current Slide */}
          <div
            key={`current-${currentIndex}`}
            className={`absolute inset-0 z-20 ${
              isAnimating ? "slide-in-right" : ""
            }`}
            onAnimationEnd={() => setIsAnimating(false)}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full border border-gray-500 transition ${
                currentIndex === index ? "bg-yellow-500" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-4 md:px-12 text-center">
      <FaQuoteRight className="text-5xl text-yellow-500 mx-auto mb-4" />
      <p className="text-base md:text-lg font-medium">{testimonial.text}</p>
      <div className="flex justify-center items-center mt-6 gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <span className="font-semibold">{testimonial.name}</span>
      </div>
    </div>
  );
}
