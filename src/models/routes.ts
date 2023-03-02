export enum Routes {
  'HOME' = '/',
}

export type RouteLabel = {
  [key in keyof typeof Routes]: string
}

export const RoutesLabels: RouteLabel = {
  'HOME': 'Início',
}

export interface RouteRender {
  path: string,
  exact?: boolean,
  element: React.ReactNode,    
}
