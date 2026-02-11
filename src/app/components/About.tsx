'use client';

import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gradient-to-r from-black via-blue-950 to-blue-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Section (Text Content) */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              About SL Airtech Pvt. Ltd.
            </h2>

            {/* Introduction */}
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              SL AIRTECH PVT LTD. was established in <strong>2016</strong> to serve cleanroom
              requirements in India, which were previously met through imports. As pioneers in this
              field, our solutions were quickly accepted by customers. Over the years, we have
              evolved into one of India’s largest cleanroom partition manufacturers.
            </p>

            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We are committed to making a difference by helping companies build cost-effective,
              energy-efficient, long-lasting, and environmentally-friendly HVAC solutions that
              conform to global standards. Our services include <strong>Supply, Installation,
              Testing, Commissioning, Validation, and Maintenance</strong> of HVAC, Electrical,
              IBMS, Modular Partitions, Plumbing, Firefighting, Laboratory Furniture, and Cleanroom
              Solutions.
            </p>

            {/* Core Strengths */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              Our Core Strengths
            </h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 leading-relaxed">
              <li>Rich pharmaceutical expertise with deep industry knowledge.</li>
              <li>Strong ability to understand and fulfill customer requirements.</li>
              <li>Accurate and detailed drawing creation for every project.</li>
              <li>Timely delivery with no compromise on quality.</li>
              <li>Full compliance with regulatory standards and guidelines.</li>
            </ul>

            

            {/* Call to Action */}
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
              src="/mainlogo.jpeg"
              alt="Cleanroom Services"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
