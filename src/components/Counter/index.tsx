import Icon from '@/components/Icon'
import Text from '@/components/Text'
import style from './Counter.module.scss'

interface CounterProps {
  count: number,
  onAdd: VoidFunction,
  onRemove: VoidFunction,
}

const Counter: React.FC<CounterProps> = ({
  count,
  onAdd,
  onRemove,
}) => {

  return (
    <div
      className={style.Wrapper}
    >
      <Icon
        icon={
          <Text
            text='-'
            weight='bold'
            fontSize='xxxl'
          />
        }
        onClick={onRemove}
      />
      <span
        className={style.Content}
      >
        {count}
      </span>
      <Icon
        icon={
          <Text
            text='+'
            weight='bold'
            fontSize='xxxl'
          />
        }
        onClick={onAdd}
      />
    </div>
  )
}

export default Counter
