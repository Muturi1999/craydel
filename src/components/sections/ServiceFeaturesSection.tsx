'use client';

import { MapPin, Percent, TrendingDown } from 'lucide-react';
import Link from 'next/link';

export default function ServiceFeaturesSection() {
  const features = [
    {
      id: 1,
      icon: MapPin,
      title: 'Local Guidance',
      description: 'Travel agencies have experienced professionals guidance.',
    },
    {
      id: 2,
      icon: Percent,
      title: 'Deals & Discounts',
      description: 'Agencies have special discounts on flights, hotels, & packages.',
    },
    {
      id: 3,
      icon: TrendingDown,
      title: 'Saves Money',
      description: 'Avoids hidden fees & tourist traps, Multi-destination & budget-friendly options.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50" style={{ paddingBottom: '100px' }}>
      <div className="flex justify-center px-4">
        {/* Content Container */}
        <div className="w-full max-w-6xl">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
              We're Providing Best Service Ever!
            </h2>
            
            {/* Divider */}
            <div className="flex justify-center mb-12">
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.id} className="flex flex-col items-center">
                    {/* Icon */}
                    <div className="bg-yellow-400 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/#packages"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 transition-colors text-lg"
            >
              Flat 30% Discounts All Packages
              <span className="ml-2">Check Offer →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
