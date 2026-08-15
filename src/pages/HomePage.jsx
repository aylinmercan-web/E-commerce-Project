import { Zap, Layers, TrendingUp, Star, Download, Clock, Calendar } from 'lucide-react'
import brandStrip from '../assets/brand-strip.png'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import weLoveImage1 from '../assets/we-love-1.png'
import weLoveImage2 from '../assets/we-love-2.png'
import featuredPostImage1 from '../assets/featured-post-1.jpg'
import featuredPostImage2 from '../assets/featured-post-2.jpg'
import heroBannerImage from '../assets/hero-banner.jpg'
import postImage1 from '../assets/post-1.jpeg'
import postImage2 from '../assets/post-2.jpeg'

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

function HeroCard({ image, className }) {
  return (
    <div className={`relative rounded-md overflow-hidden ${className}`}>
      <img src={image} alt="Top Product Of the Week" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[220px] bg-sky-500/85 p-4">
        <p className="text-white font-bold text-sm sm:text-base mb-3">Top Product Of the Week</p>
        <button className="border border-white text-white text-xs font-bold px-4 py-2">
          EXPLORE ITEMS
        </button>
      </div>
    </div>
  )
}

const posts = [
  { id: 1, image: postImage1 },
  { id: 2, image: postImage2 },
]

function FeaturedPostCard({ image }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-1/2">
      <div className="relative w-full sm:w-40 shrink-0 h-56 sm:h-72 rounded-md overflow-hidden">
        <img src={image} alt="Graphic Design" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-blue-500">English Department</span>
          <span className="flex items-center gap-1 bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-full">
            <Star size={10} className="fill-yellow-400 text-yellow-400" />
            4.9
          </span>
        </div>
        <h3 className="text-base font-bold text-slate-900">Graphic Design</h3>
        <p className="text-base leading-7 text-gray-500 max-w-xs">
          We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
        </p>
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <Download size={14} />
          15 Sales
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 line-through">$16.48</span>
          <span className="text-sm font-bold text-emerald-600">$6.48</span>
        </div>
        <div className="flex items-center gap-2">
          {['bg-sky-500', 'bg-emerald-600', 'bg-orange-500', 'bg-slate-900'].map((color) => (
            <span key={color} className={`w-3 h-3 rounded-full ${color}`} />
          ))}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            22h...
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            64 Lessons
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp size={14} />
            Progress
          </span>
        </div>
        <button className="mt-2 w-fit flex items-center gap-1 border border-blue-500 text-blue-500 text-sm font-semibold px-4 py-2 rounded-full">
          Learn More &gt;
        </button>
      </div>
    </div>
  )
}

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
            tag: 'WINTER 2020',
            title: 'BIG SALE',
            description: 'Problems trying to resolve the conflict between.',
            image: '/row.png',
          },
        ]}
      />

      {/* Hero Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-10 mt-6">
        <HeroCard image={heroBannerImage} className="h-64 md:h-[500px]" />
        <div className="grid grid-rows-2 gap-4">
          <HeroCard image={featuredPostImage1} className="h-64 md:h-[242px]" />
          <HeroCard image={featuredPostImage2} className="h-64 md:h-[242px]" />
        </div>
      </section>

      {/* Brand Strip */}
      <section className="flex items-center justify-center px-6 py-6 border-b border-gray-100">
        <img
          src={brandStrip}
          alt="Hooli, Lyft, Stripe, AWS, Reddit"
          className="w-full max-w-4xl object-contain"
        />
      </section>

      {/* Featured Products */}
      <section className="flex flex-col items-center gap-2 px-6 py-16">
        <span className="text-base text-gray-500">Featured Products</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-base leading-7 text-gray-500">
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
          <div className="relative w-full md:w-1/2 flex justify-center items-center gap-4">
            <img
              src={weLoveImage1}
              alt="We love what we do"
              className="shrink-0 w-32 md:w-44 h-44 md:h-60 rounded-md object-cover shadow-lg"
            />
            <img
              src={weLoveImage2}
              alt="We love what we do"
              className="shrink-0 w-32 md:w-44 h-44 md:h-60 rounded-md object-cover shadow-lg"
            />
          </div>

          <div className="w-full text-center md:w-1/2 md:pl-10 md:text-left">
            <p className="text-base font-bold text-[#23A6F0]">
              Featured Products
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#252B42] md:text-4xl">
              We love what we do
            </h2>
            <p className="mx-auto mt-4 max-w-[320px] text-base leading-7 text-[#737373] md:mx-0">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <p className="mx-auto mt-5 max-w-[320px] text-base leading-7 text-[#737373] md:mx-0">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 max-w-5xl w-full text-center">
          <span className="text-base text-gray-500">Featured Products</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            THE BEST SERVICES
          </h2>
          <p className="text-base leading-7 text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3 flex-1">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-500">
                <Icon size={24} />
              </span>
              <h3 className="text-base font-bold text-slate-900">{title}</h3>
              <p className="text-base leading-7 text-gray-500">{description}</p>
            </div>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="flex flex-col items-center gap-2 max-w-5xl w-full text-center mt-6">
          <span className="text-base text-gray-500">Practice Advice</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Featured Posts
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 max-w-5xl w-full mt-4">
          {posts.map((post) => (
            <FeaturedPostCard key={post.id} image={post.image} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
