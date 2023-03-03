import Text from '@/components/Text'
import Item from './Item'
import style from './News.module.scss'

const News = () => (
  <section
    className={style.Wrapper}
  >
    <Text
      text="Lançamentos"
      weight="bold"
      element="h3"
      fontSize="large"
      color='title'
    />
    <ul
      className={style.List}
    >
      <Item />
      <Item />
    </ul>
  </section>
)

export default News
