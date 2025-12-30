'use client';

import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: 'Safari Tours & Game Drives',
      slug: 'safari-tours-game-drives',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Hotel & Lodge Reservations',
      slug: 'hotel-lodge-reservations',
      image: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Airport Transfers & Transportation',
      slug: 'airport-transfers-transportation',
      image: 'https://images.unsplash.com/photo-1464219414925-bed2fffe2d16?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Flight Ticketing (Domestic & International)',
      slug: 'flight-ticketing',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Visa Processing & Assistance',
      slug: 'visa-processing-assistance',
      image: 'https://images.unsplash.com/photo-1588618694729-03b120d9f674?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Travel Insurance',
      slug: 'travel-insurance',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      id: 7,
      title: 'Customized Tour Packages',
      slug: 'customized-tour-packages',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
    },
    {
      id: 8,
      title: 'Corporate Travel Solutions',
      slug: 'corporate-travel-solutions',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      id: 9,
      title: 'Honeymoon Packages',
      slug: 'honeymoon-packages',
      image: 'https://images.unsplash.com/photo-1537905904737-146e3e86e1d5?w=400&h=300&fit=crop',
    },
    {
      id: 10,
      title: 'Group Tours & Excursions',
      slug: 'group-tours-excursions',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop',
    },
    {
      id: 11,
      title: 'Cruise Holiday Packages',
      slug: 'cruise-holiday-packages',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    },
    {
      id: 12,
      title: 'Mountain Climbing Expeditions',
      slug: 'mountain-climbing-expeditions',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    },
    {
      id: 13,
      title: 'Beach Holiday Packages',
      slug: 'beach-holiday-packages',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    },
    {
      id: 14,
      title: 'Cultural Tours & Village Visits',
      slug: 'cultural-tours-village-visits',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
    },
    {
      id: 15,
      title: 'Photography Safaris',
      slug: 'photography-safaris',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop',
    },
    {
      id: 16,
      title: 'Solo Package',
      slug: 'solo-package',
      image: 'https://images.unsplash.com/photo-1444464666175-1642156dd4d3?w=400&h=300&fit=crop',
    },
    {
      id: 17,
      title: 'Hot Air Balloon Safaris',
      slug: 'hot-air-balloon-safaris',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop',
    },
    {
      id: 18,
      title: 'Walking Safaris & Night Game Drives',
      slug: 'walking-safaris-night-game-drives',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" style={{ paddingBottom: '100px' }}>
      <div className="max-w-none px-4" style={{ marginLeft: '200px', marginRight: '200px' }}>
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
            Our Services
          </h2>
          <div className="flex justify-center">
            <p className="text-base md:text-lg text-gray-700 max-w-3xl font-medium leading-relaxed">
              Explore our comprehensive range of travel services designed to make your African adventure unforgettable
            </p>
          </div>
        </div>

        {/* Categories Grid - 6 columns x 3 rows */}
        <div className="grid grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

              {/* Content */}
              <div className="relative h-32 flex flex-col items-center justify-center text-center p-3">
                <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Hover Effect - Arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-green-600 group-hover:bg-green-700 text-white rounded-full p-4 transform transition-transform group-hover:scale-110">
                  <svg
                    className="w-6 h-6"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
