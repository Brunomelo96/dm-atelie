import { Link } from 'react-router-dom'
import { Routes } from '@/models/routes'
import Text from '@/components/Text'
import style from './GoBack.module.scss'

interface GoBackProps {
  to: keyof typeof Routes,
  text: string
}

const GoBack: React.FC<GoBackProps> = ({
  to,
  text,
}) => (
  <Link
    to={Routes[to]}
    className={style.Wrapper}
  >
    <Text
      weight='bold'
      text={text}
      fontSize='medium'
    />
  </Link>
)

export default GoBack
