// components/AboutPage.tsx

import React from "react";

export default function AboutPage() {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative w-full h-64 bg-[url('/images/about-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          About Us
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 text-gray-700">
        <p className="mb-6">
          Are you looking to start your career in the U.S. Military but are having trouble getting the score you need on the ASVAB?
        </p>

        <p className="mb-6">
          ASVAB Tutoring provides a one-stop solution and entry point for your military career. We are here for you. No longer do you need to prove yourself as a good student by memorizing whole subjects. Now you only need to learn the techniques to excel in your field. ASVAB tutoring provides you the one-stop solution to help establish your career in the Armed Forces. ASVAB Tutoring was established in 2012 by a group of adroit engineers to simplify and streamline the learning process.
        </p>

        <p className="mb-6">
          Experienced ASVAB tutors strive to strengthen your core knowledge and encourage students to improve their abilities. We deliver outstanding teaching methodology that is both groundbreaking and quite different from other conventional methods. Our instructors meticulously research and put together study materials that bring out the best in our students. The foremost goal of ASVAB Tutoring is to provide a high-quality education that helps students pass the test with minimum effort and the highest score possible. It provides unique flexibility in learning and offers quite effective online sessions via Skype or Zoom.
        </p>

        <p className="mb-6">
          The first session/evaluation is free, so why not come join ASVAB Tutoring for what has proven to be a truly life-changing journey for our students?
        </p>
      </div>
    </section>
  );
}
