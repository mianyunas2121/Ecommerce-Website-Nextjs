"use client"

import { useState } from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      quantity: 2,
      image: "/images/headphones.jpg",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 80,
      quantity: 1,
      image: "/images/smartwatch.jpg",
    },
  ])

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, type: "increment" | "decrement") => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    )
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, "decrement")}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, "increment")}
                  className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-3">
                <p className="font-bold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-2xl">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-2xl font-extrabold">${totalPrice.toFixed(2)}</p>
          </div>

          <button className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl text-lg font-semibold transition-all">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}
