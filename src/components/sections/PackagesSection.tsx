'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PackagesSection() {
  const packages = [
    {
      id: 1,
      title: '3 Days, 2 Nights Maasai Mara Safari Adventure',
      price: 'From Ksh 247,800',
      description: 'All-Inclusive Safari Experience Embark on the ultimate African safari and witness...',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=350&fit=crop',
      fullDescription: 'Experience the legendary Maasai Mara with expert guides and comfortable accommodations.',
    },
    {
      id: 2,
      title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate Safari',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=120&fit=crop',
    },
    {
      id: 3,
      title: '7 Day Mid-Range Tour: Exploring Kenya\'s Gems',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop',
    },
    {
      id: 4,
      title: '7-Day Big Five Adventure Safari',
      image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=200&h=120&fit=crop',
    },
    {
      id: 5,
      title: '10-Day Kenya Bush Safari & Beach Escape: From Wild Plains To White Sands',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=120&fit=crop',
    },
    {
      id: 6,
      title: '6-Day Amboseli & Tsavo Safari Adventure',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=200&h=120&fit=crop',
    },
    {
      id: 7,
      title: '4-Day Taste Of Kenya Safari Adventure',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&h=120&fit=crop',
    },
    {
      id: 8,
      title: '5-Day Classic Kenya Safari: Masai Mara, Lake Nakuru & Naivasha',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=120&fit=crop',
    },
    {
      id: 9,
      title: '3-Day Honeymoon Fly-In Safari At Elewana Sand River Mara',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=120&fit=crop',
    },
  ];

  const featuredPackage = packages[0];
  const otherPackages = packages.slice(1);

  return (
    <section className="py-12 md:py-16 bg-white" style={{ marginLeft: '20px', marginRight: '20px', paddingBottom: '60px' }}>
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
          Tour Packages
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Package - Left */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
            {/* Image */}
            <div className="h-48 overflow-hidden bg-gray-300">
              <img
                src={featuredPackage.image}
                alt={featuredPackage.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                {featuredPackage.title}
              </h3>
              <p className="text-sm font-semibold text-green-600 mb-2">
                {featuredPackage.price}
              </p>
              <p className="text-xs text-gray-600 mb-4 flex-grow line-clamp-2">
                {featuredPackage.description}
              </p>
              <Link
                href={`/packages/${featuredPackage.id}`}
                className="bg-green-900 hover:bg-green-800 text-white font-semibold py-2 px-4 transition-colors inline-block text-center text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Other Packages - Right */}
        <div className="lg:col-span-2">
          <div className="space-y-2">
            {otherPackages.map((pkg) => (
              <div key={pkg.id} className="flex gap-3 bg-gray-50 p-3 hover:bg-gray-100 transition-colors">
                {/* Package Image */}
                <div className="flex-shrink-0 w-20 h-20 bg-gray-300 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Package Info */}
                <div className="flex-grow">
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors block line-clamp-2"
                  >
                    {pkg.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
