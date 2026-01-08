'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, MapPin, Clock, Users, Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Mapping category names to slugs
const categorySlugMap: { [key: string]: string } = {
  'Safari Tours & Game Drives': 'safari-tours-game-drives',
  'Honeymoon Packages': 'honeymoon-packages',
  'Beach Holiday Packages': 'beach-holiday-packages',
  'Mountain Climbing Expeditions': 'mountain-climbing-expeditions',
  'Group Tours & Excursions': 'group-tours-excursions',
  'Solo Package': 'solo-package',
};

// Comprehensive package data
const packageData: { [key: number]: any } = {
  1: {
    id: 1,
    title: '3 Days, 2 Nights Maasai Mara Safari Adventure',
    price: 'Ksh 750',
    duration: '3 Days, 2 Nights',
    location: 'Maasai Mara National Reserve',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&q=80',
    ],
    description: 'Embark on an unforgettable journey to the legendary Maasai Mara, one of Africa\'s most iconic wildlife destinations. Witness the Great Migration, encounter the Big Five, and immerse yourself in the breathtaking landscapes that have made this reserve world-famous.',
    fullDescription: 'Experience the ultimate African safari adventure in the Maasai Mara National Reserve. This carefully curated 3-day, 2-night package offers you the chance to witness incredible wildlife, including lions, elephants, leopards, buffalo, and rhinos. Our expert guides will take you on thrilling game drives through the vast savannah, where you\'ll have the opportunity to see the annual Great Migration (seasonal), where millions of wildebeest and zebras cross the Mara River. Stay in comfortable accommodations that blend seamlessly with the natural environment, and enjoy delicious meals prepared with fresh, local ingredients.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Maasai Mara',
        description: 'Early morning departure from Nairobi. Journey through the Great Rift Valley with scenic stops. Arrive at the lodge in time for lunch. Afternoon game drive to spot wildlife including elephants, lions, and giraffes.',
        meals: 'Lunch, Dinner',
      },
      {
        day: 'Day 2',
        title: 'Full Day Game Drive',
        description: 'Early morning game drive to witness the sunrise and active wildlife. Return to lodge for breakfast. Full day game drive with packed lunch, exploring different areas of the reserve including the Mara River.',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 'Day 3',
        title: 'Maasai Mara to Nairobi',
        description: 'Morning game drive to catch the last glimpses of wildlife. Return to lodge for breakfast. Depart for Nairobi with a stopover at the Great Rift Valley viewpoint. Arrive in Nairobi in the evening.',
        meals: 'Breakfast, Lunch',
      },
    ],
    inclusions: [
      'Transport in a 4x4 safari vehicle',
      'Accommodation for 2 nights',
      'All meals as per itinerary',
      'Park entry fees',
      'Professional guide services',
      'Game drives',
      'Bottled water',
    ],
    exclusions: [
      'International flights',
      'Travel insurance',
      'Tips and gratuities',
      'Personal expenses',
      'Alcoholic beverages',
      'Optional activities',
      'Visa fees',
    ],
    highlights: [
      'Witness the Big Five',
      'Great Migration viewing (seasonal)',
      'Professional photography opportunities',
      'Comfortable lodge accommodation',
      'Expert local guides',
    ],
  },
  2: {
    id: 2,
    title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate',
    price: 'Ksh 850',
    duration: '4 Days, 3 Nights',
    location: 'Masai Mara, Lake Naivasha, Hell\'s Gate',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80',
    ],
    description: 'A diverse safari experience combining the wildlife-rich Maasai Mara, the bird paradise of Lake Naivasha, and the adventurous Hell\'s Gate National Park. Perfect for those seeking variety in their Kenyan adventure.',
    fullDescription: 'This 4-day adventure takes you through three distinct Kenyan destinations. Start with the world-renowned Maasai Mara for incredible wildlife viewing, then explore Lake Naivasha\'s birdlife and aquatic ecosystem, and finish with the unique Hell\'s Gate National Park where you can cycle or hike among wildlife.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Maasai Mara',
        description: 'Depart Nairobi and drive to Maasai Mara. Afternoon game drive.',
        meals: 'Lunch, Dinner',
      },
      {
        day: 'Day 2',
        title: 'Full Day in Maasai Mara',
        description: 'Full day game drives exploring the reserve.',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 'Day 3',
        title: 'Maasai Mara to Lake Naivasha',
        description: 'Morning game drive, then transfer to Lake Naivasha. Boat ride on the lake.',
        meals: 'Breakfast, Lunch, Dinner',
      },
      {
        day: 'Day 4',
        title: 'Hell\'s Gate & Return to Nairobi',
        description: 'Visit Hell\'s Gate National Park for cycling or hiking. Return to Nairobi.',
        meals: 'Breakfast, Lunch',
      },
    ],
    inclusions: [
      'All transportation',
      '3 nights accommodation',
      'All meals',
      'Park entry fees',
      'Game drives',
      'Lake Naivasha boat ride',
      'Professional guide',
    ],
    exclusions: [
      'International flights',
      'Travel insurance',
      'Tips',
      'Personal expenses',
      'Optional activities',
    ],
    highlights: [
      'Maasai Mara wildlife viewing',
      'Lake Naivasha boat safari',
      'Hell\'s Gate adventure',
      'Diverse landscapes',
    ],
  },
  3: {
    id: 3,
    title: '7 Day Mid-Range Tour: Exploring Kenya\'s Gems',
    price: 'Ksh 950',
    duration: '7 Days, 6 Nights',
    location: 'Multiple destinations across Kenya',
    category: 'Group Tours & Excursions',
    image: 'https://images.unsplash.com/photo-1574781330858-2c9947f16c1e?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1574781330858-2c9947f16c1e?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&q=80',
    ],
    description: 'A comprehensive week-long journey exploring Kenya\'s most iconic destinations including national parks, lakes, and cultural sites.',
    fullDescription: 'Experience the best of Kenya in this carefully crafted 7-day itinerary that takes you through diverse landscapes, wildlife-rich national parks, and cultural landmarks.',
    itinerary: [
      { day: 'Day 1', title: 'Nairobi to Amboseli', description: 'Drive to Amboseli National Park. Afternoon game drive.', meals: 'Lunch, Dinner' },
      { day: 'Day 2', title: 'Amboseli Full Day', description: 'Full day game drives with Mount Kilimanjaro views.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 'Day 3', title: 'Amboseli to Naivasha', description: 'Morning game drive, transfer to Lake Naivasha.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 'Day 4', title: 'Lake Nakuru', description: 'Visit Lake Nakuru National Park for flamingos and rhinos.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 'Day 5', title: 'To Maasai Mara', description: 'Drive to Maasai Mara National Reserve.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 'Day 6', title: 'Maasai Mara Full Day', description: 'Full day exploring Maasai Mara.', meals: 'Breakfast, Lunch, Dinner' },
      { day: 'Day 7', title: 'Return to Nairobi', description: 'Morning game drive, return to Nairobi.', meals: 'Breakfast, Lunch' },
    ],
    inclusions: ['All transport', '6 nights accommodation', 'All meals', 'Park fees', 'Game drives', 'Guide'],
    exclusions: ['Flights', 'Insurance', 'Tips', 'Personal expenses'],
    highlights: ['Multiple national parks', 'Diverse wildlife', 'Cultural experiences'],
  },
  4: {
    id: 4,
    title: '7-Day Big Five Adventure Safari',
    price: 'Ksh 900',
    duration: '7 Days, 6 Nights',
    location: 'Maasai Mara, Lake Nakuru, Amboseli',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80',
    ],
    description: 'The ultimate safari experience focusing on spotting the Big Five: Lion, Leopard, Elephant, Buffalo, and Rhino across Kenya\'s premier wildlife destinations.',
    fullDescription: 'Embark on a thrilling 7-day adventure designed specifically to maximize your chances of seeing the Big Five. This safari takes you through Kenya\'s most wildlife-rich areas.',
    itinerary: [
      { day: 'Day 1', title: 'Nairobi to Maasai Mara', description: 'Arrive and afternoon game drive.', meals: 'Lunch, Dinner' },
      { day: 'Day 2-3', title: 'Maasai Mara Exploration', description: 'Multiple game drives searching for Big Five.', meals: 'All meals' },
      { day: 'Day 4', title: 'To Lake Nakuru', description: 'Drive to Lake Nakuru for rhino viewing.', meals: 'All meals' },
      { day: 'Day 5', title: 'To Amboseli', description: 'Transfer to Amboseli for elephant viewing.', meals: 'All meals' },
      { day: 'Day 6', title: 'Amboseli Full Day', description: 'Game drives with Mount Kilimanjaro backdrop.', meals: 'All meals' },
      { day: 'Day 7', title: 'Return', description: 'Morning game drive, return to Nairobi.', meals: 'Breakfast, Lunch' },
    ],
    inclusions: ['All transport', 'Accommodation', 'Meals', 'Park fees', 'Game drives', 'Expert guide'],
    exclusions: ['Flights', 'Insurance', 'Tips'],
    highlights: ['Big Five focus', 'Multiple reserves', 'Expert tracking'],
  },
  5: {
    id: 5,
    title: '10-Day Kenya Bush Safari & Beach Escape',
    price: 'Ksh 950',
    duration: '10 Days, 9 Nights',
    location: 'Safari Parks & Coastal Beaches',
    category: 'Beach Holiday Packages',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop&q=80',
    description: 'Combine the best of Kenya\'s wildlife with relaxation on pristine beaches. A perfect blend of adventure and leisure.',
    fullDescription: 'Experience the ultimate Kenyan vacation combining thrilling safari adventures with tropical beach relaxation.',
    itinerary: [
      { day: 'Days 1-5', title: 'Safari Portion', description: 'Multiple national parks and game drives.', meals: 'All meals' },
      { day: 'Days 6-10', title: 'Beach Portion', description: 'Coastal relaxation and activities.', meals: 'All meals' },
    ],
    inclusions: ['Safari and beach accommodation', 'All transport', 'Meals', 'Park fees', 'Game drives'],
    exclusions: ['Flights', 'Insurance'],
    highlights: ['Safari and beach', 'Varied experiences'],
  },
  6: {
    id: 6,
    title: '6-Day Amboseli & Tsavo Safari Adventure',
    price: 'Ksh 800',
    duration: '6 Days, 5 Nights',
    location: 'Amboseli & Tsavo National Parks',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=1200&h=600&fit=crop&q=80',
    description: 'Explore two of Kenya\'s most diverse parks: Amboseli with its elephant herds and Mount Kilimanjaro views, and Tsavo with its vast wilderness.',
    fullDescription: 'A comprehensive 6-day safari through Amboseli and Tsavo, offering incredible wildlife viewing and stunning landscapes.',
    itinerary: [
      { day: 'Days 1-3', title: 'Amboseli', description: 'Game drives and Mount Kilimanjaro views.', meals: 'All meals' },
      { day: 'Days 4-6', title: 'Tsavo', description: 'Explore Tsavo East and West.', meals: 'All meals' },
    ],
    inclusions: ['Transport', 'Accommodation', 'Meals', 'Park fees', 'Game drives'],
    exclusions: ['Flights', 'Insurance'],
    highlights: ['Mount Kilimanjaro views', 'Elephant viewing', 'Diverse landscapes'],
  },
  7: {
    id: 7,
    title: '4-Day Taste Of Kenya Safari Adventure',
    price: 'Ksh 650',
    duration: '4 Days, 3 Nights',
    location: 'Multiple destinations',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=600&fit=crop&q=80',
    description: 'A perfect introduction to Kenya\'s wildlife and landscapes in a compact 4-day itinerary.',
    fullDescription: 'Get a taste of Kenya\'s incredible safari experiences in this shorter but comprehensive package.',
    itinerary: [
      { day: 'Days 1-4', title: 'Multiple Parks', description: 'Visit several key destinations.', meals: 'All meals' },
    ],
    inclusions: ['Transport', 'Accommodation', 'Meals', 'Park fees'],
    exclusions: ['Flights'],
    highlights: ['Compact itinerary', 'Key destinations'],
  },
  8: {
    id: 8,
    title: '5-Day Classic Kenya Safari: Masai Mara, Lake Nakuru & Naivasha',
    price: 'Ksh 700',
    duration: '5 Days, 4 Nights',
    location: 'Masai Mara, Lake Nakuru, Naivasha',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=600&fit=crop&q=80',
    description: 'A classic Kenyan safari combining the world-famous Maasai Mara with the bird paradise of Lake Nakuru and the scenic beauty of Lake Naivasha.',
    fullDescription: 'Experience Kenya\'s classic safari circuit in this well-rounded 5-day adventure.',
    itinerary: [
      { day: 'Days 1-2', title: 'Masai Mara', description: 'Game drives in Maasai Mara.', meals: 'All meals' },
      { day: 'Day 3', title: 'Lake Nakuru', description: 'Visit Lake Nakuru for flamingos.', meals: 'All meals' },
      { day: 'Days 4-5', title: 'Lake Naivasha', description: 'Activities at Lake Naivasha.', meals: 'All meals' },
    ],
    inclusions: ['Transport', 'Accommodation', 'Meals', 'Park fees'],
    exclusions: ['Flights'],
    highlights: ['Classic route', 'Bird watching', 'Diverse activities'],
  },
  9: {
    id: 9,
    title: '3-Day Honeymoon Fly-In Safari At Elewana Sand River Mara',
    price: 'Ksh 850',
    duration: '3 Days, 2 Nights',
    location: 'Maasai Mara',
    category: 'Honeymoon Packages',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop&q=80',
    description: 'A luxurious romantic escape in the heart of the Maasai Mara. Fly directly to the reserve for an intimate and exclusive honeymoon experience.',
    fullDescription: 'Indulge in ultimate luxury and romance at the exclusive Elewana Sand River Mara lodge, designed for couples seeking an intimate safari experience.',
    itinerary: [
      { day: 'Day 1', title: 'Fly-In & Arrival', description: 'Flight to Maasai Mara, arrival at luxury lodge.', meals: 'Lunch, Dinner' },
      { day: 'Day 2', title: 'Romantic Safari', description: 'Private game drives and romantic dining experiences.', meals: 'All meals' },
      { day: 'Day 3', title: 'Departure', description: 'Final game drive, flight back to Nairobi.', meals: 'Breakfast, Lunch' },
    ],
    inclusions: ['Flight transfers', 'Luxury accommodation', 'All meals', 'Private game drives', 'Romantic experiences'],
    exclusions: ['International flights'],
    highlights: ['Luxury accommodation', 'Fly-in convenience', 'Romantic experiences'],
  },
  10: {
    id: 10,
    title: '10-Day Kenya Bush Safari & Beach Escape',
    price: 'Ksh 950',
    duration: '10 Days, 9 Nights',
    location: 'Safari & Beach',
    category: 'Group Tours & Excursions',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop&q=80',
    description: 'Combination safari and beach experience.',
    fullDescription: 'Perfect blend of adventure and relaxation.',
    itinerary: [{ day: 'Days 1-10', title: 'Safari & Beach', description: 'Combined experience.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation', 'Meals'],
    exclusions: ['Flights'],
    highlights: ['Safari and beach'],
  },
  11: {
    id: 11,
    title: '7 Day Mid-Range Tour: Exploring Kenya\'s Gems',
    price: 'Ksh 950',
    duration: '7 Days',
    location: 'Multiple',
    category: 'Mountain Climbing Expeditions',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&q=80',
    description: 'Comprehensive 7-day tour.',
    fullDescription: 'Explore Kenya\'s diverse attractions.',
    itinerary: [{ day: 'Days 1-7', title: 'Tour', description: 'Various destinations.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation'],
    exclusions: ['Flights'],
    highlights: ['Multiple destinations'],
  },
  12: {
    id: 12,
    title: '5-Day Classic Kenya Safari: Masai Mara, Lake Nakuru & Naivasha',
    price: 'Ksh 700',
    duration: '5 Days',
    location: 'Multiple',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=600&fit=crop&q=80',
    description: 'Classic safari route.',
    fullDescription: 'Experience the classic Kenyan safari.',
    itinerary: [{ day: 'Days 1-5', title: 'Safari', description: 'Multiple parks.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation'],
    exclusions: ['Flights'],
    highlights: ['Classic route'],
  },
  13: {
    id: 13,
    title: '6-Day Amboseli & Tsavo Safari Adventure',
    price: 'Ksh 800',
    duration: '6 Days',
    location: 'Amboseli & Tsavo',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=1200&h=600&fit=crop&q=80',
    description: 'Dual park adventure.',
    fullDescription: 'Explore Amboseli and Tsavo.',
    itinerary: [{ day: 'Days 1-6', title: 'Safari', description: 'Two parks.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation'],
    exclusions: ['Flights'],
    highlights: ['Dual parks'],
  },
  14: {
    id: 14,
    title: '4-Day Taste Of Kenya Safari Adventure',
    price: 'Ksh 650',
    duration: '4 Days',
    location: 'Multiple',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=600&fit=crop&q=80',
    description: 'Quick safari experience.',
    fullDescription: 'Get a taste of Kenya.',
    itinerary: [{ day: 'Days 1-4', title: 'Safari', description: 'Multiple stops.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation'],
    exclusions: ['Flights'],
    highlights: ['Quick tour'],
  },
  15: {
    id: 15,
    title: '8-Day Comprehensive Kenya Safari Experience',
    price: 'Ksh 900',
    duration: '8 Days',
    location: 'Multiple',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop&q=80',
    description: 'Comprehensive safari.',
    fullDescription: 'Full Kenya experience.',
    itinerary: [{ day: 'Days 1-8', title: 'Safari', description: 'Comprehensive tour.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation'],
    exclusions: ['Flights'],
    highlights: ['Comprehensive'],
  },
  16: {
    id: 16,
    title: '10-Day Kenya Bush Safari & Beach Escape',
    price: 'Ksh 950',
    duration: '10 Days',
    location: 'Safari & Beach',
    category: 'Safari Tours & Game Drives',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop&q=80',
    description: 'Safari and beach combo.',
    fullDescription: 'Ultimate experience.',
    itinerary: [{ day: 'Days 1-10', title: 'Combo', description: 'Safari and beach.', meals: 'All meals' }],
    inclusions: ['Transport', 'Accommodation'],
    exclusions: ['Flights'],
    highlights: ['Safari and beach'],
  },
};

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  const pkg = packageData[id];
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    startDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [backUrl, setBackUrl] = useState<string | null>(null);

  // Get category slug for breadcrumb
  const categorySlug = pkg ? categorySlugMap[pkg.category] || '' : '';

  // Set back URL based on category or default to packages
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if there's a referrer (previous page)
      const referrer = document.referrer;
      if (referrer && referrer.includes('/categories/')) {
        setBackUrl(referrer);
      } else if (categorySlug) {
        setBackUrl(`/categories/${categorySlug}`);
      } else {
        setBackUrl('/#packages');
      }
    }
  }, [categorySlug]);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Package Not Found</h1>
          <Link href="/" className="text-green-600 hover:text-green-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Booking request:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Get related packages (same category, excluding current)
  const relatedPackages = Object.values(packageData)
    .filter((p: any) => p.category === pkg.category && p.id !== pkg.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[112px]">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="absolute top-6 left-4 sm:left-8 lg:left-12">
              <button
                onClick={() => {
                  if (backUrl) {
                    if (backUrl.includes('/categories/')) {
                      router.push(backUrl);
                    } else {
                      window.location.href = backUrl;
                    }
                  } else {
                    router.back();
                  }
                }}
                className="inline-flex items-center gap-2 text-white hover:text-green-300 bg-black/60 hover:bg-black/80 backdrop-blur-sm px-5 py-3 transition-all rounded-sm"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-semibold">Back</span>
              </button>
            </div>
            <div className="mb-6">
              <nav className="flex items-center justify-center gap-2 text-white text-sm md:text-base flex-wrap px-4">
                <Link href="/" className="hover:text-green-300 transition-colors font-medium">Home</Link>
                <span>/</span>
                {categorySlug ? (
                  <>
                    <Link href={`/categories/${categorySlug}`} className="hover:text-green-300 transition-colors font-medium">
                      {pkg.category}
                    </Link>
                    <span>/</span>
                    <Link href={`/categories/${categorySlug}`} className="hover:text-green-300 transition-colors font-medium">
                      Packages
                    </Link>
                    <span>/</span>
                    <span className="text-green-300 font-semibold line-clamp-1">{pkg.title}</span>
                  </>
                ) : (
                  <>
                    <Link href="/#packages" className="hover:text-green-300 transition-colors font-medium">Packages</Link>
                    <span>/</span>
                    <span className="text-green-300 font-semibold line-clamp-1">{pkg.title}</span>
                  </>
                )}
              </nav>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
              {pkg.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-sm">
                <MapPin className="w-5 h-5 text-green-300" />
                <span className="font-medium whitespace-nowrap">{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-sm">
                <Clock className="w-5 h-5 text-green-300" />
                <span className="font-medium whitespace-nowrap">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-green-600 px-5 py-2 rounded-sm">
                <span className="text-2xl font-bold text-white whitespace-nowrap">{pkg.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <section className="py-12 md:py-16 bg-white" style={{ paddingBottom: '60px' }}>
          <div style={isLargeScreen ? { marginLeft: '200px', marginRight: '200px' } : {}} className={isLargeScreen ? '' : 'px-4 sm:px-6 md:px-8 lg:px-12'}>
            {/* Overview Section */}
            <section className="mb-16 flex flex-col items-center">
              <div className="mb-10 text-center w-full" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
                  Overview
                </h2>
              </div>
              <div className="text-center w-full">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">{pkg.description}</p>
                {pkg.fullDescription && (
                  <p className="text-lg text-gray-600 leading-relaxed">{pkg.fullDescription}</p>
                )}
              </div>
            </section>

            {/* Highlights Section */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <section className="mb-16 flex flex-col items-center">
                <div className="mb-10 text-center w-full" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
                    Package Highlights
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                  {pkg.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 bg-green-50 p-6 border-l-4 border-green-600 w-full">
                      <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-800 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary Section */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="mb-16 flex flex-col items-center">
                <div className="mb-10 text-center w-full" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
                    Detailed Itinerary
                  </h2>
                </div>
                <div className="space-y-10 w-full max-w-6xl">
                  {pkg.itinerary.map((item: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-green-600 pl-10 pb-10 relative bg-gray-50 p-8" style={{ marginBottom: '24px' }}>
                      <div className="absolute -left-7 top-8 w-14 h-14 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold">{idx + 1}</span>
                      </div>
                      <div className="flex flex-col lg:flex-row items-start gap-8">
                        <div className="bg-green-600 text-white px-8 py-4 font-bold text-lg whitespace-nowrap">
                          {item.day}
                        </div>
                        <div className="flex-1" style={{ paddingTop: '8px' }}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                          <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ paddingBottom: '12px' }}>{item.description}</p>
                          {item.meals && (
                            <div className="inline-block bg-green-100 px-5 py-3 border border-green-300 whitespace-nowrap" style={{ marginTop: '8px' }}>
                              <p className="text-base text-green-700 font-semibold">🍽️ Meals: {item.meals}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions & Exclusions Section */}
            <section className="mb-16 flex flex-col items-center">
              <div className="mb-10 text-center w-full" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
                  What's Included & Not Included
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                <div className="bg-green-50 p-8 border-t-4 border-green-600 w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included</h3>
                  <ul className="space-y-4">
                    {pkg.inclusions.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 bg-white p-3">
                        <Check className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-8 border-t-4 border-red-600 w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Not Included</h3>
                  <ul className="space-y-4">
                    {pkg.exclusions.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 bg-white p-3">
                        <X className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg text-gray-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Packages Section */}
            {relatedPackages.length > 0 && (
              <section className="mb-16 flex flex-col items-center">
                <div className="mb-10 text-center w-full" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
                    You May Also Like
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                  {relatedPackages.map((relatedPkg: any) => (
                    <Link
                      key={relatedPkg.id}
                      href={`/packages/${relatedPkg.id}`}
                      className="bg-white border border-gray-200 p-6 hover:bg-gray-50 hover:border-green-300 transition-all group"
                    >
                      <div className="h-48 overflow-hidden bg-gray-300 mb-4">
                        <img
                          src={relatedPkg.image}
                          alt={relatedPkg.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div style={{ paddingTop: '8px', paddingBottom: '8px' }}>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                          {relatedPkg.title}
                        </h3>
                        <p className="text-lg font-semibold text-green-600 whitespace-nowrap">{relatedPkg.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Section */}
            {pkg.gallery && pkg.gallery.length > 0 && (
              <section className="mb-16 flex flex-col items-center">
                <div className="mb-10 text-center w-full" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pb-3 border-b-4 border-green-600 inline-block">
                    Gallery
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                  {pkg.gallery.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden bg-gray-200 group cursor-pointer"
                      style={{ aspectRatio: '4/3', minHeight: '300px' }}
                    >
                      <img
                        src={img}
                        alt={`${pkg.title} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

