'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import DestinationsSection from '@/components/sections/DestinationsSection';
import PackagesSection from '@/components/sections/PackagesSection';
import ServiceFeaturesSection from '@/components/sections/ServiceFeaturesSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden pt-[112px]">
        <HeroSection />
        <CategoriesSection />
        <DestinationsSection />
        <PackagesSection />
        <ServiceFeaturesSection />
        <PartnersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
