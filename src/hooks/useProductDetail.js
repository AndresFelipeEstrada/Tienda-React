import { useState, useEffect } from 'react'
import getProduct from '../services/getProduct'

const useProductDetail = ({ id }) => {
  const [productDetail, setProductDetail] = useState({})

  useEffect(() => {
    const getProductDetail = async () => {
      const newProduct = await getProduct({ id })
      setProductDetail(newProduct)
    }

    getProductDetail()
  }, [productDetail])

  return { productDetail }
}

export default useProductDetail
