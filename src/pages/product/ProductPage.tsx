import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { type Product } from "../../types/Product"
import data from "../../../public/fake-database.json"
import { useCart } from "../../context/CartContext"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const { dispatch } = useCart()

  useEffect(() => {
    const found = data.find((item: Product) => item.id === Number(id))
    if (found) setProduct(found)
  }, [id])

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <p className="text-dark-blue font-semibold">Produto não encontrado.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <Header />

      <main className="flex-1 px-6 py-10 bg-gray">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8 flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-contain mx-auto"
          />

          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold text-dark-blue">{product.title}</h1>
            <p className="text-gray-dark text-sm">{product.description}</p>
            <p className="text-lg font-semibold text-blue">R$ {product.price.toFixed(2)}</p>
            <p className="text-sm text-sober-blue">⭐ {product.rating.rate} ({product.rating.count} avaliações)</p>

            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
              className="mt-4 bg-blue text-white px-6 py-2 rounded hover:bg-dark-blue transition"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
