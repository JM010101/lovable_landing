'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Lovable
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#skool" className="text-gray-300 hover:text-white transition-colors">
                Skool
              </a>
              <a href="#videos" className="text-gray-300 hover:text-white transition-colors">
                Videos
              </a>
              <a href="#downloads" className="text-gray-300 hover:text-white transition-colors">
                Downloads
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#skool"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Skool
              </a>
              <a
                href="#videos"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Videos
              </a>
              <a
                href="#downloads"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Downloads
              </a>
              <a
                href="#"
                className="block px-3 py-2 mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
