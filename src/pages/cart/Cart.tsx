import { useCart } from "../../context/CartContext"
import CartItemCard from "../../components/CartItemCard/CartItemCard"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, dispatch, finalizePurchase } = useCart()
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePurchase = () => {
    const success = finalizePurchase()
    if (success) {
      setMessage("Compra finalizada com sucesso! 🎉")
      setTimeout(() => navigate("/pedidos"), 1500)
    } else {
      setMessage("Falha na compra: estoque insuficiente.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <Header />

      <main className="flex-1 px-6 py-10 bg-gray">
        <h1 className="text-2xl font-bold text-dark-blue mb-6 text-center">Seu Carrinho</h1>

        {message && (
          <p className="text-center text-green-700 font-medium mb-4">{message}</p>
        )}

        {cart.length === 0 ? (
          <p className="text-center text-gray-dark">Seu carrinho está vazio.</p>
        ) : (
          <div className="max-w-3xl mx-auto">
            {cart.map((item) => (
              <CartItemCard key={item.id} product={item} />
            ))}

            <div className="text-right mt-6 space-y-3">
              <p className="text-lg font-semibold text-dark-blue">
                Total: R$ {total.toFixed(2)}
              </p>

              <button
                onClick={handlePurchase}
                className="bg-green-muted text-white px-4 py-2 rounded hover:bg-dark-blue transition text-sm"
              >
                Finalizar compra
              </button>

              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="bg-red text-white px-4 py-2 rounded hover:bg-dark-blue transition text-sm ml-3"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
