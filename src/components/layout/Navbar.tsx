'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-green-900 text-white overflow-x-hidden">
        <div className="flex justify-between items-center h-12 text-sm px-4 md:px-8" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
          <span className="text-xs md:text-sm">Kenya&apos;s best Travel and Tour Agency</span>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden lg:flex items-center justify-center flex-1 text-lg">
              <a href="tel:+254722881541" className="hover:text-gray-300 transition-colors">
                +254 722 881 541
              </a>
            </div>
            <a
              href="mailto:info@craydelafricatravel.co.ke"
              className="hidden lg:inline hover:text-gray-300 transition-colors text-lg"
            >
              info@craydelafricatravel.co.ke
            </a>
            <div className="flex gap-2 md:gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=FFFFFF" alt="Facebook" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://wa.me/254724458151" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=uZWiLUyryScN&format=png&color=FFFFFF" alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF" alt="X" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=FFFFFF" alt="Instagram" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/?size=100&id=omVNNE6wkyP7&format=png&color=FFFFFF" alt="YouTube" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-sm overflow-x-hidden">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink">
              <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#2D5016" opacity="0.1" />
                  <path
                    d="M50 20 Q30 35, 30 50 Q30 65, 50 70 Q70 65, 70 50 Q70 35, 50 20 Z"
                    fill="#2D5016"
                  />
                  <ellipse cx="50" cy="65" rx="25" ry="8" fill="#8B6F47" />
                </svg>
              </div>
              <div className="text-green-900 font-bold text-xs md:text-sm lg:text-base tracking-wide uppercase lg:whitespace-nowrap">
                CRAYDEL TOUR AND TRAVELS
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="#home"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                HOME
              </a>
              <a
                href="#about"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                ABOUT US
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm">
                  SERVICES
                  <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-100">
                    <a
                      href="#services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Safari Tours
                    </a>
                    <a
                      href="#services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Beach Holidays
                    </a>
                    <a
                      href="#services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Mountain Climbing
                    </a>
                  </div>
                )}
              </div>

              {/* Destinations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDestinationsOpen(true)}
                onMouseLeave={() => setDestinationsOpen(false)}
              >
                <button className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm">
                  DESTINATIONS
                  <ChevronDown className="w-4 h-4" />
                </button>
                {destinationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-100">
                    <a
                      href="#destinations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Maasai Mara
                    </a>
                    <a
                      href="#destinations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Amboseli
                    </a>
                    <a
                      href="#destinations"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Diani Beach
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#services"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                TOUR PACKAGES
              </a>
              <a
                href="#contact"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                CONTACT US
              </a>

              {/* Search Icon */}
              <button
                className="text-green-900 p-2 hover:text-green-700 transition-colors ml-2"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
            className="lg:hidden text-green-900 p-2 hover:text-green-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Search Bar (desktop) */}
        {searchOpen && (
          <div className="hidden lg:block border-t border-gray-200 py-4 px-4 md:px-8 lg:px-[200px]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-transparent text-sm"
                autoFocus
              />
              <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors text-sm font-medium">
                Search
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 p-2"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="pt-2 pb-4 space-y-2 bg-white px-4 md:px-8">
              <a
                href="#home"
                className="block py-2 text-green-900 font-medium text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="#about"
                className="block py-2 text-green-900 font-medium text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </a>
              <a
                href="#services"
                className="block py-2 text-green-900 font-medium text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </a>
              <a
                href="#destinations"
                className="block py-2 text-green-900 font-medium text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                DESTINATIONS
              </a>
              <a
                href="#services"
                className="block py-2 text-green-900 font-medium text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                TOUR PACKAGES
              </a>
              <a
                href="#contact"
                className="block py-2 text-green-900 font-medium text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


