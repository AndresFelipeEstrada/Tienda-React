import '../styles/productList.css'

import { memo, useCallback } from 'react'

import ProductItem from '../components/ProductItem/ProductItem'
import Filters from '../components/Filters/Filters'
import useProducts from '../hooks/useProducts'
import useCart from '../hooks/useCart'
import { Toaster } from 'sonner'

const ProductList = () => {
  const { filters, setFilters, filteredProducts: products, loading } = useProducts()
  const { productInCart } = useCart()

  const handleChangeMinPrice = useCallback((event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }, [filters])

  return (

    <section className='main-container'>

      <Filters filters={filters} onChange={handleChangeMinPrice} />

      <div className='cards-container'>
        {loading
          ? (<h1 className='loading'>Cargando...</h1>)
          : (products.map(product => {
              const inProductInCart = productInCart(product)
              return (
                <ProductItem
                  key={`product-list-${product.id}`}
                  product={product}
                  productInCart={inProductInCart}
                />
              )
            }))}
      </div>
      <Toaster richColors />
    </section>

  )
}

export default memo(ProductList)
