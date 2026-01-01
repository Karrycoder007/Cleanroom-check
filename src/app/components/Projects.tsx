'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Modular Cleanroom',
    image: '/p1.webp',
  },
  {
    title: 'Controlled Airflow System',
    image: '/p2.jpg',
  },
  {
    title: 'Sterile Packaging Line',
    image: '/p4.jpg',
  },
  {
    title: 'Custom Pharma Cabinets',
    image: '/p3.jpg',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gradient-to-r from-black via-blue-900 to-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-blue-400/40 transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
