import React from 'react'
import { FontSize, FontWeight, TextElement } from '@/components/layout'
import style from './Text.module.scss'

const colorClasses = {
  'primary': style.Primary,
  'secondary': style.Secondary,
  'title': style.Title
}

interface TextProps {
    text: string,
    fontSize?: keyof typeof FontSize,
    weight?: keyof typeof FontWeight,
    element?: keyof typeof TextElement,
    color?: keyof typeof colorClasses,
}


const Text = ({
  text,
  fontSize='default',
  weight='default',
  element='span',
  color='secondary'
}: TextProps) => {
  const textStyle: React.CSSProperties = {
    fontSize: FontSize[fontSize],
    fontWeight: FontWeight[weight],
  }


  return React.createElement(
    element,
    { style: textStyle, className: colorClasses[color]},
    text,
  )
}

export default Text
