import Text from '@/components/Text'
import style from './Contact.module.scss'

const Contact = () => (
  <div
    className={style.Wrapper}
  >
    <Text
      text={'📞'}
      fontSize="xxxl"
    />
    <Text
      text="Dúvidas? Me liga!"
      fontSize="large"
      weight='bolder'
    />
  </div>
)


export default Contact