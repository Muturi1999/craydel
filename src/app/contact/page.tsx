'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden mt-[112px]">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=500&fit=crop"
          alt="Customer Support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              Get In <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto" style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              We're here to help you plan your perfect African adventure. Reach out today!
            </p>
          </div>
        </div>
      </section>

      {/* How To Reach Us Section */}
      <section className="py-20 md:py-28 lg:py-32 bg-gray-900 text-white relative overflow-hidden" style={{ marginLeft: '-200px', marginRight: '-200px', paddingLeft: '200px', paddingRight: '200px', paddingBottom: '50px' }}>
        <div style={{ marginLeft: '200px', marginRight: '200px' }}>
          <div className="text-center mb-12 md:mb-16 lg:mb-20" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              How To <span className="text-green-400">Reach Us</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto text-center" style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
              Are you ready to embark on a journey of a lifetime? Then take the first step which is reaching out to us through the methods and platforms below to get started today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 relative z-10">
            {/* Opening Times Card */}
            <div className="group bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div style={{ padding: '12px' }}>
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white/30 transition-colors">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 md:mb-8 border-b-2 border-white/30 pb-4">Opening Times</h3>
              
                <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Weekdays:</span>
                  <span className="font-bold">8 am - 5 pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Saturdays:</span>
                  <span className="font-bold">9 am - 3 pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Sundays:</span>
                  <span className="font-bold">9 am - 1 pm</span>
                </div>
              </div>

                <div className="mt-8">
                  <a 
                    href="#book-appointment"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-300 transition-colors"
                  >
                    Know More <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Call For Us Card */}
            <div className="group bg-gradient-to-br from-orange-500 to-orange-700 p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div style={{ padding: '12px' }}>
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white/30 transition-colors">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 md:mb-8 border-b-2 border-white/30 pb-4">Call For Us !</h3>
              
              <a 
                href="tel:+254724458151" 
                className="text-4xl font-black mb-6 block hover:text-green-300 transition-colors"
              >
                +254 724 458 151
              </a>

              <p className="text-gray-100 text-lg leading-relaxed">
                Our lines are always on and our team always ready to answer any questions you may have or begin booking your next great adventure
              </p>

                <div className="mt-8">
                  <a 
                    href="tel:+254724458151"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-300 transition-colors"
                  >
                    Call Now <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Us Card */}
            <div className="group bg-gradient-to-br from-purple-900 to-purple-950 p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div style={{ padding: '12px' }}>
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white/30 transition-colors">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 md:mb-8 border-b-2 border-white/30 pb-4">Email Us !</h3>
              
              <a 
                href="mailto:info@craydelafricatravel.co.ke" 
                className="text-2xl font-bold mb-6 block hover:text-green-300 transition-colors break-all"
              >
                info@craydelafricatravel.co.ke
              </a>

              <p className="text-gray-100 text-lg leading-relaxed">
                Feel free to email us with any inquiries or to plan for the perfect safari for you and your family
              </p>

                <div className="mt-8">
                  <a 
                    href="mailto:info@craydelafricatravel.co.ke"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-300 transition-colors"
                  >
                    Send Email <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 md:py-28 lg:py-32" style={{ marginLeft: '200px', marginRight: '200px', paddingBottom: '50px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Contact Form */}
          <div>
            <div className="mb-12 md:mb-16" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8">
                Let's Start Planning
              </h2>
              <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mx-auto" style={{ paddingTop: '20px', paddingBottom: '20px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
                Fill out the form below and we will be back to you in minutes
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="+254 700 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-green-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="safari">Safari Inquiry</option>
                  <option value="package">Tour Package Information</option>
                  <option value="booking">Booking Assistance</option>
                  <option value="custom">Custom Tour Request</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-green-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your travel plans..."
                />
              </div>

              {submitSuccess && (
                <div className="p-4 bg-green-100 border-2 border-green-600">
                  <p className="text-green-800 font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <div className="overflow-hidden shadow-2xl h-[400px]" style={{ marginTop: '50px', marginBottom: '100px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8157890614886!2d36.8219462!3d-1.2837624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6cb6e8b8d%3A0x6c8b3f6c8f3c6e8f!2sDelta%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1640000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Craydel Africa Travel Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden" style={{ marginLeft: '-200px', marginRight: '-200px', paddingLeft: '200px', paddingRight: '200px' }}>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6" style={{ paddingTop: '40px', paddingBottom: '40px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 md:mb-12 text-gray-100 leading-relaxed mx-auto" style={{ paddingTop: '20px', paddingBottom: '20px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            Don't wait! Contact us today and let's create unforgettable memories together.
          </p>
          <div className="flex gap-6 justify-center flex-wrap" style={{ paddingTop: '20px', marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
            <a
              href="tel:+254724458151"
              className="bg-white text-green-900 font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
              style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}
            >
              <Phone className="w-9 h-9" style={{ width: '35px', height: '35px' }} />
              Call Now
            </a>
            <a
              href="https://wa.me/254724458151"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-900 text-white font-bold hover:bg-green-950 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
              style={{ paddingTop: '16px', paddingBottom: '16px', paddingLeft: '24px', paddingRight: '24px' }}
            >
                <img 
                  src="https://img.icons8.com/?size=100&id=A1JUR9NRH7sC&format=png&color=FFFFFF" 
                  alt="WhatsApp" 
                  style={{ width: '35px', height: '35px' }}
                />
                WhatsApp Us
              </a>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}
