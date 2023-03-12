import Text from '@/components/Text'
import { Routes } from '@/models/routes'
import { Link, useLocation } from 'react-router-dom'
import style from './HeaderLink.module.scss'

const HeaderLink = () => {
  const { pathname } = useLocation()

  const isCart = !!pathname.includes(Routes['CART'])
  
  return (
    <Link
      to={isCart ? Routes['HOME']: Routes['CART']}
      className={style.CartLink}
    >
      <Text
        text={isCart ? 'Voltar ao Início' : 'Revisar Pedido!'}
        fontSize='medium'
        weight='bold'
      />
    </Link>
  )
}

export default HeaderLink
