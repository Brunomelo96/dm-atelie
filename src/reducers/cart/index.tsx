import { Product } from '@/models/product'

export type Action = 
  | { type: 'add', payload: Product['id'] }
  | { type: 'remove', payload: Product['id'] }

export type State = {
  items: Product['id'][],
}

const initialState: State = {
  items: [],
}

const removeItem = (items: State['items'], payload: string): State['items'] => {
  const itemIndex = items.indexOf(payload)
  items.splice(itemIndex, 1)
  return items
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
  case 'add':
    return ({
      ...state,
      items: [...state.items, action.payload]
    })
  case 'remove':
    return ({
      ...state,
      items: removeItem([...state.items], action.payload),
    })
  default:
    return ({ ...initialState })  
  }
}

export { initialState, reducer }