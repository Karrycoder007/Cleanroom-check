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
      { name: 'Cleanroom Panels', href: '/services/cleanroom-panels' },
      { name: 'Cleanroom Doors', href: '/services/cleanroom-doors' },
      { name: 'Fire Doors', href: '/services/fire-doors' },
      { name: 'Air Handling Units', href: '/services/air-handling-units' },
      { name: 'Fan Filter Unit', href: '/services/fan-filter-unit' },
      { name: 'Fan Coil Unit', href: '/services/fan-coil-unit' },
      { name: 'Ventilation & Exhaust Unit', href: '/services/ventilation-exhaust-unit' },
      { name: 'Epoxy & Vinyl Flooring', href: '/services/epoxy-vinyl-flooring' },
      { name: 'PVC & Aluminium Coving', href: '/services/pvc-aluminium-coving' },
      { name: 'Cleanroom Equipment', href: '/services/cleanroom-equipment' },
      { name: 'Dynamic & Static Passbox', href: '/services/passbox' },
      { name: 'Laminar Airflow', href: '/services/laminar-airflow' },
      { name: 'Air Showers', href: '/services/air-showers' },
      { name: 'Bio Safety Cabinet', href: '/services/bio-safety-cabinet' },
      { name: 'Filter Cleaning Booth', href: '/services/filter-cleaning-booth' },
      { name: 'SS Lab Furnitures', href: '/services/ss-lab-furnitures' },
      { name: 'Cross Over Bench', href: '/services/cross-over-bench' },
      { name: 'Fume Hoods & Garment Cubicle', href: '/services/fume-hoods-garment-cubicle' },
      { name: 'HVAC Systems', href: '/services/hvac-systems' },
      { name: 'Pre Fabricated Ducts', href: '/services/pre-fabricated-ducts' },
      { name: 'Solar Hybrid AC', href: '/services/solar-hybrid-ac' },
      { name: 'Air Purifier', href: '/services/air-purifier' },
      { name: 'Dehumidifier', href: '/services/dehumidifier' },
      { name: 'Air Curtains', href: '/services/air-curtains' },
    ],
  },
  { title: 'About', href: '/about' },
  { title: 'Careers', href: '/careers' }, // ✅ New Careers page
  { title: 'Contact', href: '/contact' },
];


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <nav className="fixed top-0 z-[100] w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-1.webp" alt="Cleanroom" width={60} height={60} />
            <span className="text-xl font-bold text-gray-800 dark:text-white">Cleanroom</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="relative group">
                  <button className="flex items-center text-gray-600 dark:text-gray-200 hover:text-blue-400 transition">
                    {item.title}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-md rounded-md 
                               opacity-0 group-hover:opacity-100 group-hover:translate-y-1 
                               transition-all duration-200 invisible group-hover:visible z-40 
                               max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 
                               dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
                  >
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                                   hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm"
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
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
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
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        activeMobileDropdown === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="ml-4 mt-1 space-y-1 max-h-72 overflow-y-auto pr-2 
                                   scrollbar-thin scrollbar-thumb-gray-400 
                                   dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
                      >
                        {item.submenu.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
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
