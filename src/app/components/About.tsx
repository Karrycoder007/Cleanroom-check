'use client';

import Link from 'next/link';

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section (Text and Button) */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              About SML Clean Room Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Providing International Pharma Graded Industrial Essentials, based on advanced technologies & machinery,
              authentically designed, manufactured, and controlled under the supervision of a professionalized team. We
              emphasize on time efficiency and offer affordable costs, which makes SML Clean Room Solutions unique in the
              industry.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              We specialize in providing premium cleaning services tailored to meet the needs of various industries. At
              Cleanroom, we prioritize hygiene, safety, and efficiency. Our mission is to help businesses maintain a clean
              and healthy environment.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1661662872476-a3c74d72da6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGNsZWFuaW5nfGVufDB8fDB8fHww" // Replace with the actual image URL
              alt="Cleanroom services"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
