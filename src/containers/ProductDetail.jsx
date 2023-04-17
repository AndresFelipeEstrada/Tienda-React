import '..styles/productDetail.css'
import ProductInfo from '../components/ProductInfo/ProductInfo'

const ProductDetail = () => {
  return (
    <aside className='ProductDetail'>
      <div className='ProductDetail-close'>
        <img src='./icons/icon_close.png' alt='close' />
      </div>
      <ProductInfo />
    </aside>
  )
}

export default ProductDetail
