import { CartListItem } from '@/models/cart'
import {  Outfit as OutfitModel } from '@/models/outfit'
import ListItem from '../ListItem'
import Description from './Description'
import style from './OutfitItem.module.scss'

type OutfitItemProps = CartListItem & OutfitModel

const OutfitItem: React.FC<OutfitItemProps> = ({
  name,
  count,
  kind,
  price,
  model,
  size,
  onAdd,
  onRemove
}) => (
  <ListItem
    name={name}
    price={price}
    count={count}
    onAdd={onAdd}
    onRemove={onRemove}
  >
    <ul
      className={style.Wrapper}
    >
      <Description
        title='Estilo'
        text={kind}
      />
      <Description
        title='Modelo'
        text={model.join(', ')}
      />
      <Description
        title='Tamanho'
        text={size}
      />
    </ul>
  </ListItem>
)

export default OutfitItem