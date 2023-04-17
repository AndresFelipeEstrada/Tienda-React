import '../styles/myOrder.css'
import flechita from '@icons/flechita.svg'

import { Link } from 'react-router-dom'

import OrderItem from '../components/OrderItem/OrderItem'
import useCart from '../hooks/useCart'
import { memo } from 'react'

const MyOrder = ({ toggleOrders, setToggleOrders }) => {
  const { cart, sumTotal } = useCart()

  const handleClickCloseCart = () => {
    setToggleOrders(!toggleOrders)
  }

  return (
    <aside className='MyOrder'>
      <div className='title-container' onClick={handleClickCloseCart}>
        <img src={flechita} alt='arrow' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {cart.map((product, index) => {
          return (
            <OrderItem
              key={`Item-${product.id}`}
              product={product}
              index={index}
            />
          )
        })}
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal}</p>
        </div>

        <Link to='/checkout'>

          <button className='primary-button'>
            Checkout
          </button>
        </Link>

      </div>
    </aside>
  )
}

export default memo(MyOrder)
