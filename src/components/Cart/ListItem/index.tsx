import { CartListItem } from '@/models/cart'
import Counter from '@/components/Counter'
import Text from '@/components/Text'
import style from './ListItem.module.scss'

export interface ListItemProps extends CartListItem {
  children: React.ReactElement,
}

const ListItem: React.FC<ListItemProps> = ({
  name,
  count,
  children,
  onAdd,
  onRemove
}) => (
  <li
    className={style.Grid}
  >
    <Text
      text={name}
    />
    {children}
    <Counter
      count={count}
      onAdd={onAdd}
      onRemove={onRemove}
    />
  </li>
)


export default ListItem
