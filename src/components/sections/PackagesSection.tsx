'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PackagesSection() {
  const packages = [
    {
      id: 1,
      title: '3 Days, 2 Nights Masai Mara Safari Adventure',
      price: 'Ksh 750',
      description: 'All-Inclusive Safari Experience Embark on the ultimate African safari and witness...',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&q=80', // Elephant walking towards safari vehicle
      fullDescription: 'Experience the legendary Maasai Mara with expert guides and comfortable accommodations.',
    },
    {
      id: 2,
      title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate Safari',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=200&h=120&fit=crop&q=80', // Lake scene with flamingos
    },
    {
      id: 3,
      title: '7 Day Mid-Range Tour: Exploring Kenya\'s Gems',
      image: 'https://images.unsplash.com/photo-1574781330858-2c9947f16c1e?w=200&h=120&fit=crop&q=80', // Giraffe with birds
    },
    {
      id: 4,
      title: '7-Day Big Five Adventure Safari',
      image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=200&h=120&fit=crop&q=80', // Big Five animals
    },
    {
      id: 5,
      title: '10-Day Kenya Bush Safari & Beach Escape: From Wild Plains To White Sands',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=120&fit=crop&q=80', // Tropical beach
    },
    {
      id: 6,
      title: '6-Day Amboseli & Tsavo Safari Adventure',
      image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=200&h=120&fit=crop&q=80', // Two elephants in red landscape
    },
    {
      id: 7,
      title: '4-Day Taste Of Kenya Safari Adventure',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=120&fit=crop&q=80', // Leopard on tree
    },
    {
      id: 8,
      title: '5-Day Classic Kenya Safari: Masai Mara, Lake Nakuru & Naivasha',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=200&h=120&fit=crop&q=80', // Safari lodge entrance
    },
    {
      id: 9,
      title: '3-Day Honeymoon Fly-In Safari At Elewana Sand River Mara',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=120&fit=crop&q=80', // Luxury tent interior
    },
  ];

  const featuredPackage = packages[0];
  const otherPackages = packages.slice(1);

  return (
    <section className="py-12 md:py-16 bg-white" style={{ paddingBottom: '60px' }}>
      <div style={{ marginLeft: '200px', marginRight: '200px' }}>
        {/* Section Header */}
        <div className="mb-10" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
            Tour Packages
          </h2>
        </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Package - Left */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
            {/* Image */}
            <div className="h-64 overflow-hidden bg-gray-300">
              <img
                src={featuredPackage.image}
                alt={featuredPackage.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {featuredPackage.title}
              </h3>
              <p className="text-lg font-semibold text-green-600 mb-4">
                {featuredPackage.price}
              </p>
              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                {featuredPackage.description}
              </p>
              <Link
                href={`/packages/${featuredPackage.id}`}
                className="bg-green-900 hover:bg-green-800 text-white font-semibold py-3 px-8 transition-colors inline-block text-center text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Other Packages - Right */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/packages/${pkg.id}`}
                className="flex gap-4 bg-white border border-gray-200 p-4 hover:bg-gray-50 hover:border-green-300 transition-all group"
              >
                {/* Package Image */}
                <div className="flex-shrink-0 w-24 h-24 bg-gray-300 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Package Info */}
                <div className="flex-grow flex items-center">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                    {pkg.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
