import Text from '@/components/Text'

interface TotalProps {
  prices: string[],
}

const Total: React.FC<TotalProps> = ({ prices }) => {
  const totalPrice = prices.reduce((acc, curr) => (acc + Number(curr)), 0)
    .toFixed(2)
    .replace('.', ',')
  
  return (
    <>
      <Text
        text='Total: '
        weight='bold'
        fontSize='medium'
      />
      <Text
        fontSize='large'
        text={totalPrice}
      />
    </>
  )
}

export default Total
