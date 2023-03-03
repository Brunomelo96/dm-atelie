import Text from '@/components/Text'
import { Link } from 'react-router-dom'
import style from './Cart.module.scss'
import { Routes } from '@/models/routes'

interface CartProps {
  count: number,
}

const Cart: React.FC<CartProps> = ({ count }) => {

  return (
    <section
      className={style.Wrapper}
    >
      <Link
        to={Routes['HOME']}
        className={style.CartIconLink}
        aria-label='Ir para meu carrinho'
      >
        <Text
          text='🛒'
          fontSize='large'
        />
      </Link>
      <Text
        text={count === 0 ? 'Seu carrinho está vazio' : `${count} items no meu carrinho`}
        fontSize="medium"
      />
      <Link
        to={Routes['HOME']}
        className={style.CartLink}
      >
        <Text
          text="Finalizar pedido!"
          fontSize='medium'
          weight='bold'
        />
      </Link>
    </section>
  )
}

export default Cart
