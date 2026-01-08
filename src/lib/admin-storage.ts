// Admin Dashboard Local Storage Utilities
// In production, this should be replaced with API calls to a backend

import { Booking, Client, WalkIn, AdminPackage, Email, Record } from '@/types/admin';

const STORAGE_KEYS = {
  BOOKINGS: 'admin_bookings',
  CLIENTS: 'admin_clients',
  WALKINS: 'admin_walkins',
  PACKAGES: 'admin_packages',
  EMAILS: 'admin_emails',
  RECORDS: 'admin_records',
  AUTH: 'admin_auth',
};

// Auth Functions
export const adminAuth = {
  login: (username: string, password: string): boolean => {
    // Simple authentication - in production, use proper auth
    if (username === 'admin' && password === 'admin123') {
      const authData = {
        username,
        role: 'admin',
        loginTime: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(authData));
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  },

  isAuthenticated: (): boolean => {
    const auth = localStorage.getItem(STORAGE_KEYS.AUTH);
    return auth !== null;
  },

  getAuth: () => {
    const auth = localStorage.getItem(STORAGE_KEYS.AUTH);
    return auth ? JSON.parse(auth) : null;
  },
};

// Bookings Functions
export const bookingsStorage = {
  getAll: (): Booking[] => {
    const data = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    return data ? JSON.parse(data) : [];
  },

  getById: (id: string): Booking | null => {
    const bookings = bookingsStorage.getAll();
    return bookings.find(b => b.id === id) || null;
  },

  create: (booking: Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>): Booking => {
    const bookings = bookingsStorage.getAll();
    const newBooking: Booking = {
      ...booking,
      id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    return newBooking;
  },

  update: (id: string, updates: Partial<Booking>): Booking | null => {
    const bookings = bookingsStorage.getAll();
    const index = bookings.findIndex(b => b.id === id);
    if (index === -1) return null;
    
    bookings[index] = {
      ...bookings[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    return bookings[index];
  },

  delete: (id: string): boolean => {
    const bookings = bookingsStorage.getAll();
    const filtered = bookings.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(filtered));
    return filtered.length < bookings.length;
  },
};

// Clients Functions
export const clientsStorage = {
  getAll: (): Client[] => {
    const data = localStorage.getItem(STORAGE_KEYS.CLIENTS);
    return data ? JSON.parse(data) : [];
  },

  getById: (id: string): Client | null => {
    const clients = clientsStorage.getAll();
    return clients.find(c => c.id === id) || null;
  },

  create: (client: Omit<Client, 'id' | 'createdAt' | 'bookingsCount' | 'totalSpent'>): Client => {
    const clients = clientsStorage.getAll();
    const newClient: Client = {
      ...client,
      id: `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      bookingsCount: 0,
      totalSpent: 0,
      createdAt: new Date().toISOString(),
    };
    clients.push(newClient);
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    return newClient;
  },

  update: (id: string, updates: Partial<Client>): Client | null => {
    const clients = clientsStorage.getAll();
    const index = clients.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    clients[index] = {
      ...clients[index],
      ...updates,
    };
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(clients));
    return clients[index];
  },

  delete: (id: string): boolean => {
    const clients = clientsStorage.getAll();
    const filtered = clients.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(filtered));
    return filtered.length < clients.length;
  },
};

// Walk-ins Functions
export const walkInsStorage = {
  getAll: (): WalkIn[] => {
    const data = localStorage.getItem(STORAGE_KEYS.WALKINS);
    return data ? JSON.parse(data) : [];
  },

  getById: (id: string): WalkIn | null => {
    const walkIns = walkInsStorage.getAll();
    return walkIns.find(w => w.id === id) || null;
  },

  create: (walkIn: Omit<WalkIn, 'id' | 'createdAt'>): WalkIn => {
    const walkIns = walkInsStorage.getAll();
    const newWalkIn: WalkIn = {
      ...walkIn,
      id: `walkin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    walkIns.push(newWalkIn);
    localStorage.setItem(STORAGE_KEYS.WALKINS, JSON.stringify(walkIns));
    return newWalkIn;
  },

  update: (id: string, updates: Partial<WalkIn>): WalkIn | null => {
    const walkIns = walkInsStorage.getAll();
    const index = walkIns.findIndex(w => w.id === id);
    if (index === -1) return null;
    
    walkIns[index] = {
      ...walkIns[index],
      ...updates,
    };
    localStorage.setItem(STORAGE_KEYS.WALKINS, JSON.stringify(walkIns));
    return walkIns[index];
  },

  delete: (id: string): boolean => {
    const walkIns = walkInsStorage.getAll();
    const filtered = walkIns.filter(w => w.id !== id);
    localStorage.setItem(STORAGE_KEYS.WALKINS, JSON.stringify(filtered));
    return filtered.length < walkIns.length;
  },
};

// Packages Functions
export const packagesStorage = {
  getAll: (): AdminPackage[] => {
    const data = localStorage.getItem(STORAGE_KEYS.PACKAGES);
    return data ? JSON.parse(data) : [];
  },

  getById: (id: string): AdminPackage | null => {
    const packages = packagesStorage.getAll();
    return packages.find(p => p.id === id) || null;
  },

  create: (pkg: Omit<AdminPackage, 'id' | 'createdAt' | 'updatedAt'>): AdminPackage => {
    const packages = packagesStorage.getAll();
    const newPackage: AdminPackage = {
      ...pkg,
      id: `pkg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    packages.push(newPackage);
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
    return newPackage;
  },

  update: (id: string, updates: Partial<AdminPackage>): AdminPackage | null => {
    const packages = packagesStorage.getAll();
    const index = packages.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    packages[index] = {
      ...packages[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
    return packages[index];
  },

  delete: (id: string): boolean => {
    const packages = packagesStorage.getAll();
    const filtered = packages.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(filtered));
    return filtered.length < packages.length;
  },
};

// Emails Functions
export const emailsStorage = {
  getAll: (): Email[] => {
    const data = localStorage.getItem(STORAGE_KEYS.EMAILS);
    return data ? JSON.parse(data) : [];
  },

  create: (email: Omit<Email, 'id' | 'createdAt'>): Email => {
    const emails = emailsStorage.getAll();
    const newEmail: Email = {
      ...email,
      id: `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      sentAt: email.status === 'sent' ? new Date().toISOString() : undefined,
    };
    emails.push(newEmail);
    localStorage.setItem(STORAGE_KEYS.EMAILS, JSON.stringify(emails));
    return newEmail;
  },

  update: (id: string, updates: Partial<Email>): Email | null => {
    const emails = emailsStorage.getAll();
    const index = emails.findIndex(e => e.id === id);
    if (index === -1) return null;
    
    emails[index] = {
      ...emails[index],
      ...updates,
      sentAt: updates.status === 'sent' ? new Date().toISOString() : emails[index].sentAt,
    };
    localStorage.setItem(STORAGE_KEYS.EMAILS, JSON.stringify(emails));
    return emails[index];
  },
};

// Records Functions
export const recordsStorage = {
  getAll: (): Record[] => {
    const data = localStorage.getItem(STORAGE_KEYS.RECORDS);
    return data ? JSON.parse(data) : [];
  },

  create: (record: Omit<Record, 'id' | 'createdAt'>): Record => {
    const records = recordsStorage.getAll();
    const newRecord: Record = {
      ...record,
      id: `record_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    records.push(newRecord);
    localStorage.setItem(STORAGE_KEYS.RECORDS, JSON.stringify(records));
    return newRecord;
  },
};

