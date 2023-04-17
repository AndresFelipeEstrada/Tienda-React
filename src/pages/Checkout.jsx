import '../styles/checkout.css'

import OrderItem from '../components/OrderItem/OrderItem'

import useCart from '../hooks/useCart'

const Checkout = () => {
  const { cart, sumTotal } = useCart()

  return (
    <div className='Checkout'>
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
        <button className='primary-button'>
          Realizar Compra
        </button>
      </div>
    </div>
  )
}

export default Checkout
