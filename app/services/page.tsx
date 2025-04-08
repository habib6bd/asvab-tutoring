"use client";

import React from "react";

export default function Services() {
  return (
    <section className="bg-white">
         {/* Banner */}
      <div className="relative w-full h-64 bg-[url('/images/about-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          Services
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
        <p className="mb-6">
          It is a standardized test on verbal (English) and Math and additional aptitude based on the career field you have.
          Some of the subtests are as follows:
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="min-w-full text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">SUB TESTS</th>
                <th className="py-2 px-4 border">NO. OF QUESTIONS</th>
                <th className="py-2 px-4 border">TIME (MINS)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Verbal Analogies", 25, 8],
                ["Arithmetic Reasoning", 25, 29],
                ["Word Knowledge", 25, 5],
                ["Math Knowledge", 25, 22],
                ["Instrument Comprehension", 20, 6],
                ["Block Counting", 20, 3],
                ["Table Reading", 40, 7],
                ["Aviation Information", 20, 8],
                ["General Science", 20, 10],
                ["Rotated Blocks", 15, 13],
                ["Hidden Figures", 15, 8],
                ["Self-Description Inventory", 220, 40],
              ].map(([test, questions, time], i) => (
                <tr key={i} className="even:bg-gray-50">
                  <td className="py-2 px-4 border">{test}</td>
                  <td className="py-2 px-4 border">{questions}</td>
                  <td className="py-2 px-4 border">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Minimum scores table:</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border">CAREER TYPE</th>
                <th className="py-2 px-4 border">VERBAL</th>
                <th className="py-2 px-4 border">QUANTITATIVE</th>
                <th className="py-2 px-4 border">PILOT</th>
                <th className="py-2 px-4 border">NAVIGATOR</th>
                <th className="py-2 px-4 border">COMBINED PILOT/NAV</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pilot", 15, 10, 25, 10, 50],
                ["Navigator", 15, 10, 10, 25, 50],
                ["All Others", 15, 10, "N/A", "N/A", "N/A"],
              ].map(([type, v, q, p, n, c], i) => (
                <tr key={i} className="even:bg-gray-50">
                  <td className="py-2 px-4 border">{type}</td>
                  <td className="py-2 px-4 border">{v}</td>
                  <td className="py-2 px-4 border">{q}</td>
                  <td className="py-2 px-4 border">{p}</td>
                  <td className="py-2 px-4 border">{n}</td>
                  <td className="py-2 px-4 border">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
