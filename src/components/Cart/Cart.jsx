// import './cart.css'
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
      <div className='list-none p-0 m-0 flex items-center h-16'>

        <div className='text-black text-sm mr-3.5 cursor-pointer hidden sm:block' onClick={handleOrder}>usuario@example.com</div>

        <div
          className='cursor-pointer relative'
          onClick={handleCart}
        >
          <img src={shoppingCart} alt='shopping cart' />
          {
            cart.length > 0 && <div className='w-4 h-4 bg-hospital-green rounded-full text-sm font-bold absolute -top-1.5 -right-1.5 flex justify-center items-center '>{cart.length}</div>
          }
        </div>

      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </>
  )
}

export default Cart
