import Contact from '@/components/Contact'
import Collection from '@/components/Collections'
import CustomTailor from '@/components/CustomTailor'
import style from './Sidebar.module.scss'

const Sidebar = () => (
  <aside>
    <ul
      className={style.List}
    >
      <li>
        <Contact />
      </li>
      <li>
        <Collection />
      </li>
      <li>
        <CustomTailor />
      </li>
    </ul>
  </aside>
)

export default Sidebar
