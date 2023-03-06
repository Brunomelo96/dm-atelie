export enum Routes {
  'HOME' = '/',
  'CART' = '/cart',
  'COLLECTIONS' = '/collections'
}

export type RouteLabel = {
  [key in keyof typeof Routes]: string
}

export const RoutesLabels: RouteLabel = {
  'HOME': 'Início',
  'CART': 'Carrinho',
  'COLLECTIONS': 'Coleções'
}

export interface RouteRender {
  path: string,
  exact?: boolean,
  element: React.ReactNode,    
}
