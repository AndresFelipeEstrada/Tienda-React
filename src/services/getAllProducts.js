import axios from 'axios'
import BASE_URL from './baseURL'

const getData = async () => {
  const response = await axios.get(`${BASE_URL}?format=json`)
  return response.data
}

export default getData
