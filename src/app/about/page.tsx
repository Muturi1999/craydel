'use client';

import Link from 'next/link';
import { ChevronDown, Zap, Shield, Heart, Users, Award, Lightbulb, Globe } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useState } from 'react';

export default function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I book a tour package?",
      answer: "You can browse our tour packages section, select your preferred package, and click 'Book Now' or contact our team directly via phone, email, or WhatsApp for personalized assistance."
    },
    {
      question: "What is included in your tour packages?",
      answer: "Our packages typically include accommodation, transportation, game drives, guided tours, and meals. Specific inclusions vary by package. Check the package details for exact information."
    },
    {
      question: "Do you offer customized tour packages?",
      answer: "Yes! We specialize in creating customized tour packages tailored to your preferences. Visit our categories section or contact us directly to discuss your dream itinerary."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy allows for free cancellations up to 30 days before your tour. For cancellations within 30 days, a fee may apply. Contact us for specific details."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance options as part of our services. We can include it in your package or help you arrange it separately."
    },
    {
      question: "What is the best time to visit Kenya?",
      answer: "The best time depends on your interests. June-October offers excellent wildlife viewing during the Great Migration, while December-February is ideal for beach destinations and hot weather activities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden mt-[112px]">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=500&fit=crop"
          alt="About Craydel Africa Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '200px', marginRight: '200px' }}>
        {/* First Section - Your Gateway */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="text-center mb-12 md:mb-16 mx-auto" style={{ paddingTop: '30px', paddingBottom: '30px', maxWidth: '100%', width: 'fit-content' }}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-10 md:mb-12 leading-tight" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              Your Gateway To <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">African Adventures</span>
            </h2>
          </div>

          <div className="mx-auto" style={{ maxWidth: '1100px', width: '100%', paddingLeft: '80px', paddingRight: '80px', marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-light" style={{ paddingTop: '20px', paddingBottom: '20px', lineHeight: '1.8', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxWidth: '100%' }}>
              At <span className="font-bold text-green-700">Craydel Africa Travel</span>, we believe every journey should be as unique as you are. From breathtaking safaris and serene beach escapes to immersive cultural tours, we specialize in creating tailored travel experiences across Africa. Our team of experts is committed to delivering safe, seamless, and unforgettable adventures designed to inspire lasting memories. Whether you're planning a short getaway or a grand expedition, we're here to guide you every step of the way.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl mb-20 md:mb-28 lg:mb-32 px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            <div className="text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-4">500+</div>
              <p className="text-gray-600 font-semibold text-base md:text-lg">Happy Travelers</p>
            </div>
            <div className="text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-4">13</div>
              <p className="text-gray-600 font-semibold text-base md:text-lg">Destinations Covered</p>
            </div>
            <div className="text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-4">50+</div>
              <p className="text-gray-600 font-semibold text-base md:text-lg">Tour Packages</p>
            </div>
            <div className="text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-4">15+</div>
              <p className="text-gray-600 font-semibold text-base md:text-lg">Years Experience</p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gray-50" style={{ marginLeft: '-200px', marginRight: '-200px', paddingLeft: '200px', paddingRight: '200px' }}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 md:mb-16 lg:mb-20 text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20 lg:mb-24 px-4 md:px-6">
            {/* Mission Card */}
            <div className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-green-600 to-emerald-600"></div>
              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-6 md:mb-8" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '16px' }}>
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Globe className="w-8 h-8 text-green-700" />
                  </div>
                </div>
                <div style={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '16px' }}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-6">Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    To deliver seamless, personalized journeys showcasing Africa's beauty, culture, and adventure with integrity and excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-6 md:mb-8" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '16px' }}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Lightbulb className="w-8 h-8 text-blue-700" />
                  </div>
                </div>
                <div style={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '16px' }}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-6">Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    To be Africa's leading travel partner, inspiring exploration through exceptional service and transformative experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Card */}
            <div className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-orange-600 to-red-600"></div>
              <div className="p-8 md:p-10 lg:p-12">
                <div className="mb-6 md:mb-8" style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '16px' }}>
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Heart className="w-8 h-8 text-orange-700" />
                  </div>
                </div>
                <div style={{ paddingLeft: '16px', paddingRight: '16px', paddingBottom: '16px' }}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-6">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    Passion, Trust, Care, Integrity, and Innovation drive everything we do for our clients and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '30px', marginTop: '20px', paddingLeft: '80px', paddingRight: '80px' }}>
            {/* Left Content */}
            <div style={{ marginTop: '-100px' }}>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
                Crafting Extraordinary <span className="text-green-700">African Experiences</span>
              </h2>
              <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                Founded with a passion for authentic African travel, Craydel has grown to become a trusted name in the tourism industry. We combine local expertise with global standards to create journeys that transform lives.
              </p>
              <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
                Our team of seasoned travel professionals, local guides, and hospitality experts work tirelessly to ensure every moment of your journey is memorable, safe, and enriching.
              </p>
            </div>

            {/* Right Images */}
            <div>
              <img
                src="/assets/images/Untitled-design-18.png"
                alt="Craydel Design"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 lg:py-32" style={{ marginBottom: '50px' }}>
          <div className="text-center mb-12 md:mb-16 lg:mb-20" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8">
              What Sets Us <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Apart</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto px-4 text-center" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', paddingTop: '20px', paddingBottom: '20px' }}>
              We combine expertise, passion, and innovation to create travel experiences that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="group bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
              <div style={{ padding: '12px' }}>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Our experienced professionals and local guides provide unparalleled knowledge and support throughout your journey.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div style={{ padding: '12px' }}>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Safety First</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Your safety and security are our top priorities with comprehensive insurance and professional risk management.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
              <div style={{ padding: '12px' }}>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Custom Package</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Every itinerary is tailored to your preferences, creating unique experiences perfectly suited to your style.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div style={{ padding: '12px' }}>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Best Value</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Competitive pricing without compromising on quality, comfort, or the depth of your experience.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200">
              <div style={{ padding: '12px' }}>
                <div className="bg-gradient-to-br from-red-100 to-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Personalized Care</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  We treat each traveler as unique, remembering preferences and going the extra mile to exceed expectations.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group bg-white p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div style={{ padding: '12px' }}>
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-teal-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Local Experience</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Deep connections with local communities enable authentic experiences and hidden gems most travelers never discover.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden" style={{ marginLeft: '-200px', marginRight: '-200px', paddingLeft: '200px', paddingRight: '200px' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6" style={{ paddingTop: '40px', paddingBottom: '40px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              Ready to Explore <span className="text-emerald-300">Africa?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 md:mb-12 text-gray-100 leading-relaxed mx-auto" style={{ paddingTop: '20px', paddingBottom: '20px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              Let our expert team craft the perfect adventure tailored just for you. Your unforgettable journey awaits.
            </p>
            <div className="flex gap-6 justify-center flex-wrap" style={{ paddingTop: '20px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              <Link
                href="/#packages"
                className="bg-white text-green-900 font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl"
                style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}
              >
                Explore Packages
              </Link>
              <Link
                href="/#contact"
                className="text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl hover:bg-blue-700"
                style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px', backgroundColor: '#2563eb', color: 'white' }}
              >
                Start Planning
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-white">
        <div style={{ marginLeft: '200px', marginRight: '200px' }}>
          <div className="text-center mb-12 md:mb-16 lg:mb-20" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto px-4 text-center" style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              Everything you need to know about planning your African adventure
            </p>
          </div>

          <div className="max-w-4xl mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-lg group"
                  style={{ width: '100%', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '24px', paddingRight: '20px' }}
                  >
                  <span className="text-lg md:text-xl font-black text-gray-900 pr-4 group-hover:text-green-700 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-green-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                  {openFAQ === index && (
                    <div className="border-t-2 border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 animate-in fade-in" style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '24px', paddingRight: '20px' }}>
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: '50px' }}></div>

          <div className="mt-12 md:mt-16 lg:mt-20 p-8 md:p-10 lg:p-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 text-center" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Still have questions?</h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              Our customer support team is here to help you 24/7
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold transition-all duration-300 transform hover:scale-105"
              style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}
