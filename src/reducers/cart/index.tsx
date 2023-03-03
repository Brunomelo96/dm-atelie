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
      items: state.items.filter((itemId) => itemId !== action.payload)
    })
  default:
    return ({ ...initialState })  
  }
}

export { initialState, reducer }