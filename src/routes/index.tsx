import { createBrowserRouter } from 'react-router-dom'
import usePage from '@/components/Page'
import { RouteRender, Routes } from '@/models/routes'
import Home from '@/pages/Home'

const routes: RouteRender[] = [
  {
    path: Routes.HOME,
    exact: true,
    element: <Home />,
  },
]

const pagedRoutes: RouteRender[] = routes.map((route) => ({
  ...route,
  element: usePage(route.element)
}))

export default createBrowserRouter([...Object.values(pagedRoutes)])
