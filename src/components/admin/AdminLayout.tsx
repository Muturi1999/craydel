'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { adminAuth } from '@/lib/admin-storage';
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserPlus,
  Package,
  Mail,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Bookings', href: '/admin/bookings', icon: Calendar },
  { name: 'Clients', href: '/admin/clients', icon: Users },
  { name: 'Walk-ins', href: '/admin/walkins', icon: UserPlus },
  { name: 'Packages', href: '/admin/packages', icon: Package },
  { name: 'Communications', href: '/admin/communications', icon: Mail },
  { name: 'Records', href: '/admin/records', icon: FileText },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [auth, setAuth] = useState<any>(null);

  useEffect(() => {
    if (!adminAuth.isAuthenticated()) {
      router.push('/admin/login');
    } else {
      setAuth(adminAuth.getAuth());
    }
  }, [router]);

  const handleLogout = () => {
    adminAuth.logout();
    router.push('/admin/login');
  };

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-green-900 text-white z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-8 border-b border-green-800">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Craydel Admin</h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-lg transition-all ${
                        isActive
                          ? 'bg-green-800 text-white shadow-lg'
                          : 'text-green-100 hover:bg-green-800 hover:text-white hover:shadow-md'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Info & Logout */}
          <div className="p-6 border-t border-green-800">
            <div className="mb-6">
              <p className="text-sm text-green-200 mb-1">Logged in as</p>
              <p className="font-semibold text-lg">{auth.username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-5 py-4 rounded-lg text-green-100 hover:bg-green-800 transition-all hover:shadow-md"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 sm:px-8 lg:px-10 h-20">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 hidden sm:block">
                Welcome, <span className="font-semibold">{auth.username}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 min-h-[calc(100vh-5rem)]">{children}</main>
      </div>
    </div>
  );
}

