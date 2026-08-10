import ProductCard from '../components/ProductCard'

const shopProducts = [
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
  { id: 11, image: '/product1.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
  { id: 12, image: '/product2.png', title: 'Graphic Design', subtitle: 'English Department', oldPrice: 16.48, newPrice: 6.48 },
]

function ShopPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page header / breadcrumb - mobile & desktop shared */}
      <section className="flex flex-col items-center justify-center gap-2 bg-gray-50 px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">Shop</h1>
        <p className="text-sm text-gray-500">Home &gt; Shop</p>
      </section>

      {/* Product grid - responsive: 2 cols mobile, more cols on larger screens */}
      <section className="flex flex-col items-center gap-2 px-6 py-10 md:py-16">
        <div className="flex flex-wrap justify-center w-full">
          {shopProducts.map((product) => (
            <div key={product.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 mb-6">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ShopPage
