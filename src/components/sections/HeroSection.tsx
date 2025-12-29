'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&h=900&fit=crop)',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 py-20 sm:py-32 animate-slide-up" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
        <p className="text-lg sm:text-xl md:text-2xl text-jungle-accent font-semibold mb-4 sm:mb-6 tracking-wide animate-fade-in-delay">
          Trusted, Memorable, and Unique
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-tight drop-shadow-2xl">
          Your Gateway to African Adventures
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-4 sm:mb-6 leading-relaxed max-w-3xl">
          At Craydel Africa Travel, we believe every journey should be as unique as you are. From breathtaking safaris and serene beach escapes to immersive cultural tours, we specialize in creating tailored travel experiences across Africa.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl">
          Our team of experts is committed to delivering safe, seamless, and unforgettable adventures designed to inspire lasting memories. Whether you're planning a short getaway or a grand expedition, we're here to guide you every step of the way.
        </p>
        <a href="#contact" className="inline-block bg-jungle-accent hover:bg-jungle-light text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition transform hover:scale-105 shadow-lg hover:shadow-xl">
          CONTACT
        </a>
      </div>
    </section>
  );
}
