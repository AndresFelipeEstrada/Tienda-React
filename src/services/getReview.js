import axios from 'axios'
import BASE_URL from './baseURL'

const getReview = async (id) => await axios.get(`${BASE_URL}/${id}/reviews/`)

export default getReview
