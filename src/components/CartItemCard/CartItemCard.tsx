import { type CartItem } from "../../types/Cart"
import { useCart } from "../../context/CartContext"

interface Props {
  product: CartItem
}

const CartItemCard = ({ product }: Props) => {
  const { dispatch } = useCart()

  return (
    <div className="flex justify-between bg-white rounded shadow p-4 mb-4 items-center">
      <div className="flex items-center gap-4">
        <img src={product.image} className="w-20 h-20 object-contain" />
        <div>
          <h2 className="text-lg font-semibold text-dark-blue">{product.title}</h2>
          <p className="text-sm text-gray-dark">R$ {product.price.toFixed(2)}</p>
          <p className="text-sm text-sober-blue">Subtotal: R$ {(product.price * product.quantity).toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => dispatch({ type: "DECREMENT_ITEM", payload: product.id })} className="px-2 py-1 bg-gray-dark text-white rounded">-</button>
        <span>{product.quantity}</span>
        <button onClick={() => dispatch({ type: "INCREMENT_ITEM", payload: product.id })} className="px-2 py-1 bg-blue text-white rounded">+</button>
        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product.id })} className="px-3 py-1 bg-red text-white rounded text-sm">Remover</button>
      </div>
    </div>
  )
}

export default CartItemCard
