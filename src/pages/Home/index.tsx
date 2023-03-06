import News from './News'
import Services from './Services'
import style from './Home.module.scss'

const Home = () => (
  <div
    className={style.Wrapper}
  >
    <Services />
    <News />
  </div>
)

export default Home
