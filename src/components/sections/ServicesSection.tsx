'use client';

import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Customized Tour Packages',
      description: 'Experience tailor-made tours designed to match your interests, budget, and schedule — giving you the freedom to explore destinations your way.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
    },
    {
      title: 'Group Tours & Excursions',
      description: 'Join our expertly curated group tours perfect for families, friends, schools, or organizations looking to explore together and create lasting memories.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop'
    },
    {
      title: 'Cruise Holiday Packages',
      description: 'Set sail on luxurious cruises and explore the world from a new perspective — complete with exciting destinations and onboard experiences.',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&h=400&fit=crop'
    },
    {
      title: 'Hotel & Lodge Reservations',
      description: 'Where you stay matters just as much as where you go. We partner with a wide range of hotels, lodges, and resorts — from budget-friendly stays to world-class luxury retreats.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'
    },
    {
      title: 'Ticketing & Airport Transfers',
      description: 'We simplify your travel from the very start. Our ticketing services ensure you get the best flights at competitive rates, saving you time and money.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop'
    },
    {
      title: 'Corporate Travel Solutions',
      description: 'We handle all your business travel needs — from flights to accommodation — ensuring seamless and professional experiences for your team.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-jungle mb-6 sm:mb-8 text-center">Our Tailored Travel Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer border border-gray-200">
              {/* Image */}
              <div className="relative h-40 flex items-center justify-center p-6 bg-gray-50">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-jungle">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
