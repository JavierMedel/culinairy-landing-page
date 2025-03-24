"use client";
import React from 'react';
import Image from 'next/image';
import EmailPopup from '@/components/EmailPopup';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-gray-800/70 text-culinairy-lightGray mb-6">
        AI-Powered Meal Assistant
      </div>
      <LampContainer>
        <motion.h1 
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-culinairy-teal to-culinairy-cyan max-w-4xl mb-4"
        >
          CulinAIry – Smart<br />AI-Powered Meal Planning
        </motion.h1>
      </LampContainer>
      <p className="text-culinairy-lightGray max-w-xl mx-auto mb-8 text-lg">
        Effortless meal planning with AI-curated recipes, step-by-step visual guides, and smart shopping lists. CulinAIry adapts to your tastes, making cooking simple, fun, and inspiring.
      </p>
      <EmailPopup triggerText="Join Waitlist" />

      <div className="mt-12 w-full max-w-4xl relative">
        <Image
          src="\images\culinAIry-image-01.jpeg"
          alt="CulinAIry Dashboard"
          width={1200}
          height={675}
          className="rounded-lg border border-gray-800 shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
