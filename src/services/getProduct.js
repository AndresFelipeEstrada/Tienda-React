import axios from 'axios'
import BASE_URL from './baseURL'

const getProduct = async ({ id }) => {
  const response = await axios.get(`${BASE_URL}/${id}?format=json`)
  return response.data
}

export default getProduct
