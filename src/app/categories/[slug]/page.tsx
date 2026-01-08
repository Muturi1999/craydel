'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Category images mapping
const categoryImages: { [key: string]: string } = {
  'safari-tours-game-drives': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=500&fit=crop&q=80',
  'hotel-lodge-reservations': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=500&fit=crop&q=80',
  'airport-transfers-transportation': 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=500&fit=crop&q=80',
  'flight-ticketing': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=500&fit=crop&q=80',
  'visa-processing-assistance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=500&fit=crop&q=80',
  'travel-insurance': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=500&fit=crop&q=80',
  'customized-tour-packages': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=500&fit=crop&q=80',
  'corporate-travel-solutions': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=500&fit=crop&q=80',
  'honeymoon-packages': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=500&fit=crop&q=80',
  'group-tours-excursions': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=500&fit=crop&q=80',
  'cruise-holiday-packages': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=500&fit=crop&q=80',
  'mountain-climbing-expeditions': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop&q=80',
  'beach-holiday-packages': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=500&fit=crop&q=80',
  'cultural-tours-village-visits': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=500&fit=crop&q=80',
  'photography-safaris': 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=500&fit=crop&q=80',
  'solo-package': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=500&fit=crop&q=80',
  'hot-air-balloon-safaris': 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&h=500&fit=crop&q=80',
  'walking-safaris-night-game-drives': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=500&fit=crop&q=80',
};

