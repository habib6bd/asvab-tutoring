import Image from "next/image";

export default function Welcome() {
  return (
    <div>
      <div
        className="min-h-screen bg-black/60 flex items-center justify-center px-4 py-8"
        style={{
          backgroundImage: "url('/images/asvab-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl items-center">
          {/* Left: Welcome + Video */}
          <div className="space-y-6 text-white">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Welcome To <span className="text-blue-400">ASVAB Tutoring</span>
              </h1>
              <p className="mt-2 text-lg">
                10,000+ successful candidates. Online Test Prep for the ASVAB,
                ASTB, OAR, AFOQT, and SIFT.
              </p>
              <button className="mt-4 bg-[#f2a155] hover:bg-[#e58a34] text-white font-semibold py-2 px-4 rounded">
                ENROLL NOW
              </button>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-lg">
              <video
                controls
                poster="/images/asvab-video-poster.jpg"
                className="w-full rounded-lg"
              >
                <source src="/videos/ASVAB-Promo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#012241] text-white rounded-lg shadow-lg p-6 space-y-4 w-full">
            <h2 className="text-lg font-semibold text-center">
              REQUEST A TUTOR NOW!
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 bg-white rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email (Use your valid email address)
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-white rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone (US Only)
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 bg-white rounded text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <select className="w-full p-2 bg-white rounded text-black">
                  <option value="">—Please choose an option—</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                  {/* Add more options */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full p-2 bg-white rounded text-black"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 bg-[#f2a155] hover:bg-[#e58a34] text-white py-2 rounded mx-auto block mt-6"
              >
                Submit
              </button>
            </form>

            {/* App Download Icons */}
            <div className="flex justify-center space-x-4 pt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title with border image under */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block relative pb-4">
            Welcome
            <img
              src="/images/border_v1.png"
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-40 object-cover"
            />
          </h2>

          {/* Description */}
          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            Need help with the ASVAB? We are here for you. No longer do you need
            to prove yourself as a good student by memorizing whole subjects.
            Now you only need to learn the techniques to excel in your field.
            ASVAB tutoring provides you with the one-stop solution to help
            establish your career in the Armed Forces. ASVAB Tutoring was
            established in 2012 by a group of adroit engineers to simplify and
            streamline the learning process.
          </p>

          {/* Read More Button */}
          <div className="mt-8">
            <button className="bg-[#f2a155] hover:bg-[#e58a34] text-white font-semibold py-2 px-6 rounded shadow">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
