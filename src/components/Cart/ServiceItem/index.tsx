import { Service as ServiceModel } from '@/models/service'
import { CartListItem } from '@/models/cart'
import ListItem from '../ListItem'

type ServiceItemProps = CartListItem & ServiceModel

const ServiceItem: React.FC<ServiceItemProps> = ({
  name,
  count,
  onAdd,
  onRemove,
  description
}) => (
  <ListItem
    name={name}
    count={count}
    onAdd={onAdd}
    onRemove={onRemove}
  >
    <div>
      {description}
    </div>
  </ListItem>
)

export default ServiceItem
