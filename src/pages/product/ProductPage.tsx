import { useParams } from "react-router-dom"
import data from "../../../public/fake-database.json"
import { type Product } from "../../types/Product"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function ProductPage() {
  const { id } = useParams()
  const product = data.find((p: Product) => p.id === Number(id))

  if (!product) return <div>Produto não encontrado</div>

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <Header />

      <main className="flex-1 px-6 py-10 bg-gray">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-64 object-contain"
          />

          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold text-dark-blue">{product.title}</h1>
            <p className="text-gray-dark text-sm">{product.description}</p>
            <p className="text-xl text-sober-blue font-semibold">R$ {product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-dark">⭐ {product.rating.rate} ({product.rating.count} avaliações)</p>

            <button className="bg-blue text-white px-6 py-2 rounded hover:bg-dark-blue transition">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
