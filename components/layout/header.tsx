'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '@/store/auth-store'
import { useCartStore } from '@/store/cart-store'
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuthStore()
  const { getItemCount } = useCartStore()

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 rounded-3xl flex items-center justify-center shadow-lg hover:shadow-xl transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-extrabold text-2xl tracking-wide">E</span>
            </div>
             <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
              ShopNow
            </span>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
              
            </span>
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 hover:text-purple-500 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-500"
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated && user?.role === 'admin' && (
              <Link
                href="/admin"
                className="relative text-gray-700 hover:text-purple-500 transition-all after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 hover:after:w-full after:rounded-full after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-500"
              >
                Admin
              </Link>
            )}
          </nav>

          {/* Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all hover:shadow-md"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-5">
            {/* Search (Mobile) */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-500 hover:bg-gray-100 rounded-full transition-all"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <Link href="./cart" className="relative p-2 text-gray-700 hover:text-purple-500 hover:bg-gray-100 rounded-full transition-all">
              <ShoppingCart className="w-6 h-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-bounce">
                  {getItemCount()}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-purple-500 rounded-full hover:bg-gray-100 transition-all"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block font-medium">{user?.firstName}</span>
                </button>

                {isMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                      onClick={() => setIsMenuOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 transform origin-top-right animate-scaleIn">
                      <Link href="/profile" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50">
                        Profile
                      </Link>
                      <Link href="/orders" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50">
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4 text-gray-500" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="./login" className="text-gray-700 hover:text-purple-500 transition-all px-3 py-2 rounded-full hover:bg-gray-100">
                  Login
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-500 hover:bg-gray-100 rounded-full transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden">
            <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl p-6 flex flex-col space-y-6 animate-slideIn">
              <button onClick={() => setIsMenuOpen(false)} className="self-end p-2 text-gray-600 hover:text-purple-500">
                <X className="w-6 h-6" />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-700 hover:text-purple-500 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated && user?.role === 'admin' && (
                <Link href="/admin" className="text-lg font-medium text-gray-700 hover:text-purple-500" onClick={() => setIsMenuOpen(false)}>
                  Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }

        @keyframes slideIn {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }

        @keyframes fadeIn { 0% {opacity:0;} 100%{opacity:1;} }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </header>
  )
}
