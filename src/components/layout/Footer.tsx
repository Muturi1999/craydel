'use client';

import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-auto overflow-x-hidden w-full max-w-full">
      {/* Upper band with tagline */}
      <div className="border-b border-green-800" style={{ marginLeft: '200px', marginRight: '200px' }}>
        <div className="py-12 md:py-16 text-base leading-relaxed" style={{ padding: '20px', fontSize: '16px' }}>
          Craydel Africa Travel offers unforgettable safaris, tours, and tailored holiday packages across Africa. We provide trusted guidance, unique experiences, and seamless journeys designed to inspire your next adventure.
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16 md:py-20" style={{ marginLeft: '200px', marginRight: '200px', padding: '20px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-lg">
              <li className="py-[7.5px]"><a href="#home" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
              <li className="py-[7.5px]"><a href="#about" className="text-gray-200 hover:text-white transition-colors">About Us</a></li>
              <li className="py-[7.5px]"><a href="#services" className="text-gray-200 hover:text-white transition-colors">Services</a></li>
              <li className="py-[7.5px]"><a href="#destinations" className="text-gray-200 hover:text-white transition-colors">Destinations</a></li>
              <li className="py-[7.5px]"><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Tour Packages</a></li>
              <li className="py-[7.5px]"><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Popular Destinations</h3>
            <ul className="space-y-4 text-lg">
              <li className="py-[7.5px]"><a href="#destinations" className="text-gray-200 hover:text-white transition-colors">Maasai Mara</a></li>
              <li className="py-[7.5px]"><a href="#destinations" className="text-gray-200 hover:text-white transition-colors">Lake Nakuru</a></li>
              <li className="py-[7.5px]"><a href="#destinations" className="text-gray-200 hover:text-white transition-colors">Amboseli</a></li>
              <li className="py-[7.5px]"><a href="#destinations" className="text-gray-200 hover:text-white transition-colors">Diani</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-white" />
              <a href="mailto:info@craydelafricatravel.co.ke" className="text-gray-200 hover:text-white transition-colors text-lg">
                info@craydelafricatravel.co.ke
              </a>
            </div>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+254724458151" className="text-gray-200 hover:text-white transition-colors">+254 724 458 151</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-white" />
                <a href="tel:+254722881541" className="text-gray-200 hover:text-white transition-colors">+254 722 881 541</a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mb-12 md:mb-16 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=FFFFFF" alt="Facebook" className="w-9 h-9" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF" alt="X" className="w-9 h-9" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/?size=100&id=omVNNE6wkyP7&format=png&color=FFFFFF" alt="YouTube" className="w-9 h-9" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=FFFFFF" alt="LinkedIn" className="w-9 h-9" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=FFFFFF" alt="Instagram" className="w-9 h-9" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800" style={{ marginLeft: '200px', marginRight: '200px' }}></div>
      <div className="bg-green-900 py-6 md:py-8 overflow-x-hidden" style={{ marginLeft: '200px', marginRight: '200px' }}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm text-gray-300" style={{ padding: '20px' }}>
          <p>Copyright © 2025 craydelafricatravel.co.ke</p>
          <p>Powered by craydelafricatravel.co.ke</p>
        </div>
      </div>
    </footer>
  );
}
