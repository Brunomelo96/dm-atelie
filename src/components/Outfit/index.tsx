import Text from '@/components/Text'
import Counter from '@/components/Counter'
import { Outfit as OutfitModel } from '@/models/outfit'
import style from './Outfit.module.scss'

interface OutfitProps {
  outfit: OutfitModel,
  count: number,
  onAdd: VoidFunction,
  onRemove: VoidFunction,
}

const Outfit: React.FC<OutfitProps> = ({
  outfit,
  count,
  onAdd,
  onRemove,
}) => {

  return (
    <div
      className={style.Wrapper}
    >
      <div
        className={style.Image}
      >
        {outfit.image}
      </div>
      <div
        className={style.Content}
      >
        <div
          className={style.Info}
        >
          <Text
            text={outfit.name}
            element="h6"
            fontSize="medium"
          />
          <Text
            text={outfit.price}
          />
        </div>
        <Text
          text={outfit.description}
          element="p"
        />
      </div>
      <Counter
        count={count}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </div>
  )
}

export default Outfit
