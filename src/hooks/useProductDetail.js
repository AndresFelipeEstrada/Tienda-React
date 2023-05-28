import { useState, useEffect } from 'react'
import getProduct from '../services/getProduct'

const useProductDetail = ({ id }) => {
  const [productDetail, setProductDetail] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const newProduct = await getProduct({ id })
        setProductDetail(newProduct)
      } catch (error) {
        setError(error)
      }
    }

    getProductDetail()
  }, [productDetail])

  return { productDetail, error }
}

export default useProductDetail
