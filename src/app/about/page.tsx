'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaTools, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

const approachSteps = [
  {
    icon: FaUsers,
    title: "Sales & Client Interaction",
    description: "Engage with prospective clients to understand URS and assist in final product decisions."
  },
  {
    icon: FaLightbulb,
    title: "Design & Engineering",
    description: "Prepare BOQs, detailed drawings, and innovative solutions tailored to client needs."
  },
  {
    icon: FaTools,
    title: "Fabrication & Manufacturing",
    description: "Ensure high-quality production with precision engineering and global standards."
  },
  {
    icon: FaShippingFast,
    title: "Logistics & Dispatch",
    description: "Timely deliveries with complete tracking until materials reach the client site."
  },
  {
    icon: FaCheckCircle,
    title: "Execution & Handover",
    description: "Professional installation, validation, and final handover for complete client satisfaction."
  }
];

const AboutPage = () => {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white pt-20">

      {/* Who We Are */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:flex md:items-center md:gap-10"
        >
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              <strong>SL Airtech Pvt. Ltd.</strong> was established in <strong>2016</strong> to
              serve cleanroom requirements in India. Our solutions were quickly accepted by
              customers, and today we are among India’s largest cleanroom partition manufacturers.
            </p>
            <p className="text-lg leading-relaxed">
              We provide supply, installation, testing, commissioning, validation, and maintenance
              of HVAC, Electrical, IBMS, Modular Partitions, Plumbing, Firefighting, Laboratory
              Furniture, and Cleanroom Solutions.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1581091215363-020c2c9f0cdb?w=600&auto=format&fit=crop&q=80"
              alt="Cleanroom Services"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:flex md:items-center md:gap-10"
        >
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1596495577886-d920f1f67b43?w=600&auto=format&fit=crop&q=80"
              alt="Vision and Mission"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              Positively influence society through sound, innovative, and valuable engineering
              products and services — setting benchmarks in quality, technology, and sustainability.
            </p>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Build a healthy and hygienic environment using advanced equipment and technologies
              in pharmaceutical and cleanroom services.
            </p>
            <h3 className="text-2xl font-semibold">Our Values</h3>
            <ul className="list-disc ml-6 text-lg space-y-1">
              <li>Teamwork</li>
              <li>Responsibility</li>
              <li>Customer Centricity</li>
              <li>Freedom to make decisions</li>
            </ul>
          </div>
        </motion.div>

        {/* Our Approach with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {approachSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-white/10 dark:bg-gray-800 border border-white/20 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex justify-center mb-4 text-blue-500">
                  <step.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 dark:bg-blue-800 py-12 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Experience the SL Airtech Difference</h2>
          <p className="mb-6 text-lg">
            Explore our cleanroom solutions or get in touch with our expert team to
            discuss your next project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
