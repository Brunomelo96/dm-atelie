import Text from '@/components/Text'
import style from './Collection.module.scss'
import { Link } from 'react-router-dom'
import { Routes } from '@/models/routes'
const Collection = () => (
  <Link
    className={style.Wrapper}
    to={Routes['HOME']}
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


export default Collection