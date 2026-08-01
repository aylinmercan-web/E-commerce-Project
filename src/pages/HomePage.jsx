import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'

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
    </div>
  )
}

export default HomePage