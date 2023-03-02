import Text from '@/components/Text'
import style from './News.module.scss'

const News = () => {

  return (
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
        <li>Cropped Fofis</li>
        <li>Regata Alada</li>
      </ul>
    </section>
  )
}

export default News
