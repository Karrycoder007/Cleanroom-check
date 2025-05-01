'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Anjali R.',
    feedback: 'SML Clean Room Solutions delivered exactly what we needed. Their expertise and timely delivery made a huge difference.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    name: 'Rahul M.',
    feedback: 'Professional, innovative, and efficient. Our production line is cleaner and more efficient now.',
    image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Dr. S. Verma',
    feedback: 'Excellent pharma-grade installations. Highly recommend their team for cleanroom solutions.',
    image: 'https://plus.unsplash.com/premium_photo-1675791727728-f829fde51f70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Meera P.',
    feedback: 'A reliable partner for any cleanroom requirements. Their approach is scientific and results-driven.',
    image: 'https://plus.unsplash.com/premium_photo-1669882305339-8e2cbb81903e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
  },
];

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-gradient-to-r from-black via-blue-950 to-black py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">What Our Clients Say</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          >
            <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-blue-500">
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">{testimonials[index].feedback}</p>
            <h3 className="font-semibold text-blue-600 dark:text-blue-400">{testimonials[index].name}</h3>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ClientFeedback;
