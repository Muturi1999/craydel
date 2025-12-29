'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Customized Tour Packages',
      description: 'Experience tailor-made tours designed to match your interests, budget, and schedule — giving you the freedom to explore destinations your way.'
    },
    {
      title: 'Group Tours & Excursions',
      description: 'Join our expertly curated group tours perfect for families, friends, schools, or organizations looking to explore together and create lasting memories.'
    },
    {
      title: 'Cruise Holiday Packages',
      description: 'Set sail on luxurious cruises and explore the world from a new perspective — complete with exciting destinations and onboard experiences.'
    },
    {
      title: 'Hotel & Lodge Reservations',
      description: 'Where you stay matters just as much as where you go. We partner with a wide range of hotels, lodges, and resorts — from budget-friendly stays to world-class luxury retreats.'
    },
    {
      title: 'Ticketing & Airport Transfers',
      description: 'We simplify your travel from the very start. Our ticketing services ensure you get the best flights at competitive rates, saving you time and money.'
    },
    {
      title: 'Corporate Travel Solutions',
      description: 'We handle all your business travel needs — from flights to accommodation — ensuring seamless and professional experiences for your team.'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-jungle mb-6 sm:mb-8">Our Tailored Travel Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="p-8 sm:p-10 bg-white rounded-lg shadow-lg hover:shadow-2xl transition border-b-4 border-jungle-accent">
              <h3 className="text-xl sm:text-2xl font-bold text-jungle mb-4 leading-tight">{service.title}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
