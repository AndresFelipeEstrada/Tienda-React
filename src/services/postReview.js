import axios from 'axios'
import BASE_URL from './baseURL'

const postReview = async (id, datos) => {
  try {
    const response = await axios.post(`${BASE_URL}/${id}/reviews/add`, datos)
    return response.data
  } catch (error) {
    console.log('error en postReview', error)
  }
}

// http://127.0.0.1:8000/productos/v1/product/1/reviews/add

export default postReview
