'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import {
  Calendar,
  Users,
  UserPlus,
  Package,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { bookingsStorage, clientsStorage, walkInsStorage, packagesStorage } from '@/lib/admin-storage';
import { Booking, Client, WalkIn, AdminPackage } from '@/types/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    totalClients: 0,
    totalWalkIns: 0,
    totalPackages: 0,
    totalRevenue: 0,
    recentBookings: [] as Booking[],
  });

  useEffect(() => {
    const bookings = bookingsStorage.getAll();
    const clients = clientsStorage.getAll();
    const walkIns = walkInsStorage.getAll();
    const packages = packagesStorage.getAll();

    const totalRevenue = bookings
      .filter(b => b.paymentStatus === 'paid')
      .reduce((sum, b) => sum + b.totalAmount, 0);

    const recentBookings = bookings
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);

    setStats({
      totalBookings: bookings.length,
      pendingBookings: bookings.filter(b => b.status === 'pending').length,
      totalClients: clients.length,
      totalWalkIns: walkIns.length,
      totalPackages: packages.length,
      totalRevenue,
      recentBookings,
    });
  }, []);

  const statCards = [
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+12%',
    },
    {
      title: 'Pending Bookings',
      value: stats.pendingBookings,
      icon: Clock,
      color: 'bg-yellow-500',
      change: `${stats.pendingBookings} pending`,
    },
    {
      title: 'Total Clients',
      value: stats.totalClients,
      icon: Users,
      color: 'bg-green-500',
      change: '+8%',
    },
    {
      title: 'Walk-ins',
      value: stats.totalWalkIns,
      icon: UserPlus,
      color: 'bg-purple-500',
      change: 'New today',
    },
    {
      title: 'Active Packages',
      value: stats.totalPackages,
      icon: Package,
      color: 'bg-indigo-500',
      change: 'All active',
    },
    {
      title: 'Total Revenue',
      value: `Ksh ${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-emerald-500',
      change: '+15%',
    },
  ];

  return (
    <AdminLayout>
      <div className="w-full max-w-7xl mx-auto space-y-10">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-lg sm:text-xl text-gray-600">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 w-full">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 w-full"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3 uppercase tracking-wide">{stat.title}</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">{stat.change}</p>
                  </div>
                  <div className={`${stat.color} p-3 sm:p-4 rounded-xl shadow-md flex-shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-7 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 w-full overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto w-full">
            {stats.recentBookings.length > 0 ? (
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Package
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Date
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stats.recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{booking.clientName}</div>
                          <div className="text-xs sm:text-sm text-gray-500 truncate">{booking.clientEmail}</div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                        <div className="text-sm text-gray-900 truncate max-w-xs">{booking.packageName}</div>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-900">
                          {new Date(booking.startDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          Ksh {booking.totalAmount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : booking.status === 'cancelled'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 sm:p-16 text-center">
                <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg text-gray-500">No bookings yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

