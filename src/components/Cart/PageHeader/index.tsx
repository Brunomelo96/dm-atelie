import Text from '@/components/Text'
import { Routes } from '@/models/routes'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from '../DropdownMenu'
import style from './PageHeader.module.scss'

interface PageHeaderProps {
  count: number,
}

const PageHeader: React.FC<PageHeaderProps> = ({ count }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  
  return (
    <div
      className={style.Wrapper}
    >
      <button
        style={{width: '5ch'}}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
          conferir
      </button>
      <section
        className={style.Grid}
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
      <DropdownMenu
        isOpen={isDropdownOpen}
        onClose={() => setDropdownOpen(!isDropdownOpen)}
      />
    </div>
  )
}

export default PageHeader
