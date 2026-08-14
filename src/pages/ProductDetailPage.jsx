import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

function ProductDetailPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="flex flex-col items-center px-6 py-16">
        <p className="text-lg text-gray-500">Ürün bulunamadı.</p>
        <Link to="/shop" className="mt-4 text-blue-500 font-semibold">Shop'a dön</Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 py-10 md:py-16 max-w-5xl mx-auto w-full">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 aspect-square object-cover rounded-md"
      />

      <div className="flex flex-col gap-3 w-full md:w-1/2">
        <span className="text-sm text-gray-500">{product.subtitle}</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">{product.title}</h1>
        <div className="flex items-center gap-3">
          <span className="text-lg text-gray-400 line-through">${product.oldPrice}</span>
          <span className="text-lg font-bold text-emerald-600">${product.newPrice}</span>
        </div>
        <p className="text-base text-gray-500 leading-7">
          Problems trying to resolve the conflict between what a design agency is used to doing and the client's expectations.
        </p>
        <button className="mt-4 w-fit bg-sky-500 text-white font-bold px-8 py-3">
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage