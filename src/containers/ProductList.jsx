/* eslint-disable indent */
import '../styles/productList.css'

import { memo } from 'react'

import ProductItem from '../components/ProductItem/ProductItem'
import Filters from '../components/Filters/Filters'
import useProducts from '../hooks/useProducts'
import { Toaster } from 'sonner'

const ProductList = () => {
  const { filters, setFilters, filteredProducts: products, loading } = useProducts()

  return (

    <section className='main-container'>

      <Filters filters={filters} setFilters={setFilters} />

      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-28'>
        {loading
          ? (<h1 className='loading'>Cargando...</h1>)
          : (products.map(product => {
            return (
              <ProductItem
                key={`product-list-${product.id}`}
                product={product}

              />
            )
          }))}
      </div>
      <Toaster richColors />
    </section>

  )
}

export default memo(ProductList)
