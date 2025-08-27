"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Award
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  isTrending?: boolean;
  discount?: number;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 120,
    originalPrice: 150,
    image: "/images/products/watch.jpg",
    rating: 4.8,
    reviews: 324,
    badge: "Best Seller",
    isTrending: true,
    discount: 20
  },
  {
    id: 2,
    name: "Wireless Noise-Canceling Headphones",
    price: 80,
    originalPrice: 95,
    image: "/images/products/headphones.jpg",
    rating: 4.9,
    reviews: 156,
    badge: "Editor&apos;s Choice",
    isNew: true,
    discount: 16
  },
  {
    id: 3,
    name: "RGB Gaming Mouse Elite",
    price: 45,
    originalPrice: 60,
    image: "/images/products/mouse.jpg",
    rating: 4.7,
    reviews: 89,
    isTrending: true,
    discount: 25
  },
  {
    id: 4,
    name: "Bluetooth Speaker Premium",
    price: 65,
    originalPrice: 85,
    image: "/images/products/speaker.jpg",
    rating: 4.6,
    reviews: 201,
    badge: "Hot Deal",
    discount: 24
  }
];

export function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Handpicked for You</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Featured
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
              Products
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular and highly-rated products, carefully selected 
            based on customer reviews and trending sales.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => {
            const isHovered = hoveredProduct === product.id;
            const isFavorite = favorites.has(product.id);
            
            return (
              <div
                key={product.id}
                className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className={`w-full h-56 object-cover transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.discount && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        -{product.discount}%
                      </div>
                    )}
                    {product.badge && (
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {product.badge}
                      </div>
                    )}
                    {product.isNew && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        NEW
                      </div>
                    )}
                    {product.isTrending && (
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        HOT
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-md transition-all duration-300 flex items-center justify-center ${
                        isFavorite 
                          ? 'bg-red-500 text-white scale-110' 
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className={`
                    w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2
                    ${isHovered 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>

                {/* Shine Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                  transform transition-transform duration-1000 -skew-x-12
                  ${isHovered ? 'translate-x-full' : '-translate-x-full'}
                `}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
