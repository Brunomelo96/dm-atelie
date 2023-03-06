import Cart from '@/components/Cart'
import { Outfit } from '@/models/outfit'
import { Service } from '@/models/service'

interface ItemProps {
  item: Outfit | Service,
}

const Item: React.FC<ItemProps> = ({ item }) => {
  if ((item as Outfit)?.kind) {
    return (
      <Cart.OutfitItem
        {...item as Outfit}
        count={0}
        onAdd={() => { console.log('a') }}
        onRemove={() => { console.log('a') }}
      />
    )
  }

  return (
    <Cart.ServiceItem
      {...item as Service}
      count={0}
      onAdd={() => { console.log('a') }}
      onRemove={() => { console.log('a') }}
    />
  )
}

export default Item
