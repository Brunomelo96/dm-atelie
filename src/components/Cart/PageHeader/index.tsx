import Text from '@/components/Text'
import { Routes } from '@/models/routes'
import { Link } from 'react-router-dom'
import style from './PageHeader.module.scss'

interface PageHeaderProps {
  count: number,
}

const PageHeader: React.FC<PageHeaderProps> = ({ count }) => {

  return (
    <section
      className={style.Wrapper}
    >
      <Link
        to={Routes['CART']}
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
        to={Routes['CART']}
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

export default PageHeader
