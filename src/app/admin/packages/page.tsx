'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { packagesStorage } from '@/lib/admin-storage';
import { AdminPackage, ItineraryItem } from '@/types/admin';
import { Package, Search, Plus, Edit, Trash2, Eye, X } from 'lucide-react';

export default function PackagesPage() {
  const [packages, setPackages] = useState<AdminPackage[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<AdminPackage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState<AdminPackage | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    currency: 'Ksh' as 'Ksh' | 'USD',
    duration: '',
    location: '',
    description: '',
    fullDescription: '',
    image: '',
    gallery: [] as string[],
    itinerary: [] as ItineraryItem[],
    inclusions: [] as string[],
    exclusions: [] as string[],
    highlights: [] as string[],
    isActive: true,
  });

  useEffect(() => {
    loadPackages();
  }, []);

  useEffect(() => {
    filterPackages();
  }, [searchTerm, packages]);

  const loadPackages = () => {
    const allPackages = packagesStorage.getAll();
    setPackages(allPackages);
    setFilteredPackages(allPackages);
  };

  const filterPackages = () => {
    let filtered = packages;

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPackages(filtered);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const packageData = {
      ...formData,
      price: parseFloat(formData.price),
      gallery: formData.gallery.filter((url) => url.trim() !== ''),
      itinerary: formData.itinerary.filter((item) => item.day && item.title),
      inclusions: formData.inclusions.filter((item) => item.trim() !== ''),
      exclusions: formData.exclusions.filter((item) => item.trim() !== ''),
      highlights: formData.highlights.filter((item) => item.trim() !== ''),
    };

    if (editingPackage) {
      packagesStorage.update(editingPackage.id, packageData);
    } else {
      packagesStorage.create(packageData);
    }
    loadPackages();
    setShowModal(false);
    resetForm();
  };

  const handleEdit = (pkg: AdminPackage) => {
    setEditingPackage(pkg);
    setFormData({
      title: pkg.title,
      category: pkg.category,
      price: pkg.price.toString(),
      currency: pkg.currency,
      duration: pkg.duration,
      location: pkg.location,
      description: pkg.description,
      fullDescription: pkg.fullDescription || '',
      image: pkg.image,
      gallery: pkg.gallery || [],
      itinerary: pkg.itinerary || [],
      inclusions: pkg.inclusions || [],
      exclusions: pkg.exclusions || [],
      highlights: pkg.highlights || [],
      isActive: pkg.isActive,
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this package?')) {
      packagesStorage.delete(id);
      loadPackages();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      price: '',
      currency: 'Ksh',
      duration: '',
      location: '',
      description: '',
      fullDescription: '',
      image: '',
      gallery: [],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      highlights: [],
      isActive: true,
    });
    setEditingPackage(null);
  };

  const addArrayItem = (field: 'gallery' | 'inclusions' | 'exclusions' | 'highlights') => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  const updateArrayItem = (
    field: 'gallery' | 'inclusions' | 'exclusions' | 'highlights',
    index: number,
    value: string
  ) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const removeArrayItem = (field: 'gallery' | 'inclusions' | 'exclusions' | 'highlights', index: number) => {
    setFormData({ ...formData, [field]: formData[field].filter((_, i) => i !== index) });
  };

  const addItineraryItem = () => {
    setFormData({
      ...formData,
      itinerary: [...formData.itinerary, { day: '', title: '', description: '', meals: '' }],
    });
  };

  const updateItineraryItem = (index: number, field: keyof ItineraryItem, value: string) => {
    const newItinerary = [...formData.itinerary];
    newItinerary[index] = { ...newItinerary[index], [field]: value };
    setFormData({ ...formData, itinerary: newItinerary });
  };

  const removeItineraryItem = (index: number) => {
    setFormData({ ...formData, itinerary: formData.itinerary.filter((_, i) => i !== index) });
  };

  return (
    <AdminLayout>
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Packages Management</h1>
            <p className="text-base sm:text-lg text-gray-600">Create and manage tour packages</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
          >
            <Plus className="w-5 h-5" />
            <span>Create Package</span>
          </button>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 w-full flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={pkg.image || '/placeholder-image.jpg'}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 flex-1 min-w-0">{pkg.title}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0 ${
                      pkg.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {pkg.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 truncate">{pkg.category}</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 truncate">{pkg.duration} • {pkg.location}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <p className="text-base sm:text-lg font-bold text-green-600 truncate">
                    {pkg.currency} {pkg.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="text-blue-600 hover:text-blue-900 p-1 hover:bg-blue-50 rounded transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No packages found</p>
          </div>
        )}

        {/* Create/Edit Modal - This would be a large form, showing key fields */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingPackage ? 'Edit Package' : 'Create New Package'}
                  </h2>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                    <div className="flex gap-2">
                      <select
                        value={formData.currency}
                        onChange={(e) => setFormData({ ...formData, currency: e.target.value as 'Ksh' | 'USD' })}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                      >
                        <option value="Ksh">Ksh</option>
                        <option value="USD">USD</option>
                      </select>
                      <input
                        type="number"
                        required
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
                    <input
                      type="text"
                      required
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g., 3 Days, 2 Nights"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
                    <input
                      type="url"
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Descriptions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Description</label>
                  <textarea
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>

                {/* Highlights */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Highlights</label>
                  {formData.highlights.map((highlight, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => updateArrayItem('highlights', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('highlights', index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('highlights')}
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    + Add Highlight
                  </button>
                </div>

                {/* Inclusions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inclusions</label>
                  {formData.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={inclusion}
                        onChange={(e) => updateArrayItem('inclusions', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('inclusions', index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('inclusions')}
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    + Add Inclusion
                  </button>
                </div>

                {/* Exclusions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exclusions</label>
                  {formData.exclusions.map((exclusion, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={exclusion}
                        onChange={(e) => updateArrayItem('exclusions', index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => removeArrayItem('exclusions', index)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('exclusions')}
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    + Add Exclusion
                  </button>
                </div>

                {/* Status */}
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Package is active</span>
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    {editingPackage ? 'Update Package' : 'Create Package'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

