'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle,
  Verified,
  ThumbsUp
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Tech Enthusiast",
    company: "Google",
    feedback: "Amazing shopping experience! The product quality is top-notch and delivery was super fast. I've never experienced such seamless service before.",
    avatar: "/images/avatar1.jpg",
    rating: 5,
    verified: true,
    purchasedProduct: "Smart Watch Pro",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Marketing Director",
    company: "Meta",
    feedback: "Great customer support and affordable prices. Will definitely shop again! The team went above and beyond to help me find exactly what I needed.",
    avatar: "/images/avatar2.jpg",
    rating: 5,
    verified: true,
    purchasedProduct: "Wireless Headphones",
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Software Engineer",
    company: "Microsoft",
    feedback: "The website is user-friendly, and the checkout process was smooth. Love the attention to detail in both product quality and user experience.",
    avatar: "/images/avatar3.jpg",
    rating: 4,
    verified: true,
    purchasedProduct: "Gaming Mouse Elite",
    location: "Seattle, WA"
  },
  {
    id: 4,
    name: "Emma Johnson",
    role: "UX Designer",
    company: "Adobe",
    feedback: "Outstanding product range and lightning-fast shipping. The packaging was premium and the products exceeded my expectations. Highly recommended!",
    avatar: "/images/avatar4.jpg",
    rating: 5,
    verified: true,
    purchasedProduct: "Bluetooth Speaker",
    location: "Austin, TX"
  },
  {
    id: 5,
    name: "David Chen",
    role: "Product Manager",
    company: "Apple",
    feedback: "Best online shopping experience I've had in years. The product recommendations were spot-on and the quality is exceptional for the price point.",
    avatar: "/images/avatar5.jpg",
    rating: 5,
    verified: true,
    purchasedProduct: "Smart Watch Pro",
    location: "Cupertino, CA"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/10 to-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-800">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            What Our
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Customers Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing customers have to say 
            about their shopping experience with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial) => {
              const isHovered = hoveredCard === testimonial.id;
              
              return (
                <div
                  key={testimonial.id}
                  className={`
                    relative bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                    transition-all duration-500 overflow-hidden
                    ${isHovered ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'}
                  `}
                //  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Quote Icon Background */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-16 h-16 text-indigo-600" />
                  </div>

                  {/* Gradient Border Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl transition-opacity duration-500
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5
                  `}>
                    <div className="bg-white rounded-3xl h-full w-full"></div>
                  </div>

                  <div className="relative p-8">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.feedback}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-100"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Verified className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                          <ThumbsUp className="w-4 h-4 text-indigo-500" />
                        </div>
                        <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Purchased: {testimonial.purchasedProduct}
                        </p>
                      </div>
                    </div>

                    {/* Location Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800">
                        📍 {testimonial.location}
                      </span>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl transition-opacity duration-500
                    ${isHovered ? 'opacity-20' : 'opacity-0'}
                    bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-xl
                  `}></div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > 3 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              10K+
            </div>
            <p className="text-gray-600 font-medium">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              4.9/5
            </div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600 mb-2">
              99%
            </div>
            <p className="text-gray-600 font-medium">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}