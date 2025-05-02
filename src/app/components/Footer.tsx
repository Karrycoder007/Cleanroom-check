import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SML Clean Room</h2>
          <p className="text-sm text-gray-400">
            Delivering pharma-grade cleanroom solutions with technology, efficiency, and trust.
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

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Cleanroom Designing</li>
            <li>Modular Panels</li>
            <li>HVAC Systems</li>
            <li>Pharma Equipment</li>
            
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} SML Clean Room Solutions. All rights reserved.
        <p>Made with 💖 from <a href="https://grudhrasolutions.com/" target='_blank'>Grudhra Solutions</a></p>
      </div>
    </footer>
  );
};

export default Footer;
