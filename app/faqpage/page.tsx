"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Why is a high score important for the ASVAB test?",
    answer:
      "The score you get on the ASVAB will determine how qualified you are for certain military occupational specialties and Enlistment Bonuses. A higher score will improve your chances of getting a specialist job and additional signing bonus. Scoring high on the ASVAB will require intense studying and concentration. Don’t skip on preparing for this test. It’s your future. Get the most out of it! ",
  },
  {
    question: "How long does it take to get ready?",
    answer:
      "We offer specialized plans for each student. Our expert tutors will provide a free consultation with a practice exam to determine the strengths and weaknesses of the students. We will first focus on improving your weaknesses and strengthening your skills. Through our one-on-one interactions, you will be successful in your ASVAB exam.",
  },
  {
    question: "How can I pay?",
    answer:
      "We do not collect and debit or credit card information. All payment will be made through Paypal. Paypal offers exceptional security and does not share your information with anyone. ",
  },
  {
    question: "When can I claim refund?",
    answer:
      "If you fail after total twelve sessions, we will provide tutoring service until you pass the test for free.",
  },
  {
    question: "How to cancel a schedule?",
    answer:
      "If you want to cancel a lesson or reschedule, 24 hrs. advance notice is required. You can cancel entire service within 7 days.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative pb-4">
            Frequently Asked Questions
            <img
              src="/images/border_v1.png"
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-40 object-cover"
            />
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded overflow-hidden shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left bg-[#00294F] text-white font-medium focus:outline-none"
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>

              {activeIndex === index && (
                <div className="bg-white text-gray-800 px-6 py-4 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
