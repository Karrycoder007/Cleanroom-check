import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-gradient-to-r from-black via-blue-950 to-blue-900 py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Vision & Mission
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Vision Card */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-300 rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/opportunities.png" // ✅ string path
              alt="Vision Icon"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-600 mb-2">
              Vision
            </h3>
            <p className="text-gray-700 dark:text-gray-700">
              To be an integrated player in Cleanroom Solutions offering world class products and services.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-gray-100 dark:bg-gray-300 rounded-2xl p-6 shadow-md flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Image
              src="/mission.png" // ✅ string path
              alt="Mission Icon"
              width={60}
              height={60}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-600 mb-2">
              Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-700">
              Satisfied customers through quality products, services, safe work practices and adherence to timelines.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
