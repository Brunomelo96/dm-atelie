import Sidebar from '@/components/Sidebar'
import style from './Page.module.scss'

interface PageProps {
    children: React.ReactNode,
}

const Page = ({ children }: PageProps) => {

  return (
    <div className={style.Grid}>
      <main
        className={style.Wrapper}
      >
        {children}
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