export const metadata = {
  title: "How it Works – ASVAB Tutoring",
  description: "Learn how ASVAB Tutoring helps you succeed with customized online tutoring plans.",
};

export default function HowItWorksPage() {
  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative w-full h-64 bg-[url('/images/about-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded">
          How it works
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <p className="text-gray-700 mb-6">
          Since 2012, ASVAB Tutoring has been striving to provide the best solution with our
          online tutorial services hosted by our talented and experienced tutors. Our tutors
          first assess the skills of a student and, based on that assessment, they prepare a
          comprehensive and customized plan of study to ensure that our students are able to
          pass the online ASVAB test.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-blue-900">How do we achieve this?</h2>

        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            We provide highly informative classes over Skype – our tutors are equipped with
            effective hardware and software to effectively communicate their ideas to the
            students – all the student will need is Skype.
          </li>
          <li>
            We provide one-on-one consultation with students and parents – to ensure they
            understand our plan and are on board.
          </li>
          <li>
            During the consultation, our experts will assess and guide students to develop
            skills and techniques.
          </li>
          <li>
            Our expert will guide you to choose the best courses and materials to ensure you
            pass the ASVAB test.
          </li>
          <li>
            If you request to choose your own courses, our experienced tutor will oblige and
            help you work on your weakness.
          </li>
        </ul>
      </div>
    </section>
  );
}
