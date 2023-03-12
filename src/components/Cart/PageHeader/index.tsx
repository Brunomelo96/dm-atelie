import Text from '@/components/Text'
import { useState } from 'react'
import DropdownMenu from '../DropdownMenu'
import HeaderLink from './HeaderLink'
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
        <HeaderLink />
      </section>
      <DropdownMenu
        isOpen={isDropdownOpen}
        onClose={() => setDropdownOpen(!isDropdownOpen)}
      />
    </div>
  )
}

export default PageHeader
