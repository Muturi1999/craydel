// Admin Dashboard Types

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'staff';
  createdAt: string;
}

export interface Booking {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  packageId: string;
  packageName: string;
  startDate: string;
  endDate: string;
  travelers: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'partial' | 'paid';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  country?: string;
  bookingsCount: number;
  totalSpent: number;
  lastBookingDate?: string;
  notes?: string;
  createdAt: string;
}

export interface WalkIn {
  id: string;
  name: string;
  email: string;
  phone: string;
  inquiry: string;
  interestedPackage?: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  assignedTo?: string;
  notes?: string;
  createdAt: string;
}

export interface AdminPackage {
  id: string;
  title: string;
  category: string;
  price: number;
  currency: 'Ksh' | 'USD';
  duration: string;
  location: string;
  description: string;
  fullDescription?: string;
  image: string;
  gallery?: string[];
  itinerary?: ItineraryItem[];
  inclusions?: string[];
  exclusions?: string[];
  highlights?: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ItineraryItem {
  day: string;
  title: string;
  description: string;
  meals?: string;
}

export interface Email {
  id: string;
  to: string;
  from: string;
  subject: string;
  body: string;
  status: 'draft' | 'sent' | 'failed';
  sentAt?: string;
  createdAt: string;
}

export interface Record {
  id: string;
  type: 'booking' | 'client' | 'payment' | 'communication' | 'other';
  title: string;
  description: string;
  relatedId?: string;
  createdBy: string;
  createdAt: string;
}

