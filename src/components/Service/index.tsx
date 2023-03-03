import Text from '@/components/Text'
import { Service as ServiceModel } from '@/models/service'
import style from './Service.module.scss'
import Counter from '@/components/Counter'

interface ServiceProps {
  service: ServiceModel,
  count: number,
  onAdd: VoidFunction,
  onRemove: VoidFunction,
}

const Service: React.FC<ServiceProps> = ({
  service,
  count,
  onAdd,
  onRemove
}) => (
  <div
    className={style.Wrapper}
  >
    <div
      className={style.Image}
    >
      {service.image}
    </div>
    <div
      className={style.Content}
    >
      <div
        className={style.Info}
      >
        <Text
          text={service.name}
          element="h6"
          fontSize="medium"
        />
        <Text
          text={service.price}
        />
      </div>
      <Text
        text={service.description}
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

export default Service
