import { LayoutGrid, List } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import brandStrip from '../assets/brand-strip.png'
import categoryImage1 from '../assets/shop-category-1.jpg'
import categoryImage2 from '../assets/shop-category-2.jpg'
import categoryImage3 from '../assets/shop-category-3.jpg'
import categoryImage4 from '../assets/shop-category-4.jpg'
import categoryImage5 from '../assets/shop-category-5.jpg'
import shopProduct1 from '../assets/shop-product-1.jpg'
import shopProduct2 from '../assets/shop-product-2.jpg'
import shopProduct3 from '../assets/shop-product-3.jpg'
import shopProduct4 from '../assets/shop-product-4.jpg'
import shopProduct5 from '../assets/shop-product-5.jpg'
import shopProduct6 from '../assets/shop-product-6.jpg'
import shopProduct7 from '../assets/shop-product-7.jpg'
import shopProduct8 from '../assets/shop-product-8.jpg'
import shopProduct9 from '../assets/shop-product-9.jpg'
import shopProduct10 from '../assets/shop-product-10.jpg'
import shopProduct11 from '../assets/shop-product-11.jpg'
import shopProduct12 from '../assets/shop-product-12.jpg'

const categories = [
  { id: 1, image: categoryImage1, label: 'CLOTHS', items: '5 items' },
  { id: 2, image: categoryImage2, label: 'CLOTHS', items: '5 items' },
  { id: 3, image: categoryImage3, label: 'CLOTHS', items: '5 items' },
  { id: 4, image: categoryImage4, label: 'CLOTHS', items: '5 items' },
  { id: 5, image: categoryImage5, label: 'CLOTHS', items: '5 items' },
]

const shopProducts = [
  { id: 1, image: shopProduct1, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 2, image: shopProduct2, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 3, image: shopProduct3, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 4, image: shopProduct4, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 5, image: shopProduct5, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 6, image: shopProduct6, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 7, image: shopProduct7, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 8, image: shopProduct8, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 9, image: shopProduct9, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 10, image: shopProduct10, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 11, image: shopProduct11, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 12, image: shopProduct12, title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
]

function ShopPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page header / breadcrumb - mobile & desktop shared */}
      <section className="flex flex-col items-center justify-center gap-2 bg-gray-50 px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">Shop</h1>
        <p className="text-sm text-gray-500">Home &gt; Shop</p>
      </section>

      {/* Category strip */}
      <section className="flex flex-wrap md:flex-nowrap w-full">
        {categories.map((category) => (
          <div key={category.id} className="relative w-1/2 md:w-1/5 h-40 md:h-52 overflow-hidden">
            <img
              src={category.image}
              alt={category.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-end gap-1 pb-4">
              <span className="text-white font-bold text-sm tracking-wide">{category.label}</span>
              <span className="text-white text-xs">{category.items}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Toolbar */}
      <section className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-gray-100">
        <span className="text-sm text-gray-500">Showing all {shopProducts.length} results</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden sm:inline">Views:</span>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="flex items-center justify-center w-8 h-8 border border-gray-200 text-slate-900">
              <LayoutGrid size={16} />
            </span>
            <span className="flex items-center justify-center w-8 h-8 border border-gray-200">
              <List size={16} />
            </span>
          </div>
          <select className="border border-gray-200 text-sm text-gray-500 px-3 py-2">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="bg-sky-500 text-white text-sm font-bold px-6 py-2">
            Filter
          </button>
        </div>
      </section>

      {/* Product grid - 2 cols mobile, 4 cols desktop (3 rows of 4) */}
      <section className="flex flex-col items-center gap-8 px-6 py-10 md:py-16">
        <div className="flex flex-wrap justify-center w-full">
          {shopProducts.map((product) => (
            <div key={product.id} className="w-1/2 md:w-1/4 px-3 mb-6">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-2 text-sm">
          <button className="px-3 py-2 text-gray-300" disabled>First</button>
          <button className="w-9 h-9 flex items-center justify-center border border-gray-200 text-slate-900">1</button>
          <button className="w-9 h-9 flex items-center justify-center bg-sky-500 text-white">2</button>
          <button className="w-9 h-9 flex items-center justify-center border border-gray-200 text-slate-900">3</button>
          <button className="px-3 py-2 text-sky-500 font-semibold">Next</button>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="flex items-center justify-center px-6 py-6 border-t border-gray-100">
        <img
          src={brandStrip}
          alt="Hooli, Lyft, Stripe, AWS, Reddit"
          className="w-full max-w-4xl object-contain"
        />
      </section>
    </div>
  )
}

export default ShopPage
