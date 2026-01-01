'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Intro */}
        <div>
        <Link href="/" className="flex items-center space-x-2 py-2">
  <Image
    src="/mainlogo.jpeg"
    alt="SL Airtech Pvt. Ltd."
    width={190}
    height={190}
    className="rounded-lg"   // or rounded-full / rounded-xl
  />
</Link>

          <p className="text-sm text-gray-400 mt-2">
            Delivering pharma-grade cleanroom and HVAC validation solutions with precision, reliability, and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Testing & Validation */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Testing & Validation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Duct Leak Test</li>
            <li>Air Balancing</li>
            <li>Air Velocity Test</li>
            <li>HEPA Filter Integrity Test</li>
            <li>Room Pressurisation Test</li>
            <li>Non-Viable Particle Count</li>
            <li>Room Recovery Test</li>
            <li>Airflow Visualisation Test</li>
            <li>Temperature & Humidity Testing</li>
            <li>Noise Level Test</li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact Us</h3>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Email:</strong> info@slairtech.com / kumar@slairtech.com
          </p>
          <p className="text-sm text-gray-300 mb-4">
            <strong>Phone:</strong> +91 90366 17711
          </p>

          <p className="text-sm text-gray-400 mb-4">
            #29/2A, Nanja Reddy Layout, Near Ayyappa Bakery, Opp Nash Industries Unit-4, <br />
            R.K Township Road, Yarandahalli, Bangalore - 560099.
          </p>

          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>

          
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} SL Airtech Pvt. Ltd. All rights reserved.
        <p>
          Made with 💖 by{' '}
          <a href="https://grudhrasolutions.com/" target="_blank" className="underline hover:text-white">
            Grudhra Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
