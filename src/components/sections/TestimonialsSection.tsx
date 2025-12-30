'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      destination: 'Maasai Mara Safari',
      rating: 5,
      text: 'Absolutely incredible experience! The guides were knowledgeable, the accommodations were top-notch, and the wildlife sightings were beyond expectations. Craydel Africa Travel made our dream safari come true.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      destination: 'Mount Kenya Expedition',
      rating: 5,
      text: 'Professional, organized, and incredibly supportive throughout the entire trek. The team at Craydel ensured our safety while providing an unforgettable mountaineering experience. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      destination: 'Honeymoon Package - Diani Beach',
      rating: 5,
      text: 'Our honeymoon was absolutely magical! Craydel Africa Travel handled every detail perfectly. From romantic sunset dinners to thrilling water activities, everything exceeded our expectations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      id: 4,
      name: 'David Martinez',
      destination: 'Group Tour - Kenya Explorer',
      rating: 5,
      text: 'Best group tour experience I\'ve had! The itinerary was well-planned, the group dynamics were great, and Craydel\'s staff made sure everyone had an amazing time. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      destination: 'Cultural Tour - Maasai Villages',
      rating: 5,
      text: 'Such a meaningful and authentic cultural experience. The local guides were passionate storytellers, and Craydel ensured all interactions were respectful and enriching.',
      image: 'https://images.unsplash.com/photo-1517046220202-51e0ae8917e0?w=150&h=150&fit=crop',
    },
    {
      id: 6,
      name: 'James Thompson',
      destination: 'Photography Safari',
      rating: 5,
      text: 'As a photography enthusiast, this safari exceeded all my expectations. The guides positioned us perfectly for amazing shots, and the landscapes were stunning. Craydel is a dream team!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" style={{ paddingBottom: '80px' }}>
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl" style={{ marginLeft: '20px', marginRight: '20px' }}>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real experiences from travelers who've explored Africa with us
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="flex items-center gap-6">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Carousel Viewport */}
            <div className="flex-1 overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300"
                style={{
                  transform: `translateX(calc(-${currentIndex * 33.33}% - ${currentIndex * 1.5}rem))`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-1/3 flex-shrink-0 bg-white border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                      {/* Client Image */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      {/* Client Details */}
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {testimonial.destination}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(testimonials.length - 3, prev + 1))}
              disabled={currentIndex === testimonials.length - 3}
              className="flex-shrink-0 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
