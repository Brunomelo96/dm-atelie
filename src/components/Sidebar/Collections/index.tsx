import Text from '@/components/Text'
import style from './Collections.module.scss'
import { Link } from 'react-router-dom'
import { Routes } from '@/models/routes'

const Collections = () => (
  <Link
    className={style.Wrapper}
    to={Routes['COLLECTIONS']}
    aria-label='Ir para Coleções'
  >
    <Text
      text={'🌞'}
      fontSize="xxxl"
    />
    <Text
      text="Confira nossas coleções!"
      fontSize="large"
      weight='bolder'
    />
  </Link>
)


export default Collections