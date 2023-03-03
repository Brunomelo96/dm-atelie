import Text from '@/components/Text'
import Button from '@/components/Button'
import { Service as ServiceModel } from '@/models/service'
import style from './Service.module.scss'

interface ServiceProps {
  service: ServiceModel,
  onClick: VoidFunction,
}

const Service: React.FC<ServiceProps> = ({
  service,
  onClick
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
    <Button
      text='Adicionar'
      onClick={onClick}
      color='primary'
    />
  </div>
)

export default Service
