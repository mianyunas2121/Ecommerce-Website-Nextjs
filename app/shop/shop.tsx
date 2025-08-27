"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart-store";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 4999,
    image: "/images/sneakers.jpg",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 8999,
    image: "/images/jacket.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 12999,
    image: "/images/watch.jpg",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 3499,
    image: "/images/earbuds.jpg",
  },
];

export default function Shop() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-primary-600 font-bold mt-2">
                PKR {product.price.toLocaleString()}
              </p>
              <button
                //onClick={() => addToCart(product)}
                className="mt-4 w-full bg-primary-600 text-white py-2 rounded-xl hover:bg-primary-700 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
