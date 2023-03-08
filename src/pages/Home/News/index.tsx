import Text from '@/components/Text'
import { Outfit } from '@/models/outfit'
import Item from './Item'
import style from './News.module.scss'

const outfits: Outfit[] = [
  {
    id: '3',
    name: 'Jujubs',
    price: '100.00',
    description: 'a',
    image: '1',
    size: 'large',
    kind: 'shirt',
    model: ['long'],
  },
  {
    id: '4',
    name: 'Jujubs',
    price: '100.00',
    description: 'a',
    image: '1',
    size: 'large',
    kind: 'shirt',
    model: ['long'],
  },
  {
    id: '5',
    name: 'Jujubs',
    price: '100.00',
    description: 'a',
    image: '1',
    size: 'large',
    kind: 'shirt',
    model: ['long'],
  }
]

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
      {
        outfits.map((outfit) => (
          <Item
            item={outfit}
            key={outfit.id}
          />
        ))
      }
    </ul>
  </section>
)

export default News
