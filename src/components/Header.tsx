"use client";

import React from 'react';
import Link from 'next/link';
import CulinAIryLogo from './CulinAIryLogo';
import EmailPopup from '@/components/EmailPopup';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <CulinAIryLogo />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-6 mr-4 text-gray-300">
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            FAQs
          </a>
        </nav>
        <EmailPopup triggerText="Join Waitlist" />
      </div>
    </header>
  );
};

export default Header;
