import { Product } from './product'

export interface CartState {
  items: Product['id'][],
}

export interface CartContext extends CartState {
  onAdd: (id: Product['id']) => void,
  onRemove: (id: Product['id']) => void,
}