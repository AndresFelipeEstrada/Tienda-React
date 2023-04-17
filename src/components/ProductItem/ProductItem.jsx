import './productItem.css'
import AddToCartIcon from '@icons/bt_add_to_cart.svg'
import removeFromCartIcon from '@icons/bt_added_to_cart.svg'

import useCart from '../../hooks/useCart'

const ProductItem = ({ productInCart, product }) => {
  const { addToCart, removeFromCart } = useCart()

  return (
    <div className='product-card'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button
          onClick={() => {
            productInCart
              ? removeFromCart(product)
              : addToCart(product)
          }}
        >
          <img
            src={
          productInCart ? removeFromCartIcon : AddToCartIcon
         } alt='add to cart icon'
          />
        </button>

      </div>
    </div>
  )
}

export default ProductItem
