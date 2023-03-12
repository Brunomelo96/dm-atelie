import style from './Sidebar.module.scss'
import ListLink from './ListLink'
import { sendEmptyOrder } from '@/helpers/whatsapp'
import { Routes } from '@/models/routes'
import CustomTailor from './CustomTailor'

const Sidebar = () => (
  <aside>
    <ul
      className={style.List}
    >
      <li>
        <ListLink
          to={sendEmptyOrder()}
          ariaLabel='Mandar mensagem por whatsapp'
          icon='📞'
          message='Dúvidas? Manda um zap!'
          shortMessage='Dúvidas'
          key=''
          target='_blank'
        />
      </li>
      <li>
        <ListLink
          to={Routes['COLLECTIONS']}
          ariaLabel='Ir para Coleções'
          icon='🌞'
          message='Confira nossas coleções!'
          shortMessage='Coleções'
          key=''
        />
      </li>
      <li>
        <CustomTailor />
      </li>
    </ul>
  </aside>
)

export default Sidebar
