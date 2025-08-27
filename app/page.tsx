import { Hero } from '@/app/home/hero'
import { FeaturedProducts } from '@/app/home/featured-products'
import { Categories } from '@/app/categories/categories'
import { Testimonials } from '@/app/home/testimonials'


export default function HomePage() {
  return (
    <div className="space-y-16">
    
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
    </div>
  )
}
