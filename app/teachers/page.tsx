import Image from "next/image";
import Link from "next/link";

const teachers = [
  {
    id: 1,
    name: "Deb Das",
    designation: "FOUNDER",
    description:
      "Deb Das is the president and the founder of ASVAB Tutoring. He has over a decade of experience in tutoring students. He has worked to find the right formula to make learning easy for everyone. Deb is an Aerospace Engineer. He has a Bachelor’s of Science Engineering in Mechanical Engineering and a Master’s of Science Engineering in Nuclear Engineering from the City University of New York (CCNY). He has completed Entrepreneur Essentials, Leading with Motivating and Decision-Making courses from Harvard Business School Online. Deb was selected NAVAIR’s Journey Leadership Development Program (JLDP), a command-wide program designed to develop its members into future leaders. ",
    image: "/images/deb_das_profile.webp",
  },
  {
    id: 2,
    name: "Jayanta Das",
    designation: "CO-FOUNDER",
    description:
      "Jayanta Mondal is one of the co-founders of ASVAB Tutoring. He has a BSc. in Biomedical Engineering from Yale University. He’s passionate about helping underrepresented populations in science, technology, engineering, and math (STEM) fields via tutoring and college mentorship. He has over 6 years of experience in tutoring high school courses and various standardized exams including ASVAB, SAT, ACT and SAT subject tests. During his time at Yale, he served as the Head Ambassador at Yale Quest Bridge Chapter to promote representation of first-generation, low income students on the campus. He plans to pursue a law degree in the future.",
    image: "/images/jayanta_das_profile.webp",
  },
  {
    id: 3,
    name: "Partha Dey",
    designation: "ELECTRICAL ENGINEERING",
    description:
      "Partha has a bachelor degree in Electrical Engineering from City University of New York (City College). He has been tutoring K-12 students for the past five years with a high success rate. He helps students to overcome learning obstacles on their way to acquiring specific skills. His focus is on understanding each student’s own learning goals and how he or she likes to work. He is very flexible and friendly with students.",
    image: "/images/partha_dey_profile.webp",
  },
  {
    id: 4,
    name: "Kishaloy Mallick",
    designation: "ELECTRICAL ENGINEER,STONY BROOK UNIVERSITY",
    description:
      "Kishaloy is a recent graduate from Stony Brook University, New York with a degree in Electrical Engineering. He has been tutoring in NYC area past 7 years. He is a friendly and supportive person who gets excellent results by making lessons fun as well as informative. He is one of the brilliant students of the president of ASVAB Tutoring. In his free time Kishaloy likes to play soccer.",
    image: "/images/kishaloy_profile.webp",
  },
];

export default function TeachersPage() {
  return (
    <div className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative pb-4">
          Meet Our Teachers
          <img
            src="/images/border_v1.png"
            alt="underline"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-40 object-cover"
          />
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="w-full flex justify-center pt-6">
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold mb-1">{teacher.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {teacher.designation}
              </p>
              <p className="text-sm text-gray-600 text-left">
                {teacher.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/tutors"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded transition-all duration-500"
        >
          See All Tutors
        </Link>
      </div>
    </div>
  );
}
