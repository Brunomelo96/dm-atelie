import services from '@/data/services'
import outfits from '@/data/outfits'
import style from './List.module.scss'
import Item from './Item'
import Total from '@/components/Total'

const List = () => {

  return (
    <ul
      className={style.Wrapper}
    >
      {
        [...services.slice(0, 2), ...outfits.slice(0, 2)].map(
          (value, index) => (
            <Item key={index} item={value}/>
          )
        )
      }
      <li
        className={style.Total}
      >
        <Total prices={
          [...services.slice(0, 2), ...outfits.slice(0, 2)]
            .map((value) => value.price)
        }
        />
      </li>
    </ul>
  )
}

export default List
