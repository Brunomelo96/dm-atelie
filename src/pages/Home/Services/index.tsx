import Text from '@/components/Text'
import style from './Services.module.scss'

const Services = () => {
  
  return (
    <section
      className={style.Wrapper}
    >
      <Text
        text="Serviços"
        weight="bold"
        element="h3"
        fontSize="large"
        color='title'
      />
      <ul
        className={style.List}
      >
        <li>Pence Barra</li>
        <li>Remendo Chavoso</li>
      </ul>
    </section>
  )
}

export default Services
