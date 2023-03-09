import { createBrowserRouter } from 'react-router-dom'
import { RouteRender, Routes } from '@/models/routes'
import usePage from '@/components/Page'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Collections from '@/pages/Collections'

const routes: RouteRender[] = [
  {
    path: Routes.HOME,
    exact: true,
    element: <Home />,
  },
  {
    path: Routes.CART,
    exact: true,
    element: <Cart />
  },
  {
    path: Routes.COLLECTIONS,
    exact: true,
    element: <Collections />
  }
]

const pagedRoutes: RouteRender[] = routes.map((route) => ({
  ...route,
  element: usePage(route.element)
}))

export default createBrowserRouter([...Object.values(pagedRoutes)])
