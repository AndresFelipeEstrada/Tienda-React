
import OrderItem from '../components/OrderItem/OrderItem'

import useCart from '../hooks/useCart'

const Checkout = () => {
  const { cart, clearCart, sumTotal } = useCart()

  return (
    <div className='w-full h-screen grid align-items-center justify-center'>
      <div className='Checkout-container'>
        <h1 className='text-lg my-10 text-black'>My order</h1>
        <div className='flex flex-col'>
          <div className='order'>
            <p>
              <span>03.25.21</span>
              <span>{cart.length} articles</span>
            </p>
            <p>${sumTotal}</p>
          </div>
        </div>
        {
          cart.length === 0
            ? <p>Carrito Vacio</p>
            : (
                cart.map((product) => (
                  <OrderItem
                    key={`cart-${product.id}`}
                    product={product}
                  />

                ))
              )
        }
        <div>
          <div className='flex h-full'>
            <button className='flex-grow bg-hospital-green m-3 rounded-lg text-white w-full  cursor-pointer text-base font-bold h-12'>
              Realizar Compra
            </button>
          </div>

          <div className='flex h-full'>
            <button
              onClick={clearCart}
              className='flex-grow bg-hospital-green m-3 rounded-lg text-white w-full  cursor-pointer text-base font-bold h-12'
            >
              Limpiar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
