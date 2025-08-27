import axios from 'axios'

// Create axios instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth-storage')
    if (token) {
      try {
        const parsed = JSON.parse(token)
        if (parsed.state?.token) {
          config.headers.Authorization = `Bearer ${parsed.state.token}`
        }
      } catch (error) {
        console.error('Error parsing auth storage:', error)
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear auth and redirect to login
      localStorage.removeItem('auth-storage')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    profile: '/users/profile',
  },
  products: {
    list: '/products',
    detail: (id: number) => `/products/${id}`,
    categories: '/products/categories',
  },
  cart: {
    get: '/cart',
    add: '/cart/add',
    update: (id: number) => `/cart/${id}`,
    remove: (id: number) => `/cart/${id}`,
    clear: '/cart',
  },
  orders: {
    list: '/orders',
    detail: (id: number) => `/orders/${id}`,
    create: '/orders',
    updateStatus: (id: number) => `/orders/${id}/status`,
  },
  payments: {
    createIntent: '/payments/create-payment-intent',
    confirm: (id: string) => `/payments/confirm/${id}`,
  },
} as const
