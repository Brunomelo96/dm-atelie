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
      <section
        className={style.Grid}
      >
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={style.Button}
          aria-label='Ir para meu carrinho'
        >
          <Text
            text='🛒'
            fontSize='large'
          />
        </button>
        <Text
          text={count === 0 ? 'Seu carrinho está vazio' : `${count} items no meu carrinho`}
          fontSize="medium"
        />
        <Link
          to={Routes['CART']}
          className={style.CartLink}
        >
          <Text
            text="Revisar pedido!"
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
