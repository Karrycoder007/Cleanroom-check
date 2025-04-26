'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Pharma Cleanroom Setup',
    description:
      'Design and installation of pharma-grade cleanrooms tailored to meet international standards, ensuring contamination control and operational efficiency.',
    image:
      'https://www.svgrepo.com/show/376843/laboratory-research-scientist.svg',
  },
  {
    title: 'HVAC & Filtration Systems',
    description:
      'High-performance HVAC and air filtration systems for cleanroom environments, designed to regulate air quality and pressure with precision.',
    image:
      'https://www.svgrepo.com/show/488821/hvac.svg',
  },
  {
    title: 'Modular Wall Panels',
    description:
      'Customized modular wall solutions for sterile environments, made with premium materials for easy installation and maintenance.',
    image:
      'https://www.svgrepo.com/show/487991/wall.svg',
  },
  {
    title: 'Cleanroom Consumables',
    description:
      'Supply of industry-grade cleanroom garments, gloves, masks, and other consumables to support sterile practices.',
    image:
      'https://www.svgrepo.com/show/489126/gloves.svg',
  },
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 md:py-24">
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
                <img
                  src={service.image}
                  alt={service.title}
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
