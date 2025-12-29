// API client for Django REST Framework integration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

interface RequestOptions extends RequestInit {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  }

  // Contact endpoints
  async submitContact(data: {
    name: string;
    email: string;
    subject?: string;
    message: string;
  }) {
    return this.request('/contacts/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getContacts() {
    return this.request('/contacts/');
  }

  // Tour packages endpoints
  async getTourPackages() {
    return this.request('/tour-packages/');
  }

  async getTourPackage(id: number) {
    return this.request(`/tour-packages/${id}/`);
  }

  async createTourPackage(data: any) {
    return this.request('/tour-packages/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Destinations endpoints
  async getDestinations() {
    return this.request('/destinations/');
  }

  async getDestination(id: number) {
    return this.request(`/destinations/${id}/`);
  }

  // Bookings endpoints
  async createBooking(data: any) {
    return this.request('/bookings/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getBookings() {
    return this.request('/bookings/');
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();
