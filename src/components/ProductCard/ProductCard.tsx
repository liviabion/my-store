import { type Product } from "../../types/Product"
import { Link } from "react-router-dom"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isOutOfStock = product.stock === 0

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition flex flex-col relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />

      <h2 className="text-lg font-semibold text-dark-blue">{product.title}</h2>

      <p className="text-sm text-gray-dark line-clamp-2 mb-2">
        {product.description}
      </p>

      <div className="text-sober-blue font-medium mb-1">
        R$ {product.price.toFixed(2)}
      </div>

      <div className="text-xs text-gray-dark mb-1">
        ⭐ {product.rating.rate} ({product.rating.count})
      </div>

      <div
        className={`text-xs font-semibold mb-3 ${
          isOutOfStock ? "text-red-500" : "text-green-600"
        }`}
      >
        {isOutOfStock
          ? "Produto indisponível"
          : `Em estoque: ${product.stock} unidade(s)`}
      </div>

      <Link
        to={`/produto/${product.id}`}
        className={`mt-auto py-2 px-4 rounded text-sm text-center transition ${
          isOutOfStock
            ? "bg-gray-light text-gray-dark cursor-not-allowed pointer-events-none"
            : "bg-blue text-white hover:bg-dark-blue"
        }`}
      >
        Ver mais detalhes
      </Link>
    </div>
  )
}

export default ProductCard
