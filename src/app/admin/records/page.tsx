'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { recordsStorage, bookingsStorage, clientsStorage, walkInsStorage } from '@/lib/admin-storage';
import { Record } from '@/types/admin';
import { FileText, Search, Filter, Download, Calendar, User, DollarSign, Mail } from 'lucide-react';

export default function RecordsPage() {
  const [records, setRecords] = useState<Record[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<Record[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalClients: 0,
    totalWalkIns: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    loadRecords();
    loadStats();
  }, []);

  useEffect(() => {
    filterRecords();
  }, [searchTerm, typeFilter, records]);

  const loadRecords = () => {
    const allRecords = recordsStorage.getAll();
    setRecords(allRecords);
    setFilteredRecords(allRecords);
  };

  const loadStats = () => {
    const bookings = bookingsStorage.getAll();
    const clients = clientsStorage.getAll();
    const walkIns = walkInsStorage.getAll();

    const totalRevenue = bookings
      .filter((b) => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.totalAmount, 0);

    setStats({
      totalBookings: bookings.length,
      totalClients: clients.length,
      totalWalkIns: walkIns.length,
      totalRevenue,
    });
  };

  const filterRecords = () => {
    let filtered = records;

    if (searchTerm) {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter((r) => r.type === typeFilter);
    }

    setFilteredRecords(filtered);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return Calendar;
      case 'client':
        return User;
      case 'payment':
        return DollarSign;
      case 'communication':
        return Mail;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'bg-blue-100 text-blue-800';
      case 'client':
        return 'bg-green-100 text-green-800';
      case 'payment':
        return 'bg-emerald-100 text-emerald-800';
      case 'communication':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Records & Reports</h1>
            <p className="text-base sm:text-lg text-gray-600">View all records and generate reports</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
            <Download className="w-5 h-5" />
            <span>Export Report</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 w-full">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3 uppercase tracking-wide">Total Bookings</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{stats.totalBookings}</p>
              </div>
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 flex-shrink-0" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 w-full">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3 uppercase tracking-wide">Total Clients</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{stats.totalClients}</p>
              </div>
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-green-500 flex-shrink-0" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 w-full">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3 uppercase tracking-wide">Walk-ins</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{stats.totalWalkIns}</p>
              </div>
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 flex-shrink-0" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all duration-300 w-full">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3 uppercase tracking-wide">Total Revenue</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Ksh {stats.totalRevenue.toLocaleString()}
                </p>
              </div>
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
            >
              <option value="all">All Types</option>
              <option value="booking">Bookings</option>
              <option value="client">Clients</option>
              <option value="payment">Payments</option>
              <option value="communication">Communications</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Records List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full">
          <div className="overflow-x-auto w-full">
            {filteredRecords.length > 0 ? (
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Description
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Created By
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRecords.map((record) => {
                    const Icon = getTypeIcon(record.type);
                    return (
                      <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                          <span
                            className={`inline-flex items-center gap-2 px-2 sm:px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(record.type)}`}
                          >
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">{record.type}</span>
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{record.title}</div>
                        </td>
                        <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 hidden md:table-cell">
                          <div className="text-sm text-gray-600 line-clamp-2">{record.description}</div>
                        </td>
                        <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 whitespace-nowrap hidden lg:table-cell">
                          <div className="text-sm text-gray-900">{record.createdBy}</div>
                        </td>
                        <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(record.createdAt).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-gray-500 hidden sm:block">
                            {new Date(record.createdAt).toLocaleTimeString()}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="p-12 sm:p-16 text-center">
                <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg text-gray-500">No records found</p>
                <p className="text-sm text-gray-400 mt-2">
                  Records are automatically created when actions are performed in the system
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

