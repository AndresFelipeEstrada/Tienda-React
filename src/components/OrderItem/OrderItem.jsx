import '../OrderItem/orderItem.css'
import IconDeleteItem from '@icons/icon_close.png'
import useCart from '../../hooks/useCart'
import { memo } from 'react'

const OrderItem = memo(function OrderItem ({ product, index }) {
  const { removeFromCart } = useCart()

  return (
    <div className='OrderItem'>
      <figure>
        <img src={product?.images?.[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        className='delete-item'
        src={IconDeleteItem}
        alt='close'
        onClick={() => removeFromCart(product, index)}
      />
    </div>
  )
}
)

export default OrderItem
