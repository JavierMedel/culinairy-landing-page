"use client";

import React from 'react';
import Link from 'next/link';
import CulinAIryioLogo from './CulinAIryioLogo';
import EmailPopup from '@/components/EmailPopup';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-800 bg-gradient-to-r from-culinairy-darkTeal to-culinairy-darkBlue fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <CulinAIryioLogo />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center justify-center space-x-6 mr-4 text-white">
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-culinairy-lightTeal transition-colors cursor-pointer font-medium"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-culinairy-lightTeal transition-colors cursor-pointer font-medium"
          >
            FAQs
          </a>
          <Link
            href="/recipes"
            className="hover:text-culinairy-lightTeal transition-colors cursor-pointer font-medium"
          >
            Recipes
          </Link>
        </nav>
        <EmailPopup triggerText="Join Waitlist" />
      </div>
    </header>
  );
};

export default Header;
