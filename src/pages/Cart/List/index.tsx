import services from '@/data/services'
import outfits from '@/data/outfits'
import style from './List.module.scss'
import Item from './Item'

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
    </ul>
  )
}

export default List
