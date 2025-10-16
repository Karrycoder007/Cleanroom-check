'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-gradient-to-r from-black via-blue-950 to-blue-900 py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Vision & Mission
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Vision Card */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-200 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/opportunities.png"
              alt="Vision Icon"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Vision
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              To be an integrated leader in cleanroom solutions — delivering
              world-class products and services that exceed global standards.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-200 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src="/mission.png"
              alt="Mission Icon"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Mission
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              To ensure customer satisfaction through superior quality,
              reliable service, safe work practices, and timely project
              completion.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
