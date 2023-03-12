import { Routes } from '@/models/routes'
import { useEffect, useState } from 'react'
import ListLink from '../ListLink'

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

  return (
    <ListLink
      to={Routes['HOME']}
      ariaLabel={clicked ? 'Em construção' : 'Ir para customizações'}
      icon={clicked ? '🛠' : '🪡'}
      message={clicked ? 'Oops, em construção!' : 'Qual a roupinha dos seus sonhos?'}
      shortMessage={clicked ? 'Em construção' : 'Customizações'}
      onClick={() => { setClicked(!clicked) }}
    />
  )
  
}
export default CustomTailor