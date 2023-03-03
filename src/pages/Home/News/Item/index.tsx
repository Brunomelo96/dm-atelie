import Outfit from '@/components/Outfit'
import { useCart } from '@/contexts/useCart'
import { Outfit as OutfitModel } from '@/models/outfit'

interface ItemProps {
  item?: OutfitModel
}

const Item: React.FC<ItemProps> = ({
  item = {
    id: '1',
    name: 'Jujubs',
    price: '100,00',
    description: 'a',
    image: '1',
    size: 'large',
    kind: 'shirt',
    model: ['long'],
  } as OutfitModel,
}) => {
  const { onAdd } = useCart()

  return (
    <li>
      <Outfit
        outfit={item}
        onClick={() => onAdd(item.id)}
      />
    </li>
  )
}

export default Item
