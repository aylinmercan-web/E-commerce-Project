import { Link } from 'react-router-dom'

function ProductCard({ id, image, title, subtitle, oldPrice, newPrice }) {
  return (
    <Link to={`/product/${id}`} className="flex flex-col gap-2 w-full">
      <img src={image} alt={title} className="w-full aspect-[4/5] object-cover" />
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
        <span className="text-sm font-bold text-emerald-600">${newPrice}</span>
      </div>
    </Link>
  )
}

export default ProductCard