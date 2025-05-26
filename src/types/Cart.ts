import { type Product } from "./Product";

export interface CartItem extends Product {
  quantity: number
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREMENT_ITEM"; payload: number }
  | { type: "DECREMENT_ITEM"; payload: number }
  | { type: "CLEAR_CART" }
