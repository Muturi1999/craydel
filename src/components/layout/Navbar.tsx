'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const pathname = usePathname();

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (searchOpen) setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, searchOpen]);

  // Check if a route is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      {/* Top Bar */}
      <div className={`bg-green-900 text-white overflow-x-hidden transition-all duration-300 ${
        scrolled ? 'h-0 opacity-0 hidden' : 'h-12'
      }`}>
          <div className={`flex justify-between items-center h-12 text-sm transition-all duration-300`} style={{ paddingLeft: isLargeScreen ? '200px' : '1rem', paddingRight: isLargeScreen ? '200px' : '1rem' }}>
            <span className="text-xs md:text-sm whitespace-nowrap">Kenya&apos;s best Travel and Tour Agency</span>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="hidden lg:flex items-center justify-center text-base">
                <a href="tel:+254722881541" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                  +254 722 881 541
                </a>
              </div>
              <a
                href="mailto:info@craydelafricatravel.co.ke"
                className="hidden lg:inline hover:text-gray-300 transition-colors text-base whitespace-nowrap"
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
      <nav className="bg-white">
          <div className={`flex justify-between items-center relative z-40 transition-all duration-300 ${
            scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
          }`} style={{ paddingLeft: isLargeScreen ? '200px' : '1rem', paddingRight: isLargeScreen ? '200px' : '1rem' }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink">
              <div className={`relative flex-shrink-0 transition-all duration-300 ${
                scrolled ? 'w-16 h-16 md:w-20 md:h-20' : 'w-[100px] h-[100px]'
              }`}>
                <img 
                  src="/assets/images/logo-removebg-preview.png" 
                  alt="Craydel Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className={`text-green-900 font-bold tracking-wide uppercase lg:whitespace-nowrap transition-all duration-300 ${
                scrolled ? 'text-[10px] md:text-xs lg:text-sm' : 'text-xs md:text-sm lg:text-base'
              }`}>
                CRAYDEL TOUR AND TRAVELS
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`font-medium transition-all px-4 py-2 uppercase text-sm relative ${
                  isActive('/')
                    ? 'text-green-700 font-bold'
                    : 'text-green-900 hover:text-green-700'
                }`}
              >
                HOME
                {isActive('/') && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-700"></span>
                )}
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-all px-4 py-2 uppercase text-sm relative ${
                  isActive('/about')
                    ? 'text-green-700 font-bold'
                    : 'text-green-900 hover:text-green-700'
                }`}
              >
                ABOUT US
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-700"></span>
                )}
              </Link>

              {/* Services Dropdown with shadcn */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm outline-none">
                    SERVICES
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-gray-50 max-h-[750px] overflow-y-auto"
                    align="center"
                    style={{ 
                      width: '1200px', 
                      paddingTop: '40px', 
                      paddingBottom: '40px', 
                      paddingLeft: '40px', 
                      paddingRight: '40px',
                      marginTop: '8px'
                    }}
                  >
                  <div className="grid grid-cols-3 gap-16">
                    {/* Core Travel Services */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Core Travel Services
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Safari Tours & Game Drives
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Hotel & Lodge Reservations
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Airport Transfers & Transportation
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Flight Ticketing
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Visa Processing & Assistance
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Travel Insurance
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Specialized Services */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Specialized Services
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Customized Tour Packages
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Corporate Travel Solutions
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Honeymoon Packages
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Group Tours & Excursions
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Cruise Holiday Packages
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Mountain Climbing Expeditions
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Beach Holiday Packages
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Additional Services */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Additional & Specialty
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Photography Safaris
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Bird Watching Tours
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Hot Air Balloon Safaris
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Car Hire & 4x4 Rentals
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Conference & Event Planning
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Educational Tours
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#services" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Luxury Private Jet Charters
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Destinations Dropdown with shadcn */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm outline-none">
                    DESTINATIONS
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-gray-50 max-h-[750px] overflow-y-auto"
                    align="center"
                    style={{ 
                      width: '1200px', 
                      paddingTop: '40px', 
                      paddingBottom: '40px', 
                      paddingLeft: '40px', 
                      paddingRight: '40px',
                      marginTop: '8px'
                    }}
                  >
                  <div className="grid grid-cols-3 gap-16">
                    {/* Kenya Destinations */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Kenya Destinations
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Maasai Mara National Reserve
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Amboseli National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Lake Nakuru National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Tsavo East & West
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Samburu National Reserve
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Lake Naivasha
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Hell's Gate National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Diani Beach
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Lamu Island
                        </a>
                      </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Tanzania Destinations */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Tanzania Destinations
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Serengeti National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Ngorongoro Crater
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Tarangire National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Lake Manyara National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Mount Kilimanjaro
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Zanzibar Island
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Pemba Island
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Arusha
                        </a>
                      </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Other African Destinations */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Other African Destinations
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Rwanda - Gorilla Trekking
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Uganda - Bwindi & Queen Elizabeth
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          South Africa - Kruger
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Botswana - Okavango Delta
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Victoria Falls
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Namibia - Etosha
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Egypt - Pyramids & Nile
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                          Watamu & Malindi
                        </a>
                      </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Tour Packages Dropdown with shadcn */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm outline-none">
                    TOUR PACKAGES
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="bg-gray-50 max-h-[750px] overflow-y-auto"
                    align="center"
                    style={{ 
                      width: '1200px', 
                      paddingTop: '40px', 
                      paddingBottom: '40px', 
                      paddingLeft: '40px', 
                      paddingRight: '40px',
                      marginTop: '8px'
                    }}
                  >
                  <div className="grid grid-cols-4 gap-16">
                    {/* Safari Packages */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Safari Packages
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Classic Kenya Safari (5-7 Days)
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Tanzania Wildlife Safari (7-10 Days)
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Combined Kenya & Tanzania
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Big Five Safari Experience
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Great Migration Safari
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Luxury Safari Packages
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Beach & Adventure */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Beach & Adventure
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Safari & Zanzibar Beach
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Safari & Diani Beach
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Mount Kilimanjaro Climbing
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Mount Kenya Trekking
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Gorilla Trekking
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Hot Air Balloon Safari
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Specialty Packages */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Specialty Packages
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Honeymoon Safari & Beach
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Family Safari Packages
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Corporate Team Building
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Cultural & Community Tours
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Bird Watching Expeditions
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Wellness & Yoga Retreats
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    
                    {/* Extended Tours */}
                    <div>
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-6 pb-3 border-b-2 border-green-400" style={{ paddingBottom: '12px' }}>
                        Extended Tours
                      </DropdownMenuLabel>
                      <div className="space-y-2">
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Indian Ocean Cruise
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Dhow Sailing Expeditions
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Lake Victoria Cruises
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Diving & Snorkeling
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            East African Grand Tour
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href="#packages" className="block py-2 text-sm text-gray-600 hover:text-green-900 cursor-pointer transition-colors">
                            Round-the-World Safari
                          </a>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className={`font-medium transition-all px-4 py-2 uppercase text-sm relative ${
                  isActive('/contact')
                    ? 'text-green-700 font-bold'
                    : 'text-green-900 hover:text-green-700'
                }`}
              >
                CONTACT US
                {isActive('/contact') && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-700"></span>
                )}
              </Link>

              {/* Search Icon */}
              <button
                className="text-green-900 p-2 hover:text-green-700 transition-colors ml-2 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 rounded"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label={searchOpen ? 'Close search' : 'Open search'}
                aria-expanded={searchOpen}
              >
                <Search className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-green-900 p-2 hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Search Bar (desktop) */}
        {searchOpen && (
          <div className="hidden lg:block border-t border-gray-200 py-4" style={{ paddingLeft: '200px', paddingRight: '200px' }}>
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
                className="text-gray-500 hover:text-gray-700 p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 rounded"
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
          <div className="lg:hidden fixed inset-0 z-40">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 top-0 bg-white h-full w-80 max-w-[85vw] shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="pt-6 pb-4 space-y-1 px-4">
              <Link
                href="/"
                className={`block py-3 px-4 rounded-lg transition-all text-sm uppercase ${
                  isActive('/')
                    ? 'bg-green-100 text-green-900 font-bold'
                    : 'text-green-900 hover:bg-green-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`block py-3 px-4 rounded-lg transition-all text-sm uppercase ${
                  isActive('/about')
                    ? 'bg-green-100 text-green-900 font-bold'
                    : 'text-green-900 hover:bg-green-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <button
                className="w-full text-left py-3 px-4 rounded-lg text-green-900 hover:bg-green-50 transition-all text-sm uppercase flex items-center justify-between"
                onClick={() => {
                  // Scroll to services section on home page
                  if (pathname === '/') {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#services';
                  }
                  setMobileMenuOpen(false);
                }}
              >
                SERVICES
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                className="w-full text-left py-3 px-4 rounded-lg text-green-900 hover:bg-green-50 transition-all text-sm uppercase flex items-center justify-between"
                onClick={() => {
                  // Scroll to destinations section on home page
                  if (pathname === '/') {
                    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#destinations';
                  }
                  setMobileMenuOpen(false);
                }}
              >
                DESTINATIONS
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                className="w-full text-left py-3 px-4 rounded-lg text-green-900 hover:bg-green-50 transition-all text-sm uppercase flex items-center justify-between"
                onClick={() => {
                  // Scroll to packages section on home page
                  if (pathname === '/') {
                    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#packages';
                  }
                  setMobileMenuOpen(false);
                }}
              >
                TOUR PACKAGES
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link
                href="/contact"
                className={`block py-3 px-4 rounded-lg transition-all text-sm uppercase ${
                  isActive('/contact')
                    ? 'bg-green-100 text-green-900 font-bold'
                    : 'text-green-900 hover:bg-green-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}


