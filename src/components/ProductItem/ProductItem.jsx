import { memo } from 'react'
import './productItem.css'

import { Link } from 'react-router-dom'

const ProductItem = memo(function ProductItem ({ product }) {
  const imagen = '../../../django-api/'
  return (
    <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <Link to={`/product/${product.id}`}>
        <img src={`${imagen}${product.imagen}`} alt={product.nombre} className='h-80 w-72 object-cover rounded-t-xl' />
        <div className='px-4 py-3 w-72'>
          <strong className='text-lg font-bold text-black truncate block capitalize'>{product.nombre}</strong>
          <p className='text-lg font-bold text-paragraph truncate block capitalize'>{product.profesion}</p>

          {/* <div className='flex items-center'>
            <p className='text-lg font-semibold text-black cursor-auto my-3'>${product.precio}</p>
            <del>
              <p className='text-sm text-gray-600 cursor-auto ml-2'>$199</p>
            </del>
          </div> */}
        </div>
      </Link>

    </div>
  )
}
)

export default ProductItem
