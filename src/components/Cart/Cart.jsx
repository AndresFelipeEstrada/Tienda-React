// import './cart.css'
// import shoppingCart from '@icons/icon_shopping_cart.svg'
// import useCart from '../../hooks/useCart'
import Menu from '../Menu/Menu'
import MyOrder from '../../containers/MyOrder'
import useToggle from '../../hooks/useToggle'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const Cart = () => {
  // const { cart } = useCart()
  const { toggle, toggleOrders, setToggleOrders, handleOrder } = useToggle()
  const { userInfo, logout } = useAuth()

  return (
    <>
      <div className='list-none p-0 m-0 flex items-center h-16'>

        <button className='text-black text-base mr-3.5 cursor-pointer hidden sm:block' onClick={handleOrder}>{userInfo.correo}</button>

        <Link to='/login'>
          <button
            onClick={() => logout()}
            id='navAction'
            className='hidden sm:block mx-auto lg:mx-0 justify-end hover:underline text-button-text bg-background-button font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'
          >
            Cerrar Sesion
          </button>
        </Link>)
        {/* <img src={shoppingCart} alt='shopping cart' />
          {
            cart.length > 0 && <div className='w-4 h-4 bg-background-button rounded-full text-sm font-bold absolute -top-1.5 -right-1.5 flex justify-center items-center '>{cart.length}</div>
          } */}

      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </>
  )
}

export default Cart
