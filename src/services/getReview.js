import axios from 'axios'
import BASE_URL from './baseURL'

const getReview = async (id) => {
  try {
    return await axios.get(`${BASE_URL}/${id}/reviews/`)
  } catch (error) {
    console.log('error en getReview', error)
  }
}

export default getReview
