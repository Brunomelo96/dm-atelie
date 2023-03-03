import Service from '@/components/Service'
import { useCart } from '@/contexts/useCart'
import { Service as ServiceModel } from '@/models/service'

interface ItemProps {
  item?: ServiceModel
}

const Item: React.FC<ItemProps> = ({
  item = {
    id: '1',
    name: 'Jujubs',
    price: '100,00',
    averageTime: '1',
    description: 'a',
    image: '1'
  }
}) => {
  const { onAdd } = useCart()

  return (
    <li>
      <Service
        service={item}
        onClick={() => onAdd(item.id)}
      />
    </li>
  )
}

export default Item
