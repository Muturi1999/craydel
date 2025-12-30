'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const categoryPackages = {
  'safari-tours-game-drives': {
    title: 'Safari Tours & Game Drives',
    description: 'Experience thrilling wildlife encounters on professionally guided safaris across Kenya\'s most iconic reserves.',
    packages: [
      {
        id: 1,
        title: '3 Days, 2 Nights Maasai Mara Safari Adventure',
        price: 'Ksh 247,800',
      },
      {
        id: 2,
        title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate',
        price: 'Ksh 298,500',
      },
      {
        id: 4,
        title: '7-Day Big Five Adventure Safari',
        price: 'Ksh 425,000',
      },
      {
        id: 12,
        title: '5-Day Classic Kenya Safari: Masai Mara, Lake Nakuru & Naivasha',
        price: 'Ksh 350,000',
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
        price: 'Ksh 450,000',
      },
      {
        id: 6,
        title: '6-Day Amboseli & Tsavo Safari Adventure',
        price: 'Ksh 380,000',
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
        price: 'Ksh 625,000',
      },
      {
        id: 8,
        title: '4-Day Taste Of Kenya Safari Adventure',
        price: 'Ksh 310,000',
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
        price: 'Ksh 525,000',
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
        price: 'Ksh 525,000',
      },
      {
        id: 10,
        title: '10-Day Kenya Bush Safari & Beach Escape',
        price: 'Ksh 625,000',
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
        price: 'Ksh 247,800',
      },
      {
        id: 2,
        title: '4 Days, 3 Nights Masai Mara, Lake Naivasha & Hell\'s Gate',
        price: 'Ksh 298,500',
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

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pt-6 px-6 md:px-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-12 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{category.title}</h1>
        <p className="text-lg text-green-100 max-w-3xl">{category.description}</p>
      </div>

      <div className="px-6 md:px-16 py-12">
        {/* Packages Section */}
        {category.packages && category.packages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {category.packages.map((pkg) => (
                <div key={pkg.id} className="bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-lg font-semibold text-green-600 mb-4">{pkg.price}</p>
                  <Link
                    href={`/packages/${pkg.id}`}
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    View Package →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Custom Package Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 p-8 rounded-none shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Custom Package Request</h2>
            <p className="text-gray-600 mb-8">
              Don't see what you're looking for? Create a custom package tailored to your preferences.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ✓ Thank you! Your custom package request has been submitted. We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                  <input
                    type="number"
                    name="travelers"
                    placeholder="Number of Travelers *"
                    value={formData.travelers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                </div>
              </div>

              {/* Trip Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Trip Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="destination"
                    placeholder="Preferred Destination *"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                  <input
                    type="number"
                    name="duration"
                    placeholder="Duration (Days) *"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                  <input
                    type="date"
                    name="startDate"
                    placeholder="Preferred Start Date *"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget Range (Ksh) *"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600"
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Areas of Interest</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interests.map((interest) => (
                    <label key={interest} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 border border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Information</h3>
                <textarea
                  name="message"
                  placeholder="Tell us more about your preferences, special requests, or any questions..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-green-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 transition-colors"
              >
                Submit Custom Package Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
