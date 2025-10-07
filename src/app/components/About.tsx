'use client';

import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gradient-to-r from-black via-blue-950 to-blue-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section (Text and Button) */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              About SL AIRTECH PVT LTD.
            </h2>

            {/* Intro */}
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Established in 2022, SL AIRTECH PVT LTD. is India’s leading cleanroom partition manufacturer,
              providing cost-effective, energy-efficient, and environmentally-friendly HVAC and cleanroom solutions.
              Our solutions have been readily accepted by customers, making us pioneers in the field.
            </p>

            {/* Core Strengths */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Our Core Strengths</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Rich pharmaceutical expertise with deep industry knowledge.</li>
              <li>Strong ability to understand and fulfill customer requirements.</li>
              <li>Accurate and detailed drawing creation for every project.</li>
              <li>Timely delivery with no compromise on quality.</li>
              <li>Full compliance with regulatory standards and guidelines.</li>
            </ul>

            {/* Vision, Mission, Values */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Vision, Mission & Values</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              <strong>Vision:</strong> To positively influence society through innovative and valuable engineering products and services.
            </p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              <strong>Mission:</strong> Build a healthy and hygienic environment using advanced equipment and technologies in pharmaceutical and cleanroom services.
            </p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              <strong>Values:</strong> Teamwork, Responsibility, Customer Centricity, Freedom to make decisions.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661662872476-a3c74d72da6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGNsZWFuaW5nfGVufDB8fDB8fHww"
              alt="Cleanroom services"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
