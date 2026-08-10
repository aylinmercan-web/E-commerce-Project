import { Zap, Layers, TrendingUp } from 'lucide-react'
import { FaLyft, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa6'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import heroImage from '../assets/hero.png'

const brands = [
  { name: 'Hooli', icon: null },
  { name: 'Lyft', icon: FaLyft },
  { name: 'Stripe', icon: FaStripe },
  { name: 'AWS', icon: FaAws },
  { name: 'Reddit', icon: FaRedditAlien },
]

const services = [
  {
    icon: Zap,
    title: 'Easy Wins',
    description: 'We know how large objects will act, but things on a small scale.',
  },
  {
    icon: Layers,
    title: 'Concrete',
    description: 'Random text it is usually used to fill the space with a design.',
  },
  {
    icon: TrendingUp,
    title: 'Hack Growth',
    description: 'The reason we use it is because it has a more or less normal.',
  },
]

const products = [
  { id: 1, image: '/product1.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 2, image: '/product2.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 3, image: '/product3.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 4, image: '/product4.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 5, image: '/product5.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 6, image: '/product6.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 7, image: '/product7.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 8, image: '/product8.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 9, image: '/product9.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 10, image: '/product10.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
]

function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Slider
        slides={[
          {
            tag: 'SUMMER 2020',
            title: 'NEW COLLECTION',
            description: 'We know how large objects will act, but things on a small scale.',
            image: '/row.png',
          },
          {
            tag: 'SUMMER 2020',
            title: 'BIG SALE',
            description: 'Problems trying to resolve the conflict between.',
            image: '/row.png',
          },
        ]}
      />

      {/* Brand Strip */}
      <section className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-6 py-10 border-b border-gray-100">
        {brands.map(({ name, icon: Icon }) => (
          <span key={name} className="flex items-center gap-2 text-gray-400">
            {Icon ? (
              <>
                <Icon size={22} />
                <span className="text-lg md:text-xl font-bold tracking-wide">{name}</span>
              </>
            ) : (
              <span className="text-xl md:text-2xl font-bold italic tracking-wide">'{name}</span>
            )}
          </span>
        ))}
      </section>

      {/* Featured Products */}
      <section className="flex flex-col items-center gap-2 px-6 py-16">
        <span className="text-sm text-gray-500">Featured Products</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-sm text-gray-500">
          Problems trying to resolve the conflict between
        </p>

        <div className="flex flex-wrap justify-center w-full">
          {products.map((product) => (
            <div key={product.id} className="w-1/2 sm:w-1/3 md:w-1/5 px-3 mb-6">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* We Love What We Do */}
      <section className="flex flex-col items-center gap-10 bg-gray-50 px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl w-full">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="We love what we do"
              className="w-56 md:w-72 rounded-md object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-3 w-full md:w-1/2 text-center md:text-left">
            <span className="text-sm font-semibold text-blue-600">THE BEST SERVICES</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              We love what we do
            </h2>
            <p className="text-sm text-gray-500">
              Problems trying to resolve the conflict between what a design
              agency is used to doing and the client&apos;s expectations.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 flex-1">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-500">
                <Icon size={24} />
              </span>
              <h3 className="text-base font-bold text-slate-900">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage