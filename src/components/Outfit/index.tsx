import Text from '@/components/Text'
import Button from '@/components/Button'
import { Outfit as OutfitModel } from '@/models/outfit'
import style from './Outfit.module.scss'

interface OutfitProps {
  outfit: OutfitModel,
  onClick: VoidFunction,
}

const Outfit: React.FC<OutfitProps> = ({
  outfit,
  onClick,
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
      <Button
        text='Adicionar'
        onClick={onClick}
        color='primary'
      />
    </div>
  )
}

export default Outfit
