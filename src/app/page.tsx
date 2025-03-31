import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ComparisonSection from '@/components/ComparisonSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import MicrosoftStartupsSection from '@/components/MicrosoftStartupsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Header />
      <Hero />
      <ComparisonSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <MicrosoftStartupsSection />
      <Footer />
    </main>
  );
}
