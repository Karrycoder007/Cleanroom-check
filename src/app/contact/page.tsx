'use client';

import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <p>
              Reach out to us for inquiries, quotes, or collaborations. We’ll respond promptly!
            </p>
            <div>
              <p className="font-semibold">Email:</p>
              <p>info@smlcleanroom.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p>
                SML Clean Room Solutions,<br />
                Industrial Park, Goa - 403401, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Optional Map */}
        <div className="mt-16">
          <iframe
            className="w-full h-72 rounded-xl border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
