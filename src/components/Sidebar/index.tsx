import Contact from './Contact'
import Collections from './Collections'
import CustomTailor from './CustomTailor'
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
        <Collections />
      </li>
      <li>
        <CustomTailor />
      </li>
    </ul>
  </aside>
)

export default Sidebar
