"use client";

import React from "react";

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Careers at Cleanroom</h1>
        <p className="text-lg text-center mb-10">
          Join our team of passionate professionals at Cleanroom. 
          We are always looking for talented and motivated individuals 
          who share our commitment to innovation, quality, and service.
        </p>

        {/* Current Openings */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Project Engineer</h2>
            <p className="mt-2 text-gray-600">
              Responsible for managing cleanroom installation projects, coordinating with clients,
              and ensuring quality standards are met.
            </p>
            <p className="mt-2 text-sm text-gray-500">📍 Location: Pan India | 🕒 Full-time</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Sales Executive</h2>
            <p className="mt-2 text-gray-600">
              Build and maintain client relationships, drive sales of cleanroom solutions, 
              and explore new opportunities in the market.
            </p>
            <p className="mt-2 text-sm text-gray-500">📍 Location: Goa | 🕒 Full-time</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">Technician</h2>
            <p className="mt-2 text-gray-600">
              Hands-on role in installation, maintenance, and servicing of cleanroom equipment and systems.
            </p>
            <p className="mt-2 text-sm text-gray-500">📍 Location: Multiple | 🕒 Full-time</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>

        {/* General Application */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">Didn’t find a role that fits you?</h3>
          <p className="text-gray-600 mb-4">
            We’d still love to hear from you! Send us your resume and we’ll get in touch when a role opens up.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Send Resume
          </button>
        </div>
      </div>
    </div>
  );
}
