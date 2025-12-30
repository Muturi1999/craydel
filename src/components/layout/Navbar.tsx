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
  const [packagesOpen, setPackagesOpen] = useState(false);
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
      <nav className="bg-white shadow-sm">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8 relative z-40" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink">
              <div className="w-14 h-14 md:w-[50px] md:h-[50px] relative flex-shrink-0">
                <img 
                  src="/assets/images/logo-removebg-preview.png" 
                  alt="Craydel Logo"
                  className="w-full h-full object-contain"
                />
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
                  <div className="absolute top-full mt-2 bg-white shadow-xl rounded-lg z-[9999] border border-gray-200" style={{ left: 'calc(50% - 425px)', width: '1050px', maxHeight: '730px', overflowY: 'auto' }}>
                    <div className="grid grid-cols-3 gap-12 pt-12 px-12 pb-12">
                      {/* Core Travel Services */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Core Travel Services</h4>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Safari Tours & Game Drives</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Hotel & Lodge Reservations</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Airport Transfers & Transportation</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Flight Ticketing</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Visa Processing & Assistance</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Travel Insurance</a>
                      </div>
                      
                      {/* Specialized Services */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Specialized Services</h4>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Customized Tour Packages</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Corporate Travel Solutions</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Honeymoon Packages</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Group Tours & Excursions</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Cruise Holiday Packages</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Mountain Climbing Expeditions</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Beach Holiday Packages</a>
                      </div>
                      
                      {/* Additional Services */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Additional & Specialty</h4>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Photography Safaris</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Bird Watching Tours</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Hot Air Balloon Safaris</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Car Hire & 4x4 Rentals</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Conference & Event Planning</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Educational Tours</a>
                        <a href="#services" className="block py-2 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Luxury Private Jet Charters</a>
                      </div>
                    </div>
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
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl rounded-lg z-[9999] border border-gray-200" style={{ width: '1050px', maxHeight: '700px', overflowY: 'auto' }}>
                    <div className="grid grid-cols-3 gap-12 p-12">
                      {/* Kenya Destinations */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Kenya Destinations</h4>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Maasai Mara National Reserve</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Amboseli National Park</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Lake Nakuru National Park</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Tsavo East & West</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Samburu National Reserve</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Lake Naivasha</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Hell's Gate National Park</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Diani Beach</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Lamu Island</a>
                      </div>
                      
                      {/* Tanzania & Regional */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Tanzania Destinations</h4>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Serengeti National Park</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Ngorongoro Crater</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Tarangire National Park</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Lake Manyara National Park</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Mount Kilimanjaro</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Zanzibar Island</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Pemba Island</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Arusha</a>
                      </div>
                      
                      {/* Other African Destinations */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Other African Destinations</h4>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Rwanda - Gorilla Trekking</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Uganda - Bwindi & Queen Elizabeth</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">South Africa - Kruger</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Botswana - Okavango Delta</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Victoria Falls</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Namibia - Etosha</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Egypt - Pyramids & Nile</a>
                        <a href="#destinations" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Watamu & Malindi</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tour Packages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPackagesOpen(true)}
                onMouseLeave={() => setPackagesOpen(false)}
              >
                <button className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm">
                  TOUR PACKAGES
                  <ChevronDown className="w-4 h-4" />
                </button>
                {packagesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl rounded-lg z-[9999] border border-gray-200" style={{ width: '1050px', maxHeight: '750px', overflowY: 'auto' }}>
                    <div className="grid grid-cols-4 gap-10 p-10">
                      {/* Safari Packages */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Safari Packages</h4>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Classic Kenya Safari (5-7 Days)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Tanzania Wildlife Safari (7-10 Days)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Combined Kenya & Tanzania (10-14 Days)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Big Five Safari Experience</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Great Migration Safari (Seasonal)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Luxury Safari Packages</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Budget Camping Safaris</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Flying Safari Packages</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Family Safari Adventures</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Photography Safari Tours</a>
                      </div>
                      
                      {/* Beach & Safari Combos */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Beach & Safari Combos</h4>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Safari & Zanzibar Beach Holiday</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Safari & Diani Beach Escape</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Safari & Lamu Island Retreat</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Mombasa Beach & Safari Package</a>
                        
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400 mt-8">Adventure Packages</h4>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Mount Kilimanjaro Climbing (5-9 Days)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Mount Kenya Trekking</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Gorilla Trekking Rwanda/Uganda</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Hot Air Balloon Safari Package</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Walking Safari Adventures</a>
                      </div>
                      
                      {/* Specialty Packages */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Specialty Packages</h4>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Honeymoon Safari & Beach Package</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Family Safari Packages</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Corporate Team Building Safaris</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Cultural & Community Tours</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Bird Watching Expeditions</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Wellness & Yoga Retreats</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Luxury Train Journeys</a>
                      </div>
                      
                      {/* Cruise & Water Packages */}
                      <div>
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400">Cruise & Water Packages</h4>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">Indian Ocean Cruise Packages</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Dhow Sailing Expeditions</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Lake Victoria Cruises</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Diving & Snorkeling Packages</a>
                        
                        <h4 className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400 mt-8">Extended Tours</h4>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:text-green-900 hover:font-medium transition">East African Grand Tour (21+ Days)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Africa Highlights (Multi-Country)</a>
                        <a href="#packages" className="block py-1.5 text-sm text-gray-800 hover:text-green-900 hover:font-medium transition">Round-the-World Safari Tours</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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


