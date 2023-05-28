
import { useContext, useEffect, useState } from 'react'
import getData from '../services/getAllProducts'
import { FiltersContext } from '../context/FilterContext'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { filters, setFilters } = useContext(FiltersContext)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getData()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    getProducts()
  }, [])

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.precio >= filters.minPrice &&
        (
          filters.category === 'todas' ||
          product.categorias_info[0].nombre === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return { products, filters, setFilters, filteredProducts, loading, error }
}

export default useProducts
