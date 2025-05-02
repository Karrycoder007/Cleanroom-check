'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoaderProps {
  onFinish: () => void; // 👈 type declared
}

const Loader = ({ onFinish }: LoaderProps) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-110 flex items-center justify-center bg-black"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="https://p1.hiclipart.com/preview/129/580/1010/car-logos-with-tamplate-lamborghini-icon-png-icon.jpg"
              alt="Cleanroom Logo"
              width={160}
              height={160}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
