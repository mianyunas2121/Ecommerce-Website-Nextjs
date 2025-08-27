import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from '@/shared/types'
import { api } from '@/lib/api'

interface CartState {
  items: CartItem[]
  isLoading: boolean
  error: string | null
}

interface CartActions {
  addToCart: (product: Product, quantity: number) => Promise<void>
  updateQuantity: (productId: number, quantity: number) => Promise<void>
  removeFromCart: (productId: number) => Promise<void>
  clearCart: () => Promise<void>
  fetchCart: () => Promise<void>
  getTotal: () => number
  getItemCount: () => number
  clearError: () => void
}

type CartStore = CartState & CartActions

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // State
      items: [],
      isLoading: false,
      error: null,

      // Actions
      addToCart: async (product: Product, quantity: number) => {
        set({ isLoading: true, error: null })
        
        try {
          const response = await api.post<{ success: boolean; data: CartItem }>('/cart/add', {
            productId: product.id,
            quantity,
          })

          const newItem = response.data.data
          
          set((state) => ({
            items: [...state.items, newItem],
            isLoading: false,
            error: null,
          }))
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Failed to add item to cart',
          })
          throw error
        }
      },

      updateQuantity: async (productId: number, quantity: number) => {
        set({ isLoading: true, error: null })
        
        try {
          const response = await api.patch<{ success: boolean; data: CartItem }>(`/cart/${productId}`, {
            quantity,
          })

          const updatedItem = response.data.data
          
          set((state) => ({
            items: state.items.map((item) =>
              item.productId === productId ? updatedItem : item
            ),
            isLoading: false,
            error: null,
          }))
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Failed to update quantity',
          })
          throw error
        }
      },

      removeFromCart: async (productId: number) => {
        set({ isLoading: true, error: null })
        
        try {
          await api.delete(`/cart/${productId}`)
          
          set((state) => ({
            items: state.items.filter((item) => item.productId !== productId),
            isLoading: false,
            error: null,
          }))
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Failed to remove item',
          })
          throw error
        }
      },

      clearCart: async () => {
        set({ isLoading: true, error: null })
        
        try {
          await api.delete('/cart')
          
          set({
            items: [],
            isLoading: false,
            error: null,
          })
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Failed to clear cart',
          })
          throw error
        }
      },

      fetchCart: async () => {
        set({ isLoading: true, error: null })
        
        try {
          const response = await api.get<{ success: boolean; data: { items: CartItem[] } }>('/cart')
          
          set({
            items: response.data.data.items,
            isLoading: false,
            error: null,
          })
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Failed to fetch cart',
          })
        }
      },

      getTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => {
          return total + (item.product.price * item.quantity)
        }, 0)
      },

      getItemCount: () => {
        const { items } = get()
        return items.reduce((count, item) => count + item.quantity, 0)
      },

      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
