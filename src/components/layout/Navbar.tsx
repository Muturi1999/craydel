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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
      {/* Top Bar */}
      <div className="bg-green-900 text-white overflow-x-hidden">
          <div className="flex justify-between items-center h-12 text-sm px-4 md:px-8 lg:pl-[200px] lg:pr-[200px]">
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
          <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8 lg:px-0 relative z-40">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink lg:ml-[200px]">
              <div className="w-[100px] h-[100px] relative flex-shrink-0">
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
              <Link
                href="/"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                ABOUT US
              </Link>

              {/* Services Dropdown with shadcn */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-green-900 font-medium hover:text-green-700 transition-colors flex items-center gap-1 px-4 py-2 uppercase text-sm outline-none">
                    SERVICES
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-[1050px] max-h-[730px] overflow-y-auto p-8 m-4 pb-10"
                    align="center"
                  >
                  <div className="grid grid-cols-3 gap-12">
                    {/* Core Travel Services */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Core Travel Services
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Safari Tours & Game Drives
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Hotel & Lodge Reservations
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Airport Transfers & Transportation
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Flight Ticketing
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Visa Processing & Assistance
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Travel Insurance
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Specialized Services */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Specialized Services
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Customized Tour Packages
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Corporate Travel Solutions
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Honeymoon Packages
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Group Tours & Excursions
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Cruise Holiday Packages
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Mountain Climbing Expeditions
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-2 text-sm text-gray-700 hover:text-green-900 cursor-pointer">
                          Beach Holiday Packages
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Additional Services */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Additional & Specialty
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Photography Safaris
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Bird Watching Tours
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Hot Air Balloon Safaris
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Car Hire & 4x4 Rentals
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Conference & Event Planning
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Educational Tours
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#services" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Luxury Private Jet Charters
                        </a>
                      </DropdownMenuItem>
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
                    className="w-[1050px] max-h-[700px] overflow-y-auto p-8 m-4 pb-10"
                    align="center"
                  >
                  <div className="grid grid-cols-3 gap-12">
                    {/* Kenya Destinations */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Kenya Destinations
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Maasai Mara National Reserve
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Amboseli National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Lake Nakuru National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Tsavo East & West
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Samburu National Reserve
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Lake Naivasha
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Hell's Gate National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Diani Beach
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Lamu Island
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Tanzania Destinations */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Tanzania Destinations
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Serengeti National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Ngorongoro Crater
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Tarangire National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Lake Manyara National Park
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Mount Kilimanjaro
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Zanzibar Island
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Pemba Island
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Arusha
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Other African Destinations */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Other African Destinations
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Rwanda - Gorilla Trekking
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Uganda - Bwindi & Queen Elizabeth
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          South Africa - Kruger
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Botswana - Okavango Delta
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Victoria Falls
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Namibia - Etosha
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Egypt - Pyramids & Nile
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#destinations" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Watamu & Malindi
                        </a>
                      </DropdownMenuItem>
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
                    className="w-[1050px] max-h-[750px] overflow-y-auto p-8 m-4 pb-10"
                    align="center"
                  >
                  <div className="grid grid-cols-4 gap-12">
                    {/* Safari Packages */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Safari Packages
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Classic Kenya Safari (5-7 Days)
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Tanzania Wildlife Safari (7-10 Days)
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Combined Kenya & Tanzania
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Big Five Safari Experience
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Great Migration Safari
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Luxury Safari Packages
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Beach & Adventure */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Beach & Adventure
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Safari & Zanzibar Beach
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Safari & Diani Beach
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Mount Kilimanjaro Climbing
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Mount Kenya Trekking
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Gorilla Trekking
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Hot Air Balloon Safari
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Specialty Packages */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Specialty Packages
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Honeymoon Safari & Beach
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Family Safari Packages
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Corporate Team Building
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Cultural & Community Tours
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Bird Watching Expeditions
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Wellness & Yoga Retreats
                        </a>
                      </DropdownMenuItem>
                    </div>
                    
                    {/* Extended Tours */}
                    <div className="pl-6">
                      <DropdownMenuLabel className="text-base font-bold text-green-900 mb-5 pb-3 border-b-2 border-green-400">
                        Extended Tours
                      </DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Indian Ocean Cruise
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Dhow Sailing Expeditions
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Lake Victoria Cruises
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Diving & Snorkeling
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          East African Grand Tour
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="#packages" className="block py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-900 hover:rounded cursor-pointer transition-all">
                          Round-the-World Safari
                        </a>
                      </DropdownMenuItem>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/contact"
                className="text-green-900 font-medium hover:text-green-700 transition-colors px-4 py-2 uppercase text-sm"
              >
                CONTACT US
              </Link>

              {/* Search Icon */}
              <button
                className="text-green-900 p-2 hover:text-green-700 transition-colors ml-2 lg:mr-[200px]"
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


