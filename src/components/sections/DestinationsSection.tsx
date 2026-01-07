'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';

export default function DestinationsSection() {
  const [row1Index, setRow1Index] = useState(0);
  const [row2Index, setRow2Index] = useState(0);

  const destinations = [
    {
      id: 1,
      title: 'Maasai Mara National Reserve',
      description: 'Experience the legendary Great Migration and witness the dramatic river crossings of millions of wildebeest and zebras in one of Africa\'s most spectacular ecosystems.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=350&fit=crop&q=80', // Safari vehicle with wildlife
    },
    {
      id: 2,
      title: 'Amboseli National Park',
      description: 'Stand beneath the snow-capped Mount Kilimanjaro and encounter massive herds of African elephants roaming the vast Amboseli plains with pristine views.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=350&fit=crop&q=80', // Elephants with Kilimanjaro
    },
    {
      id: 3,
      title: 'Lake Nakuru National Park',
      description: 'Marvel at the stunning spectacle of thousands of pink flamingos flocking around Lake Nakuru\'s alkaline waters, surrounded by diverse wildlife.',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=350&fit=crop&q=80', // Flamingos at lake
    },
    {
      id: 4,
      title: 'Tsavo East & West National Parks',
      description: 'Explore one of the world\'s largest national parks, famous for its red elephant herds, stunning volcanic landscapes, and the dramatic Mzima Springs.',
      image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=500&h=350&fit=crop&q=80', // Red landscape with elephants
    },
    {
      id: 5,
      title: 'Samburu National Reserve',
      description: 'Discover unique wildlife adapted to arid landscapes including the Samburu zebra, reticulated giraffe, and gerenuk in this remote northern reserve.',
      image: 'https://images.unsplash.com/photo-1574781330858-2c9947f16c1e?w=500&h=350&fit=crop&q=80', // Giraffe in arid landscape
    },
    {
      id: 6,
      title: 'Lake Naivasha',
      description: 'Relax beside this serene freshwater lake surrounded by lush forests and abundant birdlife. Perfect for boat safaris and wildlife encounters.',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=350&fit=crop&q=80', // Serene freshwater lake
    },
    {
      id: 7,
      title: 'Hell\'s Gate National Park',
      description: 'Hike through dramatic red cliffs and encounter wildlife roaming freely. This unique park offers adventure activities and geothermal wonders.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=350&fit=crop&q=80', // Red cliffs/canyon
    },
    {
      id: 8,
      title: 'Diani Beach (Mombasa Coast)',
      description: 'Unwind on pristine white-sand beaches with crystal-clear turquoise waters. Perfect for snorkeling, diving, and experiencing coastal Swahili culture.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=350&fit=crop&q=80', // Tropical beach
    },
    {
      id: 9,
      title: 'Lamu Island',
      description: 'Step back in time on this UNESCO World Heritage Site with narrow streets, historic architecture, and traditional dhow sailing experiences.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=350&fit=crop&q=80', // Historic architecture/dhow
    },
    {
      id: 10,
      title: 'Watamu & Malindi',
      description: 'Explore charming coastal towns with beautiful beaches, vibrant coral reefs, marine parks, and rich Swahili heritage blended with modern amenities.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=350&fit=crop&q=80', // Coastal beach with coral
    },
    {
      id: 11,
      title: 'Mount Kenya',
      description: 'Challenge yourself to climb Africa\'s second-highest peak with breathtaking alpine scenery, diverse ecosystems, and an unforgettable adventure.',
      image: 'https://images.unsplash.com/photo-1464822759844-d150ad6bf8e0?w=500&h=350&fit=crop&q=80', // Mountain peak
    },
    {
      id: 12,
      title: 'Nairobi National Park',
      description: 'Discover wildlife viewing just minutes from Kenya\'s capital city. See lions, rhinos, giraffes, and buffalo against Nairobi\'s unique skyline backdrop.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=350&fit=crop&q=80', // Wildlife in park setting
    },
    {
      id: 13,
      title: 'Ol Pejeta Conservancy',
      description: 'Visit a world-leading conservation center home to the last northern white rhinos, chimpanzees, and other endangered species in a community-based reserve.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=350&fit=crop&q=80', // Rhino conservation
    },
  ];

  const itemsPerRow = 4;
  
  // First row carousel (items 0-7)
  const row1Items = destinations.slice(0, 8);
  const row1MaxIndex = Math.max(0, row1Items.length - itemsPerRow);
  
  // Second row carousel (items 8-12)
  const row2Items = destinations.slice(8);
  const row2MaxIndex = Math.max(0, row2Items.length - itemsPerRow);

  const handleRow1Prev = () => {
    setRow1Index((prev) => Math.max(0, prev - 1));
  };

  const handleRow1Next = () => {
    setRow1Index((prev) => Math.min(row1MaxIndex, prev + 1));
  };

  const handleRow2Prev = () => {
    setRow2Index((prev) => Math.max(0, prev - 1));
  };

  const handleRow2Next = () => {
    setRow2Index((prev) => Math.min(row2MaxIndex, prev + 1));
  };

  const DestinationCard = ({ destination }) => (
    <div className="bg-white shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex-shrink-0 group cursor-pointer mb-6" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' }}>
      {/* Image Container */}
      <div className="h-48 overflow-hidden bg-gray-300 relative">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Eye Icon */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={`/destinations/${destination.id}`}>
            <Eye className="w-10 h-10 text-white hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
          {destination.title}
        </h3>
        <p className="text-sm text-gray-600 mb-5 line-clamp-3">
          {destination.description}
        </p>
        <Link
          href={`/destinations/${destination.id}`}
          className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors inline-flex items-center gap-1 justify-center"
        >
          View More →
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white" style={{ paddingBottom: '120px' }}>
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
            Explore Our Destinations
          </h2>
          <div className="flex justify-center" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl font-medium leading-relaxed">
              Discover the most stunning and diverse travel destinations across Kenya and East Africa
            </p>
          </div>
        </div>

        {/* Row 1 Carousel */}
        <div style={{ marginBottom: '80px' }}>
          <div className="flex items-center gap-6">
            {/* Previous Button */}
            <button
              onClick={handleRow1Prev}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Items */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300"
                style={{
                  transform: `translateX(calc(-${row1Index * 25}% - ${row1Index * 1.5}rem))`,
                }}
              >
                {row1Items.map((destination) => (
                  <div key={destination.id} className="w-1/4 flex-shrink-0">
                    <DestinationCard destination={destination} />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleRow1Next}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Row 2 Carousel */}
        <div className="mt-5">
          <div className="flex items-center gap-6">
            {/* Previous Button */}
            <button
              onClick={handleRow2Prev}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Items */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300"
                style={{
                  transform: `translateX(calc(-${row2Index * 25}% - ${row2Index * 1.5}rem))`,
                }}
              >
                {row2Items.map((destination) => (
                  <div key={destination.id} className="w-1/4 flex-shrink-0">
                    <DestinationCard destination={destination} />
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleRow2Next}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
