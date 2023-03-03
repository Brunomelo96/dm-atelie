import Service from '@/components/Service'
import { useCart } from '@/contexts/useCart'
import { Service as ServiceModel } from '@/models/service'

interface ItemProps {
  item: ServiceModel
}

const Item: React.FC<ItemProps> = ({
  item
}) => {
  const { onAdd, onRemove, getCountById } = useCart()

  return (
    <li>
      <Service
        service={item}
        onAdd={() => onAdd(item.id)}
        onRemove={() => onRemove(item.id)}
        count={getCountById(item.id)}
      />
    </li>
  )
}

export default Item
