import Button from '@/components/Button'
import GoBack from '@/components/GoBack'
import Text from '@/components/Text'
import { sendOrder } from '@/helpers/whatsapp'
import { Link } from 'react-router-dom'
import style from './Cart.module.scss'
import List from './List'

const Cart = () => {
  return (
    <section
      className={style.Wrapper}
    >
      <GoBack
        to='HOME'
        text='voltar'
      />
      <Text
        text="Meu carrinho"
        fontSize='large'
        weight='bold'
        color='title'
      />
      <List />
      <Link
        className={style.ItemLink}
        to={sendOrder('oi')}
        target='_blank'
      >
        <Text
          text='Enviar Pedido!'
          weight='bold'
          fontSize='large'
        />
      </Link>
    </section>
  )
}

export default Cart
