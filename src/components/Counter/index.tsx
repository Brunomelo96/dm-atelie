import Icon from '@/components/Icon'
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
        icon={<div>-</div>}
        onClick={onRemove}
      />
      <span
        className={style.Content}
      >
        {count}
      </span>
      <Icon
        icon={<div>+</div>}
        onClick={onAdd}
      />
    </div>
  )
}

export default Counter
