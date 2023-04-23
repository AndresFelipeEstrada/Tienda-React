
import { useContext, useEffect, useState } from 'react'
import getData from '../services/apiFetch'
import { FiltersContext } from '../context/FilterContext'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { filters, setFilters } = useContext(FiltersContext)

  useEffect(() => {
    const getProducts = async () => {
      const data = await getData()
      setProducts(data)
      setLoading(false)
    }

    getProducts()
  }, [])

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category.name === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return { products, filters, setFilters, filteredProducts, loading }
}

export default useProducts
