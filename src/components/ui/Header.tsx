'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`} style={{ backgroundColor: 'white', backdropFilter: 'none' }}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: '#0d2b3e' }}>Crescent Consulting</h1>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/#services" className="text-primary hover:text-secondary transition-colors font-medium">
            Services
          </Link>
          <Link href="/#about" className="text-primary hover:text-secondary transition-colors font-medium">
            About Us
          </Link>
          <Link href="/#contact" className="text-primary hover:text-secondary transition-colors font-medium">
            Contact
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-2xl text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FiMenu />
        </button>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] pt-20 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: 'white' }}
          >
            <button 
              className="absolute top-4 right-4 text-2xl text-primary"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FiX />
            </button>
            
            <nav className="flex flex-col space-y-6 items-center text-xl">
              <Link href="/#services" className="text-primary hover:text-secondary transition-colors font-medium" onClick={toggleMenu}>
                Services
              </Link>
              <Link href="/#about" className="text-primary hover:text-secondary transition-colors font-medium" onClick={toggleMenu}>
                About Us
              </Link>
              <Link href="/#contact" className="text-primary hover:text-secondary transition-colors font-medium" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 