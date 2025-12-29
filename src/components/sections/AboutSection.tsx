'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-jungle mb-6">
            Care About Us
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-jungle mb-8">
            About Us:
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We create unforgettable African travel experiences with passion, trust, and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-jungle-pale p-8 sm:p-10 rounded-lg border-l-4 border-jungle-accent">
              <h4 className="text-2xl font-bold text-jungle mb-4">Mission</h4>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To deliver seamless, personalized journeys showcasing Africa's beauty, culture, and adventure.
              </p>
            </div>

            <div className="bg-jungle-pale p-8 sm:p-10 rounded-lg border-l-4 border-jungle-accent">
              <h4 className="text-2xl font-bold text-jungle mb-4">Vision</h4>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Be Africa's leading travel partner, inspiring exploration through exceptional service and experiences.
              </p>
            </div>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1503046891726-36bfd957e2af?w=600&h=500&fit=crop" alt="Safari" className="rounded-lg shadow-xl w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
