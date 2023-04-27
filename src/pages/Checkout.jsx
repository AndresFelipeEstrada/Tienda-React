import '../styles/checkout.css'

import OrderItem from '../components/OrderItem/OrderItem'

import useCart from '../hooks/useCart'

const Checkout = () => {
  const { cart, setCart, sumTotal } = useCart()

  return (
    <div className='w-full h-screen grid align-items-center justify-center'>
      <div className='Checkout-container'>
        <h1 className='title'>My order</h1>
        <div className='Checkout-content'>
          <div className='order'>
            <p>
              <span>03.25.21</span>
              <span>{cart.length} articles</span>
            </p>
            <p>${sumTotal}</p>
          </div>
        </div>
        {cart.map((product) => (
          <OrderItem
            key={`cart-${product.id}`}
            product={product}
          />

        ))}
        <button className='bg-hospital-green m-3 rounded-lg text-white w-full  cursor-pointer text-base font-bold h-12'>
          Realizar Compra
        </button>
        <button
          onClick={() => setCart([])}
          className='bg-hospital-green m-3 rounded-lg text-white w-full  cursor-pointer text-base font-bold h-12'
        >
          Limpiar Carrito
        </button>
      </div>
    </div>
  )
}

export default Checkout
