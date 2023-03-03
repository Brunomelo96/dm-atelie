import React from 'react'
import style from './Icon.module.scss'
import { getClassNames }  from '@/helpers'

interface IconProps {
  icon: React.ReactNode,
  disabled?: boolean,
  onClick?: VoidFunction,
}

const Icon: React.FC<IconProps> = ({
  icon,
  disabled = false,
  onClick,
}) => {
  
  const classNames = getClassNames([
    style.Wrapper,
    !!onClick && style.Button,
  ])

  return onClick
    ? (
      <button
        className={classNames}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
      </button>
    )
    : (
      <div
        className={classNames}
      >
        {icon}
      </div>
    )
}

export default Icon
