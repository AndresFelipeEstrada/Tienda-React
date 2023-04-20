import './productItem.css'
import AddToCartIcon from '@icons/bt_add_to_cart.svg'
import removeFromCartIcon from '@icons/bt_added_to_cart.svg'

import useCart from '../../hooks/useCart'
import { Link } from 'react-router-dom'

const ProductItem = ({ productInCart, product }) => {
  const { addToCart, removeFromCart } = useCart()

  return (
    <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.title} className='h-80 w-72 object-cover rounded-t-xl' />
      </Link>
      <div className='px-4 py-3 w-72'>
        <p className='text-lg font-bold text-black truncate block capitalize'>{product.title}</p>
        <div className='flex items-center'>
          <p className='text-lg font-semibold text-black cursor-auto my-3'>${product.price}</p>
          <del>
            <p className='text-sm text-gray-600 cursor-auto ml-2'>$199</p>
          </del>
          <div className='ml-auto'>
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
