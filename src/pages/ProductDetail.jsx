import '../styles/productDetail.css'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getProduct from '../services/getProduct'

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getProductDetail = async () => {
      const newProduct = await getProduct({ id })
      setProductDetail(newProduct)
    }

    getProductDetail()
  }, [productDetail])

  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
        <img src='./icons/icon_close.png' alt='close' />
      </div>

      {
      productDetail &&
        <div key={productDetail.id}>
          <p>{productDetail.title}</p>
          <img src={productDetail.images} alt='' />
        </div>

      }
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail
