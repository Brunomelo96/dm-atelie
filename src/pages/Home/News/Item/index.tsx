import Outfit from '@/components/Outfit'
import { useCart } from '@/contexts/useCart'
import { Outfit as OutfitModel } from '@/models/outfit'

interface ItemProps {
  item: OutfitModel
}

const Item: React.FC<ItemProps> = ({
  item,
}) => {
  const { onAdd, onRemove, getCountById } = useCart()

  return (
    <li>
      <Outfit
        outfit={item}
        count={getCountById(item.id)}
        onAdd={() => onAdd(item.id)}
        onRemove={() => onRemove(item.id)}
      />
    </li>
  )
}

export default Item
