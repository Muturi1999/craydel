// API Response Types
export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at?: string;
  status?: 'pending' | 'read' | 'replied';
}

export interface TourPackage {
  id: number;
  title: string;
  description: string;
  destination: string;
  price: number;
  duration: number;
  image?: string;
  created_at?: string;
}

export interface Destination {
  id: number;
  name: string;
  description: string;
  image?: string;
  highlights: string[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
