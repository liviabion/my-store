import { useCart } from "../../context/CartContext"
import CartItemCard from "../../components/CartItemCard/CartItemCard"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function Cart() {
  const { cart, dispatch } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

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

            <div className="text-right mt-6">
              <p className="text-lg font-semibold text-dark-blue">
                Total: R$ {total.toFixed(2)}
              </p>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="mt-3 bg-red text-white px-4 py-2 rounded hover:bg-dark-blue transition text-sm"
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
