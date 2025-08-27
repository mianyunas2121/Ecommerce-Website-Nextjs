// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight, ShoppingBag, Star, ShoppingCart, TrendingUp, Zap, Award, Trash2 } from "lucide-react"
// import { motion } from "framer-motion"

// /* ================= HERO SLIDES ================= */
// const slides = [
//   {
//     title: "Shop Smarter with",
//     highlight: "Premium Products",
//     description: "Elevate your shopping experience — curated quality, fast delivery, and unbeatable deals.",
//     cta: "/shop",
//     bg: "from-primary-700 via-primary-600 to-primary-800",
//     product: {
//       name: "Wireless Headphones",
//       description: "High-quality sound with noise cancellation",
//       price: "$99.99",
//       rating: 5,
//       reviews: 128
//     }
//   },
//   {
//     title: "Fashion that Defines",
//     highlight: "Your Style",
//     description: "Latest trends in clothing and accessories — just for you.",
//     cta: "/fashion",
//     bg: "from-pink-700 via-red-600 to-orange-700",
//     product: {
//       name: "Premium Leather Jacket",
//       description: "Classic style with modern comfort.",
//       price: "$199.99",
//       rating: 5,
//       reviews: 214
//     }
//   },
//   {
//     title: "Discover Fresh",
//     highlight: "Lifestyle Products",
//     description: "Transform your daily routine with innovative products designed for modern living.",
//     cta: "/lifestyle",
//     bg: "from-emerald-400 via-teal-500 to-cyan-600",
//     product: {
//       name: "Smart Home Hub",
//       description: "Control your entire home with voice commands.",
//       price: "$129.99",
//       rating: 5,
//       reviews: 96
//     }
//   }
// ]

// /* ================= FEATURED PRODUCTS ================= */
// interface Product {
//   id: number
//   name: string
//   price: number
//   originalPrice?: number
//   image: string
//   rating: number
//   reviews: number
//   badge?: string
//   isNew?: boolean
//   isTrending?: boolean
//   discount?: number
// }

// const featuredProducts: Product[] = [
//   {
//     id: 1,
//     name: "Smart Watch Pro",
//     price: 120,
//     originalPrice: 150,
//     image: "/images/products/watch.jpg",
//     rating: 4.8,
//     reviews: 324,
//     badge: "Best Seller",
//     isTrending: true,
//     discount: 20
//   },
//   {
//     id: 2,
//     name: "Wireless Noise-Canceling Headphones",
//     price: 80,
//     originalPrice: 95,
//     image: "/images/products/headphones.jpg",
//     rating: 4.9,
//     reviews: 156,
//     badge: "Editor's Choice",
//     isNew: true,
//     discount: 16
//   },
//   {
//     id: 3,
//     name: "RGB Gaming Mouse Elite",
//     price: 45,
//     originalPrice: 60,
//     image: "/images/products/mouse.jpg",
//     rating: 4.7,
//     reviews: 89,
//     isTrending: true,
//     discount: 25
//   },
//   {
//     id: 4,
//     name: "Bluetooth Speaker Premium",
//     price: 65,
//     originalPrice: 85,
//     image: "/images/products/speaker.jpg",
//     rating: 4.6,
//     reviews: 201,
//     badge: "Hot Deal",
//     discount: 24
//   }
// ]

// /* ================= CART ITEMS ================= */
// interface CartItem {
//   id: number
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// export default function LandingPage() {
//   /* --- Hero State --- */
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
//   const [favorites, setFavorites] = useState<Set<number>>(new Set())

//   /* --- Cart State --- */
//   const [cart, setCart] = useState<CartItem[]>([])

//   /* --- Hero Slider Effect --- */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const slide = slides[currentSlide]

//   /* --- Featured Product Handlers --- */
//   const toggleFavorite = (productId: number) => {
//     const newFavorites = new Set(favorites)
//     if (newFavorites.has(productId)) newFavorites.delete(productId)
//     else newFavorites.add(productId)
//     setFavorites(newFavorites)
//   }

//   const addToCart = (product: Product) => {
//     const exists = cart.find((item) => item.id === product.id)
//     if (exists) {
//       setCart((prev) =>
//         prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       )
//     } else {
//       setCart((prev) => [
//         ...prev,
//         { id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image }
//       ])
//     }
//   }

//   const removeItem = (id: number) => {
//     setCart(cart.filter((item) => item.id !== id))
//   }

//   const updateQuantity = (id: number, type: "increment" | "decrement") => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? { ...item, quantity: type === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
//           : item
//       )
//     )
//   }

//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

//   return (
//     <div className="space-y-16">

