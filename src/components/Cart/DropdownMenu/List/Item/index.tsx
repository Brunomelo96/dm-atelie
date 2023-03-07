import Counter from '@/components/Counter'
import Text from '@/components/Text'
import { CartListItem } from '@/models/cart'
import { Product } from '@/models/product'
import style from './Item.module.scss'

type ItemProps = Product & CartListItem
const Item: React.FC<ItemProps> = ({
  name,
  price,
  count,
  onAdd,
  onRemove
}) => {

  return (
    <li
      className={style.Grid}
    >
      <Text
        text={name}
        weight='bold'
      />
      <Text
        text={price}
      />
      <Counter
        count={count}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </li>
  )
}

export default Item
