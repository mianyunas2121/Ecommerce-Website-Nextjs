'use client'

import { Star } from 'lucide-react'

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-quality sound with noise cancellation',
      price: '$99.99',
      rating: 5,
      reviews: 128,
      image: '/images/products/headphones.png',
    },
    {
      id: 2,
      name: 'Premium Leather Jacket',
      description: 'Classic style with modern comfort',
      price: '$199.99',
      rating: 5,
      reviews: 214,
      image: '/images/products/jacket.png',
    },
    {
      id: 3,
      name: 'Smart Home Hub',
      description: 'Control your entire home with voice commands',
      price: '$129.99',
      rating: 5,
      reviews: 96,
      image: '/images/products/home-hub.png',
    },
    {
      id: 4,
      name: 'Running Shoes',
      description: 'Comfortable and stylish sports shoes',
      price: '$79.99',
      rating: 4,
      reviews: 58,
      image: '/images/products/shoes.png',
    },
    {
      id: 5,
      name: 'Gaming Console',
      description: 'Next-gen gaming experience',
      price: '$399.99',
      rating: 5,
      reviews: 342,
      image: '/images/products/console.png',
    },
    {
      id: 6,
      name: 'Smart Watch',
      description: 'Track your health and notifications',
      price: '$149.99',
      rating: 4,
      reviews: 120,
      image: '/images/products/watch.png',
    },
    {
      id: 7,
      name: 'Designer Backpack',
      description: 'Stylish and durable for daily use',
      price: '$89.99',
      rating: 5,
      reviews: 95,
      image: '/images/products/backpack.png',
    },
    {
      id: 8,
      name: 'Coffee Maker',
      description: 'Brew the perfect cup every time',
      price: '$59.99',
      rating: 4,
      reviews: 78,
      image: '/images/products/coffee-maker.png',
    },
    {
      id: 9,
      name: 'Sunglasses',
      description: 'UV protection with modern design',
      price: '$49.99',
      rating: 5,
      reviews: 112,
      image: '/images/products/sunglasses.png',
    },
    {
      id: 10,
      name: 'Fitness Tracker',
      description: 'Monitor your daily activity and sleep',
      price: '$69.99',
      rating: 4,
      reviews: 84,
      image: '/images/products/fitness-tracker.png',
    },
    {
      id: 11,
      name: 'Portable Speaker',
      description: 'High-quality sound on the go',
      price: '$59.99',
      rating: 5,
      reviews: 140,
      image: '/images/products/speaker.png',
    },
    {
      id: 12,
      name: 'Luxury Watch',
      description: 'Elegant design with premium materials',
      price: '$299.99',
      rating: 5,
      reviews: 98,
      image: '/images/products/luxury-watch.png',
    },
  ]

  return (
    <main className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 min-h-screen">
      <h1 className="text-6xl font-extrabold mb-12 text-center text-gray-900 drop-shadow-lg">
        Shop Our Premium Products
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center overflow-hidden transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl`}
          >
            {/* Floating Neon Circles */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-r from-pink-400 to-yellow-400 opacity-40 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-30 rounded-full blur-3xl animate-ping-slow"></div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 mb-4 object-contain relative z-10 drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
            />

            {/* Product Name */}
            <h2 className="text-2xl font-extrabold mb-2 text-gray-900 relative z-10 group-hover:text-primary-500 transition-colors">
              {product.name}
            </h2>

            {/* Product Description */}
            <p className="text-gray-700 text-sm mb-4 relative z-10">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2 text-sm">({product.reviews})</span>
            </div>

            {/* Price */}
            <span className="text-xl font-bold mb-4 text-gray-900">{product.price}</span>

            {/* Add to Cart Button */}
            <button className="relative z-10 inline-block mt-auto px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-2xl hover:from-primary-700 hover:to-primary-600 transition-all text-sm shadow-lg hover:shadow-xl">
              Add to Cart
            </button>

            {/* Hover Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/0 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity"></div>
          </div>
        ))}
      </div>
    </main>
  )
}
