import '../styles/productDetail.css'
import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import Review from '../components/ProductReview/Review'

const ProductDetail = () => {
  const { id } = useParams()
  const { productDetail } = useProductDetail({ id })

  return (
    <aside className='ProductDetail'>
      <section className='text-gray-700 body-font overflow-hidden bg-white'>
        <ProductInfo
          key={productDetail.id}
          productDetail={productDetail}
        />
      </section>

      <Review />

    </aside>
  )
}

export default ProductDetail
