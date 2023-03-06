import Button from '@/components/Button'
import GoBack from '@/components/GoBack'
import Text from '@/components/Text'
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
      <div>
        <Button
          onClick={() => { console.log('a') }}
          text='Enviar pedido!'
        />
      </div>
    </section>
  )
}

export default Cart
