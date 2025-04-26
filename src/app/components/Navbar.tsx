'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { title: 'Home', href: '/' },
  {
    title: 'Services',
    submenu: [
      { name: 'Industrial Cleaning', href: '/services/industrial' },
      { name: 'Home Cleaning', href: '/services/home' },
      { name: 'Commercial', href: '/services/commercial' },
    ],
  },
  { title: 'About', href: '/about' },
  { title: 'Clients', href: '/clients' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="data:image/png;base64,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" alt="Cleanroom" width={40} height={40} />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Cleanroom</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="relative group">
                  <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 transition">
                    {item.title}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 invisible group-hover:visible z-40">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href!}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 dark:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2"
          >
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setActiveMobileDropdown(
                        activeMobileDropdown === item.title ? null : item.title
                      )
                    }
                    className="w-full flex justify-between items-center text-left text-gray-800 dark:text-white py-2"
                  >
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition ${activeMobileDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="ml-4 mt-1 space-y-1"
                      >
                        {item.submenu.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            className="block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href!}
                  className="block text-gray-800 dark:text-white py-2 hover:text-blue-600"
                >
                  {item.title}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
