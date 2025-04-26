'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroWithSlider() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D',
    'https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsZWFuaW5nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1598513792185-46a8cbfa62e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Industry-Grade Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Trusted by businesses across industries. Cleanroom ensures hygiene, safety, and a spotless environment—every time.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-200"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Image Slider */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg">
          <div className="relative">
            <div
              className="flex transition-all duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-full">
                  <Image
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    width={1200} // Define the width for optimization
                    height={500} // Define the height for optimization
                    className="object-cover w-full h-80 rounded-xl"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
              onClick={goToPrevSlide}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
              onClick={goToNextSlide}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
