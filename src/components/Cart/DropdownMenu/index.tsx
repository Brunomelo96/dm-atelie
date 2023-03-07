import Text from '@/components/Text'
import style from './DropdownMenu.module.scss'
import List from './List'

interface DropdownMenuProps {
  isOpen: boolean,
  onClose: VoidFunction,
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  // onClose,
}) => {

  if (!isOpen) {
    return null
  }

  return (
    <section
      className={style.Wrapper}
    >
      <Text
        text="carrinho"
        weight="bold"
        fontSize="medium"
      />
      <List />
    </section>
  )
}

export default DropdownMenu