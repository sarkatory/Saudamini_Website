'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/purchase', label: 'Purchase' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl gradient-text">
            Saudamini
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-maroon-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <span className={`transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''} block absolute h-0.5 w-6 bg-gray-600`}></span>
              <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} block absolute h-0.5 w-6 bg-gray-600`}></span>
              <span className={`transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''} block absolute h-0.5 w-6 bg-gray-600`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden`}>
          <div className="pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-maroon-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 