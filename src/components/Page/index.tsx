import Sidebar from '@/components/Sidebar'
import Cart from '../Cart'
import style from './Page.module.scss'

interface PageProps {
    children: React.ReactNode,
}

const Page = ({ children }: PageProps) => {

  return (
    <div className={style.Grid}>
      <main
        className={style.Main}
      >
        <Cart />
        <div className={style.Wrapper}>
          {children}
        </div>
      </main>
      <div
        className={style.Wrapper}
      >
        <Sidebar />
      </div>
    </div>
  )
}

const usePage = (children: React.ReactNode) => (<Page>{children}</Page>) 

export default usePage