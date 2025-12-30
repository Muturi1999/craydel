'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { id: 1, image: '/assets/images/partner-1.png', name: 'Partner 1' },
    { id: 2, image: '/assets/images/partner2.png', name: 'Partner 2' },
    { id: 3, image: '/assets/images/partner3.png', name: 'Partner 3' },
    { id: 4, image: '/assets/images/partner4.png', name: 'Partner 4' },
    { id: 5, image: '/assets/images/partner5.png', name: 'Partner 5' },
    { id: 6, image: '/assets/images/partner6.png', name: 'Partner 6' },
    { id: 7, image: '/assets/images/partner-7.png', name: 'Partner 7' },
    { id: 8, image: '/assets/images/partner-8.png', name: 'Partner 8' },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, partners.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 md:py-20 bg-white" style={{ marginTop: '20px', paddingBottom: '20px' }}>
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        {/* Carousel */}
        <div className="flex items-center gap-4">
          {/* Carousel Viewport */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-2 transition-transform duration-300"
              style={{
                transform: `translateX(calc(-${currentIndex * 25}% - ${currentIndex * 0.5}rem))`,
              }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="w-1/4 flex-shrink-0 bg-gray-50 p-3 flex items-center justify-center min-h-24"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-20 object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
