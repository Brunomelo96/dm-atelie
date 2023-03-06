import Text from '@/components/Text'
import { CartListItem } from '@/models/cart'
import {  Outfit as OutfitModel } from '@/models/outfit'
import ListItem from '../ListItem'
import style from './OutfitItem.module.scss'

type OutfitItemProps = CartListItem & OutfitModel

const OutfitItem: React.FC<OutfitItemProps> = ({
  name,
  count,
  kind,
  model,
  size,
  onAdd,
  onRemove
}) => (
  <ListItem
    name={name}
    count={count}
    onAdd={onAdd}
    onRemove={onRemove}
  >
    <div
      className={style.Wrapper}
    >
      <span>
        <Text
          text='Estilo:'
          weight='bold'
        />
        <Text
          text={kind}
        />
      </span>
      <span>
        <Text
          text='Modelo'
          weight='bold'
        />
        <Text
          text={model.join(', ')}
        />
      </span>
      <span>
        <Text
          text='Tamanho:'
          weight='bold'
        />
        <Text
          text={size}
        />
      </span>
    </div>
  </ListItem>
)

export default OutfitItem