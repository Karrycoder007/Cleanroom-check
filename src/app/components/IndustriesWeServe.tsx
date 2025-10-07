import React from "react";
import { motion } from "framer-motion";

const industries = [
  "Pharmaceuticals",
  "Biotechnology",
  "Healthcare",
  "Micro Electronics",
  "Food & Beverages",
  "Dry Rooms for Automobile Industry",
  "Photovoltaic / Nano",
];

const IndustriesWeServe: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 md:px-12 bg-gradient-to-r from-black via-blue-900 to-blue-800 text-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Industries We Serve
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-white/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          iClean is a leading global player in providing Integrated Turnkey Solutions for the following sectors:
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              className="bg-white/10 border border-white/20 shadow-md rounded-xl p-4 text-center text-lg font-medium backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {industry}
            </motion.div>
          ))}
        </div>

        {/* Outro Text */}
        <motion.p
          className="text-white/70 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We continuously strive to deliver custom cleanroom solutions that meet the unique needs of these industries with precision, compliance, and excellence.
        </motion.p>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
