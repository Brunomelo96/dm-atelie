import Text from '@/components/Text'
import style from './Description.module.scss'

interface DescriptionProps {
  title: string,
  text: string,
}

const Description: React.FC<DescriptionProps> = ({
  title,
  text
}) => {

  return (
    <li
      className={style.Wrapper}
    >
      <Text
        text={`${title}:`}
        weight='bold'
      />
      <Text
        text={text}
      />
    </li>
  )
}

export default Description
