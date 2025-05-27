import { useCart } from "../../context/CartContext"
import CartItemCard from "../../components/CartItemCard/CartItemCard"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ConfirmPurchaseModal from "../../components/ConfirmModal/ConfirmPurchaseModal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, dispatch, finalizePurchase } = useCart()
  const [modalOpen, setModalOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState<boolean | null>(null)
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleConfirmPurchase = () => {
    const result = finalizePurchase()
    setSuccess(result)
    if (result) {
      setMessage("Compra finalizada com sucesso! 🎉")
      setTimeout(() => {
        setModalOpen(false)
        navigate("/pedidos")
      }, 1500)
    } else {
      setMessage("Falha na compra: estoque insuficiente.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <Header />

      <main className="flex-1 px-6 py-10 bg-gray">
        <h1 className="text-2xl font-bold text-dark-blue mb-6 text-center">Seu Carrinho</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-dark">Seu carrinho está vazio.</p>
        ) : (
          <div className="max-w-3xl mx-auto">
            {cart.map((item) => (
              <CartItemCard key={item.id} product={item} />
            ))}

            <div className="text-right mt-6 space-y-4">
              <p className="text-lg font-semibold text-dark-blue">
                Total: R$ {total.toFixed(2)}
              </p>

              <div className="flex flex-wrap justify-end gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-blue text-white px-4 py-2 rounded hover:bg-dark-blue transition text-sm"
                >
                  Finalizar compra
                </button>

                <button
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                  className="bg-red text-white px-4 py-2 rounded hover:bg-dark-blue transition text-sm"
                >
                  Limpar carrinho
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <ConfirmPurchaseModal
        show={modalOpen}
        onCancel={() => {
          setModalOpen(false)
          setMessage("")
          setSuccess(null)
        }}
        onConfirm={handleConfirmPurchase}
        message={message}
        success={success}
      />

      <Footer />
    </div>
  )
}