//       {/* ================= HERO SECTION ================= */}
//       <section className={`relative min-h-screen bg-gradient-to-br ${slide.bg} text-white overflow-hidden transition-all duration-1000`}>
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]"></div>
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent)]"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-36 min-h-screen flex flex-col justify-center">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-1">
//             <div className="text-center lg:text-left">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 min-h-[12rem]">
//                 {slide.title}
//                 <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
//                   {slide.highlight}
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-lg mx-auto lg:mx-0 min-h-[3rem]">
//                 {slide.description}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <Link href={slide.cta} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-300 to-pink-400 text-primary-800 font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform">
//                   Start Shopping
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Link>
//                 <Link href={slide.cta} className="inline-flex items-center px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-colors">
//                   Explore Categories
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl relative z-10">
//                 <div className="bg-white rounded-xl p-6 shadow-xl">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
//                       <ShoppingBag className="w-6 h-6 text-primary-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">{slide.product.name}</h3>
//                       <p className="text-sm text-gray-600">{slide.product.description}</p>
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Price</span>
//                       <span className="font-semibold text-gray-900">{slide.product.price}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Rating</span>
//                       <div className="flex items-center space-x-1">
//                         {[...Array(Math.floor(slide.product.rating))].map((_, i) => (
//                           <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                         ))}
//                         <span className="text-gray-600 ml-1">({slide.product.reviews})</span>
//                       </div>
//                     </div>
//                     <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-colors text-sm font-medium">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-60 blur-2xl animate-pulse"></div>
//               <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60 blur-xl animate-ping"></div>
//             </div>
//           </div>

//           <div className="flex justify-center mt-12 space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FEATURED PRODUCTS ================= */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 left-20 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full mb-6">
//               <Award className="w-4 h-4 text-orange-600" />
//               <span className="text-sm font-medium text-orange-800">Handpicked for You</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
//               Featured
//               <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
//                 Products
//               </span>
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover our most popular and highly-rated products, carefully selected based on customer reviews and trending sales.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//             {featuredProducts.map((product) => {
//               const isHovered = hoveredProduct === product.id
//               const isFavorite = favorites.has(product.id)

//               return (
//                 <motion.div
//                   key={product.id}
//                   whileHover={{ scale: 1.05 }}
//                   className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300"
//                   onMouseEnter={() => setHoveredProduct(product.id)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Product Image */}
//                   <div className="relative overflow-hidden rounded-t-3xl">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       width={400}
//                       height={300}
//                       className="w-full h-56 object-cover transition-transform duration-500"
//                       priority
//                     />
//                     {/* Badges */}
//                     <div className="absolute top-4 left-4 flex flex-col gap-2">
//                       {product.discount && (
//                         <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
//                           -{product.discount}%
//                         </div>
//                       )}
//                       {product.badge && (
//                         <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
//                           {product.badge}
//                         </div>
//                       )}
//                       {product.isNew && (
//                         <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
//                           <Zap className="w-3 h-3" />
//                           NEW
//                         </div>
//                       )}
//                       {product.isTrending && (
//                         <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
//                           <TrendingUp className="w-3 h-3" />
//                           HOT
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Product Info */}
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-gray-500">({product.reviews})</span>
//                     </div>

//                     <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{product.name}</h3>

//                     <div className="flex items-center gap-2 mb-4">
//                       <span className="text-2xl font-bold text-gray-900">${product.price}</span>
//                       {product.originalPrice && <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>}
//                     </div>

//                     <button
//                       onClick={() => addToCart(product)}
//                       className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-transform"
//                     >
//                       <ShoppingCart className="w-4 h-4" />
//                       Add to Cart
//                     </button>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================= CART ================= */}
//       <section className="max-w-4xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//         {cart.length === 0 ? (
//           <p className="text-gray-600">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-4">
//             {cart.map((item) => (
//               <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md">
//                 <div className="flex items-center gap-4">
//                   <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     onClick={() => updateQuantity(item.id, "decrement")}
//                     className={`px-2 py-1 rounded-md ${item.quantity === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, "increment")} className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
//                     +
//                   </button>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
//                   <button onClick={() => removeItem(item.id)} aria-label="Remove item from cart" className="text-red-500 hover:text-red-600">
//                     <Trash2 size={20} />
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-2xl">
//               <h2 className="text-xl font-bold">Total:</h2>
//               <p className="text-2xl font-extrabold">${totalPrice.toFixed(2)}</p>
//             </div>

//             <button className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl text-lg font-semibold transition-all" disabled={cart.length === 0}>
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </section>
//     </div>
//   )
// }
