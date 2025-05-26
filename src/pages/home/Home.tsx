import { useState } from "react"
import data from "../../../public/fake-database.json"
import { type Product } from "../../types/Product"
import ProductCard from "../../components/ProductCard/ProductCard"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const categories = ["Todas", "Roupas masculinas", "Roupas femininas", "Joias", "Eletrônicos"]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const filteredProducts = data.filter((product: Product) =>
    selectedCategory === "Todas" || product.category.toLowerCase() === selectedCategory.toLowerCase()
  )

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <Header />

      <main className="flex-1 px-6 bg-gray py-10">
        <h1 className="text-3xl font-bold text-dark-blue mb-6 text-center">Explore os produtos</h1>

        <div className="mb-6 flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue text-white"
                  : "bg-white text-dark-blue border-blue hover:bg-soft-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>


      <Footer />
    </div>
  )
}
