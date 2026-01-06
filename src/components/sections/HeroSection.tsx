'use client';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[70vh] flex items-center justify-center">
      {/* Background Video with Overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/hero1-banner-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 py-20 sm:py-32">
        <div className="mb-8">
          <p className="text-sm sm:text-base md:text-lg text-green-300 font-semibold mb-4 tracking-widest uppercase">
            Discover Africa Like Never Before
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            Experience Unforgettable Journeys
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            &quot;Travel is the only thing you buy that makes you richer. Let us create your perfect African adventure.&quot;
          </p>
        </div>
        <a href="#contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-10 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg transition transform hover:scale-105 shadow-lg hover:shadow-xl">
          Plan Your Journey
        </a>
      </div>
    </section>
  );
}
