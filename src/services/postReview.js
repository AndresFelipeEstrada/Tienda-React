import axios from 'axios'
import BASE_URL from './baseURL'

const postReview = async (id, data) => {
  const response = await axios.post(`${BASE_URL}/${id}/reviews/add`, data)
  return response.data
}

// http://127.0.0.1:8000/productos/v1/product/1/reviews/add

export default postReview
