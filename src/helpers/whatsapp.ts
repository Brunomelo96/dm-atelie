const baseURL = 'https://wa.me/5534996787981'
// const baseURL = 'https://wa.me/5534991813856'

export const formatOrder = () => void {

}

export const sendEmptyOrder = (): string => {

  return baseURL
}

export const sendOrder = (text: string): string => {
  const encoded = encodeURI(text)

  return `${baseURL}/?text=${encoded}`
}