"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tesla", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Amazon", logo: "/https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Adobe", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Meta", logo: "/https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function OurClients() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-r from-black via-blue-900 to-black">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        >
          Our <span className="text-blue-400">Clients</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 text-gray-300"
        >
          Trusted by leading brands worldwide
        </motion.p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 bg-blue-950/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-blue-800 hover:shadow-blue-400/40 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain w-32 h-16 brightness-110 contrast-125"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Fading edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
