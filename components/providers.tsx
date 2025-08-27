'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth-store'
import { useCartStore } from '@/store/cart-store'

export function Providers({ children }: { children: React.ReactNode }) {
  const { token } = useAuthStore() // Removed fetchCart from here
  const { fetchCart: fetchCartItems } = useCartStore()

  useEffect(() => {
    if (token) {
      fetchCartItems() // Fetch cart only when user is authenticated
    }
  }, [token, fetchCartItems])

  return <>{children}</>
}
