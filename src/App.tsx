import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { CartProvider } from '@/contexts/useCart'
import './App.css'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  )
}

export default App
