"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CulinAIryioLogo from './CulinAIryioLogo';
import EmailPopup from '@/components/EmailPopup';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is loaded scrolled down
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full py-4 px-4 md:px-8 flex items-center justify-between border-b border-culinairy-teal fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled 
        ? 'bg-gradient-to-r from-culinairy-darkTeal/90 to-culinairy-darkBlue/90 backdrop-blur-sm' 
        : 'bg-gradient-to-r from-culinairy-darkTeal to-culinairy-darkBlue'}`}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <CulinAIryioLogo />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center justify-center space-x-6 mr-4 text-white dark:text-white text-culinairy-darkBlue">
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-culinairy-teal transition-colors cursor-pointer font-medium"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-culinairy-teal transition-colors cursor-pointer font-medium"
          >
            FAQs
          </a>
          <Link
            href="/recipes"
            className="hover:text-culinairy-teal transition-colors cursor-pointer font-medium"
          >
            Recipes
          </Link>
        </nav>
        <ThemeToggle />
        <EmailPopup triggerText="Join Waitlist" />
      </div>
    </header>
  );
};

export default Header;
