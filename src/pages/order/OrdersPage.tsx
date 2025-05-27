import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

interface Order {
  id: string
  date: string
  total: number
  items: { title: string; quantity: number; image: string; price: number }[]
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const savedOrders = localStorage.getItem("my-store-orders")
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <Header />
      <main className="flex-1 px-6 pb-10 pt-10 bg-sober-blue/10 text-center">
        <h2 className="text-2xl font-bold text-dark-blue mb-6">Meus Pedidos</h2>
        {orders.length === 0 ? (
          <p className="text-gray-dark">Você ainda não finalizou nenhum pedido.</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order) => (
              <li key={order.id} className="bg-white rounded shadow p-4">
                <p className="text-sm text-gray-dark mb-2">Pedido em: {order.date}</p>
                <ul className="divide-y divide-blue">
                  {order.items.map((item, index) => (
                    <li key={index} className="py-2 flex justify-between items-center">
                      <div className="flex items-center gap-4 ">
                        <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                        <span>{item.title} x {item.quantity}</span>
                      </div>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-right font-bold text-blue">Total: R$ {order.total.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  )
}
