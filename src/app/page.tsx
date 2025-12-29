'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden w-full max-w-full">
      <Navbar />
      {/* Empty main area for now – only header and footer as requested */}
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
