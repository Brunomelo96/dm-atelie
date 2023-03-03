import {
  CartContext as CartContextModel,
} from '@/models/cart'
import { createContext, useContext, useReducer } from 'react'
import { reducer, initialState } from '@/reducers/cart'
import { Product } from '@/models/product'

const CartContext = createContext<Partial<CartContextModel>>(initialState)

const CartProvider = (
  { children }: { children: React.ReactNode }
): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onAdd = (id: Product['id']) => { dispatch({ type: 'add', payload: id })}
  const onRemove = (id: Product['id']) => { dispatch({ type: 'remove', payload: id }) }
  const getCountById = (id: Product['id']): number => state.items
    .filter((value) => value == id)?.length ?? 0
  const getCount = (): number => state.items.length ?? 0 

  const values: CartContextModel = {
    items: state.items,
    onAdd,
    onRemove,
    getCount,
    getCountById,
  }

  return (
    <CartContext.Provider
      value={values}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const context = useContext(CartContext) as CartContextModel

  return context
}

export {
  useCart,
  CartProvider
}