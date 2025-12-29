'use client';

export default function DestinationsSection() {
  const destinations = [
    {
      name: 'Maasai Mara',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop'
    },
    {
      name: 'Lake Nakuru',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop'
    },
    {
      name: 'Amboseli',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      name: 'Diani',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="destinations" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-jungle-dark to-jungle">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16">Popular Destinations</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition cursor-pointer h-64 sm:h-72">
              <img src={destination.image} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
