import Contact from '@/components/Contact'
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
        <Contact />
      </li>
    </ul>
  </aside>
)

export default Sidebar
