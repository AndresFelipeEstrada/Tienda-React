import './cart.css'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import useCart from '../../hooks/useCart'
import Menu from '../Menu/Menu'
import MyOrder from '../../containers/MyOrder'
import useToggle from '../../hooks/useToggle'

const Cart = () => {
  const { cart } = useCart()
  const { toggle, toggleOrders, setToggleOrders, handleOrder, handleCart } = useToggle()

  return (
    <>
      <div className='navbar-right'>

        <div className='navbar-email' onClick={handleOrder}>platzi@example.com</div>

        <div
          className='navbar-shopping-cart'
          onClick={handleCart}
        >
          <img src={shoppingCart} alt='shopping cart' />
          {
            cart.length > 0 && <div>{cart.length}</div>
          }
        </div>

      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </>
  )
}

export default Cart
