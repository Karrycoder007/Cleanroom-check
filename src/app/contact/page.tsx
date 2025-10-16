'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <section className="min-h-screen mt-10 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white py-16 px-4">
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
            className="space-y-8 text-base"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <p>Reach out to us for inquiries, quotes, or collaborations. We’ll respond promptly!</p>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Email:</p>
                <p>info@slairtech.com / Kumar@slairtech.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhone className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+91 90366 17711</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  SL Airtech Pvt. Ltd.,<br />
                  #29/2A, Nanja Reddy Layout, Near Ayyappa Bekary,<br />
                  Opp Nash Industries Unit - 4 R.K Township Road,<br />
                  Yarandahalli, Bangalore - 560099, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <iframe
            className="w-full h-72 rounded-xl border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31199.27039405432!2d77.6542793!3d12.8282722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1797a6f52b99%3A0x5ee837e83d5b2e0a!2sSL%20Airtech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
