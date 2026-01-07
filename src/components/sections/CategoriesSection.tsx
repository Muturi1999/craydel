'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CategoriesSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const categories = [
    {
      id: 1,
      title: 'Safari Tours & Game Drives',
      slug: 'safari-tours-game-drives',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop&q=80', // Safari vehicle with wildlife
    },
    {
      id: 2,
      title: 'Hotel & Lodge Reservations',
      slug: 'hotel-lodge-reservations',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&q=80', // Luxury hotel room
    },
    {
      id: 3,
      title: 'Airport Transfers & Transportation',
      slug: 'airport-transfers-transportation',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop&q=80', // Airport/transportation
    },
    {
      id: 4,
      title: 'Flight Ticketing (Domestic & International)',
      slug: 'flight-ticketing',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&q=80', // Airplane/airport
    },
    {
      id: 5,
      title: 'Visa Processing & Assistance',
      slug: 'visa-processing-assistance',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&q=80', // Passport/visa documents
    },
    {
      id: 6,
      title: 'Travel Insurance',
      slug: 'travel-insurance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80', // Business/insurance concept
    },
    {
      id: 7,
      title: 'Customized Tour Packages',
      slug: 'customized-tour-packages',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&q=80', // Travel planning/map
    },
    {
      id: 8,
      title: 'Corporate Travel Solutions',
      slug: 'corporate-travel-solutions',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&q=80', // Business meeting/travel
    },
    {
      id: 9,
      title: 'Honeymoon Packages',
      slug: 'honeymoon-packages',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&q=80', // Romantic beach/resort
    },
    {
      id: 10,
      title: 'Group Tours & Excursions',
      slug: 'group-tours-excursions',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop&q=80', // Group of people traveling
    },
    {
      id: 11,
      title: 'Cruise Holiday Packages',
      slug: 'cruise-holiday-packages',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&q=80', // Cruise ship
    },
    {
      id: 12,
      title: 'Mountain Climbing Expeditions',
      slug: 'mountain-climbing-expeditions',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80', // Mountain climbing
    },
    {
      id: 13,
      title: 'Beach Holiday Packages',
      slug: 'beach-holiday-packages',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&q=80', // Beautiful beach
    },
    {
      id: 14,
      title: 'Cultural Tours & Village Visits',
      slug: 'cultural-tours-village-visits',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop&q=80', // African village/culture
    },
    {
      id: 15,
      title: 'Photography Safaris',
      slug: 'photography-safaris',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&q=80', // Wildlife photography
    },
    {
      id: 16,
      title: 'Solo Package',
      slug: 'solo-package',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop&q=80', // Solo traveler
    },
    {
      id: 17,
      title: 'Hot Air Balloon Safaris',
      slug: 'hot-air-balloon-safaris',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop&q=80', // Hot air balloon
    },
    {
      id: 18,
      title: 'Walking Safaris & Night Game Drives',
      slug: 'walking-safaris-night-game-drives',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop&q=80', // Walking safari/night drive
    },
  ];

  return (
    <section className="bg-white" style={{ 
      paddingTop: '4rem', 
      paddingBottom: '6rem',
      paddingLeft: isLargeScreen ? '200px' : '1rem',
      paddingRight: isLargeScreen ? '200px' : '1rem'
    }}>
      <div className="max-w-none">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <div className="flex justify-center px-4" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl font-medium leading-relaxed">
              Explore our comprehensive range of travel services designed to make your African adventure unforgettable
            </p>
          </div>
        </div>

        {/* Categories Grid - Responsive: 2 cols mobile, 3 cols tablet, 6 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              {/* Image on Top */}
              <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Category Name at Bottom */}
              <div className="bg-white">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-green-900 text-center leading-tight group-hover:text-green-700 transition-colors flex items-center justify-center gap-2" style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '16px', paddingRight: '16px' }}>
                  {category.title}
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-green-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