const categoryPackages = {
  'safari-tours-game-drives': {
    title: 'Safari Tours & Game Drives',
    description: 'Experience thrilling wildlife encounters on professionally guided safaris across Kenya\'s most iconic reserves.',
    packages: [
      {
        id: 1,
        title: '3 Days, 2 Nights Maasai Mara Safari Adventure',
        price: 'Ksh 750',
      },
      {
        id: 2,
        title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate',
        price: 'Ksh 850',
      },
      {
        id: 4,
        title: '7-Day Big Five Adventure Safari',
        price: 'Ksh 900',
      },
      {
        id: 12,
        title: '5-Day Classic Kenya Safari: Masai Mara, Lake Nakuru & Naivasha',
        price: 'Ksh 700',
      },
      {
        id: 13,
        title: '6-Day Amboseli & Tsavo Safari Adventure',
        price: 'Ksh 800',
      },
      {
        id: 14,
        title: '4-Day Taste Of Kenya Safari Adventure',
        price: 'Ksh 650',
      },
      {
        id: 15,
        title: '8-Day Comprehensive Kenya Safari Experience',
        price: 'Ksh 900',
      },
      {
        id: 16,
        title: '10-Day Kenya Bush Safari & Beach Escape',
        price: 'Ksh 950',
      },
    ],
  },
  'honeymoon-packages': {
    title: 'Honeymoon Packages',
    description: 'Create unforgettable memories on your romantic getaway with our specially curated honeymoon experiences.',
    packages: [
      {
        id: 9,
        title: '3-Day Honeymoon Fly-In Safari At Elewana Sand River Mara',
        price: 'Ksh 850',
      },
      {
        id: 6,
        title: '6-Day Amboseli & Tsavo Safari Adventure',
        price: 'Ksh 800',
      },
    ],
  },
  'beach-holiday-packages': {
    title: 'Beach Holiday Packages',
    description: 'Relax on pristine white-sand beaches with crystal-clear turquoise waters.',
    packages: [
      {
        id: 5,
        title: '10-Day Kenya Bush Safari & Beach Escape',
        price: 'Ksh 950',
      },
      {
        id: 8,
        title: '4-Day Taste Of Kenya Safari Adventure',
        price: 'Ksh 650',
      },
    ],
  },
  'mountain-climbing-expeditions': {
    title: 'Mountain Climbing Expeditions',
    description: 'Challenge yourself on Africa\'s most iconic peaks with experienced mountain guides.',
    packages: [
      {
        id: 11,
        title: '7 Day Mid-Range Tour: Exploring Kenya\'s Gems',
        price: 'Ksh 950',
      },
    ],
  },
  'group-tours-excursions': {
    title: 'Group Tours & Excursions',
    description: 'Join like-minded travelers on expertly organized group adventures across East Africa.',
    packages: [
      {
        id: 3,
        title: '7 Day Mid-Range Tour: Exploring Kenya\'s Gems',
        price: 'Ksh 950',
      },
      {
        id: 10,
        title: '10-Day Kenya Bush Safari & Beach Escape',
        price: 'Ksh 950',
      },
    ],
  },
  'solo-package': {
    title: 'Solo Package',
    description: 'Perfect for independent travelers seeking authentic African experiences with flexibility and safety.',
    packages: [
      {
        id: 1,
        title: '3 Days, 2 Nights Maasai Mara Safari Adventure',
        price: 'Ksh 750',
      },
      {
        id: 2,
        title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate',
        price: 'Ksh 850',
      },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categoryPackages[slug as keyof typeof categoryPackages];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    duration: '',
    travelers: '',
    startDate: '',
    budget: '',
    interests: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const interests = [
    'Safari & Wildlife',
    'Beach & Relaxation',
    'Mountain Climbing',
    'Cultural Tours',
    'Adventure Activities',
    'Photography',
    'Bird Watching',
    'Luxury Experiences',
  ];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/" className="text-green-600 hover:text-green-700">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const categoryImage = categoryImages[slug] || 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=500&fit=crop&q=80';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[112px]">
      {/* Hero Section with Breadcrumb */}
      <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={categoryImage}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center justify-center gap-2 text-white text-sm sm:text-base">
              <Link href="/" className="hover:text-green-300 transition-colors">
                Home
              </Link>
              <span className="text-white/70">/</span>
              <span className="text-green-300 font-semibold">{category.title}</span>
            </nav>
          </div>
          
          {/* Title and Description */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[200px] py-12 sm:py-16 md:py-20">
        {/* Packages Section */}
        {category.packages && category.packages.length > 0 && (
          <div className="w-full flex flex-col items-center" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center w-full" style={{ marginTop: '30px', marginBottom: '30px' }}>Related Packages</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 justify-items-center" style={{ maxWidth: '1400px' }}>
              {category.packages.map((pkg) => (
                <div key={pkg.id} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow w-full" style={{ maxWidth: '350px', padding: '24px' }}>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">{pkg.title}</h3>
                    <p className="text-lg md:text-xl font-semibold text-green-600 mb-6 text-center whitespace-nowrap overflow-hidden text-ellipsis" style={{ maxWidth: '100%' }}>{pkg.price}</p>
                    <div className="text-center">
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="text-green-600 hover:text-green-700 font-semibold inline-block"
                      >
                        View Package →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Custom Package Form Section */}
        <div className="w-full flex flex-col items-center" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-green-50 shadow-lg" style={{ padding: '48px 32px' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Custom Package Request</h2>
              <p className="text-base md:text-lg text-gray-600 mb-10 text-center" style={{ paddingBottom: '20px' }}>
                Don't see what you're looking for? Create a custom package tailored to your preferences.
              </p>

              {submitted && (
                <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 text-center">
                  ✓ Thank you! Your custom package request has been submitted. We'll contact you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Personal Information */}
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">Personal Information</h3>
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                    <input
                      type="number"
                      name="travelers"
                      placeholder="Number of Travelers *"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                </div>

                {/* Trip Details */}
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">Trip Details</h3>
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
                    <input
                      type="text"
                      name="destination"
                      placeholder="Preferred Destination *"
                      value={formData.destination}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                    <input
                      type="number"
                      name="duration"
                      placeholder="Duration (Days) *"
                      value={formData.duration}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                    <input
                      type="date"
                      name="startDate"
                      placeholder="Preferred Start Date *"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                    <input
                      type="text"
                      name="budget"
                      placeholder="Budget Range (Ksh) *"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 transition-colors"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">Areas of Interest</h3>
                  <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl justify-items-center">
                    {interests.map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer w-full justify-center md:justify-start">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-5 h-5 border-2 border-gray-300 cursor-pointer accent-green-600"
                        />
                        <span className="text-sm md:text-base text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="w-full flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center">Additional Information</h3>
                  <div className="w-full max-w-3xl mx-auto">
                    <textarea
                      name="message"
                      placeholder="Tell us more about your preferences, special requests, or any questions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-gray-300 bg-white focus:outline-none focus:border-green-600 resize-none transition-colors"
                      style={{ fontSize: '16px', minHeight: '120px' }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold transition-colors"
                    style={{ padding: '16px 48px', fontSize: '18px' }}
                  >
                    Submit Custom Package Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
