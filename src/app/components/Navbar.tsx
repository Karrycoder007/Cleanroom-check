'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubMenuItem {
  name: string;
}

interface NavItem {
  title: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'Services',
    href: '/services',
    submenu: [
      { name: 'Cleanroom Panels' },
      { name: 'Cleanroom Doors' },
      { name: 'Fire Doors' },
      { name: 'Air Handling Units' },
      { name: 'Fan Filter Unit' },
      { name: 'Fan Coil Unit' },
      { name: 'Ventilation & Exhaust Unit' },
      { name: 'Epoxy & Vinyl Flooring' },
      { name: 'PVC & Aluminium Coving' },
      { name: 'Cleanroom Equipment' },
      { name: 'Dynamic & Static Passbox' },
      { name: 'Laminar Airflow' },
      { name: 'Air Showers' },
      { name: 'Bio Safety Cabinet' },
      { name: 'Filter Cleaning Booth' },
      { name: 'SS Lab Furnitures' },
      { name: 'Cross Over Bench' },
      { name: 'Fume Hoods & Garment Cubicle' },
      { name: 'HVAC Systems' },
      { name: 'Pre Fabricated Ducts' },
      { name: 'Solar Hybrid AC' },
      { name: 'Air Purifier' },
      { name: 'Dehumidifier' },
      { name: 'Air Curtains' },
    ],
  },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMobileDropdown(null);
  };

  // Close on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDesktopDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 z-[100] w-full backdrop-blur-md bg-white/60 dark:bg-gray-900/60 shadow-sm border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/mainlogo.jpeg" alt="Cleanroom" width={70} height={70} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div
                  key={idx}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setActiveDesktopDropdown(item.title)}
                  onMouseLeave={() => setActiveDesktopDropdown(null)}
                >
                  <div className="flex items-center space-x-1">
                    
                    {/* Clickable link */}
                    <Link
                      href={item.href!}
                      className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                    >
                      {item.title}
                    </Link>

                    {/* Arrow toggle for touch */}
                    <button
                      onClick={() =>
                        setActiveDesktopDropdown(
                          activeDesktopDropdown === item.title ? null : item.title
                        )
                      }
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition ${
                          activeDesktopDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeDesktopDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-3 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-md 
                                   z-40 max-h-72 overflow-y-auto"
                      >
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            href="/services"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 
                                       hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 dark:text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="ml-4 mt-1 space-y-1"
                      >
                        {item.submenu.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href="/services"
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
