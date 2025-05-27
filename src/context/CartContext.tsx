import { createContext, useContext, useReducer, useEffect, ReactNode } from "react"
import { type CartItem, type CartAction } from "../types/Cart"

interface CartState {
  cart: CartItem[]
}

interface CartContextType extends CartState {
  dispatch: React.Dispatch<CartAction>
  finalizePurchase: () => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within a CartProvider")
  return context
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.cart.find((item) => item.id === action.payload.id)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      }
    }

    case "REMOVE_ITEM":
      return {
        cart: state.cart.filter((item) => item.id !== action.payload)
      }

    case "INCREMENT_ITEM":
      return {
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

    case "DECREMENT_ITEM":
      return {
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      }

    case "CLEAR_CART":
      return { cart: [] }

    default:
      return state
  }
}

const loadCartFromStorage = (): CartItem[] => {
  try {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: loadCartFromStorage(),
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  const finalizePurchase = (): boolean => {
    const cartItems = state.cart
    const stock = JSON.parse(localStorage.getItem("stock") || "{}")
    const updatedStock = { ...stock }

    const hasOutOfStock = cartItems.some((item) => {
      const currentStock = updatedStock[item.id] ?? item.stock
      return item.quantity > currentStock
    })

    if (hasOutOfStock) {
      alert("Um ou mais itens estão fora de estoque.")
      return false
    }

    // Atualiza o estoque no localStorage
    cartItems.forEach((item) => {
      const currentStock = updatedStock[item.id] ?? item.stock
      updatedStock[item.id] = currentStock - item.quantity
    })
    localStorage.setItem("stock", JSON.stringify(updatedStock))

    // Salvar pedido em "my-store-orders"
    const previousOrders = JSON.parse(localStorage.getItem("my-store-orders") || "[]")
    const newOrder = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleString(),
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      items: cartItems,
    }
    localStorage.setItem("my-store-orders", JSON.stringify([...previousOrders, newOrder]))

    dispatch({ type: "CLEAR_CART" })
    return true
  }

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch, finalizePurchase }}>
      {children}
    </CartContext.Provider>
  )
}
