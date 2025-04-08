import OurPackagesPage from "../packages/page";

export const metadata = {
  title: "Pricing – ASVAB Tutoring",
  description: "Learn more about pricing and packages for ASVAB Tutoring services."
};

export default function PricingPage() {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative w-full h-64 bg-[url('/images/about-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          Pricing
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 text-gray-700">
        <p className="mb-6">
          ASVAB Tutoring is proud to offer the lowest rates available in the market. We offer
          several different plans for all types of students.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          Why is having a high score important on the ASVAB?
        </h2>
        <p className="mb-6">
          The most important part of the ASVAB is the AFQT (Armed Force Qualification Test)
          score. It determines your eligibility to enlist in the U.S Armed Forces. The score
          also determines the bonus and incentives you can be qualified for in your enlistment
          contract – the higher your score, the higher rewards you can qualify for. The ASVAB
          can be converted into 10 other composite score areas known as &quot;line scores&quot; that
          determine what MOS an individual may qualify for.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          How long does it take to get ready?
        </h2>
        <p className="mb-6">
          We offer specialized plans for each student. Our expert tutors will provide a free
          consultation with a practice exam to determine the strengths and weaknesses of each
          student. We will focus on strengthening your weaknesses and improving your strengths.
          Through our one-on-one interactions you will be successful in passing your ASVAB exam.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-900">
          How can I pay?
        </h2>
        <p className="mb-6">
          We do not collect any debit card or credit card information. We only accept payment
          from PayPal. PayPal offers exceptional security and does not share your information
          with anyone.
        </p>

        <p className="mb-6">
          ASVAB Tutoring will provide One-on-One online tutoring service. All the study
          materials with a lesson plan will be provided. Each session is 2 hours. The tutoring
          services offered by ASVAB Tutoring are as follows.
        </p>

        <h3 className="text-lg font-semibold mb-4">Select online Tutoring package:</h3>

        {/* Packages Section */}
        <OurPackagesPage />

        <div className="mt-10 space-y-4 text-sm text-gray-700">
          <p>
            <strong className="text-green-600">****</strong> If you successfully complete our
            program and fail, we will provide tutoring service until you pass the test for free.
          </p>
          <p>
            <strong className="text-red-600">NOTE:</strong> No lesson will be scheduled without
            payment information on file. Students are required to submit homework before each
            session. To receive free tutoring, students must score 80% or above on each practice
            and prediction test. No free tutoring will be provided after one month of the last
            tutoring session.
          </p>
          <p>
            <strong className="text-blue-900">Cancellation Policy:</strong> If you want to cancel
            a lesson or reschedule, 24 hrs. advance notice is required. You can cancel the entire
            service within 7 days.
          </p>
        </div>
      </div>
    </section>
  );
}
