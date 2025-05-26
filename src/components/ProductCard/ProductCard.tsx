import { type Product } from "../../types/Product"
import { Link } from "react-router-dom"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition flex flex-col">
      <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
      <h2 className="text-lg font-semibold text-dark-blue">{product.title}</h2>
      <p className="text-sm text-gray-dark line-clamp-2 mb-2">{product.description}</p>
      <div className="text-sober-blue font-medium mb-1">R$ {product.price.toFixed(2)}</div>
      <div className="text-xs text-gray-dark mb-3">⭐ {product.rating.rate} ({product.rating.count})</div>

      <Link
        to={`/produto/${product.id}`}
        className="mt-auto bg-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition text-sm text-center"
      >
        Ver mais detalhes
      </Link>
    </div>
  )
}

export default ProductCard
