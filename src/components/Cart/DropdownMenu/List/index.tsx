import Text from '@/components/Text'
import Total from '@/components/Total'
import { useCart } from '@/contexts/useCart'
import services from '@/data/services'
import Item from './Item'
import style from './List.module.scss'

const List = () => {
  const {
    // items,
    onAdd,
    onRemove,
    getCountById
  } = useCart()

  return (
    <ul
      className={style.Wrapper}
    >
      {
        services.map((item) => (
          <Item
            key={item.id}
            {...item}
            onAdd={() => onAdd(item.id)}
            onRemove={() => onRemove(item.id)}
            count={getCountById(item.id)}
          />
        ))
      }
      <li
        className={style.Total}
      >
        <Total prices={services.map((value) => value.price) as string[]} />
      </li>
    </ul>
  )
}

export default List
