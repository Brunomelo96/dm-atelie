import Text from '@/components/Text'
import useResize from '@/hooks'
import { Link } from 'react-router-dom'
import style from './ListLink.module.scss'

interface ListLinkProps {
  to: string,
  ariaLabel: string,
  icon: string,
  message: string,
  shortMessage: string,
  target?: '_blank',
  onClick?: VoidFunction,
}

const ListLink: React.FC<ListLinkProps> = ({
  to,
  ariaLabel,
  icon,
  message,
  shortMessage,
  target = undefined,
  onClick,
}) => {
  const [width] = useResize()

  console.log(width)

  return (
    <Link
      className={style.Wrapper}
      to={to}
      aria-label={ariaLabel}
      target={target}
      onClick={() => onClick?.()}
    >
      {
        width >= 600 && (
          <Text
            text={icon}
            fontSize={width >= 1080 ? 'xxxl' : 'medium'}
          />
        )
      }
      <Text
        text={width >= 1080 ? message : shortMessage}
        fontSize={width >= 1080 ? 'large' : 'medium'}
        weight='bolder'
      />
    </Link>
  )
}

export default ListLink
