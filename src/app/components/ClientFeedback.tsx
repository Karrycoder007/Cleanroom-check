'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    feedback: 'SL Airtech delivered our cleanroom project on time and within budget. Their attention to detail and adherence to international standards were commendable.',
    title: 'Project Manager at PharmaTech Solutions',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Anjali Sharma',
    feedback: 'The team at SL Airtech provided us with a customized HVAC solution that perfectly fit our requirements. Their professionalism and expertise were evident throughout the project.',
    title: 'Operations Head at BioMed Industries',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Vikram Rao',
    feedback: 'We have been consistently impressed with SL Airtech&apos;s commitment to quality and timely execution. Their after-sales support is exceptional.',
    title: 'Facility Manager at CleanTech Labs',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60',
  },
];

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-black via-blue-950 to-black py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">What Our Clients Say</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-blue-400 text-3xl mb-4 mx-auto" />
            <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-blue-500">
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className="text-lg text-white/90 italic mb-4">"{testimonials[index].feedback}"</p>
            <h3 className="font-semibold text-blue-400">{testimonials[index].name}</h3>
            <p className="text-sm text-white/70">{testimonials[index].title}</p>
            <FaQuoteRight className="text-blue-400 text-3xl mt-4 mx-auto" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ClientFeedback;
