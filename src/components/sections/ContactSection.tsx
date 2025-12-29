'use client';

import { useState } from 'react';
import { Clock, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* How To Reach Us Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-jungle mb-6">
              How To Reach Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Are you ready to embark on a journey of a lifetime? Then take the first step which is reaching out to us through the methods and platforms below to get started today
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
            {/* Opening Times Card */}
            <div className="p-8 sm:p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-jungle-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-jungle-pale rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-jungle" />
                </div>
                <h3 className="text-2xl font-bold text-jungle">Opening Times</h3>
              </div>
              <div className="space-y-2">
                <p className="text-base text-gray-700"><span className="font-semibold">Weekdays:</span> 8 am - 5 pm</p>
                <p className="text-base text-gray-700"><span className="font-semibold">Saturdays:</span> 9 am - 3 pm</p>
                <p className="text-base text-gray-700"><span className="font-semibold">Sundays:</span> 9 am - 1 pm</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-8 sm:p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-jungle-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-jungle-pale rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-jungle" />
                </div>
                <h3 className="text-2xl font-bold text-jungle">Call For Us!</h3>
              </div>
              <p className="text-2xl font-bold text-jungle-accent mb-3">+254 724 458 151</p>
              <p className="text-base text-gray-700 mb-6">
                Our lines are always on and our team always ready to answer any questions you may have or begin booking your next great adventure
              </p>
              <a href="#contact-form" className="text-jungle-accent hover:text-jungle font-bold">Know More →</a>
            </div>

            {/* Email Card */}
            <div className="p-8 sm:p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-jungle-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-jungle-pale rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-jungle" />
                </div>
                <h3 className="text-2xl font-bold text-jungle">Email Us!</h3>
              </div>
              <p className="text-xl font-bold text-jungle-accent mb-3 break-all">Info@Craydelafricatravel.Co.Ke</p>
              <p className="text-base text-gray-700 mb-6">
                Feel free to email us with any inquiries or to plan for the perfect safari for you and your family
              </p>
              <a href="#contact-form" className="text-jungle-accent hover:text-jungle font-bold">Know More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-jungle-pale">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-jungle mb-12 sm:mb-16 text-center">
            Call Us Today
          </h2>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-jungle mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border-2 border-jungle-light rounded-lg focus:outline-none focus:border-jungle focus:ring-2 focus:ring-jungle/20 text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-jungle mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border-2 border-jungle-light rounded-lg focus:outline-none focus:border-jungle focus:ring-2 focus:ring-jungle/20 text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-lg font-medium text-jungle mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-3 border-2 border-jungle-light rounded-lg focus:outline-none focus:border-jungle focus:ring-2 focus:ring-jungle/20 resize-none text-base"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-jungle-accent hover:bg-jungle-light text-white font-bold py-4 rounded-lg text-lg transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
