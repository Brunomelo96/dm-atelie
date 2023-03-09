import Text from '@/components/Text'
import Item from './Item'
import style from './Services.module.scss'

const services = [
  {
    id: '1',
    name: 'Jujubs',
    price: '100.00',
    averageTime: '1',
    description: 'a',
    image: '1'
  },
  {
    id: '2',
    name: 'Jujubs',
    price: '100.00',
    averageTime: '1',
    description: 'a',
    image: '1'
  },
  {
    id: '12312',
    name: 'Jujubs',
    price: '100.00',
    averageTime: '1',
    description: 'a',
    image: '1'
  },
  {
    id: '190',
    name: 'Jujubs',
    price: '100.00',
    averageTime: '1',
    description: 'a',
    image: '1'
  },
  {
    id: '180',
    name: 'Jujubs',
    price: '100.00',
    averageTime: '1',
    description: 'a',
    image: '1'
  },
  {
    id: '120837180318',
    name: 'Jujubs',
    price: '100.00',
    averageTime: '1',
    description: 'a',
    image: '1'
  }
]

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
        {
          services.map((value) => (
            <Item
              item={value}
              key={value.id}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default Services
