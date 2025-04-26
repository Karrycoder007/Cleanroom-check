'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-white">
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1745173036546-c56551790fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cleanroom"
          layout="fill"
          className="opacity-90 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            About SML Clean Room Solutions
          </motion.h1>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            SML Clean Room Solutions specializes in delivering <strong>International Pharma Graded Industrial Essentials</strong>, crafted with advanced technologies and machinery. Every solution is authentically designed, manufactured, and monitored under the supervision of experienced professionals.
          </p>
          <p className="text-lg leading-relaxed">
            Our uniqueness lies in our dedication to <strong>quality, on-time delivery, and affordability</strong>. We cater to a wide range of cleanroom environments, maintaining high compliance with global standards across pharmaceutical, healthcare, food, and tech industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image
              src="https://images.unsplash.com/photo-1743930286867-acbd47f58e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
              alt="Cleanroom Process"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To provide cutting-edge cleanroom solutions that are reliable, scalable, and efficient — empowering industries to maintain safety, hygiene, and control at every level.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">What Makes Us Different</h3>
            <ul className="list-disc ml-6 space-y-2 text-lg">
              <li>Professionally Supervised Installations</li>
              <li>Global Standards for Pharma and Tech</li>
              <li>Advanced Automation & Machinery</li>
              <li>Customized & Scalable Solutions</li>
              <li>Eco-conscious, Affordable Options</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1743930286867-acbd47f58e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
              alt="Technicians at Work"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-blue-600 dark:bg-blue-800 py-12 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Cleanroom Difference?</h2>
          <p className="mb-6 text-lg">Explore our services or get in touch with our expert team to discuss your cleanroom needs.</p>
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
