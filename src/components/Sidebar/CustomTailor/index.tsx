import Text from '@/components/Text'
import { useEffect, useState } from 'react'
import style from './CustomTailor.module.scss'

const CustomTailor = () => {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => setClicked(false), 3000)

      return () => {
        clearTimeout(timeout)
      }
    }
  })
  
  return clicked
    ? (
      <div
        className={style.Wrapper}
        onClick={() => setClicked(!clicked)}
      >
        <Text
          text={'🛠'}
          fontSize="xxxl"
        />
        <Text
          text="Oops, em construção!"
          fontSize="large"
          weight='bolder'
        />
        <Text
          text="Em breve você poderá pedir suas roupinhas customizadas!"
          fontSize="default"
          weight='bolder'
        />
      </div>
    ) 
    : (
      <button
        className={style.Button}
        onClick={() => setClicked(!clicked)}
      >
        <Text
          text={'🪡'}
          fontSize="xxxl"
        />
        <Text
          text="Qual a roupinha dos seus sonhos?"
          fontSize="large"
          weight='bolder'
        />
      </button>
    )
}
export default CustomTailor