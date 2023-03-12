import Text from '@/components/Text'
import { sendOrder } from '@/helpers/whatsapp'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import style from './DropdownMenu.module.scss'
import List from './List'

interface DropdownMenuProps {
  isOpen: boolean,
  onClose: VoidFunction,
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownClick = (event: MouseEvent) => {
    if (!dropdownRef?.current?.contains(event.target as Node)) {
      event.stopPropagation()
      event.preventDefault()
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleDropdownClick)

    return () => {
      document.removeEventListener('mouseup', handleDropdownClick)
    }
  }, [])


  return (
    <section
      ref={dropdownRef}
      className={style.Wrapper}
    >
      <Text
        text="carrinho"
        weight="bold"
        fontSize="medium"
      />
      <List
      />
      <Link
        target='_blank'
        to={sendOrder('oi')}
        className={style.ConfirmationLink}
      >
        <Text
          text='Enviar pedido!'
          fontSize='medium'
          weight='bold'
        />
      </Link>
    </section>
  )
}

export default DropdownMenu