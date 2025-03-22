import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center justify-center text-center">
      <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-gray-800/50 text-gray-300 mb-6">
        AI-Powered Meal Assistant
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-culinairy-teal to-culinairy-cyan max-w-4xl mb-4">
        CulinAIry – Smart<br />AI-Powered Meal Planning
      </h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
        Effortless meal planning with AI-curated recipes, step-by-step visual guides, and smart shopping lists. CulinAIry adapts to your tastes, making cooking simple, fun, and inspiring.
      </p>
      <Button className="bg-culinairy-teal hover:bg-culinairy-lightTeal rounded-full text-white px-8 py-6 text-lg h-auto">
        Join Waitlist
      </Button>

      <div className="mt-12 w-full max-w-4xl relative">
        <Image
          src="\images\culinAIry-image-02.jpeg"
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
