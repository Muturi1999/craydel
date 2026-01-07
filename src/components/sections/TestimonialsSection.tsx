'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'James & Ruth Odhiambo',
      destination: 'Kisumu, Kenya',
      rating: 5,
      text: 'Our Safari with Craydel Africa Travel was nothing short of Amazing. We had always wanted to Experience the masai mara and they made it happen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
    },
    {
      id: 2,
      name: 'Chris Mwangi',
      destination: 'Naivasha, Kenya',
      rating: 5,
      text: 'Craydel Africa Tours exceeded my expectations! The vehicles were comfy, always on time, and the guides were incredibly knowledgeable.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
    },
    {
      id: 3,
      name: 'Derrick Odhiambo',
      destination: '',
      rating: 5,
      text: 'Their punctuality and attention to detail were outstanding. Every part of our trip was perfectly organized — we enjoyed the adventure.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
    },
    {
      id: 4,
      name: 'Keisha Edwards',
      destination: 'Nairobi, Kenya',
      rating: 5,
      text: 'I booked Kenya and Tanzania tours with Craydel Africa and couldn\'t be happier. The staff was friendly and the experiences magical.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
    },
    {
      id: 5,
      name: 'Emily & David Adebayo',
      destination: 'S.A',
      rating: 5,
      text: 'Craydel Africa made our honeymoon magical! Every lodge, game drive, and moment was perfectly planned. Truly remarkable',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=150&h=150&fit=crop&q=80',
    },
    {
      id: 6,
      name: 'Hendrik Siyabonga',
      destination: 'Zambia',
      rating: 5,
      text: 'Traveling with Craydel Africa was the best decision we made. The team\'s communication was excellent and every destination unforgettable.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" style={{ paddingBottom: '80px' }}>
      <div style={{ marginLeft: '200px', marginRight: '200px' }}>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            What Our Happy Clients Say
          </h2>
          <p className="text-gray-600 text-lg text-center" style={{ maxWidth: '700px', paddingTop: '20px', paddingBottom: '20px' }}>
            We take pride in creating unforgettable experiences for our clients. Here's what some of our travelers had to say about their journey with Craydel Africa Travel.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex-shrink-0 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white p-3 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden mx-auto" style={{ maxWidth: '1200px', width: '100%' }}>
            <div
              className="flex transition-transform duration-300"
              style={{
                transform: `translateX(calc(-${currentIndex * 33.33}% - ${currentIndex * 1.5}rem))`,
                gap: '32px'
              }}
            >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-1/3 flex-shrink-0 bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col"
                    style={{ padding: '32px', margin: '8px' }}
                  >
                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-base leading-relaxed mb-8 flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Client Details */}
                    <div className="flex items-center gap-5 pt-6 border-t border-gray-200">
                      {/* Client Image */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                      />
                      
                      {/* Client Info */}
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900 text-base mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
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
    </section>
  );
}
