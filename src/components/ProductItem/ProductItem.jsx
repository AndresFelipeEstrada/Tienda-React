import './productItem.css'
import AddToCartIcon from '@icons/bt_add_to_cart.svg'
import removeFromCartIcon from '@icons/bt_added_to_cart.svg'

import useCart from '../../hooks/useCart'

const ProductItem = ({ productInCart, product }) => {
  const { addToCart, removeFromCart } = useCart()

  return (
    <div class='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <a href='#'>
        <img src={product.images[0]} alt={product.title} class='h-80 w-72 object-cover rounded-t-xl' />
      </a>
      <div class='px-4 py-3 w-72'>
        <p class='text-lg font-bold text-black truncate block capitalize'>{product.title}</p>
        <div class='flex items-center'>
          <p class='text-lg font-semibold text-black cursor-auto my-3'>${product.price}</p>
          <del>
            <p class='text-sm text-gray-600 cursor-auto ml-2'>$199</p>
          </del>
          <div class='ml-auto'>
            <button
              className=''
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
      </div>

    </div>
  )
}

export default ProductItem
