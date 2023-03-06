import Text from '@/components/Text'
import style from './Button.module.scss'

interface ButtonProps {
  text: string,
  color?: 'primary' | 'secondary' | 'tertiary', 
  onClick: VoidFunction,
  disabled?: boolean
}

const colorClasses = {
  'primary': style.Primary,
  'secondary': style.Secondary,
  'tertiary': style.Tertiary,
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'primary',
  disabled=false,
  onClick,
}) => {
  const classNames = [style.Wrapper, colorClasses[color]].join(' ')

  return (
    <button
      className={classNames}
      onClick={() => { disabled && onClick() }}
      disabled={disabled}
    >
      <Text
        text={text}
        fontSize="medium"
        weight='bold'
      />
    </button>
  )
}

export default Button
