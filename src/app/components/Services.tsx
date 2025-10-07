'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Pharma Cleanroom Setup',
    description:
      'Design and installation of pharma-grade cleanrooms, ensuring contamination control, operational efficiency, and regulatory compliance.',
    image: 'https://www.svgrepo.com/show/376843/laboratory-research-scientist.svg',
  },
  {
    title: 'HVAC Systems',
    description:
      'Energy-efficient HVAC solutions for cleanrooms and laboratories, designed to maintain optimal air quality, temperature, and pressure.',
    image: 'https://www.svgrepo.com/show/488821/hvac.svg',
  },
  {
    title: 'Electrical & IBMS',
    description:
      'Complete electrical installations, including Intelligent Building Management Systems (IBMS) for automated and safe operations.',
    image: 'https://www.svgrepo.com/show/48025/electricity.svg',
  },
  {
    title: 'Modular Partitions & Wall Panels',
    description:
      'Customized modular wall solutions and partitions for sterile environments, with premium materials and easy installation.',
    image: 'https://www.svgrepo.com/show/487991/wall.svg',
  },
  {
    title: 'Plumbing & Firefighting',
    description:
      'Comprehensive plumbing solutions and firefighting systems designed for industrial, laboratory, and cleanroom safety.',
    image: 'https://www.svgrepo.com/show/489102/fire-extinguisher.svg',
  },
  {
    title: 'Laboratory Furniture',
    description:
      'High-quality laboratory furniture tailored for durability, ergonomics, and compliance with safety standards.',
    image: 'https://www.svgrepo.com/show/385994/lab-bench.svg',
  },
  {
    title: 'Validation & Maintenance',
    description:
      'End-to-end services including testing, commissioning, validation, and maintenance of cleanroom and HVAC systems.',
    image: 'https://www.svgrepo.com/show/491385/maintenance.svg',
  },
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-gradient-to-r from-black via-blue-800 to-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md w-full sm:w-[300px] md:w-[320px] lg:w-[340px] p-6 backdrop-blur-md hover:shadow-blue-400/50 transition-all duration-300"
            >
              <div className="w-full h-40 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="h-full object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
