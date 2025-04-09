import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'ASVAB',
    slug: 'asvab',
    image: '/images/asvab-courses-d.jpg',
    description:
      'The Armed Services Vocational Aptitude Battery Test (ASVAB) is a multiple choice test...',
  },
  {
    title: 'ASTB',
    slug: 'astb',
    image: '/images/astb_b.webp',
    description:
      'The Aviation Selection Test Battery (ASTB) is a subtest that covers seven key areas...',
  },
  {
    title: 'SIFT',
    slug: 'sift',
    image: '/images/sift.webp',
    description:
      'ASVAB Tutoring helps you to fulfill your dreams by ensuring that you cover all the areas...',
  },
  {
    title: 'AFOQT',
    slug: 'afoqt',
    image: '/images/afqft_b.webp',
    description:
      'The Air Force Officer Qualifying Test (AFOQT) is a standardized test used to select...',
  },
];

export default function TopCourses() {
  return (
    <section className="bg-[#032A45] text-white py-16 px-4">
      <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative pb-4">
      Top Courses
            <img
              src="/images/border_v1.png"
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-40 object-cover"
            />
          </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-md shadow-md flex flex-col transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative w-full h-48">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <Link className='mt-auto w-fit bg-transparent border border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-500 cursor-pointer px-4 py-2 text-sm font-medium self-start rounded mx-auto block' href={`/courses/${course.slug}`} passHref>          
                  LEARN MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
